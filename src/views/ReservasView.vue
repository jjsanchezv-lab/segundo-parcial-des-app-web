<template>
  <div class="container mt-4">
    <h2>🍽️ Reservar Mesa</h2>

    <input v-model="nombre" placeholder="Nombre" class="form-control mb-2" />
    <input v-model="personas" placeholder="Personas" class="form-control mb-2" />
    <input v-model="fecha" type="date" class="form-control mb-2" />

    <button class="btn btn-primary w-100" @click="reservar">
      Reservar
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: '',
      personas: '',
      fecha: ''
    }
  },
  methods: {
    reservar() {
      alert('Reserva hecha 🍽️')
    }
  }
}
</script>