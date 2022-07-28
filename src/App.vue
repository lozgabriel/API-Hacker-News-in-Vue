<template>
  <div id="app">
    <Header />
    <router-view path="$router.key"/>
  </div>
</template>

<script>
import '../src/assets/css/global.css'
import Header from './components/Header';

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>
