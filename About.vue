<template>
  <div class="box">
    <div class="textbox">
      <h1>Unik design</h1>
      <h3>Om oss</h3>
      <h2>
        Estetikk og produktutvikling går hånd i hånd. Markedet i dag er mettet
        og du finner knapt et produkt som er ikke likt et annet. Vi hjelper deg
        å være unik. Vi er Pastelldesign.
      </h2>
    </div>
    <img src="@/assets/woman-5930693_1920.jpg" />
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
.box {
  margin-top: 83px;
  height: 100vh;
  color: black;
  width: 100vw;
  padding: 17px;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
}

.textbox {
  width: 47%;
  margin-bottom: 27px;
  margin-right: 17px;
}

img {
  width: 527px;
  height: auto;
  object-fit: contain;
  margin-top: 17px;
}

h2 {
  margin-top: 7px;
}
</style>
