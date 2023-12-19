<template>
  <header class="bg-zinc-900 w-full z-20 sticky top-0 text-orange-200">
    <!-- nav desktop -->
    <nav
      class="lg:max-h-28 max-h-20 w-full py-4 lg:py-6 grid grid-cols-2 grid-rows-1 lg:grid-cols-2 items-center justify-between lg:border-none bg-zinc-900"
      aria-label="Top"
    >
      <!-- logo -->
      <NuxtLink v-if="Logo" to="/" class="flex justify-center lg:col-span-1 h-full">
        <span class="sr-only">Logo</span>
        <!-- mettre img -->
        <NuxtImg
          :src="Logo.imageId.asset._ref"
          provider="sanity"
          alt="logo"
          class="h-full"
          sizes="xs:100vw"
        />
      </NuxtLink>
      <!--Logo else for 404 page-->
      <NuxtLink v-else to="/" class="flex justify-center lg:col-span-1 h-full">
        <span class="sr-only">Logo</span>
        <!-- mettre img -->
        <NuxtImg
          src="https://cdn.sanity.io/images/uul9kym0/production/3c2b7a1b377011b67ab070096882b25100a30760-7974x6930.png?w=2000&fit=max&auto=format"
          provider="sanity"
          alt="logo"
          class="h-full"
          sizes="xs:100vw"
        />
      </NuxtLink>
      <div class="text-right pr-8 lg:hidden flex justify-end" @click="toggle">
        <i class="fa-solid fa-bars cursor-pointer" style="color: #ffffff" />
      </div>
      <!-- navigation -->
      <div
        class="hidden col-span-2 lg:col-span-1 lg:col-start-2 lg:row-start-1 lg:flex flex-row gap-2 xl:gap-4 items-center"
      >
        <div
          v-for="lien in liens"
          :key="lien.texte"
          class="mb-4 py-4 flex space-x-6"
        >
          <NuxtLink
            key="Index"
            :to="lien.lien"
            class="text-base lg:text-xl 2xl:text-2xl font-medium hover:text-orange-400 transition"
            @click="toggle"
          >
            {{ lien.texte }}
          </NuxtLink>
        </div>
      </div>
      <!-- fin nav fermée -->
    </nav>
    <!-- nav responsive ouverte -->
    <nav
      :class="{ hidden: isActive}"
      class="lg:hidden w-screen absolute top-0 h-screen z-40 bg-zinc-900 grid grid-cols-2 grid-rows-3"
    >
      <div
        class="grid grid-cols-2 grid-rows-1 col-span-2 my-4 h-12 justify-items-center w-full"
      >
        <!-- logo -->
        <NuxtLink v-if="Logo" to="/" class="flex justify-center lg:col-span-1 h-full">
          <span class="sr-only">Logo</span>
          <!-- mettre img -->
          <NuxtImg
            :src="Logo.imageId.asset._ref"
            provider="sanity"
            alt="logo"
            class="h-full"
            sizes="xs:100vw"
          />
        </NuxtLink>
        <!-- else for 404 page -->
        <NuxtLink v-else to="/" class="flex justify-center lg:col-span-1 h-full">
          <span class="sr-only">Logo</span>
          <!-- mettre img -->
          <NuxtImg
            src="https://cdn.sanity.io/images/uul9kym0/production/3c2b7a1b377011b67ab070096882b25100a30760-7974x6930.png?w=2000&fit=max&auto=format"
            provider="sanity"
            alt="logo"
            class="h-full"
            sizes="xs:100vw"
          />
        </NuxtLink>
        <!-- hamburger icon -->
        <div
          class="w-full h-full pr-8 lg:hidden flex justify-end"
          @click="toggle"
        >
          <i
            class="fa-solid fa-bars cursor-pointer relative top-4"
            style="color: #ffffff"
          />
        </div>
      </div>
      <!-- liens -->
      <div
        v-for="lien in liens"
        :key="lien.texte"
        class="mb-4 py-4 flex flex-col items-center"
        @click="toggle"
      >
        <NuxtLink
          key="Index"
          :to="lien.lien"
          class="text-2xl font-medium hover:text-orange-400 transition"
        >
          {{ lien.texte }}
        </NuxtLink>
      </div>
      <!--  -->
    </nav>
  </header>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  name: "HeaderApp",
  data () {
    return {
      isActive: true,
      liens: [
        {
          texte: "Home",
          lien: "/"
        },
        {
          texte: "Products",
          lien: "/products"
        },
        {
          texte: "Who are we?",
          lien: "/whoarewe"
        },
        {
          texte: "Contact",
          lien: "/contact"
        }
      ]
    }
  },
  computed: {
    ...mapGetters(["getImageSite"]),
    Logo () {
      return this.getImageSite.find(el => el.name === "Logo")
    }
  },
  methods: {
    toggle () {
      this.isActive = !this.isActive
    }
  }
}
</script>
