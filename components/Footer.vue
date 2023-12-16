<template>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      class="relative top-1 md:z-0 md:top-10"
    >
      <path
        fill="#403233"
        fill-opacity="1"
        d="M0,96L60,122.7C120,149,240,203,360,192C480,181,600,107,720,85.3C840,64,960,96,1080,112C1200,128,1320,128,1380,128L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
      />
    </svg>
    <footer class="bg-amber-1000 text-gray-100 relative pb-4 pt-6 lg:pt-0">
      <div class="px-2">
        <p class="pb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum magni ex
          facilis dolorem, commodi ducimus quibusdam, deleniti officiis corporis
          molestiae voluptatum quidem nam nobis accusamus unde est ipsam labore
          harum!
        </p>
      </div>
      <div>
        <div class="pt-4">
          <!-- summary -->
          <ul class="flex justify-around">
            <li v-for="section in sections" :key="section.id" class="hover:text-orange-200 transition">
              <NuxtLink :to="section.link">
                {{ section.name }}
              </NuxtLink>
            </li>
          </ul>
          <div class="flex flex-col gap-2">
            <hr class="border-t-2 border-orange-200 w-1/4 self-start">
            <hr class="border-t-2 border-orange-200 w-2/4 self-center">
            <hr class="border-t-2 border-orange-200 w-1/4 self-end">
          </div>
        </div>
      </div>
      <!-- copyrights -->
      <div class="text-center pt-4">
        <p>
          &copy;  2023-2024 Weboops.fr <br>
          All rights reserved
        </p>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Footer",
  data () {
    return {
      sections: [
        { id: 1, name: "Home", link: "/" },
        { id: 3, name: "Products", link: "products" },
        { id: 2, name: "Who are we", link: "whoarewe" },
        { id: 4, name: "Contact", link: "contact" }
      ]
    }
  }
}
</script>
