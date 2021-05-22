<template>
  <div class="container mt-5 justify-content-center" style="max-width: 840px;">
    <img :src="require('../assets/' + 'subway.png')" class="w-100" alt="..." />
    <div class="card p-3" style="height: 250px;">
      <h4 class="text">{{ gamename }}</h4>
      <h6 class="mb-0" v-if="sub !== 'undefined'">{{ sub }}</h6>
      <small class="text-muted mt-0">{{ down }}</small>
      <!-- v-for="(data, i) of desc"
        :key="i" -->
      <p class="mt-3" style="height: 100px; overflow:hidden;">
        <span>{{ desc }}</span>
      </p>
      <a style="color:#572589" class="nav-link p-0"><small>Read more</small></a>
    </div>
    <RecommendeSection title="Most Recommendation" :Recom="recom" />
  </div>
</template>
<script>
import RecommendeSection from "../components/RecommendeSection";
export default {
  name: "GameDetailes",
  props: {
    imgg: String,
    gamename: String,
    sub: String,
    down: String,
    desc: "",
    bannerData: Object,
    recom: Array,
    popu: Array,
  },
  components: {
    RecommendeSection,
  },
};
</script>

<style scoped></style>
