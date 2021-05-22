<template>
  <div class="container mt-5 d-flex justify-content-center ">
    <div class="card" style="max-width: 840px;">
      <div class="row g-0">
        <div class="col-md-8">
          <img
            v-bind:src="CatchImage.Image"
            :alt="data.GameName"
            class="w-100 h-100"
          />
        </div>
        <div class="col-md-4">
          <div class="card-body">
            <h5 class="card-title">{{ data.GameName }}</h5>
            <p class="card-text">
              {{ data.subtitle }}
            </p>
            <p class="card-text">
              {{ data.Desc }}
            </p>
            <p class="card-text">
              <small class="text-muted">{{ data.downloadNo }}</small>
            </p>
            <router-link
              :to="{
                name: 'GameDetailes',
                params: {
                  imgg: data.Image,
                  desc: data.Desc,
                  gamename: data.GameName,
                  down: data.downloadNo,
                  sub: data.subtitle,
                },
              }"
            >
              <Button class="btn btncolor w-100" text="MORE INFO"
            /></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Button from "./Button";

export default {
  name: "FirstSection",
  components: {
    Button,
  },
  props: {
    data: Object,
  },
  computed: {
    CatchImage() {
      return {
        ...this.data,
        Image: this.data.Image && require(`../assets/${this.data.Image}`),
      };
    },
  },
};
</script>
<style scoped>
.btncolor {
  background: #572589;
  color: white;
}
</style>
