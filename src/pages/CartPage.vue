<template>
  <div class="cart-page">
    <h1 class="page-title">Mon Panier</h1>
    
    <div v-if="cart.length === 0" class="empty-state">
      <p>Votre panier est vide. N'hésitez pas à jeter un œil à notre menu !</p>
    </div>
    
    <div v-else class="cart-container">
      <!-- Liste des plats dans le panier -->
      <div class="cart-items">
        <CartItem 
          v-for="item in cart" 
          :key="item.id" 
          :item="item"
          @update-qty="handleUpdateQty"
          @remove="handleRemove"
        />
      </div>
      
      <!-- Résumé avec le total dynamique -->
      <div class="cart-summary">
        <h2>Résumé de la commande</h2>
        <div class="summary-line total">
          <span>Total</span>
          <!-- L'affichage se met à jour via le watcher, aucun recalcul "manuel" ici -->
          <span>{{ cartTotal.toFixed(2) }} €</span>
        </div>
        
        <button @click="handleCheckout" class="btn-checkout">
          Finaliser la commande
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import CartItem from '../components/CartItem.vue'
import { useCart } from '../composables/useCart'

const { cart, cartTotal, updateQuantity, removeFromCart, clearCart } = useCart()

// Réception des événements émis par CartItem
const handleUpdateQty = (delta, id) => {
  updateQuantity(id, delta)
}

const handleRemove = (id) => {
  removeFromCart(id)
}

// Action du bouton "Finaliser la commande"
const handleCheckout = () => {
  if (cart.value.length > 0) {
    // Cette partie sera remplacée par le système de commandes (Partie 4)
    alert(`Commande finalisée ! Total à régler : ${cartTotal.value.toFixed(2)} €`)
  }
}
</script>

<style scoped>
.cart-page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.page-title {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 40px;
  font-size: 2.5rem;
}

.empty-state {
  text-align: center;
  padding: 60px;
  background-color: #f8fafc;
  border-radius: 12px;
  border: 1px dashed #cbd5e1;
  color: #64748b;
  font-size: 1.2rem;
}

.cart-container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;
  align-items: start;
}

.cart-items {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.cart-summary {
  background-color: #f8fafc;
  padding: 25px;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  position: sticky;
  top: 20px;
}

.cart-summary h2 {
  margin-top: 0;
  margin-bottom: 25px;
  color: #1e293b;
  font-size: 1.4rem;
}

.summary-line {
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  font-size: 1.5rem;
  font-weight: bold;
  color: #0f172a;
}

.btn-checkout {
  width: 100%;
  padding: 16px;
  background-color: #10b981;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 4px 6px rgba(16, 185, 129, 0.2);
}

.btn-checkout:hover {
  background-color: #059669;
  transform: translateY(-2px);
  box-shadow: 0 6px 8px rgba(16, 185, 129, 0.3);
}

@media (max-width: 768px) {
  .cart-container {
    grid-template-columns: 1fr;
  }
}
</style>
