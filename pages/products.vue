<template>
  <div>
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
