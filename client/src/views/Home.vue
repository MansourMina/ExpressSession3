<template>
  <div class="container d-flex flex-column min-vh-100">
    <h1 class="text-center mt-3">Welcome {{ user.name }}</h1>
    <div v-if="user.name.length == 0" class="d-flex flex-column">
      <div class="mx-auto">
        <router-link to="/login">Login</router-link> |
        <router-link to="/register">Register</router-link>
      </div>
      <p class="my-5 text-center">Please login to use our services!</p>

      <div class="row">
        <div class="col-4">
          <img class="img-fluid" src="/images/ceo.jpg" />
        </div>
        <div class="col-8 d-flex flex-column justify-content-center">
          <h3>A word from our CEO</h3>
          <h4>Dear Customer</h4>
          <p class="text-justify">
            PlanationX is an innovative International Seed Company, active in
            Plant Breeding, in Seed Production, in Seed Processing; and in
            Marketing and Sales of hybrid vegetable varieties for the
            professional sectors. PlanationX is an industry leader in Research
            and Development of new, improved vegetable varieties. The Company’s
            strategic focus is to develop hybrids with novel traits that have a
            high added- value and that meet the present and future demands of
            our customers. Over the last fifteen years, we have marketed the
            seeds of our Cucurbit varieties worldwide and we maintain the
            highest standards of genetic quality, integrity and professionalism.
            Research is the heart of PlanationX and its future.
          </p>
        </div>
      </div>
    </div>

    <div v-else class="d-flex flex-column justify-content-center">
      <h5 class="text-center mb-4">You are logged in!</h5>
      <div class="mx-auto">
        <router-link to="/account">Account</router-link> |
        <router-link to="/logout">Logout</router-link>
      </div>
      <h5 class="text-center mt-5 text-danger">
        Your account is about to expire. Update your credit card information!
      </h5>
      <p class="text-center mt-3">Please act immediatley!</p>
    </div>

    <p class="mt-auto text-center">&copy; 2021 Robert Baumgartner</p>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      user: {
        id: '',
        name: '',
      },
    };
  },
  created() {
    let user = JSON.parse(localStorage.getItem('user'));
    if (user != null) {
      this.user.id = user.id;
      this.user.name = user.name;
      console.log(this.user)
    }
    
  },
};
</script>
