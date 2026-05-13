<template>
  <div class="login-container d-flex align-items-center justify-content-center">
    <div class="card shadow-lg p-4 login-card">

      <!-- LOGO -->
      <div class="text-center mb-3">
        <img src="https://tse3.mm.bing.net/th/id/OIP.yBETMZ_569UmOu7kAKja2wAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" alt="Zagrada Logo" class="logo" />
        <h3 class="mt-2">Zagrada 🍽️</h3>
        <p class="text-muted">Inicia sesión en tu restaurante</p>
      </div>

      <!-- INPUT USUARIO -->
      <div class="form-floating mb-3">
        <input
          v-model="username"
          type="text"
          class="form-control"
          id="usuario"
          placeholder="Usuario"
        />
        <label for="usuario">Usuario</label>
      </div>

      <!-- INPUT PASSWORD -->
      <div class="form-floating mb-3">
        <input
          v-model="password"
          type="password"
          class="form-control"
          id="password"
          placeholder="Contraseña"
        />
        <label for="password">Contraseña</label>
      </div>

      <!-- BOTÓN -->
      <button @click="login" class="btn btn-dark w-100">
        Ingresar
      </button>

      <!-- ERROR -->
      <div v-if="error" class="alert alert-danger mt-3 text-center">
        ❌ Usuario o contraseña incorrectos
      </div>

    </div>
  </div>
</template>

<script>
import users from '../data/usuarios.json'

export default {
  data() {
    return {
      username: '',
      password: '',
      error: false
    }
  },
  methods: {
    login() {
      const user = users.find(
        u =>
          u.username === this.username &&
          u.password === this.password
      )

      if (user) {
        this.$router.push('/dashboard')
      } else {
        this.error = true
      }
    }
  }
}
</script>

<style>
.login-container {
  height: 100vh;
  background: linear-gradient(135deg, #1d1d1d, #343a40);
}

.login-card {
  width: 350px;
  border-radius: 15px;
}

.logo {
  width: 80px;
}
</style>