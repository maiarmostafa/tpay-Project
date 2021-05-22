<template>
  <div>
    <HeaderButtons />
    <FirstSection :data="bannerData" />
    <RecommendeSection title="Most Recommendation" :Recom="recom" />
    <RecommendeSection title="Most Popular" :Recom="popu" />
  </div>
</template>
<script>
import FirstSection from "../components/FirstSection";
import HeaderButtons from "../components/HeaderButtons";
import RecommendeSection from "../components/RecommendeSection";
export default {
  name: "Home",
  components: {
    FirstSection,
    RecommendeSection,
    HeaderButtons,
  },
  props: {
    bannerData: Object,
    recom: Array,
    popu: Array,
  },
};
</script>

<style scoped></style>
