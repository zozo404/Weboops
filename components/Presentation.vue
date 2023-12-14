<template>
  <div>
    <!-- Main content -->
    <main class="container mx-auto my-4 lg:my-0 px-4 text-gray-800">
      <section>
        <h1 class="text-4xl font-bold mb-4">
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
            v-for="teamMember in teamMembers"
            :key="teamMember.id"
            class="mb-4"
          >
            <div class="p-4 rounded shadow">
              <img
                :src="teamMember.avatar"
                alt="Team Member"
                class="w-full h-32 object-cover mb-4 rounded"
              >
              <h3 class="text-xl font-bold">
                {{ teamMember.name }}
              </h3>
              <p class="text-black">
                {{ teamMember.position }}
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
  data () {
    return {
      teamMembers: [
        {
          id: 1,
          name: "John Doe",
          position: "CEO",
          avatar: "http://localhost:1337/uploads/cat_5b34f7864d.png"
        },
        {
          id: 2,
          name: "John Doe",
          position: "CEO",
          avatar: "http://localhost:1337/uploads/cat_5b34f7864d.png"
        },
        {
          id: 3,
          name: "John Doe",
          position: "CEO",
          avatar: "http://localhost:1337/uploads/cat_5b34f7864d.png"
        },
        {
          id: 4,
          name: "John Doe",
          position: "CEO",
          avatar: "http://localhost:1337/uploads/cat_5b34f7864d.png"
        },
        {
          id: 15,
          name: "John Doe",
          position: "CEO",
          avatar: "http://localhost:1337/uploads/cat_5b34f7864d.png"
        },
        {
          id: 6,
          name: "John Doe",
          position: "CEO",
          avatar: "http://localhost:1337/uploads/cat_5b34f7864d.png"
        }
      ]
    }
  }
}
</script>
