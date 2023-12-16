<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="selection:bg-cyan-500 selection:text-black bg-orange-200">
    <Header />
    <SvgHeader />
    <nuxt />
    <Footer />
  </div>
</template>
<script>
export default {
  name: "DefaultLayout"
}
</script>
<style>
html{
  font-family: 'Sarabun';
  font-weight: bold;
}
</style>
