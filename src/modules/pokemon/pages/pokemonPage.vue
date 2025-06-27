<template>
  <div>
    <section class="flex flex-col items-center justify-center h-screen bg-pink-100">
      <h1 class="text-4xl font-bold mb-4">Welcome to the Pokémon research</h1>
      <small class="text-xl font-semibold capitalize mb-2">Pokémon ID: {{ id }}</small>
      <div v-if="pokemonName">
        <p class="text-xl font-semibold capitalize mb-2">Name: {{ pokemonName }}</p>
      </div>
      <img
        :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`"
        alt="Pokémon"
        class="mb-6"
        width="256"
        height="256"
      />
      <RouterLink
        class="inline-block px-4 py-2 bg-pink-400 text-white rounded hover:bg-pink-400 transition-colors"
        :to="{ name: 'Pokemons', params: { id: id + 1 } }"
      >
        Next
      </RouterLink>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, watch} from 'vue';

interface Props {
  id: number;
}

const props = defineProps<Props>();
const pokemonName = ref('');

const fetchPokemonName = async () => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${props.id}`);
    const data = await res.json();
    pokemonName.value = data.name;
  } catch (e) {
    pokemonName.value = 'Unknown';
  }
};

watch(() => props.id, fetchPokemonName, { immediate: true });
</script>

<style scoped></style>
