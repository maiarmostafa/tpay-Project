<template>
  <div class="bg-light">
    <Header @toggleShowLoginform="ontoggleShowLoginform" />
    <LoginForm v-if="isLoginFormVisited" />
    <router-view
      :bannerData="bannerData"
      :recom="recom"
      :popu="popu"
    ></router-view>
    <div class="mb-4 bg-light"></div>
  </div>
</template>

<script>
import Header from "./components/Header";
import LoginForm from "./components/LoginForm.vue";

export default {
  name: "App",
  components: {
    LoginForm,
    Header,
  },
  data() {
    return {
      isLoginFormVisited: false,
      games: [],
      bannerData: {},
      recom: [],
      popu: [],
    };
  },
  methods: {
    ontoggleShowLoginform() {
      this.isLoginFormVisited = !this.isLoginFormVisited;
    },
    async fetchGames() {
      const res = await fetch(
        "https://my-json-server.typicode.com/maiarmostafa/Game-Store/games"
      );
      const data = await res.json();
      return data;
    },
  },
  async created() {
    this.games = await this.fetchGames();
    this.bannerData = this.games[0];
    let origin = this.games.filter(
      (g) => g.Recommended === true && g.Popular === false
    );
    this.recom = origin.map((g) => ({
      ...g,
      GameName: g.GameName.substring(0, 25) + "...",
    }));
    let origin2 = this.games.filter(
      (g) => g.Recommended === false && g.Popular === true
    );
    this.popu = origin2.map((g) => ({
      ...g,
      GameName: g.GameName.substring(0, 25) + "...",
    }));
  },
};
</script>

<style></style>
