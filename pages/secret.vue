<template>
  <div>
    <h1>This is secret page.</h1>
  </div>
</template>

<script>
export default {
  name: 'SecretPage',
  middleware: 'authenticated',
}
</script>
