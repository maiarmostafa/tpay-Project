<template>
  <div class="navbar bg-white p-0">
    <div class="container">
      <div class="d-flex flex-row">
        <router-link to="/">
          <img src="../assets/Logo.png" alt="stc" />
        </router-link>
        <p class="pt-5">Game Store</p>
      </div>
      <div class="d-flex flex-row-reverse">
        <img src="../assets/search.svg" @click="oninputvisiable" />
        <img
          src="../assets/threedots.svg"
          @click="$emit('toggleShowLoginform')"
        />
        <img
          src="../assets/close.svg"
          class="me-2"
          style="width: 10px;"
          v-if="isInputvisiable"
          @click="oninputUNvisiable"
        />
        <input
          type="text"
          class="Inputround me-2"
          v-if="isInputvisiable"
          placeholder="Search"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  emits: ["toggleShowLoginform"],
  data() {
    return { isInputvisiable: false };
  },
  methods: {
    oninputvisiable() {
      this.isInputvisiable = true;
    },
    oninputUNvisiable() {
      this.isInputvisiable = false;
    },
  },
};
</script>
<style scoped>
p {
  color: #572589;
  display: inline;
}
.Inputround {
  border-radius: 10px;
}
</style>
