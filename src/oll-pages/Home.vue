<template>
  <div id="app">
    <button @click="redirectToAnotherPage">Перейти на іншу сторінку</button>
  </div>
</template>

<script>
export default {
  components: {},
  methods: {
    redirectToAnotherPage() {
      this.$router.push('/notefound'); 
    }
  },
  data() {
    return {};
  }
};
</script>

<style>
:root {
  --font-family: "Montserrat", sans-serif;
  --second-family: "Roboto", sans-serif;
}

html,
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  width: 100%;
}

#app {
  margin: 0;
  padding: 0;
}

button {
  padding: 10px 20px;
  background-color: #007BFF;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
