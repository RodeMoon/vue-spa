<template>
  <div class="flex flex-col h-screen">
    <!-- Header -->
    <header class="flex items-center h-14 px-4 border-b border-gray-300 sm:h-16 md:px-6 lg:px-8">
      <div>
        <a class="flex items-center gap-2 font-semibold" href="#">
          <img
            alt="Dancing cat"
            class="logo"
            src="../../../assets/cat.gif"
            width="50"
            height="60"
          />
        </a>
      </div>
      <nav class="ml-auto flex items-center space-x-6">
        <div class="flex space-x-4">
          <RouterLink
            v-for="link in [
              { name: 'Home', label: 'Home' },
              { name: 'Features', label: 'Features' },
              { name: 'Pricing', label: 'Pricing' },
              { name: 'Contact', label: 'Contact' },
              { name: 'Pokemons', label: 'Pokémons', to: '/pokemons/1' }
            ]"
            :key="link.name"
            :to="link.to ? link.to : { name: link.name }"
            class="text-gray-700 hover:text-pink-500 font-medium transition-colors"
          >
            {{ link.label }}
          </RouterLink>
        </div>
        <div>
          <RouterLink
        :to="{ name: 'Auth' }"
        class="ml-4 px-4 py-2 rounded bg-pink-400 text-white font-semibold hover:bg-pink-400 transition-colors"
          >
        Login
          </RouterLink>
        </div>
      </nav>
    </header>
    <!-- Fin Header -->

    <!-- Main -->
    <main class="flex-1 flex items-center justify-center py-6">
      <div class="text-center">
        <h1 class="text-4xl font-bold tracking-tighter sm:text-5xl">
          Welcome to Vue SPA
          <span class="text-pink-300">with Tailwind CSS</span>
        </h1>
        <p class="mx-auto max-w-[600px] text-gray-500 md:text-xl">
          This is a simple single-page application built with Vue.js and styled using Tailwind CSS.
        </p>
        <p class="mt-4 text-gray-500">
          <RouterView />
        </p>
      </div>
    </main>
    <!-- Fin Main -->

    <!-- Footer -->
    <footer class="flex items-center h-14 px-4 border-t border-gray-300 sm:h-16 md:px-6 lg:px-8">
      <p class="flex-1 text-sm text-gray-500 text-center">
        © {{ new Date().getFullYear() }} 404ERROR Corporation. All rights reserved.
        <a
          class="text-blue-500 hover:underline"
          href="https://github.com/RodeMoon/vue-spa.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </a>
      </p>
    </footer>
    <!-- Fin Footer -->
  </div>
</template>
