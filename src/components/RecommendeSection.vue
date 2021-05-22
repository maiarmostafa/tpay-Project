<template>
  <div class="container card  mt-3" style="max-width: 840px;">
    <div class="container row m-0 g-4 d-flex justify-content-between mt-2">
      <div class=" col-md-8">
        <h6 class="d-inline">{{ title }}</h6>
      </div>
      <div class="col-md-2">
        <small style="color:#572589">
          SEE ALL
          <span>
            <img src="../assets/arrow.svg" class="mb-1" alt="arrow"
          /></span>
        </small>
      </div>
    </div>
    <div class="row m-0 g-4 d-flex justify-content-evenly mt-1 mb-2">
      <div
        :key="dataa.id"
        v-for="dataa in Recom"
        class="col-6 col-md-2 p-0 card border-light m-0"
      >
        <img
          :src="require('../assets/' + dataa.Image)"
          :alt="dataa.GameName"
          class="card-img-top imgRound"
        />
        <span
          ><img
            :src="require('../assets/Group4.svg')"
            class="position-absolute bottom-custom"
            alt="rate"
        /></span>
        <div class="card-body mt-2 p-0">
          <p class="card-text">{{ dataa.GameName }}</p>
          <router-link
            :to="{
              name: 'GameDetailes',
              params: {
                imgg: dataa.Image,
                desc: dataa.Desc,
                gamename: dataa.GameName,
                down: dataa.downloadNo,
                sub: dataa.subtitle,
              },
            }"
          >
            <Button class="btn btncolor w-100 px-1" text="MORE INFO"
          /></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "./Button";
export default {
  name: "RecommendeSection",
  props: { title: String, Recom: Array },
  components: {
    Button,
  },
};
</script>

<style scoped>
.btncolor {
  background: #572589;
  color: white;
}
.imgRound {
  border-radius: 10px;
}
.bottom-custom {
  bottom: 86% !important;
  left: 5%;
}
</style>
