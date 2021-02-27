<template>
  <div>
    <span>
      <h1>Pastell Designbyrå</h1>
      <router-link class="navlinks" to="/">Hjem</router-link>
      <router-link class="navlinks" to="/About">Om oss</router-link>
      <router-link class="navlinks" to="/Career">Karriere</router-link>
    </span>
  </div>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style scoped>
.navlinks {
  text-decoration: none;
  color: black;
  font-size: clamp(20px, 1.8vw, 1.8vw);
  margin-left: 57px;
  border-radius: 8px;
  padding: 5px;
}

.navlinks:hover {
  color: black;
  text-decoration: underline;
}

span {
  display: flex;
  align-items: center;
  width: 100vw;
  padding: 15px;
  background-color: rgb(236, 211, 204);
  height: 72px;
  overflow: hidden;
}

h1 {
  color: black;
  padding: 10px;
  border-radius: 8px;
  font-size: clamp(20px, 3vw, 3.2vw);
  font-weight: bolder;
}
</style>
