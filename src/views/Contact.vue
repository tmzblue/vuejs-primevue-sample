<template>
  <div>
    <h1>Contact page</h1>
  </div>
  <div>
      Captured url parameter: {{ name }}
  </div>
</template>

<script>
export default {
  name: "Contact",
  props: {
    name: String,
  },
};
</script>

<style>
</style>