<template>
  <div>
    <!-- pour garder le code -->
    <!-- btn buy -->
    <a :href="product.stripeUrl" class="flex justify-center">
      <button
        class="smky-btn3 relative hover:text-[#FBD1A2] py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-10 after:z-[-10] after:bg-[#403233] after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-black w-1/2 self-center"
      >
        Buy {{ product.price }}€
      </button>
    </a>
  </div>
</template>
