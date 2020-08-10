<template>
  <v-container fluid fill-height v-if="loaded">
    <v-row no-gutters justify="start" align="center">
      <v-col cols="2" class="pb-4 ml-12">
        <v-btn block dark @click="goToFeedList()" color="#2C4E81">
          <v-icon class="pr-3">
            mdi-undo
          </v-icon>
          Back
        </v-btn>
      </v-col>
    </v-row>
    <v-row no-gutters justify="center" align="center">
      <v-col cols="11" class="customBorder">
        <v-data-table :headers="headers" :items="rowData">
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  mounted() {
    this.getIngredientsByFeedId();
  },
  data() {
    return {
      loaded: false, //flag to only display table once data returned from axios call
      headers: [
        { value: "ingredient_name", text: "Ingredient" },
        { value: "quantity", text: "Quantity (Tonnes)" },
        { value: "crude_protein", text: "Crude Protein (%)" },
        { value: "crude_lipids", text: "Crude Lipids (%)" },
        { value: "crude_fibre", text: "Crude Fibre (%)" },
        { value: "ash", text: "Ash (%)" },
        { value: "moisture", text: "Moisture (%)" },
      ],
      rowData: []
    }
  },
  methods: {
    getIngredientsByFeedId() {
      return this.$axios
        .get(`/feed/${this.$route.query.feed_id}/ingredients`)
        .then((res) => {
          this.rowData = res.data
          this.loaded = true;
        })
        .catch((e) => {
          console.log(e.response);
          this.rowData = [];
          this.loaded = false;
        });
    },
    goToFeedList() {
      this.$router.push(`/`);
    }
  }
}
</script>