<template>
  <div class="flex flex-col gap-4 items-center text-base font-semibold pt-4 md:relative md:top-5">
    <h2>
      FAQ's :
    </h2>
    <details v-for="detail in details" :key="detail.id" @toggle="onToggle">
      <summary
        class="cursor-pointer outline-none flex items-center flex-row-reverse place-content-center"
      >
        {{ detail.question }}
      </summary>
      <p class="pt-2">
        {{ detail.answer }}
      </p>
    </details>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Faq",
  data () {
    return {
      details: [
        {
          id: 1,
          question:
            "What products do you sell?",
          answer: "I sell cat photos"
        },
        {
          id: 3,
          question:
            "How can we buy them?",
          answer: "You can pay by card on stripe and soon with paypal!"
        },
        {
          id: 2,
          question:
            "How do we receive the products?",
          answer: "Products are sent by email"
        }
      ]
    }
  },
  methods: {
    onToggle (event) {
      // Ajouter ou supprimer la classe 'open' lorsqu'un détail est ouvert ou fermé
      const summary = event.currentTarget
      summary.classList.toggle("open", event.target.open)
    }
  }
}
</script>
<style>
summary {
  cursor: pointer;
  outline: none;
  position: relative;
  list-style: none; /* Masque le marqueur par défaut */
}

summary::before {
  content: "➔"; /* Vous pouvez utiliser n'importe quel contenu que vous préférez */
  margin-left: 1rem;
  float: inline-end;
  transition: transform 0.3s; /* Ajout d'une transition pour une animation en douceur */
}

/* Lorsque la classe 'open' est ajoutée, tournez la flèche vers le bas */
.open summary::before {
  transform: rotate(90deg);
}

/* Style pour le texte du summary */
summary::marker {
  display: none; /* Masque le marqueur par défaut dans certains navigateurs */
}

/* Style pour le texte du détail */
details p {
  margin-top: 0;
}
</style>
