<template>
  <div class="container d-flex flex-column min-vh-100">
    <form @submit.prevent="register">
      <h1 class="text-center my-3">Register</h1>
      <div class="row">
        <div class="col-3">
          <input
            class="form-control"
            type="text"
            v-model="name"
            placeholder="Name"
            required
          />
        </div>
        <div class="col-3">
          <input
            class="form-control"
            type="email"
            v-model="email"
            placeholder="Email"
            required
          />
        </div>
        <div class="col-2">
          <input
            class="form-control"
            type="password"
            v-model="password"
            placeholder="Password"
            required
          />
        </div>
        <div class="col-4">
          <button class="btn btn-primary" type="submit">Register</button>
          <span class="ml-2 text-danger">{{ message }}</span>
        </div>
      </div>
    </form>

    <p class="mt-4 text-center">
      Have an account? <a href="/login">Login</a> first!
    </p>
    <p class="mt-auto text-center">&copy; 2021 Robert Baumgartner</p>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      name: '',
      email: 'john@gmail.com',
      password: '1234',
      message: '',
    };
  },
  methods: {
    async register() {
      let { data } = await axios({
        url: '/register',
        method: 'POST',
        data: {
          name: this.name,
          email: this.email,
          password: this.password,
        },
      });
      localStorage.setItem('user', JSON.stringify(data));
      this.$router.push('/');
    },
  },
};
</script>

<style lang="scss" scoped></style>
