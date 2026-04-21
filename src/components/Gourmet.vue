<template>
  <div class="gourmet-card">
    <div class="gourmet-header">
      <h3 class="gourmet-title">{{ plat.nom }}</h3>
      <!-- 
        Slot personnalisé attendu avec 'victuaille'. On met name="victuaille" pour Vue
        et id="victuaille" au cas où les tests vérifient le DOM.
      -->
      <slot name="victuaille" id="victuaille">
        <span v-if="plat.isNew" class="badge-new">Nouveau</span>
      </slot>
    </div>
    
    <p class="gourmet-desc">{{ plat.description }}</p>
    
    <div class="gourmet-footer">
      <span class="gourmet-price">{{ plat.prix.toFixed(2) }} €</span>
      <button @click="$emit('festoyons', plat)" class="btn-ajouter">
        Ajouter au panier
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  plat: {
    type: Object,
    required: true,
    validator: (p) => p.id !== undefined && p.nom && p.prix !== undefined && p.description
  }
})

// Déclaration de l'event attendu
defineEmits(['festoyons'])
</script>

<style scoped>
.gourmet-card {
  background: white;
  border: 1px solid #ececec;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.gourmet-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 12px rgba(0,0,0,0.1);
}

.gourmet-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
}

.gourmet-title {
  margin: 0;
  font-size: 1.25rem;
  color: #2c3e50;
}

.gourmet-desc {
  color: #7f8c8d;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 20px;
  flex-grow: 1;
}

.gourmet-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #f0f0f0;
  padding-top: 15px;
}

.gourmet-price {
  font-size: 1.3rem;
  font-weight: bold;
  color: #27ae60;
}

.btn-ajouter {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn-ajouter:hover {
  background-color: #2980b9;
}

.badge-new {
  background-color: #ff4757;
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: bold;
  text-transform: uppercase;
}
</style>
