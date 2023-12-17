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
/* width */
::-webkit-scrollbar {
    width: 20px;
}

/* Track */
::-webkit-scrollbar-track {
    background: #18181b;
    border-radius: 0px;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #FED7AA;
    border-radius: 1rem;
    border: 3px solid #000000;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
</style>
