<script setup lang="ts">
import { defineProps, computed } from 'vue'

const props = defineProps({
  metrics: {
    type: Object,
    default: () => ({
      bleuScore: 0.75,
      rougeScore: 0.82,
      exact_match: 0.9,
      answer_relevancy: 0.88,
      overall: 0.85
    })
  }
})

// Conversion des scores en pourcentages pour affichage
const percentages = computed(() => {
  return {
    bleu: Math.round(props.metrics.bleuScore * 100),
    rouge: Math.round(props.metrics.rougeScore * 100),
    exact: Math.round(props.metrics.exact_match * 100),
    relevancy: Math.round(props.metrics.answer_relevancy * 100),
    overall: Math.round(props.metrics.overall * 100)
  }
})
</script>

<template>
  <div class="metrics-display p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
    <h3 class="text-lg font-bold mb-4 text-gray-800 dark:text-gray-200">Métriques d'évaluation</h3>
    
    <div class="grid grid-cols-2 gap-3">
      <!-- BLEU Score -->
      <div class="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg">
        <div class="text-xs text-gray-600 dark:text-gray-300 mb-1">BLEU Score</div>
        <div class="flex items-center">
          <div class="text-xl font-bold text-blue-600 dark:text-blue-400 mr-2">{{ percentages.bleu }}%</div>
          <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div class="bg-blue-600 dark:bg-blue-500 h-2 rounded-full" :style="`width: ${percentages.bleu}%`"></div>
          </div>
        </div>
      </div>
      
      <!-- ROUGE Score -->
      <div class="bg-purple-50 dark:bg-purple-900/30 p-3 rounded-lg">
        <div class="text-xs text-gray-600 dark:text-gray-300 mb-1">ROUGE Score</div>
        <div class="flex items-center">
          <div class="text-xl font-bold text-purple-600 dark:text-purple-400 mr-2">{{ percentages.rouge }}%</div>
          <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div class="bg-purple-600 dark:bg-purple-500 h-2 rounded-full" :style="`width: ${percentages.rouge}%`"></div>
          </div>
        </div>
      </div>
      
      <!-- Exact Match -->
      <div class="bg-green-50 dark:bg-green-900/30 p-3 rounded-lg">
        <div class="text-xs text-gray-600 dark:text-gray-300 mb-1">Exactitude</div>
        <div class="flex items-center">
          <div class="text-xl font-bold text-green-600 dark:text-green-400 mr-2">{{ percentages.exact }}%</div>
          <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div class="bg-green-600 dark:bg-green-500 h-2 rounded-full" :style="`width: ${percentages.exact}%`"></div>
          </div>
        </div>
      </div>
      
      <!-- Relevancy -->
      <div class="bg-amber-50 dark:bg-amber-900/30 p-3 rounded-lg">
        <div class="text-xs text-gray-600 dark:text-gray-300 mb-1">Pertinence</div>
        <div class="flex items-center">
          <div class="text-xl font-bold text-amber-600 dark:text-amber-400 mr-2">{{ percentages.relevancy }}%</div>
          <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div class="bg-amber-600 dark:bg-amber-500 h-2 rounded-full" :style="`width: ${percentages.relevancy}%`"></div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Overall Quality -->
    <div class="mt-4 bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/30 dark:to-teal-900/30 p-3 rounded-lg">
      <div class="text-xs text-gray-600 dark:text-gray-300 mb-1">Qualité Globale</div>
      <div class="relative w-full h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div
          class="absolute top-0 left-0 h-full bg-gradient-to-r from-green-500 to-teal-500 rounded-full"
          :style="{ width: `${percentages.overall}%` }"
        ></div>
      </div>
      <div class="mt-1 text-right font-bold text-green-600 dark:text-green-400">{{ percentages.overall }}%</div>
    </div>
  </div>
</template>