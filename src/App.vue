<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <router-link to="/">Quotes</router-link>
          |
          <router-link to="/new-quote">New Quote</router-link>
          |
          <router-link :to="{ name:'signup' }">Signup</router-link>
          |
          <router-link :to="{ name:'signin' }">Signin</router-link>
          <a @click="logout">Logout</a>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-xs-12">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import NewQuote from "./components/NewQuote";

    export default {
        name: 'app',
        data() {
            return {}
        },
        components: {
            'app-new-quote': NewQuote
        },
        methods: {
            logout() {
                localStorage.setItem('token', '');
                this.$router.push({name: 'signin'});
            },
        },
    }
</script>

<style>
  #app {
    margin: 30px;
  }

  a {
    cursor: pointer;
  }
</style>
