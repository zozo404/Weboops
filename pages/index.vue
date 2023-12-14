<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="text-center px-0 iphoneSE:px-8">
    <ContentMain />
    <Faq />
    <!-- <ContactMe class="scroll-mt-60 lg:scroll-mt-40" /> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import Presentation from "~/components/Presentation.vue"

export default {
  name: "IndexPage",
  // eslint-disable-next-line vue/no-unused-components
  components: { Presentation },
  computed: {
    ...mapGetters(["getImageSite"]),
    ImageSite () {
      return this.getImageSite
    }
  }
}
</script>
