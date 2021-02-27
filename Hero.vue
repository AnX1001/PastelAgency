<template>
  <div>
    <img
      src="@/assets/people-5930795_1920.jpg"
      alt="tre personer som sitter i møte"
    />
  </div>
</template>

<script>
export default {
  name: "Hero",
  props: {
    heroImageSrc: {
      type: String,
    },
  },
};
</script>

<style scoped>
img {
  width: 100vw;
  height: 476px;
  object-fit: cover;
  object-position: 50% 10%;
}
</style>
