<template>
  <div class="min-w:full sm:min-w:sm">
    <alert color="red" v-if="error">{{ error }}</alert>
    <div>
      <div class="text:white text:3/2">Subtitles</div>
      <div class="text:grey-dark">Manage subtitles</div>
      <form v-if="settings">
        <div class="relative my:3">
          <input
            id="languages"
            type="text"
            v-model="settings.languages"
            placeholder="en, fr"
          />
          <label for="languages">Languages</label>
        </div>
        <div class="relative my:3">
          <input
            id="daysOld"
            type="number"
            v-model="settings.daysOld"
            placeholder="2"
          />
          <label for="daysOld">Days old for manual search</label>
        </div>
        <div class="relative my:3">
          <input
            id="downloadAfterTransfert"
            type="checkbox"
            v-model="settings.downloadAfterTransfert"
          />
          <label for="downloadAfterTransfert">Download after transfert</label>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { isEmpty } from 'plugins'
export default {
  computed: {
    message() {
      return this.$store.getters['webSocket/message']
    }
  },
  data() {
    return {
      error: null,
      settings: null
    }
  },
  created() {
    this.getAll()
  },
  watch: {
    'settings.languages'() {
      this.update()
    },
    'settings.downloadAfterTransfert'() {
      this.update()
    },
    'settings.daysOld'() {
      this.update()
    },
    message(data) {
      if (data.object === 'subtitles') {
        this.error = null
        switch (data.method) {
        case 'getAll':
          if (data.error) {
            this.error = data.error
          } else {
            this.settings = Object.assign({}, data.results)
            this.isValid()
          }
          break
        case 'update':
          if (data.error) {
            this.error = data.error
          } else {
            this.settings = Object.assign({}, data.results)
            this.isValid()
          }
          break
        default:
          console.log(`Unknow method : ${data.method}`)
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
    update() {
      if (!isEmpty(this.settings)) {
        this.$store.commit('webSocket/send', {
          object: 'subtitles',
          method: 'update',
          params: this.settings
        })
      }
    },
    isValid() {
      this.$emit(
        'is-valid',
        this.settings.languages && this.settings.languages.length > 0
      )
    }
  }
}
</script>

<style lang="scss" scoped></style>
