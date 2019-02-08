<template>
  <div>
    <div v-for="(feed, index) in feeds" v-bind:key="index">
      <div class="column is-4-desktop is-6-tablet is-6-mobile">
        <div class="card">
          <a class="card-image" :href="feed.link" target="_blank">
            <figure class="image is-square">
              <img :src="feed.images.standard_resolution.url" alt="Image">
            </figure>
          </a>
          <div class="card-content">
            <div class="subtitle is-6" style="height: 100px; overflow: auto;" v-html="feed.caption.text"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import axios from 'axios'
import jsonp from 'browser-jsonp'

export default {
  name: 'InstagramFeed',
  data: () => ({
    error: '',
    feeds: [],
    token: '10835943873.7115bff.19834ca1a1114f5c91b2c3b9577d008f',
    count: 6,
    mediaType: '',
    tags: Array,
    containerClass: ''
  }),
  mounted () {
    this.getUserFeed()
  },
  methods: {
    getUserFeed () {
      jsonp({
        url: 'https://api.instagram.com/v1/users/self/media/recent/',
        data: { access_token: this.token, count: this.count },
        error: error => { throw error},
        complete: response => {
          if (response.meta.code === 400) this.error = response.meta
          if (response.meta.code === 200) {
            if (response.meta.code === 200) {
              let { data } = response
              const types = ['image', 'video']
              if (this.mediaType && types.indexOf(this.mediaType) > -1) {
                data = _.filter(data, item => this.mediaType === item.type)
              }
              if (this.tags.length) {
                data = _.filter(data, item => _.intersection(this.tags, item.tags).length)
              }
              this.feeds = _.slice(_.values(data), 0, this.count)
            }
          }
        }
      })
    }
  }
}
</script>
