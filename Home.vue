<template>
  <div class="superContainer">
    <Hero></Hero>
    <div class="container">
      <h2>Pastelldesign fra Oslo</h2>
      <h1>Vi er et lokalt designbyrå med prisvinnende designere</h1>
      <ContactBtn><a href="mailto:@">KONTAKT OSS</a></ContactBtn>
    </div>
  </div>
</template>

<script>
import ContactBtn from "./ContactBtn";
import Hero from "./Hero";

export default {
  name: "Home",
  components: { ContactBtn, Hero },
};
</script>

<style scoped>
.superContainer {
  display: grid;
}

.container {
  width: 54%;
  padding: 17px;
  height: 450px;
}

h1 {
  margin-top: 17px;
  line-height: 1.5;
}

a {
  color: black;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
