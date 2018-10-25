<template>
  <div id="app">

    <app-header></app-header>

    <router-view></router-view>

    <app-footer></app-footer>

  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

 <style lang="scss" src="./assets/styles.scss">
// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }
//
// h1, h2 {
//   font-weight: normal;
// }
//
// ul {
//   list-style-type: none;
//   padding: 0;
// }
//
// li {
//   display: inline-block;
//   margin: 0 10px;
// }
//
// a {
//   color: #42b983;
// }
</style>
