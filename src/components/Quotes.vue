<template>
  <div>
    <button class="btn btn-primary" @click="getQuotes">Get Quote</button>
    <hr>
    <app-quote v-for="quote in quotes"
               :qt="quote"
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
                const requestUrl = 'http://spa-backend.test/api/quotes';
                axios.get(requestUrl)
                    .then((res) => this.quotes = res.data.quote)
                    .catch((err) => console.log(err));
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

