<template>
  <v-container fluid class="ma-0 pa-0">
    <v-row no-gutters justify="center" align="center">
      <v-col cols="12">
        <v-data-iterator :items="feeds" :items-per-page.sync="itemsPerPage" :page="page"
          hide-default-footer>
          <template v-slot:no-data>
            <v-container fluid class="ma-0 pa-0">
              <v-row justify="center" class="title grey--text text--darken-2 text-center pb-10">
                No saved feeds to view
              </v-row>
            </v-container>
          </template>
          <template v-slot:default="props">
            <v-container fluid class="ma-0 pa-0">
              <v-row no-gutters>
                <v-col v-for="item in props.items" :key="item.feed_id" cols="4" xs="6" sm="6" md="4" lg="4" xl="4" class="px-1 pt-2">
                  <v-card flat class="customBorder" hover @click="goToIngredientDetailPage(item.feed_id)">
                    <v-container class="ma-0 pa-0">
                      <v-row no-gutters class="pt-2" justify="center">
                        <v-col cols="12" class="body-1 font-weight-black text-center text-truncate">{{ item.name }}
                        </v-col>
                      </v-row>
                      <v-row no-gutters justify="center" class="py-4">
                        <v-col cols="10">
                          <v-btn block dark color="#2C4E81" class="subtitle-2 text-truncate" @click="goToIngredientDetailPage(item.feed_id)">See Ingredients
                          </v-btn>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </template>
          <v-spacer />
          <template v-slot:footer class="align-end" v-if="feeds.length > itemsPerPage">
            <v-container fluid>
              <v-row align="center" justify="end" no-gutters>
                <v-col cols="3" class="text-right">
                  <v-pagination v-model="page" :length="numberOfPages"></v-pagination>
                </v-col>
              </v-row>
            </v-container>
          </template>
        </v-data-iterator>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  mounted() { },
  props: ["feeds"],
  components: {},
  data() {
    return {
      filter: {},
      page: 1,
      itemsPerPage: 12,
      clickable: true,
    };
  },
  computed: {
    numberOfPages() {
      return this.feeds.length != 0 ? Math.ceil(this.feeds.length / this.itemsPerPage) : 1;
    },
  },
  methods: {
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1;
    },
    goToIngredientDetailPage(feed_id) {
      this.$router.push({ path: "/feedIngredients", query: { feed_id: feed_id } });
    }
  },
};
</script>
