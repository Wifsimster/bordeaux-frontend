<template>
  <modal size="lg:max-w:lg" :show="show" @close="$emit('close')">
    <template #content>
      <div
        class="relative w:full"
        v-if="detail"
        v-lazy-container="getLazyContainer()"
      >
        <img
          class="w:full align:middle rounded:t cover"
          :data-src="getImageSrc()"
        />
        <div class="absolute t:0 flex w:full justify:end">
          <div
            class="shadow bg:purple py:1/2 px:1/4 text:7/8 mx:1/2"
            v-if="subtitle"
          >
            Subtitle
          </div>
          <div
            class="shadow bg:green py:1/2 px:1/4 text:7/8 mx:1/2"
            v-if="hasBeenCollected(episode)"
          >
            Collected
          </div>
          <div
            class="shadow bg:orange py:1/2 px:1/4 text:7/8 mx:1/2"
            v-if="hasBeenWatched()"
          >
            Watched
          </div>
          <div
            class="shadow bg:orange py:1/2 px:1/4 text:7/8 mx:1/2">
            {{ detail.rating.toFixed(1) }}
          </div>
          <div
            @click="$emit('close')"
            class="shadow cursor:pointer line-height:1 text:2 p:1/2"
          >
            x
          </div>
        </div>
        <div class="absolute b:0 l:0 r:1 pl:1/2 w:full bg:smoke">
          <div class="text:9/8 line-height:1 text:bold">
            {{ episode.show.title }}
          </div>
          <div class="text:9/8 truncate max-w:11/12">
            <span
              class="text:bold"
            >{{ episode.episode.season }}x{{ episode.episode.number }}</span
            >
            {{ episode.episode.title }}
          </div>
        </div>
      </div>
      <div v-if="detail">
        <div class="flex flex:wrap justify:between">
          <div class="p:1/2 sm:p:1">{{ detail.runtime }} mn</div>
          <div class="p:1/2 sm:p:1">{{ getDate(detail.first_aired) }}</div>
          <div class="none sm:block sm:p:1">{{ detail.votes }} votes</div>
        </div>
        <div class="p:1/2 sm:p:1">{{ detail.overview }}</div>

        <loader v-if="isLoading" :message="loadingMessage"></loader>

        <alert color="red" v-if="error">{{ error }}</alert>

        <alert color="green" v-if="addedMessage">{{ addedMessage }}</alert>

        <div class="p:1/2 sm:p:1">
          <div v-if="tpbList" class="overflow:auto">
            <table
              class="border:collapse max-h:xs table:fixed"
              v-if="tpbList.length > 0"
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Quality</th>
                  <th style="min-width: 100px">
                    <i class="arrow p:1/5 mr:1/4 border:white inline-block"></i>
                    <span class="inline-block">Seeder</span>
                  </th>
                  <th>Size</th>
                  <th>Uploaded</th>
                  <th>Download</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="item in tpbList"
                  :key="item.name"
                  @click="addTorentToTransmission(item.magnetLink)"
                  :class="{
                    'bg:orange': item.progress,
                    'hover:bg:grey-darker cursor:pointer': !item.progress
                  }"
                >
                  <td
                    class="inline-block truncate p:1/4"
                    style="max-width:450px"
                  >
                    {{ item.name }}
                  </td>
                  <td class="w:full text:center p:1/4" style="min-width:50px">
                    <span v-if="item.quality">{{ item.quality }}</span>
                  </td>
                  <td class="w:full text:center p:1/4" style="min-width:50px">
                    <span v-if="item.seeder">{{ item.seeder }}</span>
                  </td>
                  <td class="w:full text:center p:1/4" style="min-width:125px">
                    <span v-if="item.size">{{ item.size }}</span>
                  </td>
                  <td class="w:full text:center p:1/4" style="min-width:100px">
                    <span v-if="item.uploaded">{{ item.uploaded }}</span>
                  </td>
                  <td class="text:center">
                    <span v-if="item.progress">{{ item.progress }} %</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <div v-else class="text:center">No results :(</div>
          </div>
        </div>
      </div>
    </template>
  </modal>
</template>

<script>
/* eslint-disable no-undef */
import parseISO from 'date-fns/parseISO'
import format from 'date-fns/format'

import Modal from 'components/Modal.vue'

export default {
  components: { Modal },
  props: {
    episode: {
      type: Object
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    message() {
      return this.$store.getters['webSocket/message']
    }
  },
  data() {
    return {
      error: null,
      detail: null,
      tpbList: [],
      isLoading: false,
      loadingMessage: null,
      addedMessage: null,
      removedMessage: null,
      subtitle: false
    }
  },
  watch: {
    show() {
      this.error = null
      this.tpbList = null
    },
    episode(val) {
      this.detail = null
      if (val) {
        this.getEpisode()
        this.searchTorrents()
        this.addedMessage = null

        const file = `${this.episode.show.title}/Season ${this.episode.episode.season}/${this.episode.show.title} - ${this.episode.episode.season}x${this.episode.episode.number}`
        this.hasSubtitle(file)
      }
    },
    message(data) {
      switch (data.object) {
      case 'trakt':
        switch (data.method) {
        case 'getEpisode':
          if (data.error) {
            this.error = data.error
          } else {
            this.detail = data.results
          }
          break
        default: break
        }
        break

      case 'download':
        switch (data.method) {
        case 'searchEpisode':
          this.isLoading = false
          if (data.error) {
            console.error(data.error)
            if (data.error.code === 502) {
              this.error = 'The Pirate Bay is down !'
            } else {
              this.error = 'The Pirate Bay is inacessible !'
            }
          } else {
            this.tpbList = data.results.filter(item => item.seeder > 0)

            if (this.tpbList.length > 0) {
              this.getActiveTorrents()
            }
          }
          break
        default: break
        }
        break

      case 'subtitles':
        switch (data.method) {
        case 'hasSubtitle':
          if (data.error) {
            this.error = data.error
          } else {
            this.subtitle = data.results
          }
          break
        default: break
        }
        break

      case 'transmission':
        switch (data.method) {
        case 'add':
          this.isLoading = false
          if (data.error) {
            this.error = data.error
          } else {
            this.$store.dispatch('notification/add', {
              message: `${data.results.name} added to Transmission ;)`,
              type: 'success'
            })
          }
          break
        case 'remove':
          this.isLoading = false
          if (data.error) {
            this.error = data.error
          } else {
            this.removedMessage = `${data.results.name} remove to Transmission ;)`
            this.tpbList = null
          }
          break
        case 'active':
          if (data.error) {
            this.error = data.error
          } else {
            const torrents = data.results.torrents

            if (this.tpbList) {
              this.tpbList.map((tracker, index) => {
                torrents.map(torrent => {
                  let trackerId = /magnet:\?xt=urn:btih:([0-9a-z]+)&dn/.exec(
                    tracker.magnetLink
                  )

                  let torrentId = /magnet:\?xt=urn:btih:([0-9a-z]+)&dn/.exec(
                    torrent.magnetLink
                  )

                  if (trackerId[1] === torrentId[1]) {
                    this.$set(
                      this.tpbList,
                      index,
                      Object.assign(tracker, {
                        progress: parseInt(torrent.percentDone * 100)
                      })
                    )
                  }
                })
              })
            }
          }
          break
        default: break
        }
        break
      default: break
      }
    }
  },
  methods: {
    hasBeenWatched() {
      let watched = this.$store.getters['trakt/watched']

      if (watched) {
        let showWatch = watched.filter(
          watch => watch.show.ids.trakt === this.episode.show.ids.trakt
        )[0]

        if (showWatch) {
          let season = showWatch.seasons.filter(
            season => season.number === this.episode.episode.season
          )[0]

          if (season) {
            let number = season.episodes.filter(
              episode => episode.number === this.episode.episode.number
            )[0]

            if (number) {
              return true
            }
          }
        }
      }

      return false
    },
    hasBeenCollected() {
      let collected = this.$store.getters['trakt/collected']

      if (collected) {
        let showWatch = collected.filter(
          watch => watch.show.ids.trakt === this.episode.show.ids.trakt
        )[0]

        if (showWatch) {
          let season = showWatch.seasons.filter(
            season => season.number === this.episode.episode.season
          )[0]

          if (season) {
            let number = season.episodes.filter(
              episode => episode.number === this.episode.episode.number
            )[0]

            if (number) {
              return true
            }
          }
        }
      }

      return false
    },
    getDate(value) {
      return format(parseISO(value), 'MM / dd / yyyy')
    },
    getLazyContainer() {
      if (this.episode.images) {
        return {
          selector: 'img',
          loading: 'https://trakt.tv/assets/placeholders/thumb/fanart-96d5b92c25602cd5f5f8bc3d7fe1a249.png',
          error: 'https://trakt.tv/assets/placeholders/thumb/fanart-96d5b92c25602cd5f5f8bc3d7fe1a249.png'
        }
      }
    },
    getImageSrc() {
      if (this.episode.images) {
        return `https://image.tmdb.org/t/p/original${this.episode.images[0].file_path}`
      }
    },
    getEpisode() {
      this.$store.commit('webSocket/send', {
        object: 'trakt',
        method: 'getEpisode',
        params: {
          showId: this.episode.show.ids.trakt,
          season: this.episode.episode.season,
          episode: this.episode.episode.number
        }
      })
    },
    buildEpisodeName() {
      if (this.episode) {
        let season =
          this.episode.episode.season < 10
            ? `0${this.episode.episode.season}`
            : this.episode.episode.season
        let number =
          this.episode.episode.number < 10
            ? `0${this.episode.episode.number}`
            : this.episode.episode.number

        return `${this.episode.show.title} S${season}E${number}`
      }
    },
    searchTorrents() {
      this.isLoading = true
      this.loadingMessage = 'Searchig trackers...'
      this.addedMessage = null

      this.$store.commit('webSocket/send', {
        object: 'download',
        method: 'searchEpisode',
        params: {
          title: this.buildEpisodeName()
        }
      })
    },
    addTorentToTransmission(magnetLink) {
      this.isLoading = true
      this.loadingMessage = 'Adding to Transmission...'
      this.$store.commit('webSocket/send', {
        object: 'transmission',
        method: 'add',
        params: { uuid: UUID, magnetLink: magnetLink }
      })
    },
    removeTorrentToTransmission(id) {
      this.isLoading = true
      this.loadingMessage = 'Removing to Transmission...'
      this.$store.commit('webSocket/send', {
        object: 'transmission',
        method: 'remove',
        params: { uuid: UUID, id: id }
      })
    },
    getActiveTorrents() {
      this.$store.commit('webSocket/send', {
        object: 'transmission',
        method: 'active',
        params: { uuid: UUID }
      })
    },
    hasSubtitle(file) {
      this.$store.commit('webSocket/send', {
        object: 'subtitles',
        method: 'hasSubtitle',
        params: { file: file }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.cover {
  object-fit: cover;
  max-height: 500px;
}

.arrow {
  border-width: 0 2px 2px 0;
  transform: rotate(-135deg);
}

.bg\:smoke {
  background-image: linear-gradient(
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.12) 50%,
    rgba(0, 0, 0, 0) 100%
  );
}

table {
  width: 100%;
  tr,
  td {
    width: 100%;
  }
}
</style>
