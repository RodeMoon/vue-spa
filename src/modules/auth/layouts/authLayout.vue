<template>
  <!-- component -->
  <div class="min-h-screen bg-pink-100 flex flex-col justify-center sm:py-12">
    <div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
      <div class="flex justify-center mb-5">
        <img src="@/assets/cat.gif" alt="Your Logo" class="h-40" />
      </div>
      <div class="bg-white shadow w-full rounded-lg divide-y divide-pink-200">
        <RouterView />
      </div>
      <div class="py-5">
        <div class="grid grid-cols-2 gap-1">
          <div class="text-center sm:text-left whitespace-nowrap"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
