<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <Presentation :teams="Team" />
  </div>
</template>
<script>
import { mapGetters } from "vuex"
import Presentation from "~/components/Presentation.vue"

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Whoarewe",
  // eslint-disable-next-line vue/no-unused-components
  components: { Presentation },
  computed: {
    ...mapGetters(["getTeam"]),
    Team () {
      return this.getTeam
    }
  }
}
</script>
