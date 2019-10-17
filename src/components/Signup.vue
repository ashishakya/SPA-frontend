<template>
  <form>
    <div class="form-group">
      <label for="username">User Name</label>
      <input type="text" id="username" name="username" class="form-control" v-model="username">
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input type="text" id="email" name="email" class="form-control" v-model="email">
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input type="password" id="password" name="password" class="form-control" v-model="password">
    </div>
    <button type="submit" class="btn btn-primary" @click.prevent="signup">Signup</button>
  </form>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "Signup",
        data() {
            return {
                username: '',
                email: '',
                password: ''
            }
        },
        methods: {
            signup() {
                const requestUrl = 'http://spa-backend.test/api/users';
                axios.post(requestUrl, {name: this.username,email:this.email,password:this.password},
                    )
                    .then((response) => console.log(response, 'success'))
                    .catch((error) => console.error(error, 'error'))
            }
        }
    }
</script>

<style scoped>

</style>

