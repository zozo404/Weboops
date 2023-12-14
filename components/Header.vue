<template>
  <div>
    <header class="bg-zinc-900 w-full z-20 sticky top-0">
      <!-- nav desktop -->
      <nav
        class="lg:max-h-28 max-h-20 w-full py-4 lg:py-6 grid grid-cols-2 grid-rows-1 lg:grid-cols-2 items-center justify-between lg:border-none bg-zinc-900"
        aria-label="Top"
      >
        <!-- logo -->
        <NuxtLink to="/" class="flex justify-center lg:col-span-1 h-full">
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
              class="text-base lg:text-xl 2xl:text-2xl font-medium text-gray-300 hover:text-indigo-50"
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
        :class="{ hidden: isActive }"
        class="lg:hidden w-screen absolute top-0 h-screen z-40 bg-zinc-900 grid grid-cols-2 grid-rows-3"
      >
        <div
          class="grid grid-cols-2 grid-rows-1 col-span-2 my-4 h-12 justify-items-center w-full"
        >
          <!-- logo -->
          <NuxtLink to="/" class="flex justify-center lg:col-span-1 h-full">
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
        >
          <NuxtLink
            key="Index"
            :to="lien.lien"
            class="text-2xl font-medium text-gray-300 hover:text-indigo-50"
            @click="toggle"
          >
            {{ lien.texte }}
          </NuxtLink>
        </div>
        <!--  -->
      </nav>
    </header>
    <svg
      class="relative z-19 -top-1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <path
        fill="#18181b"
        fill-opacity="1"
        d="M0,0L21.8,32C43.6,64,87,128,131,154.7C174.5,181,218,171,262,149.3C305.5,128,349,96,393,74.7C436.4,53,480,43,524,58.7C567.3,75,611,117,655,122.7C698.2,128,742,96,785,90.7C829.1,85,873,107,916,144C960,181,1004,235,1047,218.7C1090.9,203,1135,117,1178,90.7C1221.8,64,1265,96,1309,101.3C1352.7,107,1396,85,1418,74.7L1440,64L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"
      />
    </svg>
  </div>
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
