<template>
  <div class="cart-item">
    <div class="item-details">
      <span class="item-name">{{ item.nom }}</span>
      <span class="item-price">{{ item.prixUnitaire.toFixed(2) }} € / u</span>
    </div>
    
    <div class="item-controls">
      <button @click="$emit('update-qty', -1, item.id)" class="btn-icon decrease">━</button>
      <span class="item-quantity">{{ item.quantite }}</span>
      <button @click="$emit('update-qty', 1, item.id)" class="btn-icon increase">✚</button>
    </div>
    
    <div class="item-total-line">
      {{ (item.prixUnitaire * item.quantite).toFixed(2) }} €
    </div>
    
    <button @click="$emit('remove', item.id)" class="btn-remove" title="Supprimer">✖</button>
  </div>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true
  }
})

// Déclaration formelle des events pour remonter l'action au parent (CartPage)
defineEmits(['update-qty', 'remove'])
</script>

<style scoped>
.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  background-color: #fff;
  border-bottom: 1px solid #edf2f7;
  transition: background-color 0.2s;
}

.cart-item:hover {
  background-color: #fcfcfc;
}

.item-details {
  display: flex;
  flex-direction: column;
  flex: 2;
}

.item-name {
  font-weight: 600;
  font-size: 1.1rem;
  color: #2d3748;
}

.item-price {
  font-size: 0.9rem;
  color: #718096;
  margin-top: 4px;
}

.item-controls {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
  justify-content: center;
}

.btn-icon {
  background: none;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  cursor: pointer;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  color: #4a5568;
  transition: all 0.2s;
}

.btn-icon:hover {
  background-color: #edf2f7;
}

.item-quantity {
  font-weight: bold;
  font-size: 1.1rem;
  min-width: 24px;
  text-align: center;
  color: #2d3748;
}

.item-total-line {
  font-weight: bold;
  color: #38a169;
  flex: 1;
  text-align: right;
  margin-right: 20px;
  font-size: 1.1rem;
}

.btn-remove {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  color: #e53e3e;
  padding: 8px;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.btn-remove:hover {
  background-color: #fff5f5;
}
</style>
