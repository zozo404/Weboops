<template>
  <div class="text-center container mx-auto my-14 flex items-center justify-center md:my-24 lg:my">
    <div class="text-center text-gray-900">
      <h1 class="text-6xl font-bold">
        404
      </h1>
      <p class="text-xl font-semibold">
        Page not found
      </p>
      <p class="mt-4">
        The page you are looking for might be under construction or does not exist.
      </p>
      <NuxtLink to="/" class="text-indigo-500 hover:underline mt-4 block">
        Go back home
      </NuxtLink>
    </div>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Error404"

}
</script>
