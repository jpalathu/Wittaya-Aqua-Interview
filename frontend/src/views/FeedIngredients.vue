<template>
  <v-container fluid fill-height class="ma-0 pa-0">
    <v-row no-gutters justify="center" align="center">
      <v-col cols="12">
        <FeedIngredients />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import FeedIngredients from "@/components/feedIngredients/FeedIngredients"
export default {
  data() {
    return {}
  },
  components: {
    FeedIngredients
  }
}
</script>