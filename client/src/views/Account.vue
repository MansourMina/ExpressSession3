<template>
  <div id="app" class="container d-flex flex-column min-vh-100">
    <h1 class="text-center my-3">{{ user.name }}'s Account</h1>
    <div class="mx-auto d-block">
      <router-link to="/">Home</router-link> |
      <router-link to="/logout">Logout</router-link>
    </div>
    <p v-if="prime != null" class="text-center my-3">You secret: {{ prime }}</p>
    <p class="text-center font-weight-bold mt-3">
      Please enter your credit card number below.
    </p>
    <div class="row">
      <div class="col-3 offset-4">
        <input
          type="text"
          class="form-control"
          placeholder="We can only accept VISA"
        />
      </div>
      <div class="col-3">
        <button
          onclick="alert('This is only a simulation!')"
          class="btn btn-primary"
        >
          Submit
        </button>
      </div>
    </div>
    <p class="mt-auto text-center">&copy; 2021 Robert Baumgartner</p>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      user: {
        id: '',
        name: '',
      },
      prime: '',
    };
  },
  async created() {
    const { data } = await axios({
      url: '/secretdata',
      method: 'GET',
    });
    this.prime = data;
    let user = JSON.parse(localStorage.getItem('user'));
    this.user.id = user.id;
    this.user.name = user.name;
  },
};
</script>

<style lang="scss" scoped></style>
