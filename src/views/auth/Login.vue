<template>
  <div class="Login">
    <h1>Login</h1>

    <form @submit.prevent="submitForm">
      <input type="text" name="email" v-model="form.email" id="" />
      <input type="password" name="password" v-model="form.password" id="" />
      <input type="submit" />
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },

  methods: {
    // ...mapActions({
    //   Login: "AuthenticationService",
    // }),

    submitForm() {
      // Run validation
      // this.email
      // this.password

      this.Login(this.form);
    },
  },

  created() {
    // alert("Yooooooo");
    console.log(mapActions({}));
  },
};
</script>