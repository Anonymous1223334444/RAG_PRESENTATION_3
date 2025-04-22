<script setup lang="ts">
// Ce composant permet de créer un diagramme de flux simple pour expliquer le système RAG
</script>

<template>
  <div class="flow-diagram">
    <div class="grid grid-cols-3 gap-4">
      <!-- Première colonne: Question et LLM -->
      <div class="flow-column">
        <div class="flow-node user-node">
          <div class="node-icon">
            <carbon:user />
          </div>
          <div class="node-text">Question utilisateur</div>
        </div>
        <div class="flow-arrow">↓</div>
        <div class="flow-node llm-node">
          <div class="node-icon">
            <carbon:machine-learning />
          </div>
          <div class="node-text">Gemini Pro</div>
        </div>
        <div class="flow-arrow">↓</div>
        <div class="flow-node response-node">
          <div class="node-icon">
            <carbon:chat />
          </div>
          <div class="node-text">Réponse générée</div>
        </div>
      </div>
      
      <!-- Deuxième colonne: Recherche de référence -->
      <div class="flow-column">
        <div class="flow-node search-node mt-16">
          <div class="node-icon">
            <carbon:search />
          </div>
          <div class="node-text">Recherche de référence</div>
        </div>
        <div class="flow-arrow">↓</div>
        <div class="flow-node db-node">
          <div class="node-icon">
            <carbon:database />
          </div>
          <div class="node-text">Base Q&A</div>
        </div>
        <div class="flow-arrow">↓</div>
        <div class="flow-node ref-node">
          <div class="node-icon">
            <carbon:document </div>
          <div class="node-text">Réponse de référence</div>
        </div>
      </div>
      
      <!-- Troisième colonne: Évaluation -->
      <div class="flow-column">
        <div class="flow-node compare-node mt-32">
          <div class="node-icon">
            <carbon:compare />
          </div>
          <div class="node-text">Comparaison</div>
        </div>
        <div class="flow-arrow">↓</div>
        <div class="flow-node metrics-node">
          <div class="node-icon">
            <carbon:chart-line </div>
          <div class="node-text">Calcul des métriques</div>
        </div>
        <div class="flow-arrow">↓</div>
        <div class="flow-node ui-node">
          <div class="node-icon">
            <carbon:application-web </div>
          <div class="node-text">Interface utilisateur</div>
        </div>
      </div>
    </div>
    
    <!-- Flèches horizontales pour connecter les colonnes -->
    <div class="h-arrows">
      <div class="h-arrow h-arrow-1">→</div>
      <div class="h-arrow h-arrow-2">→</div>
      <div class="h-arrow h-arrow-3">→</div>
      <div class="h-arrow h-arrow-4">→</div>
    </div>
  </div>
</template>

<style scoped>
.flow-diagram {
  position: relative;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
}

.flow-column {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.flow-node {
  background: white;
  color: #333;
  padding: 0.75rem;
  border-radius: 0.5rem;
  width: 100%;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80px;
  justify-content: center;
}

.dark .flow-node {
  background: rgba(30, 41, 59, 0.8);
  color: #e2e8f0;
}

.node-icon {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.user-node .node-icon, 
.user-node {
  color: #3b82f6;
}

.llm-node .node-icon,
.llm-node {
  color: #8b5cf6;
}

.search-node .node-icon,
.search-node {
  color: #10b981;
}

.db-node .node-icon,
.db-node {
  color: #f59e0b;
}

.compare-node .node-icon,
.compare-node {
  color: #ef4444;
}

.flow-arrow {
  font-size: 1.5rem;
  margin: 0.5rem 0;
  color: rgba(100, 116, 139, 0.7);
}

.dark .flow-arrow {
  color: rgba(148, 163, 184, 0.7);
}

.h-arrows {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.h-arrow {
  position: absolute;
  font-size: 1.5rem;
  color: rgba(100, 116, 139, 0.5);
}

.h-arrow-1 {
  top: 20%;
  left: 32%;
}

.h-arrow-2 {
  top: 40%;
  left: 32%;
}

.h-arrow-3 {
  top: 60%;
  left: 66%;
}

.h-arrow-4 {
  top: 80%;
  left: 66%;
}

.mt-16 {
  margin-top: 4rem;
}

.mt-32 {
  margin-top: 8rem;
}
</style>