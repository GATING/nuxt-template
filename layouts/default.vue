<template>
  <div>
    <header>
      <nav class="Header__Menu">
        <nuxt-link exact :to="localePath('/')" exact-active-class="text-danger">
          {{ $t('home.title') }}
        </nuxt-link>
        <nuxt-Link
          exact
          :to="localePath('about')"
          exact-active-class="text-danger"
        >
          {{ $t('about.title') }}
        </nuxt-Link>

        <nuxt-Link
          exact
          :to="localePath('login')"
          exact-active-class="text-danger"
        >
          {{ $t('login.title') }}
        </nuxt-Link>

        <nuxt-Link
          exact
          :to="localePath('secret')"
          exact-active-class="text-danger"
        >
          没token访问不了这个页面
        </nuxt-Link>
      </nav>

      当前语言:{{ $i18n.locale }}
      <nuxt-link :to="switchLocalePath('en')">English</nuxt-link>
      <nuxt-link :to="switchLocalePath('zh')">中文</nuxt-link>
    </header>
    <nuxt />
    <footer>公共底部</footer>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>
