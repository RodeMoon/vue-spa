<template>
  <div class="px-5 py-7">
    <label class="font-semibold text-sm text-pink-600 pb-1 block">Name</label>
    <input type="text" class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full text-pink-400" />
    <label class="font-semibold text-sm text-pink-600 pb-1 block">E-mail</label>
    <input type="text" class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full text-pink-400" />
    <label class="font-semibold text-sm text-pink-600 pb-1 block">Password</label>
    <input type="text" class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full text-pink-400" />
    <button
      type="button"
      class="transition duration-200 bg-pink-300 hover:bg-pink-600 focus:bg-pink-700 focus:shadow-sm focus:ring-4 focus:ring-pink-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
    >
      <span class="inline-block mr-2">Register</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="w-4 h-4 inline-block"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </button>
  </div>
  <div class="py-5">
    <div class="grid grid-cols-2 gap-1">
      <div class="text-center sm:text-left whitespace-nowrap">
        <button
          @click="$router.push({ name: 'Login' })"
          class="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="pink"
            class="w-4 h-4 inline-block align-text-top"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
            />
          </svg>
          <span class="inline-block ml-1 text-pink-400">Login here!</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
