<template>
  <div>
    <h3>{{ email }}</h3>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  props: ["email", "message"],
};
</script>

<style scoped>
div {
  border: solid black 1px;
  border-radius: 5px;
  padding: 0rem 1rem;
  margin: 1rem 0;
}

div h3 {
  color: blueviolet;
}
</style>
