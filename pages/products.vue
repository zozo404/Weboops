<template>
  <div class="text-center container mx-auto my-4">
    <h2 class="text-4xl font-extrabold text-gray-800 mb-12 font-sans">
      Discover our products
    </h2>
    <Products :products="Products" />
  </div>
</template>
<script>
import { mapGetters } from "vuex"

export default {
  name: "ProductsPage",
  computed: {
    ...mapGetters(["getProduct"]),
    Products () {
      return this.getProduct
    }
  }
}
</script>
