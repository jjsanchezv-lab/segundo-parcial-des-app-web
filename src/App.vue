<template>
 
 
  <div>
    <encabezado-component v-if="!isLogin" />

    <router-view />

    <pie-de-pagina-component v-if="!isLogin" />
  </div>

</template>
<script>

import EncabezadoComponent from './components/EncabezadoComponent.vue';
import PieDePaginaComponent from './components/PieDePaginaComponent.vue';

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

