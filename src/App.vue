<template>
  <div class="flex flex-col h-screen">
    <!-- Header -->
    <header class="flex items-center h-14 px-4 border-b border-gray-300 sm:h-16 md:px-6 lg:px-8">
      <div>
        <a class="flex items-center gap-2 font-semibold" href="#">
          <img alt="Dancing cat" class="logo" src="./assets/cat.gif" width="40" height="60" />
        </a>
      </div>
      <nav class="ml-auto space-x-4 flex items-center h-10 sm:space-x-6">
        <RouterLink to="/"> Home </RouterLink>
        <RouterLink to="/features"> Features </RouterLink>
        <RouterLink to="/pricing"> Pricing </RouterLink>
        <RouterLink to="/contact"> Contact </RouterLink>
      </nav>
    </header>
    <!-- Fin Header -->

    <!-- Main -->
    <main class="flex-1 flex items-center justify-center py-6">
      <div class="text-center">
        <h1 class="text-4xl font-bold tracking-tighter sm:text-5xl">
          Welcome to Vue SPA
          <span class="text-blue-500">with Tailwind CSS</span>
        </h1>
        <p class="mx-auto max-w-[600px] text-gray-500 md:text-xl">
          This is a simple single-page application built with Vue.js and styled using Tailwind CSS.
        </p>
      </div>
    </main>
    <!-- Fin Main -->

    <!-- Footer -->
    <footer class="flex items-center h-14 px-4 border-t border-gray-300 sm:h-16 md:px-6 lg:px-8">
      <p class="flex-1 text-sm text-gray-500 text-center">
        © 20xx 404ERROR Corporation. All rights reserved.
        <a
          class="text-blue-500 hover:underline"
          href="https://github.com/404ERROR/vue-spa"
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
