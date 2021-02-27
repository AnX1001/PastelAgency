<template>
  <div>
    <button class="btn"><slot></slot></button>
  </div>
</template>

<script>
export default {
  name: "ContactBtn",
};
</script>

<style scoped>
.btn {
  background-color: floralwhite;
  height: 57px;
  border-radius: 8px;
  width: 137px;
  border: 4px solid black;
  font-size: 15px;
  margin-top: 14px;
}

.btn:hover {
  border: 4px solid rgb(213, 233, 234);
  cursor: pointer;
}
</style>
