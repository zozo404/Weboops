<template>
  <div v-if="product" class="text-center">
    <NuxtLink to="/products">
      <span class="pl-2 py-3">
        <i class="fa-solid fa-arrow-left" />
        Back
      </span>
    </NuxtLink>
    <div class="flex flex-col items-center mt-10 gap-4 lg:flex-row lg:px-12 2xl:px-24 3xl:px-28">
      <!-- img -->
      <NuxtImg
        provider="sanity"
        :src="product.imageId.asset._ref"
        :alt="product.imageId.alt"
        placeholder
        class="w-auto h-auto sm:w-1/2 rounded-md 2xl:max-w-xl 3xl:max-w-2xl"
      />
      <div class="px-2 md:w-2/3 lg:w-auto lg:flex lg:flex-col lg:items-center lg:grow">
        <!-- name of product -->
        <div class="mt-4 px-5 flex flex-col text-center md:w-auto lg:w-auto">
          <p class="first-letter:uppercase text-xl lg:text-2xl xl:text-3xl font-extrabold text-gray-800 font-sans">
            {{ product.title }}
          </p>
        <!-- description of product -->
        </div>
        <div class="mt-4 px-5 flex flex-col text-center md:w-auto lg:w-auto">
          <p class="first-letter:uppercase">
            {{ product.description }}
          </p>
        <!-- btn buy compo -->
        </div>
        <div class="mt-4 px-5 flex flex-col text-center md:w-auto lg:w-auto">
          <BtnBuy :product="product" />
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <Error404 />
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import BtnBuy from "@/components/BtnBuy.vue"

export default {
  name: "SlugPage",
  components: {
    BtnBuy
  },
  computed: {
    ...mapGetters(["getProduct"]),
    routeSlug () {
      return this.$route.params.slug
    },
    product () {
      return this.getProduct.find(el => el.slug.current === this.routeSlug)
    }
  },
  // Ajoutez cette méthode pour la redirection vers la page 404
  beforeMount () {
    if (!this.product) {
      this.$router.push("../layouts/error") // Assurez-vous que le chemin est correct
    }
  }
}
</script>
