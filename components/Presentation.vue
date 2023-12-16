<template>
  <div>
    <!-- Main content -->
    <main class="container mx-auto my-4 px-4 text-gray-800 2xl:px-24 3xl:px-4">
      <section class="text-center">
        <h1 class="text-4xl font-extrabold text-gray-800 mb-6 font-sans">
          Who are we ?
        </h1>
        <p class="mb-8 text-base sm:text-lg font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </section>

      <!-- Team section -->
      <section>
        <h2 class="text-2xl font-bold mb-4">
          Our team
        </h2>
        <!-- List of team members -->
        <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Team member item -->
          <li
            v-for="team in sortedTeams"
            :key="team.id"
            class="mb-4"
          >
            <div class="p-4 rounded shadow">
              <NuxtImg
                :src="team.imageId.asset._ref"
                :alt="team.imageId.alt"
                class="w-full h-32 object-cover mb-4 rounded"
                provider="sanity"
                loading="lazy"
              />
              <h3 class="text-xl font-bold">
                {{ team.name }}
              </h3>
              <h2 class="text-lg font-bold">
                {{ team.role }}
              </h2>
              <p class="text-black">
                {{ team.position }}
              </p>
              <!-- à désactiver si inutile -->
              <p class="text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quos, quas ea, dolorem magnam, dicta repellat illum similique facilis dolore nemo fugit! Quod a ullam voluptate, sapiente dolorem deleniti magni!
              </p>
            </div>
          </li>
        </ul>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Presentation",
  props: {
    teams: {
      default: null,
      type: Array
    }
  },
  computed: {
    sortedTeams () {
      // Triez les équipes par ordre croissant d'ID
      return this.teams.slice().sort((a, b) => a.id - b.id)
    }
  }
}
</script>
