<template>
  <div class="home">

    <h1 class="title">🍽️ Bienvenido a Zagrada</h1>

    <div class="buttons">

      <button class="z-btn-big" @click="$router.push('/menu')">
        🍔 Menú
      </button>

      <button class="z-btn-big" @click="$router.push('/carrito')">
        🛒 Carrito
      </button>

      <button class="z-btn-big" @click="$router.push('/reservas')">
        🪑 Reservas
      </button>

    </div>

  </div>
</template>

<style>
.home {
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  color: #d4af37;
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 30px;
}

.buttons {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.z-btn-big {
  background: #d4af37;
  color: #0d1b2a;
  padding: 12px 20px;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  font-size: 18px;
  transition: 0.3s;
}

.z-btn-big:hover {
  transform: scale(1.05);
}
</style>