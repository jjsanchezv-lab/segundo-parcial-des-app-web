<template>
   <div class="app-bg">

    <encabezado-component v-if="!isLogin" />

    <main class="content">
      <router-view />
    </main>

    <pie-de-pagina-component v-if="!isLogin" />

  </div>
</template>

<script>
import EncabezadoComponent from './components/EncabezadoComponent.vue'
import PieDePaginaComponent from './components/PieDePaginaComponent.vue'

export default {
  components: {
    EncabezadoComponent,
    PieDePaginaComponent
  },
  computed: {
    isLogin() {
      return this.$route.path === '/login'
    }
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: Arial, sans-serif;
}

.app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-bg {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  background: linear-gradient(
    rgba(13, 27, 42, 0.85),
    rgba(13, 27, 42, 0.85)
  ),
  url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4");

  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  color: white;
}

.content {
  flex: 1;
}
</style>

