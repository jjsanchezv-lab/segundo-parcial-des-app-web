<template>
  <div class="container mt-4">
    <h2>🍔 Menú</h2>

    <div class="row">
      <div class="col-md-4" v-for="producto in productos" :key="producto.id">
        <div class="card mb-3">
          <img :src="producto.imagen" class="card-img-top" />

          <div class="card-body">
            <h5>{{ producto.nombre }}</h5>
            <p>{{ producto.descripcion }}</p>
            <h6>${{ producto.precio }}</h6>

            <button class="btn btn-success w-100" @click="agregar(producto)">
              Agregar al carrito 🛒
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productos: [
        {
          id: 1,
          nombre: 'Hamburguesa',
          descripcion: 'Deliciosa hamburguesa',
          precio: 15000,
          imagen: 'https://via.placeholder.com/150'
        },
        {
          id: 2,
          nombre: 'Pizza',
          descripcion: 'Pizza italiana',
          precio: 20000,
          imagen: 'https://via.placeholder.com/150'
        }
      ]
    }
  },
  methods: {
    agregar(producto) {
      let carrito = JSON.parse(localStorage.getItem('carrito')) || []
      carrito.push(producto)
      localStorage.setItem('carrito', JSON.stringify(carrito))
      alert('Producto agregado 🛒')
    }
  }
}
</script>