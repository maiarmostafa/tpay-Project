<template>
  <div class="container mt-5 justify-content-center" style="max-width: 840px;">
    <img :src="require('../assets/' + 'subway.png')" class="w-100" alt="..." />
    <Detailes :id="id" />
    <RecommendeSection title="Most Recommendation" :Recom="recom" />
  </div>
</template>
<script>
import Detailes from "../components/Detailes.vue";
import RecommendeSection from "../components/RecommendeSection";
export default {
  name: "GameDetailes",
  props: {
    imgg: String,
    recom: Array,
    id: String,
  },
  components: {
    RecommendeSection,
    Detailes,
  },
};
</script>

<style scoped></style>
