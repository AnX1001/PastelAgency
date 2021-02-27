<template>
  <div id="app">
    <Nav class="nav"></Nav>

    <!--below is the router-view-->
    <router-view> </router-view>
    <div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Nav,
    Footer,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  overflow-x: hidden;
  margin: 0px;
}
#app {
  font-family: Calibri, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: floralwhite;
}

.nav {
  position: absolute;
}
</style>
