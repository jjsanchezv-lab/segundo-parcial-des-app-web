<template>
  <div class="container mt-4">
    <h2>🛒 Carrito</h2>

    <!-- AQUÍ SE LISTAN LOS PRODUCTOS -->
    <div v-for="(item, index) in carrito" :key="index" class="card p-3 mb-2">

      <h5>{{ item.nombre }}</h5>
      <p>${{ item.precio }}</p>

      <!-- 👇 BOTÓN ELIMINAR VA AQUÍ -->
      <button class="btn btn-danger btn-sm" @click="eliminar(index)">
        Eliminar
      </button>

    </div>

    <h3 class="mt-3">Total: ${{ total }}</h3>

    <button class="btn btn-warning mt-3" @click="vaciar">
      Vaciar carrito
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carrito: []
    }
  },
  

  mounted() {
    this.carrito = JSON.parse(localStorage.getItem("carrito")) || []
  },

  computed: {
    total() {
      return this.carrito.reduce((sum, item) => sum + item.precio, 0)
    }
  },

  methods: {
    eliminar(index) {
      this.carrito.splice(index, 1)
      localStorage.setItem("carrito", JSON.stringify(this.carrito))
    },

    vaciar() {
      this.carrito = []
      localStorage.removeItem("carrito")
    }
  }
}
</script>