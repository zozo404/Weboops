<template>
  <div>
    <div class="flex flex-col items-center mt-10 gap-4">
      <NuxtLink to="/products">
        <h1 class="pl-2 py-3">
          <i class="fa-solid fa-arrow-left" />
          Retour
        </h1>
      </NuxtLink>
      <NuxtImg
        provider="sanity"
        :src="product.imageId.asset._ref"
        :alt="product.imageId.alt"
        placeholder
        class="w-auto h-auto sm:w-1/2 rounded-md"
      />
      <div class="mt-4 px-5 flex flex-col text-center w-4/5 lg:w-1/2">
        <p class="my-8">
          {{ product.title }}
        </p>
        <br>
        <BtnBuy :product="product" />
      </div>
    </div>
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
  }
}
</script>
