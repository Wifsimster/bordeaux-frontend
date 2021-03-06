<template>
  <div class="p:1">
    <alert color="red" v-if="error">{{ error }}</alert>

    <loader v-if="isLoading" :message="loadingMessage"></loader>

    <div v-if="!isLoading" class="flex flex:col">
      <div v-if="hasEpisodes">
        <div v-for="item in episodes" :key="item.file" class="flex flex:wrap">
          <div class="flex:1">{{ item.file }}</div>
          <div class="flex:1">
            <loader v-if="item.loading"></loader>
            <div v-if="item.subtitle && item.subtitle.file">{{ item.subtitle.file }}</div>
          </div>
        </div>
      </div>
      <transition name="fade">
        <div v-if="hasNoEpisode" class="text:center">No recent episode found :(</div>
      </transition>
    </div>

    <div class="flex w:full justify:center mt:1" v-if="!isLoading">
      <btn class="mr:1" @click="search()">Scan new files</btn>
      <btn v-if="hasEpisodes" @click="run()">Download subtitles</btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'subtitles',
  computed: {
    hasEpisodes() {
      return this.episodes && this.episodes.length > 0
    },
    hasNoEpisode() {
      return this.episodes && this.episodes.length === 0
    },
    message() {
      return this.$store.getters['webSocket/message']
    }
  },
  data() {
    return {
      error: null,
      episodes: null,
      settings: null,
      results: null,
      isLoading: false,
      loadingMessage: null
    }
  },
  created() {
    this.getAll()
  },
  watch: {
    message(data) {
      if (data.object === 'subtitles') {
        switch (data.method) {
        case 'getAll':
          if (data.error) {
            this.error = data.error
          } else {
            this.settings = Object.assign({}, data.results)
          }
          break
        case 'search':
          this.isLoading = false
          if (data.error) {
            this.error = data.error
          } else {
            this.episodes = data.results.map(file => {
              return { file: file, subtitle: {} }
            })
          }
          break
        case 'getSubtitle':
          if (data.error) {
            this.error = data.error
          } else {
            this.episodes.map((episode, index) => {
              if (data.params.file === episode.file) {
                this.$set(
                  this.episodes,
                  index,
                  Object.assign(episode, {
                    loading: false,
                    subtitle: data.results.subtitle
                  })
                )
              }
            })
          }
          break
        default:
          break
        }
      }
    }
  },
  methods: {
    getAll() {
      this.$store.commit('webSocket/send', {
        object: 'subtitles',
        method: 'getAll'
      })
    },
    search() {
      if (this.settings) {
        this.episodes = null
        this.isLoading = true
        this.loadingMessage = 'Searching recent episodes...'
        this.$store.commit('webSocket/send', {
          object: 'subtitles',
          method: 'search',
          params: { fileAge: this.settings.daysOld }
        })
      }
    },
    getSubtitle(episode, index) {
      this.$set(
        this.episodes,
        index,
        Object.assign(episode, { loading: true, subtitle: null })
      )

      this.$store.commit('webSocket/send', {
        object: 'subtitles',
        method: 'getSubtitle',
        params: { file: episode.file }
      })
    },
    run() {
      if (this.episodes) {
        this.episodes.map((episode, index) => {
          this.getSubtitle(episode, index)
        })
      }
    }
  }
}
</script>
