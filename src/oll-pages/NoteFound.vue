<template>
  <div class="not-found">
    <div class="content">
      <h1>Oops!</h1>
      <h2>404 - PAGE NOT FOUND</h2>
      <p>
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <router-link to="/" class="home-button">GO TO HOMEPAGE</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
};
</script>

<style scoped>
.not-found {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa; 
}

.content {
  text-align: center;
  max-width: 600px;
}

.not-found h1 {
  font-size: 5rem;
  color: #343a40; 
}

.not-found h2 {
  font-size: 2rem;
  margin: 20px 0;
  color: #495057; 
}

.not-found p {
  font-size: 1.2rem;
  color: #6c757d; 
  line-height: 1.6;
}

.home-button {
  background-color: #007bff;
  color: white;
  padding: 12px 24px;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1.2rem;
  margin-top: 20px;
  transition: background-color 0.3s ease;
  display: inline-block;
}

.home-button:hover {
  background-color: #0056b3;
}
</style>
