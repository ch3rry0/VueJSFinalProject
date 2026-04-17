<template>
  <div class="app-shell">
    <header class="topbar">
      <h1>La Table Vue</h1>
      <nav class="nav-links" aria-label="Navigation principale">
        <RouterLink to="/">Accueil</RouterLink>
        <RouterLink to="/menu">Menu</RouterLink>
        <RouterLink to="/panier">Panier</RouterLink>
        <RouterLink to="/admin-commandes">Commandes</RouterLink>
      </nav>
    </header>

    <main class="page-wrapper">
      <RouterView v-slot="{ Component }">
        <Transition name="page-slide" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    console.log('Les moules sont pretes')
  }
}
</script>
