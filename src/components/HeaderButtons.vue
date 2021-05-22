<template>
  <div class="row m-0 bg-white shadow w-100">
    <div class="scrollable-Wrapper">
      <div v-for="(data, i) in texts" :key="i" class="d-inline">
        <div
          class="mb-3 mt-3 me-2 ps-3 pe-3 btn btncolor"
          :style="data === 'Sports' ? 'color:white;background:#572589' : ''"
        >
          {{ data }}
          <img src="../assets/mark.svg" v-if="data === 'Sports'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./Button";
export default {
  name: "HeaderButtons",
  components: {
    Button,
  },
  data() {
    return {
      texts: [
        "Arcade",
        "Action",
        "Advanture",
        "Arcade",
        "Action",
        "Advanture",
        "Sports",
        "Arcade",
        "Action",
        "Advanture",
        "Arcade",
        "Action",
        "Advanture",
        "Arcade",
        "Action",
        "Advanture",
        "Arcade",
        "Action",
        "Advanture",
        "Arcade",
      ],
    };
  },
};
</script>
<style scoped>
.btncolor {
  border-color: #d8d8d8;
  border-radius: 25px;
}
.scrollable-Wrapper {
  height: 74px;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  white-space: nowrap;
  -ms-overflow-style: none;
  scrollbar-width: 0px;
  scrollbar-color: transparent transparent !important;
}

.scrollable-Wrapper::-webkit-scrollbar {
  width: 0px;
  background: transparent transparent !important;
  color: transparent transparent !important;
}
</style>
