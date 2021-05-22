<template>
  <div class="card p-3">
    <h4 class="text">{{ Detail.GameName }}</h4>
    <h6 class="mb-0" v-if="Detail.subtitle !== 'undefined'">
      {{ Detail.subtitle }}
    </h6>
    <small class="text-muted mt-0">{{ Detail.downloadNo }}</small>
    <!-- v-for="(data, i) of desc"
        :key="i" -->
    <span class="mt-3" :style="flag === true ? styleNewHight : styleHight">
      <p v-for="(data1, i) in Detail.Desc" :key="i">
        {{ data1 }}
      </p>
    </span>
    <a style="color:#572589" class="nav-link p-0" @click="hightChange"
      ><small>Read more</small></a
    >
  </div>
</template>

<script>
export default {
  name: "Detailes",
  data() {
    return {
      Detail: {},
      styleHight: "height: 100px; overflow:hidden; width:400px",
      styleNewHight: "height: 380px;overflow:hidden; width:400px",
      flag: false,
    };
  },
  props: {
    id: String,
  },
  methods: {
    hightChange() {
      this.flag = !this.flag;
    },
    async fetchbyid() {
      const res = await fetch(
        `https://my-json-server.typicode.com/maiarmostafa/Game-Store/games/${this.id}`
      );
      const data = await res.json();
      return data;
    },
  },
  async created() {
    const dataa = await this.fetchbyid();
    this.Detail = dataa;
  },
  async updated() {
    const dataa = await this.fetchbyid();
    this.Detail = dataa;
  },
};
</script>
