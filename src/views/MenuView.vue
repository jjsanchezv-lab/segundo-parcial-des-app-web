<template>
  <div class="container py-4">

    <h2 class="text-center title">🍽️ Menú Zagrada</h2>

    <div class="row">

      <div class="col-md-4 mb-4" v-for="p in productos" :key="p.id">

        <div class="card z-card">

          <img :src="p.imagen" class="card-img-top" />

          <div class="card-body text-center">

            <h5>{{ p.nombre }}</h5>
            <p class="text-muted">{{ p.descripcion }}</p>

            <h6 class="price">${{ p.precio }}</h6>

            <button class="btn z-btn" @click="agregar(p)">
              🛒 Agregar
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
          nombre: "Hamburguesa Zagrada",
          descripcion: "Carne, queso y tocineta",
          precio: 18000,
          imagen: "https://images.unsplash.com/photo-1550547660-d9450f859349"
        },
        {
          id: 2,
          nombre: "Pizza Italiana",
          descripcion: "Mozzarella y pepperoni",
          precio: 22000,
          imagen: "https://images.unsplash.com/photo-1548365328-9f547fb095a7"
        },
        {
          id: 3,
          nombre: "Pasta Alfredo",
          descripcion: "Salsa cremosa con pollo",
          precio: 20000,
          imagen: "https://images.unsplash.com/photo-1525755662778-989d0524087e"
        }
      ]
    }
  },

  methods: {
    agregar(producto) {
      let carrito = JSON.parse(localStorage.getItem("carrito")) || []

      carrito.push(producto)

      localStorage.setItem("carrito", JSON.stringify(carrito))

      alert("Agregado 🛒")
    }
  }
}
</script>

<style>
.title {
  color: #d4af37;
  font-weight: bold;
}

.z-card {
  border: none;
  border-radius: 15px;
  overflow: hidden;
  background: #1b263b;
  color: white;
}

.price {
  color: #d4af37;
  font-weight: bold;
}

.z-btn {
  background: #d4af37;
  color: #0d1b2a;
  border: none;
}
</style>