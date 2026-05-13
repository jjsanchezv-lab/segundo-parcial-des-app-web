<template>
  <div class="container mt-4">
    <h2>🛒 Carrito</h2>

    <ul class="list-group">
      <li v-for="item in carrito" class="list-group-item">
        {{ item.nombre }} - ${{ item.precio }}
      </li>
    </ul>
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
    this.carrito = JSON.parse(localStorage.getItem('carrito')) || []
  }
}
</script>