# TP Vue.js 3 - Restaurant en ligne

## 1) Contexte
Ce projet consiste a creer une application Vue.js 3 pour un restaurant en ligne.

## 2) Choix techniques
Stack proposee:
- Vue 3 (Composition API)
- Vite (demarrage rapide du projet)
- Vue Router (navigation entre pages)
- Etat partage via provide/inject

Pourquoi ces choix:
- Vue Router permet de separer clairement les 4 ecrans: accueil, menu, panier, admin.
- provide/inject evite une cascade de props pour les commandes et reste aligne avec la consigne.
- Les watchers permettent de recalculer le total panier automatiquement.
- Une architecture en composants rend la repartition a 4 personnes plus simple.

## 3) Contraintes du sujet a respecter absolument
- Un composant doit s'appeler `Gourmet`.
- Un event doit s'appeler `festoyons`.
- Un id de slot doit s'appeler `victuaille`.
- Dans le mounted de App, afficher dans la console: `Les moules sont pretes`.

## 4) Architecture minimale
Structure :
- src/App.vue
- src/main.js
- src/router/index.js
- src/pages/HomePage.vue
- src/pages/MenuPage.vue
- src/pages/CartPage.vue
- src/pages/AdminOrdersPage.vue
- src/components/Gourmet.vue
- src/components/CartItem.vue
- src/components/ToastMessage.vue
- src/composables/useCart.js
- src/composables/useOrders.js

## 5) Repartition en 4 parties

## Partie 1 - Fondations + Navigation (Sloan)
Perimetre:
- Initialiser le projet Vue 3.
- Configurer Vue Router.
- Creer les pages de base: accueil, menu, panier, admin.
- Integrer les transitions de navigation.
- Ajouter le mounted dans App avec le log impose.

Livrables attendus:
- Routes fonctionnelles entre les 4 pages.
- Bouton sur l'accueil pour acceder au menu.
- Transition visible entre les pages.
- Console: `Les moules sont pretes` au chargement de App.


## Partie 2 - Menu + Composants + Slots + Events (Membre 2)
Perimetre:
- Creer la liste des plats (v-for).
- Creer le composant `Gourmet` pour afficher un plat.
- Utiliser props pour passer les donnees du plat.
- Ajouter un slot personnalise avec l'id `victuaille` (badge Nouveau, promo, etc.).
- Emettre l'event `festoyons` lors du clic "Ajouter au panier".

Livrables attendus:
- Menu visuel et reutilisable.
- Props correctement typpees et utilisees.
- Slot visible sur au moins certains plats.
- Event `festoyons` capte par le parent.


## Partie 3 - Panier + Watchers + Total dynamique (Membre 3)
Perimetre:
- Recevoir les plats ajoutes et les afficher dans le panier.
- Gerer quantite + suppression d'un plat.
- Calculer le total du panier via watcher.
- Afficher le detail du total en temps reel.
- Ajouter le bouton "Finaliser la commande".

Livrables attendus:
- Panier completement fonctionnel.
- Total correct apres chaque modification.
- Aucun recalcul manuel dans le template.


## Partie 4 - Commandes admin + provide/inject + feedback utilisateur (Membre 4)
Perimetre:
- Transformer le panier finalise en commande.
- Partager les commandes via provide/inject.
- Construire la page admin listant les commandes (v-for).
- Ajouter l'action "marquer comme prete".
- Afficher une alerte ou toast lors d'ajout au panier.

Livrables attendus:
- Liste admin avec nom client + details plats.
- Statut de commande modifiable.
- Partage de donnees sans prop drilling.
- Alerte/toast visible lors de l'ajout d'un plat.


## 6) Contrats entre parties (important pour travailler en parallele)
Contrats techniques proposes:
- Event du menu vers le panier: `festoyons(payloadPlat)`.
- Forme minimale d'un plat:
  - id
  - nom
  - prix
  - description
  - isNew (optionnel)
- Forme minimale d'une ligne panier:
  - id
  - nom
  - prixUnitaire
  - quantite
- Forme minimale d'une commande:
  - id
  - clientName
  - items
  - total
  - status (`en_preparation` | `prete`)

Regles de collaboration:
- 1 branche Git par membre.
- Pull request courte et relue par un autre membre.
- Merge frequents pour limiter les conflits.