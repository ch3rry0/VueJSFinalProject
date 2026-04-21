<template>
  <div class="menu-page">
    <h1 class="page-title">Notre Menu</h1>
    
    <div v-if="plats.length === 0" class="empty-state">
      Aucun plat n'est disponible pour le moment.
    </div>
    
    <div class="plats-grid">
      <!-- Boucle sur la liste de plats -->
      <Gourmet 
        v-for="plat in plats" 
        :key="plat.id" 
        :plat="plat"
        @festoyons="onFestoyons"
      >
        <!-- Utilisation du slot 'victuaille' pour les badges promotionnels  -->
        <template #victuaille>
          <span v-if="plat.promo" class="badge-promo">PROMO -{{ plat.promo }}%</span>
          <span v-else-if="plat.isNew" class="badge-new">NOUVEAUTE</span>
        </template>
      </Gourmet>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Gourmet from '../components/Gourmet.vue'

// Données fictives pour la "Partie 2"
// (en attendant une possible intégration d'API ou store)
const plats = ref([
  {
    id: 1,
    nom: 'Salade César',
    prix: 14.50,
    description: 'Poulet rôti, parmesan frais, croûtons maison et sauce César onctueuse.',
    isNew: true
  },
  {
    id: 2,
    nom: 'Burger du Chef',
    prix: 18.00,
    description: 'Steak haché de boeuf, cheddar affiné, oignons caramélisés et frites.',
    isNew: false
  },
  {
    id: 3,
    nom: 'Pizza Truffe & Champignons',
    prix: 22.00,
    description: 'Crème de truffe, mozzarella, champignons frais et roquette.',
    isNew: false,
    promo: 15
  },
  {
    id: 4,
    nom: 'Tiramisu Maison',
    prix: 8.50,
    description: 'Le classique italien au café et mascarpone.',
    isNew: true
  }
])

// Gestion de l'évenement 'festoyons' levé par le composant Gourmet
const onFestoyons = (plat) => {
  // Dans la partie 3, on ajoutera le plat au panier via un store/inject
  console.log('Event "festoyons" déclenché pour le plat:', plat)
  // Simulation d'une alerte en attendant la partie 4 (toast)
  alert(`Plat "${plat.nom}" ajouté au panier (Event festoyons reçu).`)
}
</script>

<style scoped>
.menu-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px;
  font-family: Arial, sans-serif;
}

.page-title {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 40px;
  font-size: 2.5rem;
}

.plats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 30px;
}

.empty-state {
  text-align: center;
  font-size: 1.2rem;
  color: #7f8c8d;
  padding: 50px 0;
}

.badge-new {
  background-color: #ff4757;
  color: white;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: bold;
}

.badge-promo {
  background-color: #ffa502;
  color: white;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: bold;
}
</style>
