<template>
  <v-main class="wrap">
    <div class="container">
      <div class="commonTitle">
        <h1>TODO List</h1>
        <nav class="nav">
          <router-link to="/">목록</router-link>
          <router-link to="/stats">통계</router-link>
        </nav>
      </div>
      <router-view />
    </div>
  </v-main>
</template>

<script lang="ts" setup>
//
</script>

<style lang="scss">
.wrap {
  width: 100%;
  max-width: 60rem; // !important;
  margin: 1rem auto;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50rem;
  /* > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  } */
}

.nav {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 20rem;
  padding: 1rem;
  margin-bottom: 5rem;
  a {
    text-decoration: none;
  }
}

.commonTitle {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
