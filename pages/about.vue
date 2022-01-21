<template>
  <div>
    <h1>
      {{ $t('about.title') }}
    </h1>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  head() {
    return { title: this.$t('about.title') }
  },
}
</script>
