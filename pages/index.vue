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
  created() {
    console.log(this.$config)
    console.log(this.$userApi)
    console.log(process.env)
  },
}
</script>
