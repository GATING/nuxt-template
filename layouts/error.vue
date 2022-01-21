<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">{{ error.message }}</h1>
    <h1 v-else>An error exception to the application</h1>
    After {{ second }} seconds,
    <nuxt-link :to="localePath('/')">back to home page </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'ErrorLayout',
  layout: 'blank',
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      second: 3,
    }
  },
}
</script>
