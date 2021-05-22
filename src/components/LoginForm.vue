<template>
  <div
    class="container col-3 card position-absolute pt-4 pb-4 custom-posi"
    style="z-index:10000"
  >
    <p id="txt">Please add your account details</p>
    <form @submit="onSubmit">
      <div class="mb-3 ">
        <label class="form-label">Username / Email</label>
        <!-- v-model here makes two way bindding -->
        <input
          type="email"
          v-model="username"
          name="username"
          placeholder="Type your username here"
          class="form-control border-top-0 border-end-0 border-start-0"
        />
      </div>
      <div class="mb-3 ">
        <label class="form-label">Password</label>
        <input
          :type="passwordtype"
          v-model="pass"
          name="password"
          placeholder="Type your password here"
          class="form-control border-top-0 border-end-0 border-start-0"
        />
        <div @click="hideeye">
          <img src="../assets/eyeicon.svg" class="position-absolute topS" />
        </div>
        <a
          href="#"
          text="Forgot password?"
          style="color:#572589"
          class="nav-link float-end"
        />
      </div>
      <Button class="btn w-100 bttun" type="submit" text="LOGIN" />
      <a
        href="#"
        text="Do you have an account? sign up!"
        style="color:#572589"
        class="nav-link text-center"
      />
    </form>
  </div>
</template>
<script>
import Button from "./Button";
export default {
  name: "LoginForm",
  data() {
    return {
      username: "",
      pass: "",
      passwordtype: "password",
      // hideShow: false,
    };
  },
  components: {
    Button,
  },
  methods: {
    hideeye() {
      this.hideShow = !this.hideShow;
      if (this.hideShow) {
        this.passwordtype = "text";
      } else {
        this.passwordtype = "password";
      }
      console.log(this.passwordtype);
    },
    onSubmit(e) {
      e.preventDefault();
      if (this.username.trim().length === 0) {
        alert("Please, Enter your username");
        return;
      } else if (this.pass.trim().length === 0) {
        alert("please, Enter your password");
        return;
      }
      console.log(this.username, this.pass);
    },
  },
};
</script>
<style scoped>
.topS {
  top: 52%;
  left: 92%;
}
.custom-posi {
  top: 12%;
  left: 68%;
}
.bttun {
  background: #572589;
  color: white;
}
label {
  font-family: Roboto;
  font-size: 11px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #444242;
}
#txt {
  opacity: 0.5;
  font-family: Tajawal;
  font-size: 14.4px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #444242;
}

.form-control:focus {
  outline: none;
}
/* .form-control[type="password"] {
  background: url(../assets/eyeicon.svg) no-repeat scroll 7px 7px;
  padding-right: 30px;
  background-position: 100%;
} */
</style>
