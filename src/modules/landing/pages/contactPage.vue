<template>
  <!-- component -->
  <section class="text-gray-600 body-font relative">
    <div class="fixed top-20 right-10 left-10 inset-0 bg-gray-300">
      <iframe
        width="100%"
        height="100%"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        title="map"
        scrolling="no"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3747020.051295359!2d87.69679985259057!3d23.489331011027595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1ses!2smx!4v1750915010860!5m2!1ses!2smx"
        style=""
      ></iframe>
    </div>
    <div class="container px-5 py-24 mx-auto flex">
      <div
        class="fixed top-50 right-10 left-10 lg:w-1/6 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 z-10 shadow-md"
      >
        <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
        <p class="leading-relaxed mb-5 text-gray-600">
          I'm not gonna read that but still, you can write something here.
        </p>
        <div class="relative mb-4">
          <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div class="relative mb-4">
          <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
          <textarea
            id="message"
            name="message"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          ></textarea>
        </div>
        <button
          class="text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Send
        </button>
        <p class="text-xs text-gray-500 mt-3">
          Learn some Cantonese, it will help you in the future.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
