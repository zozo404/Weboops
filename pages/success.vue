<!-- pages/Success.vue -->
<template>
  <div class="flex items-center justify-center h-96 md:h-auto">
    <div class="p-8 rounded-lg text-center bg-gray-800">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-16 w-16 text-green-500 mx-auto mb-4"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M10 0a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm5.293 6.707a1 1 0 0 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L9 12.586l6.293-6.293a1 1 0 0 1 1.414 0z"
        />
      </svg>
      <h1 class="text-3xl font-bold text-gray-200 mb-4">
        Payment Successful !
      </h1>
      <p class="text-lg text-gray-300 mb-8">
        Thank you for your purchase.
      </p>
      <NuxtLink to="/" class="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 transition duration-300">
        Back home
      </NuxtLink>
    </div>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Success"
}
</script>
