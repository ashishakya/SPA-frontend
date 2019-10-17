<template>
  <form @submit.prevent="submit">
    <div class="form-group">
      <label for="content">Content</label>
      <input type="text" id="content" class="form-control" v-model="content">
    </div>
    <button class="btn btn-primary" type="submit">Submit</button>
  </form>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "NewQuote",
        data() {
            return {
                content: ''
            }
        },
        methods: {
            submit() {
                const requestUrl = 'http://spa-backend.test/api/quote';
                axios.post(requestUrl, {
                    content: this.content
                }).then((response) => console.log(response))
                    .catch((error) => console.log(error))
            }
        }
    }
</script>

<style scoped>

</style>

