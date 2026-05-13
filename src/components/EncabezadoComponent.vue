<template>
  <nav class="navbar zagrada-navbar px-4">

    <span class="logo">🍽️ ZAGRADA</span>

    <div class="cart" @click="$router.push('/carrito')">
      🛒 Carrito

      <span v-if="cantidad > 0" class="badge">
        {{ cantidad }}
      </span>
    </div>

  </nav>
</template>

<script>
export default {
  data() {
    return { cantidad: 0 }
  },
  mounted() {
    this.update()
    window.addEventListener("storage", this.update)
  },
  methods: {
    update() {
      const c = JSON.parse(localStorage.getItem("carrito")) || []
      this.cantidad = c.length
    }
  }
}
</script>

<style>
.zagrada-navbar {
  background: #0d1b2a;
  border-bottom: 2px solid #d4af37;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 20px;
  font-weight: bold;
  color: #d4af37;
}

.cart {
  cursor: pointer;
  position: relative;
  font-size: 18px;
}

.badge {
  position: absolute;
  top: -8px;
  right: -12px;
  background: #d4af37;
  color: #0d1b2a;
  border-radius: 50%;
  padding: 3px 7px;
  font-size: 12px;
  font-weight: bold;
}
</style>