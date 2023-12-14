<template>
  <div>
    <h1 class="text-4xl font-extrabold text-gray-800 mb-6">
      Welcome to Weboops
    </h1>
    <p class="container mx-auto pb-4 text-lg font-bold text-gray-800">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro soluta
      similique id dolores neque assumenda quidem mollitia voluptatem est.
      Voluptatum maiores, assumenda rerum fugiat sequi recusandae animi et
      consequuntur quidem !
    </p>
    <h1 class="text-2xl font-extrabold text-gray-800 my-2">
      See at our new products
    </h1>
    <Products :products="Products" />
  </div>
</template>
<script>
import { mapGetters } from "vuex"

export default {
  name: "ContentMain",
  computed: {
    ...mapGetters(["getProduct"]),
    Products () {
      // Filters products to return only those that are new with product.new === true
      const newProducts = this.getProduct.filter(
        product => product.new === true
      )

      // Limit of products to display (3)
      return newProducts.slice(0, 3)
    }
  }
}
</script>
