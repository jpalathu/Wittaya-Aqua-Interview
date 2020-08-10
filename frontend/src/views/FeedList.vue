<template>
  <v-container fluid fill-height class="ma-0 pa-0" v-if="loaded">
    <v-row no-gutters justify="center" align="center">
      <v-col cols="12" class="text-center headline">
        Feeds
      </v-col>
      <v-col cols="10" class="pt-4">
        <FeedList :feeds="feeds" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import FeedList from "@/components/feedList/FeedList"
export default {
  mounted() {
    //once accessing page, get all the feeds
    this.getFeeds()
  },
  data() {
    return {
      feeds: [], //holds the feed data returned from the axios api call
      loaded: false //flag to only display the list of feeds once we have received data from the axios call
    }
  },
  components: {
    FeedList
  },
  methods: {
    getFeeds() {
      return this.$axios
        .get(`/feeds`)
        .then((res) => {
          this.feeds = res.data
          this.loaded = true;
        })
        .catch((e) => {
          console.log(e.response);
          this.feeds = [];
          this.loaded = false;
        });
    }
  }
}
</script>