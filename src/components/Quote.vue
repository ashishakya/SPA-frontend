<template>
  <div class="panel panel-default">
    <div class="panel-body">{{ qt.content }}</div>
    <div class="panel-footer">
      <div v-if="editing">
        <input type="text" v-model="content">
        <a @click="onUpdate" class="btn btn-secondary">Save</a>
        <a @click="onCancel" class="btn btn-secondary">Cancel</a>
      </div>
      <div v-else>
        <a @click="onEdit" class="btn btn-info">Edit</a>
        <a @click="onDelete" class="btn btn-info">Delete</a>
      </div>
      <hr>
    </div>
  </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "Quote",
        data() {
            return {
                editing: false,
                content: this.qt.content
            }
        },
        props: ['qt'],
        methods: {
            onUpdate() {
                this.editing=false;
                const requestUrl = `http://spa-backend.test/api/quotes/${this.qt.id}`;
                axios.post(requestUrl, {
                    content: this.content,
                    _method: 'PUT'
                })
                    .then((response) => {
                        this.$emit('quoteUpdated')
                    })
                    .catch((error) => console.log(error))

            },
            onCancel() {
                this.editing = false
            },
            onEdit() {
                this.editing = true;
                this.content = this.qt.content
            },
            onDelete() {
                this.$emit('quoteDeleted', this.qt.id);
                const requestUrl = `http://spa-backend.test/api/quotes/${this.qt.id}`;
                axios.delete(requestUrl)
                    .then((response) => console.log(response))
                    .catch((error) => console.log(error))

            },
        }
    }
</script>

<style scoped>
  a {
    cursor: pointer;
  }
</style>

