<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h1 v-if="error.statusCode === 404">
      <div class="text-center container mx-auto my-14 flex items-center justify-center md:my-24 lg:my">
        <div class="text-center text-gray-900">
          <h1 class="text-6xl font-bold">
            404
          </h1>
          <p class="text-xl font-semibold">
            Page not found
          </p>
          <p>
            The page you are looking for might be under construction or does not exist.
          </p>
          <a href="/" class="text-indigo-500 hover:underline mt-4 block">
            Go back home
          </a>
        </div>
      </div>
    </h1>
    <h1 v-else>
      <div class="text-center container mx-auto my-14 flex items-center justify-center md:my-24 lg:my">
        <div class="text-center text-gray-900">
          <h1 class="text-6xl font-bold">
            An error occurred
          </h1>
          <p class="text-xl font-semibold">
            Page not found
          </p>
          <p class="mt-4">
            The page you are looking for might be under construction or does not exist.
          </p>
          <a href="/" class="text-indigo-500 hover:underline mt-4 block">
            Go back home
          </a>
        </div>
      </div>
    </h1>
  </div>
</template>

<script>
export default {
  layout: "error",
  // eslint-disable-next-line vue/require-prop-types
  props: ["error"] // you can set a custom layout for the error page
}
</script>
