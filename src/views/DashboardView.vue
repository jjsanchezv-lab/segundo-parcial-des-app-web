<template>
  <div class="container mt-4">
    <h1>🍽️ Bienvenido a Zagrada</h1>

    <div class="row mt-4">
      <div class="col-md-4">
        <button class="btn btn-dark w-100" @click="$router.push('/menu')">
          Ver Menú 🍔
        </button>
        
      </div>

      <div class="col-md-4">
        <button class="btn btn-primary w-100" @click="$router.push('/reservas')">
          Reservar Mesa 🍽️
        </button>
      </div>

      <div class="col-md-4">
        <button class="btn btn-success w-100" @click="$router.push('/carrito')">
          Ver Carrito 🛒
        </button>
      </div>
    </div>
  </div>
</template>