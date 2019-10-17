<template>
  <div>
    <button class="btn btn-primary" @click="getQuotes">Get Quote</button>
    <hr>

    <app-quote v-for="quote in quotes"
               :qt="quote"
               :key="quote.id"
               @quoteUpdated="getQuotes"
               @quoteDeleted="onQuoteDeleted($event)">
    </app-quote>
  </div>
</template>

<script>
    import Quote from "./Quote";
    import axios from 'axios';

    export default {
        name: "Quotes",
        data() {
            return {
                quotes: []
            }
        },
        components: {
            'app-quote': Quote
        },
        methods: {
            getQuotes() {
                const token = localStorage.getItem('token');
                const requestUrl = 'quotes';
                this.$http.get(requestUrl,{params:{token:token}})
                    .then((res) => this.quotes = res.data.quote)
                    .catch((err) => alert('Sign in first'));
            },
            onQuoteDeleted(id) {
                const position = this.quotes.findIndex((element) => {
                    return element.id == id;
                });
                this.quotes.splice(position, 1)
            }
        }
    }
</script>

<style scoped>

</style>

