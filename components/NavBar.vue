<script setup lang="ts">
import { computed } from 'vue'

// Définition des sections adaptées à notre présentation
// Nombre exact de slides: 10
const sections = [
  { id: 1, title: '1.Introduction', slide: 2, icon: 'carbon:information' },
  { id: 2, title: '2.Méthodologie', slide: 4, icon: 'carbon:flow-data' },
  { id: 3, title: '3.Résultats', slide: 6, icon: 'carbon:chart-bar' },
  { id: 4, title: '4.Analyses', slide: 7, icon: 'carbon:chart-evaluation' },
  { id: 5, title: '5.Vectorisation', slide: 8, icon: 'carbon:data-vis' },
  { id: 6, title: '6.Conclusion', slide: 11, icon: 'carbon:summary' },
]

// Récupération du numéro de slide actuel depuis l'API Slidev
const currentPage = computed(() => $slidev.nav.currentPage)
const totalPages = computed(() => $slidev.nav.total)

// Calcul du pourcentage de progression
const progressPercentage = computed(() => 
  Math.round((currentPage.value / totalPages.value) * 100)
)

// Détermination de la section active en fonction du numéro de slide
const activeSection = computed(() => {
  // Trouver la dernière section dont le numéro de slide est inférieur ou égal au slide actuel
  for (let i = sections.length - 1; i >= 0; i--) {
    if (currentPage.value >= sections[i].slide) {
      return sections[i].id
    }
  }
  return 1 // Par défaut, première section
})

// Déterminer si on est sur la page d'accueil
const isHomePage = computed(() => currentPage.value === 1)

// Fonction pour naviguer vers une section
const goToSection = (slideNumber) => {
  $slidev.nav.go(slideNumber)
}
</script>

<template>
  <div class="nav-wrapper">
    <div 
      class="nav-container fixed top-0 left-0 right-0 z-50"
      :class="{ 'opacity-0': isHomePage }"
    >
      <!-- Barre de progression -->
      <div class="progress-bar h-0.5 bg-gradient-to-r from-blue-600 via-purple-500 to-orange-500" 
           :style="{ width: `${progressPercentage}%` }"></div>
      
      <!-- Contenu principal avec bordures arrondies -->
      <div class="nav-content bg-gradient-to-r from-gray-900 to-gray-800 shadow-lg py-1 px-4 flex items-center justify-between mx-4 mt-2 rounded-xl">
        <!-- Logo plus compact -->
        <div class="flex items-center space-x-2">
          <div class="logo bg-orange-500 text-white p-1 rounded-md">
            <carbon:chart-evaluation class="text-lg" />
          </div>
          <div class="hidden sm:block text-white font-bold text-sm">Évaluation RAG</div>
        </div>
        
        <!-- Sections adaptées à notre présentation -->
        <div class="nav-sections flex items-center space-x-1 overflow-x-auto hide-scrollbar">
          <button 
            v-for="section in sections" 
            :key="section.id"
            @click="goToSection(section.slide)"
            class="nav-button relative px-2 py-0.5 text-xxs rounded-lg transition-all duration-300 flex items-center space-x-1"
            :class="activeSection === section.id ? 'bg-orange-500 text-white font-bold' : 'text-gray-300 hover:bg-gray-700'"
          >
            <component :is="section.icon" class="text-xs" />
            <span class="hidden sm:inline-block">{{ section.title }}</span>
            <div v-if="activeSection === section.id" class="absolute -bottom-1.5 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-orange-500 rounded-full"></div>
          </button>
        </div>
        
        <!-- Indicateur de slide -->
        <div class="flex items-center space-x-2 text-gray-300 text-xxs">
          <span class="bg-gray-700 px-1.5 py-0.5 rounded-md">{{ currentPage }}/{{ totalPages }}</span>
        </div>
      </div>
    </div>
    
    <!-- Espace réservé réduit -->
    <div class="nav-spacer" :class="{ 'hidden': isHomePage }" style="height: 40px"></div>
  </div>
</template>

<style scoped>
.nav-container {
  pointer-events: auto;
  transition: opacity 0.3s ease;
}

.nav-spacer {
  height: 40px; /* Hauteur de la barre de navigation */
  width: 100%;
}

.nav-button {
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
}

.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

.nav-content {
  max-width: 95%;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.text-xxs {
  font-size: 0.7rem;
  line-height: 1rem;
}

.logo {
  transform: scale(0.9);
}

/* Masquer la barre de navigation sur la page d'accueil */
.slidev-page-1 .nav-container {
  opacity: 0;
  pointer-events: none;
}
</style>