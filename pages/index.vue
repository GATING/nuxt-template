<template>
  <div>
    <h1>
      {{ $t('home.title') }}
    </h1>
    <hello-world />
  </div>
</template>

<script>
import HelloWorld from '~/components/HelloWorld.vue'
export default {
  name: 'IndexPage',
  components: { HelloWorld },
  head() {
    return { title: this.$t('home.title') }
  },
}
</script>
