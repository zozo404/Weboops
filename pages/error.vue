<!-- pages/Error.vue -->
<template>
  <div class="flex items-center justify-center h-96 md:h-auto">
    <div class="p-8 rounded-lg text-center bg-gray-800 mx-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-16 w-16 text-red-500 mx-auto mb-4"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M10 0a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm5 13.4l-1.4 1.4L10 11.4l-3.6 3.6L5 13.4 8.6 10 5 6.6l1.4-1.4L10 8.6l3.6-3.6L15 6.6 11.4 10z"
        />
      </svg>
      <h1 class="text-3xl font-bold text-gray-200 mb-4">
        Refused payment
      </h1>
      <p class="text-lg text-gray-300 mb-8">
        Your payment has not been accepted. Please try again or use a other
        payment method.
      </p>
      <div class="flex flex-col items-center gap-3">
        <button
          class="bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600 transition duration-300"
          @click="goBack"
        >
          Back
        </button>
        <NuxtLink
          to="/"
          class="bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600 transition duration-300"
        >
          Back home
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Error",
  methods: {
    goBack () {
      this.$router.go(-1) // Naviguer vers la page précédente
    }
  }
}
</script>
