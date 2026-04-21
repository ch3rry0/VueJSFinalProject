import { ref, watch } from 'vue'

// État du panier partagé globalement afin d'être persistant
// à la navigation entre les pages (MenuPage -> CartPage).
const cart = ref([])
const cartTotal = ref(0)

export function useCart() {
  // Exigence Partie 3 : Calculer le total du panier via un watcher
  // On écoute tout changement sur la ref 'cart' en profondeur (deep: true)
  watch(cart, (newCart) => {
    cartTotal.value = newCart.reduce((total, item) => {
      return total + (item.prixUnitaire * item.quantite)
    }, 0)
  }, { deep: true })

  // Ajouter un plat au panier (en provenance du "Menu")
  const addToCart = (plat) => {
    const itemInCart = cart.value.find(item => item.id === plat.id)
    if (itemInCart) {
      itemInCart.quantite++
    } else {
      // Respect de la forme minimale d'une ligne panier exigée
      cart.value.push({
        id: plat.id,
        nom: plat.nom,
        prixUnitaire: plat.prix,
        quantite: 1
      })
    }
  }

  // Mettre à jour la quantité (plus ou moins)
  const updateQuantity = (id, delta) => {
    const item = cart.value.find(item => item.id === id)
    if (item) {
      item.quantite += delta
      if (item.quantite <= 0) {
        removeFromCart(id)
      }
    }
  }

  // Supprimer purement un plat du panier
  const removeFromCart = (id) => {
    cart.value = cart.value.filter(item => item.id !== id)
  }

  // Vider tout le panier
  const clearCart = () => {
    cart.value = []
  }

  return {
    cart,
    cartTotal,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart
  }
}
