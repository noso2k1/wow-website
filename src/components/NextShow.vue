<template>
    <a class="column home-link-item" :href="nextShow2.path">
        <div class="section">
        <h1 class="title">Next show</h1>
        <h2 class="subtitle"><span>{{nextShow2.startDate}} @ {{nextShow2.venueName}}</span></h2>
        </div>
    </a>
</template>

<script>
import axios from 'axios'

export default {
    name: 'NextShow',
    data() {
        return {
            nextShow2: {}
        }
    },
    methods: {
        getNextEvent: function(){
            axios.get('https://wombats.ch/wp-json/wp/v2/tribe_events')
                .then(response => {
                    let events = response.data
                    events.sort(function(a,b){
                        if (a.eventDetails.startDate > b.eventDetails.startDate) return 1
                    })
                    if (events.length > 0) {
                        let event = events[0]
                        this.nextShow2.slug = event.slug
                        this.nextShow2.path = '/tribe_events/' + event.slug
                        this.nextShow2.startDate = event.eventDetails.startDate
                        this.nextShow2.venueName = event.eventDetails.venueName
                    }
                })
        }
    },
    mounted() {
        this.getNextEvent()
    }
}
</script>
