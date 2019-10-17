<template>
  <form>
    <h1>Sign in</h1>
    <div class="form-group">
      <label for="email">Email</label>
      <input type="text" id="email" name="email" class="form-control" v-model="email">
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input type="password" id="password" name="password" class="form-control" v-model="password">
    </div>
    <button type="submit" class="btn btn-primary" @click.prevent="signin">Signup</button>
  </form>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "Signin",
        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            signin() {
                // {'headers':{'X-Requested-With': 'XMLHttpRequest'}}
                const requestUrl = 'http://spa-backend.test/api/users/signin';
                axios.post(requestUrl, {email: this.email, password: this.password})
                    .then((response) => {
                        const token = response.data.token;
                        // decrypting the token
                        const base64Url = token.split('.')[1];
                        const base64Value = base64Url.replace('-','+').replace('_', '/');
                        localStorage.setItem('token', token)
                        this.$router.push({name:'quotes'});
                    })
                    .catch((error) => console.error(error, 'error'))
            }
        }
    }
</script>

<style scoped>

</style>

