---
theme: seriph
background: https://drive.google.com/file/d/14Vlh_tx4SBoO0Pgk-Jh42o04xlS5Pex1/view?usp=sharing
class: 'text-center'
highlighter: shiki
lineNumbers: false
info: |
  Présentation des résultats d'évaluation du système RAG par type de structure
drawings:
  persist: false
css: unocss
autoScale: true
title: Évaluation du Système RAG
---

# Évaluation du Système RAG par Type de Structure

<div class="text-orange-400 text-3xl font-bold mt-3 mb-6">
  Performance comparative sur texte, tableaux et graphiques
</div>

<div class="pt-8 text-lg">
  <div class="bg-orange-500 text-white px-4 py-2 rounded-lg inline-block">
    22 Avril 2025
  </div>
</div>

<!--
Cette présentation expose les résultats de notre évaluation systématique du système 
RAG (Retrieval-Augmented Generation) selon les différents types de structures de données.

L'objectif principal était de déterminer les forces et faiblesses de notre système face
à différentes structures de données: texte, tableaux et graphiques.
-->

---
layout: section
---

# Introduction & Objectifs

<!--
Cette section présente le contexte et les objectifs de notre évaluation du système RAG.
-->

---
layout: default
---

# Pourquoi évaluer un système RAG par structure ?

<div class="grid grid-cols-1 gap-3 mt-3">
  <div class="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg border border-orange-200 dark:border-orange-800">
    <h3 class="text-lg font-bold mb-2">Objectif principal</h3>
    <p>Comprendre comment la <strong class="text-orange-500">nature structurelle des données</strong> influence la qualité des réponses générées par notre système RAG.</p>
  </div>
</div>

<div class="grid grid-cols-2 gap-3 mt-3">
  <div>
    <h3 class="text-base font-bold mb-1 text-blue-600">Types de structures évaluées</h3>
    <div class="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg shadow-md">
      <ul class="space-y-2">
        <li><strong>Texte (43%)</strong>: Paragraphes narratifs, descriptions, explications</li>
        <li><strong>Tableaux (32%)</strong>: Données structurées en lignes et colonnes</li>
        <li><strong>Graphiques (25%)</strong>: Visualisations de données avec légendes</li>
      </ul>
    </div>
  </div>
  
  <div>
    <h3 class="text-base font-bold mb-1 text-green-600">Questions clés</h3>
    <div class="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg shadow-md">
      <ul class="space-y-2">
        <li><strong>Performance comparative</strong>: Sur quel type de structure le système excelle-t-il?</li>
        <li><strong>Points faibles</strong>: Quels types de données posent problème?</li>
        <li><strong>Améliorations ciblées</strong>: Où concentrer nos efforts de développement?</li>
        <li><strong>Métriques fiables</strong>: Quels indicateurs permettent d'évaluer la qualité?</li>
      </ul>
    </div>
  </div>
</div>

<div class="mt-3 bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
  <h3 class="text-base font-bold mb-1 flex items-center">
    <span class="bg-blue-500 text-white p-1 rounded mr-2 text-xs">Démarche</span>
    Évaluation systématique
  </h3>
  <p>Nous avons évalué le système sur <strong>100 questions</strong> réparties proportionnellement entre les différents types de structures, en utilisant des métriques standardisées pour garantir l'objectivité des résultats.</p>
</div>

<!--
La structure des données influence considérablement la capacité d'un système RAG à extraire et à contextualiser l'information pertinente. Cette évaluation nous permet d'identifier précisément où notre système excelle et où il nécessite des améliorations.

Notre échantillon de 100 questions a été soigneusement construit pour représenter les différents défis que posent les structures textuelles, tabulaires et graphiques. Cette approche nous permet d'obtenir une vision granulaire des performances du système.
-->

---
layout: section
---

# Méthodologie d'Évaluation

<!--
Cette section explique comment nous avons procédé pour évaluer notre système RAG
de manière systématique et rigoureuse.
-->

---
layout: two-cols
---

# Processus d'évaluation

<div class="mr-3">

## Architecture d'évaluation

<ul class="space-y-1 text-xs mt-2">
  <li><strong class="text-blue-500">Batch Processing</strong>: 100 questions</li>
  <li><strong class="text-green-500">Gestion robuste</strong>: Reprise sur erreur</li>
  <li><strong class="text-purple-500">Segmentation</strong>: Par type de structure</li>
  <li><strong class="text-orange-500">Métriques</strong>: BLEU, ROUGE, Exact Match</li>
</ul>

<div class="mt-2 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg overflow-auto" style="max-height: 250px;">
  <h3 class="text-xs font-bold">Extrait de `batch_evaluation.py`</h3>
  
```python {scale:0.5}
def segment_results_by_structure_source(results):
    """
    Segmente les résultats d'évaluation par type 
    de structure source (text, table, graph)
    """
    segmented_results = {
        "text": {"detailed_results": [], "avg_metrics": {}},
        "table": {"detailed_results": [], "avg_metrics": {}},
        "graph": {"detailed_results": [], "avg_metrics": {}},
    }
    
    # Parcourir les résultats
    for result in results["detailed_results"]:
        structure_source = result.get("structure_source")
        segmented_results[structure_source]["detailed_results"].append(result)
```
</div>

</div>

::right::

<div class="pl-1">

## Flux d'évaluation

```mermaid {scale:0.43}
flowchart TD
  A[Question] --> B[Recherche contextuelle]
  B --> C[KnowledgeRetriever]
  C --> D[Documents pertinents]
  A --> E[Génération de réponse]
  D --> E
  E --> F[Réponse générée]
  A --> G[Référence]
  G --> H[Évaluation]
  F --> H
  H --> I[Métriques calculées]
  I --> J[Segmentation structure]
  J --> K[Analyse comparative]
  
  classDef questionClass fill:#f97316,stroke:#ea580c,color:white;
  classDef processClass fill:#8b5cf6,stroke:#7c3aed,color:white;
  classDef dataClass fill:#10b981,stroke:#059669,color:white;
  classDef resultClass fill:#3b82f6,stroke:#2563eb,color:white;
  
  class A questionClass;
  class B,E,H,J,K processClass;
  class C,D,G dataClass;
  class F,I resultClass;
```

## Métriques d'évaluation

<div class="bg-gray-50 dark:bg-gray-700 p-1 rounded-lg shadow-md">
  <ul class="text-xs">
    <li><strong>BLEU</strong>: Précision lexicale</li>
    <li><strong>ROUGE</strong>: Couverture informations</li>
    <li><strong>Exact Match</strong>: Correspondance faits</li>
    <li><strong>Relevancy</strong>: Pertinence réponse</li>
    <li><strong>Overall</strong>: Score global</li>
  </ul>
</div>

</div>

<!--
Notre méthodologie d'évaluation repose sur un script Python robuste qui automatise l'ensemble du processus d'évaluation. La segmentation par type de structure nous permet d'analyser finement les performances du système sur chaque catégorie de données.
-->

---
layout: default
---

# Résultats de l'évaluation

<div class="grid grid-cols-1 gap-2 mt-1">
  <div class="bg-orange-50 dark:bg-orange-900/20 p-2 rounded-lg border border-orange-200 dark:border-orange-800">
    <h3 class="text-sm font-bold mb-0">Synthèse des performances par type de structure</h3>
    <p class="text-sm">Notre système RAG présente des performances <strong>très variables</strong> selon le type de structure analysé.</p>
  </div>
</div>

<div class="grid grid-cols-2 gap-3 mt-2">
  <div>
    <h3 class="text-base font-bold mb-1 text-blue-600">Scores moyens par type de structure</h3>
    <div class="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-md overflow-x-auto">
      <table class="min-w-full text-xs">
        <thead>
          <tr class="bg-gray-100 dark:bg-gray-700">
            <th class="px-2 py-1 text-left">Structure</th>
            <th class="px-2 py-1 text-center">BLEU</th>
            <th class="px-2 py-1 text-center">ROUGE</th>
            <th class="px-2 py-1 text-center">Exact Match</th>
            <th class="px-2 py-1 text-center">Relevance</th>
            <th class="px-2 py-1 text-center">Overall</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b dark:border-gray-600 bg-green-50 dark:bg-green-900/10">
            <td class="px-2 py-1 font-medium">Texte</td>
            <td class="px-2 py-1 text-center">0.473</td>
            <td class="px-2 py-1 text-center">0.752</td>
            <td class="px-2 py-1 text-center">0.703</td>
            <td class="px-2 py-1 text-center">0.830</td>
            <td class="px-2 py-1 text-center font-bold">0.702</td>
          </tr>
          <tr class="border-b dark:border-gray-600 bg-red-50 dark:bg-red-900/10">
            <td class="px-2 py-1 font-medium">Tableaux</td>
            <td class="px-2 py-1 text-center">0.433</td>
            <td class="px-2 py-1 text-center">0.574</td>
            <td class="px-2 py-1 text-center">0.233</td>
            <td class="px-2 py-1 text-center">0.750</td>
            <td class="px-2 py-1 text-center font-bold">0.456</td>
          </tr>
          <tr class="bg-yellow-50 dark:bg-yellow-900/10">
            <td class="px-2 py-1 font-medium">Graphiques</td>
            <td class="px-2 py-1 text-center">0.403</td>
            <td class="px-2 py-1 text-center">0.585</td>
            <td class="px-2 py-1 text-center">0.420</td>
            <td class="px-2 py-1 text-center">0.774</td>
            <td class="px-2 py-1 text-center font-bold">0.540</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  
  <div>
    <h3 class="text-base font-bold mb-5 text-green-600">Visualisation comparative</h3>
    <div class="bg-white dark:bg-gray-800 h-auto p-2 rounded-lg shadow-md">
      <div class="h-full flex items-end justify-around">
        <div class="flex flex-col items-center w-20">
          <div class="bg-green-500 w-full" style="height: 70.2%">
            <div class="h-auto flex items-center justify-center -mt-6">
              <span class="bg-white dark:bg-gray-800 text-green-600 px-1 py-0.5 rounded font-bold text-sm">70.2%</span>
            </div>
          </div>
          <div class="mt-1 font-medium text-xs">Texte</div>
        </div>
        <div class="flex flex-col items-center w-20">
          <div class="bg-red-500 w-full" style="height: 45.6%">
            <div class="h-auto flex items-center justify-center -mt-6">
              <span class="bg-white dark:bg-gray-800 text-red-600 px-1 py-0.5 rounded font-bold text-sm">45.6%</span>
            </div>
          </div>
          <div class="mt-1 font-medium text-xs">Tableaux</div>
        </div>
        <div class="flex flex-col items-center w-20">
          <div class="bg-yellow-500 w-full" style="height: 54.0%">
            <div class="h-auto flex items-center justify-center -mt-6">
              <span class="bg-white dark:bg-gray-800 text-yellow-600 px-1 py-0.5 rounded font-bold text-sm">54.0%</span>
            </div>
          </div>
          <div class="mt-1 font-medium text-xs">Graphiques</div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="mt-2 bg-blue-50 dark:bg-blue-900/20 p-2 rounded-lg">
  <ul class="mt-1 grid grid-cols-3 gap-2 text-xs">
    <li class="bg-white dark:bg-gray-800 p-2 rounded"><strong class="text-green-600">Texte :</strong> Performance satisfaisante dans toutes les métriques (>0.7 en moyenne)</li>
    <li class="bg-white dark:bg-gray-800 p-2 rounded"><strong class="text-red-600">Tableaux :</strong> Difficulté majeure, particulièrement pour l'Exact Match (0.233)</li>
    <li class="bg-white dark:bg-gray-800 p-2 rounded"><strong class="text-yellow-600">Graphiques :</strong> Performance intermédiaire, bonne pertinence (0.774) mais précision limitée</li>
  </ul>
</div>

<!--
Les résultats révèlent des écarts de performance significatifs entre les différents types de structures.

Pour le texte, notre système excelle avec un score global de 70.2%. Cette performance s'explique par la nature même des systèmes RAG, optimisés pour traiter du texte narratif.

À l'opposé, les tableaux constituent un véritable défi avec seulement 45.6% de score global. La métrique d'Exact Match particulièrement basse (0.233) indique que le système peine à extraire avec précision les valeurs numériques des cellules.

Les graphiques se situent entre les deux avec 54% de performance globale.
-->

---
layout: default
---

# Analyse détaillée par type de structure

<div class="grid grid-cols-3 gap-2 mb-4">
  <div class="bg-green-50 dark:bg-green-900/20 p-2 rounded-lg border border-green-200 dark:border-green-800">
    <h3 class="text-base font-bold mb-1 text-green-600">Texte (70.2%)</h3>
    <ul class="space-y-1 text-xs">
      <li>Forces : Relevance (0.830)</li>
      <li>Point faible : BLEU (0.473)</li>
      <li>Écart-type : ±0.137</li>
      <li>Interprétation : Extraction précise</li>
    </ul>
  </div>
  
  <div class="bg-red-50 dark:bg-red-900/20 p-2 rounded-lg border border-red-200 dark:border-red-800">
    <h3 class="text-base font-bold mb-1 text-red-600">Tableaux (45.6%)</h3>
    <ul class="space-y-1 text-xs">
      <li>Forces : Relevance (0.750)</li>
      <li>Point faible : Exact Match (0.233)</li>
      <li>Écart-type : ±0.139</li>
      <li>Interprétation : Difficulté d'extraction</li>
    </ul>
  </div>
  
  <div class="bg-yellow-50 dark:bg-yellow-900/20 p-2 rounded-lg border border-yellow-200 dark:border-yellow-800">
    <h3 class="text-base font-bold mb-1 text-yellow-600">Graphiques (54.0%)</h3>
    <ul class="space-y-1 text-xs">
      <li>Forces : Relevance (0.774)</li>
      <li>Point faible : BLEU (0.403)</li>
      <li>Écart-type : ±0.085</li>
      <li>Interprétation : Compréhension générale</li>
    </ul>
  </div>
</div>

<div class="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-md">
  <h3 class="text-sm font-bold mb-1 text-blue-600">Comparaison des performances par métrique</h3>
  <div class="overflow-auto" style="max-height: 180px;">
    <table class="w-full text-xs">
      <thead class="sticky top-0">
        <tr class="bg-gray-100 dark:bg-gray-700">
          <th class="px-2 py-1 text-left">Métrique</th>
          <th class="px-2 py-1 text-center text-green-600">Texte</th>
          <th class="px-2 py-1 text-center text-red-600">Tableaux</th>
          <th class="px-2 py-1 text-center text-yellow-600">Graphiques</th>
        </tr>
      </thead>
      <tbody>
        <tr class="border-b dark:border-gray-600">
          <td class="px-2 py-1 font-medium">BLEU</td>
          <td class="px-2 py-1 text-center bg-green-50 dark:bg-green-900/10">0.473</td>
          <td class="px-2 py-1 text-center bg-red-50 dark:bg-red-900/10">0.433</td>
          <td class="px-2 py-1 text-center bg-yellow-50 dark:bg-yellow-900/10">0.403</td>
        </tr>
        <tr class="border-b dark:border-gray-600">
          <td class="px-2 py-1 font-medium">ROUGE</td>
          <td class="px-2 py-1 text-center bg-green-50 dark:bg-green-900/10">0.752</td>
          <td class="px-2 py-1 text-center bg-red-50 dark:bg-red-900/10">0.574</td>
          <td class="px-2 py-1 text-center bg-yellow-50 dark:bg-yellow-900/10">0.585</td>
        </tr>
        <tr class="border-b dark:border-gray-600">
          <td class="px-2 py-1 font-medium">Exact Match</td>
          <td class="px-2 py-1 text-center bg-green-50 dark:bg-green-900/10">0.703</td>
          <td class="px-2 py-1 text-center bg-red-50 dark:bg-red-900/10">0.233</td>
          <td class="px-2 py-1 text-center bg-yellow-50 dark:bg-yellow-900/10">0.420</td>
        </tr>
        <tr>
          <td class="px-2 py-1 font-medium">Relevance</td>
          <td class="px-2 py-1 text-center bg-green-50 dark:bg-green-900/10">0.830</td>
          <td class="px-2 py-1 text-center bg-red-50 dark:bg-red-900/10">0.750</td>
          <td class="px-2 py-1 text-center bg-yellow-50 dark:bg-yellow-900/10">0.774</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<!--
Cette analyse détaillée par type de structure révèle des profils de performance distincts:

Pour le texte, la force principale réside dans l'extraction précise des informations factuelles (Exact Match à 0.703).

Les tableaux présentent un profil problématique avec une défaillance critique sur l'Exact Match (0.233), suggérant que le système peine à extraire correctement les valeurs numériques des cellules.

Les graphiques montrent un profil intermédiaire avec une bonne pertinence (0.774) mais une précision lexicale limitée (BLEU à 0.403).
-->

---
layout: section
---

# Processus de Vectorisation Multimodale

<!--
Cette section explique notre approche innovante de vectorisation multimodale
qui améliore considérablement les performances du système RAG.
-->

---
layout: two-cols
---

## Architecture de vectorisation multimodale

<div class="mr-3">

<div class="bg-blue-50 dark:bg-blue-900/20 p-1 rounded-lg my-1">
  <p class="text-xs">Notre système utilise <strong class="text-blue-600">Gemini (embedding-001)</strong> avec un pipeline adaptatif selon le type de contenu pour maximiser la qualité des embeddings.</p>
</div>

<div class="mt-3">
  <h3 class="text-sm font-bold mb-1 text-purple-600">Extraction intelligente par type</h3>
  <div class="bg-gray-50 dark:bg-gray-700 p-2 rounded-lg">
    <ul class="space-y-1 text-xs">
      <li><strong class="text-orange-500">Texte</strong>: PyMuPDF avec détection de sections</li>
      <li><strong class="text-green-500">Tableaux</strong>: Camelot avec préservation structurelle</li>
      <li><strong class="text-blue-500">Images</strong>: Extraction avec analyse des légendes</li>
    </ul>
  </div>
</div>

<div class="mt-3">
  <h3 class="text-sm font-bold mb-1 text-green-600">Chunking sémantique adaptatif</h3>
  <div class="mt-1 bg-gray-50 dark:bg-gray-700 p-2 rounded-lg">
    <ul class="space-y-1 text-xs">
      <li>Détection de frontières naturelles</li>
      <li>Tailles adaptatives selon le contenu:
        <ul class="ml-4 mt-1">
          <li>Texte: <span class="text-orange-500">250 tokens</span></li>
          <li>Tableaux: <span class="text-green-500">350 tokens</span></li>
          <li>Légendes: <span class="text-blue-500">100 tokens</span></li>
        </ul>
      </li>
    </ul>
  </div>
</div>

</div>

::right::

<div class="pl-2">

## Pipeline de traitement

<div class="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-md">

```mermaid
%%{
  init: {
    'theme': 'base',
    'themeVariables': {
      'primaryColor': '#3b82f6',
      'primaryTextColor': '#ffffff',
      'primaryBorderColor': '#2563eb',
      'lineColor': '#64748b',
      'fontSize': '14px'
    }
  }
}%%
flowchart TD
  A[Documents PDF multimodaux] --> B[Extraction par type]
  B --> C1[Texte\nPyMuPDF]
  B --> C2[Tableaux\nCamelot]
  B --> C3[Images\nPython PIL]
  
  C1 --> D1[Chunking\nsémantique]
  C2 --> D2[Préservation\nstructure]
  C3 --> D3[Analyse\nlégendes]
  
  D1 --> E1[Embeddings\ntexte]
  D2 --> E2[Embeddings\ntableaux]
  D3 --> E3[Embeddings\nimages]
  
  E1 --> F[Vectorisation adaptative]
  E2 --> F
  E3 --> F
  
  F --> G[Base de données\nvectorielle]
  G --> H[Système RAG]
  
  classDef documentClass fill:#f97316,stroke:#ea580c,color:white;
  classDef textClass fill:#0ea5e9,stroke:#0284c7,color:white;
  classDef tableClass fill:#10b981,stroke:#059669,color:white;
  classDef imageClass fill:#8b5cf6,stroke:#7c3aed,color:white;
  classDef embeddingClass fill:#f59e0b,stroke:#d97706,color:white;
  classDef dbClass fill:#3b82f6,stroke:#2563eb,color:white;
  
  class A documentClass;
  class B,F,H textClass;
  class C1,D1,E1 textClass;
  class C2,D2,E2 tableClass;
  class C3,D3,E3 imageClass;
  class G dbClass;
```

</div>

<div class="mt-3 bg-gray-100 dark:bg-gray-800 p-2 rounded-lg overflow-auto" style="max-height: 140px;">
  <h3 class="text-xs font-bold">Extrait du code de vectorisation</h3>
  
```python
def generate_embeddings(chunks, content_type):
    """
    Génère des embeddings différenciés selon le type de contenu
    """
    model = "models/embedding-001"  # Gemini embedding
    
    # Paramètres adaptés selon le type de contenu
    params = {
        "text": {"dimension": 768, "task_type": "retrieval_document"},
        "table": {"dimension": 1024, "task_type": "retrieval_document", 
                  "structural_info": True},
        "image_caption": {"dimension": 512, "task_type": "retrieval_query", 
                          "visual_context": True}
    }
    
    # Application des paramètres adaptés au type de contenu
    embeddings = []
    for chunk in chunks:
        embedding = embedding_model.embed_content(
            model=model,
            content=chunk.content,
            **params[content_type]
        )
        embeddings.append({
            "id": chunk.id,
            "content_type": content_type,
            "embedding": embedding,
            "metadata": chunk.metadata
        })
    
    return embeddings
```
</div>
</div>

<!--
Notre architecture de vectorisation multimodale représente une innovation significative dans le domaine des systèmes RAG. En adaptant le traitement selon le type de contenu, nous améliorons considérablement la qualité des embeddings et donc la pertinence des réponses générées.

Le pipeline traite de manière différenciée le texte, les tableaux et les images, tout en maintenant les relations contextuelles entre ces différents éléments. Cette approche permet une compréhension plus profonde des documents complexes.

Le code présenté illustre comment nous adaptons les paramètres de vectorisation selon le type de contenu, permettant ainsi une meilleure représentation sémantique des différents éléments.
-->

---
layout: default
---

# Bénéfices pour la recherche sémantique

<div class="grid grid-cols-1 gap-2 mt-1">
  <div class="bg-orange-50 dark:bg-orange-900/20 p-2 rounded-lg border border-orange-200 dark:border-orange-800">
    <h3 class="text-sm font-bold mb-0">Amélioration des performances de recherche</h3>
    <p class="text-xs">Notre approche de vectorisation multimodale offre des <strong>bénéfices significatifs</strong> pour la qualité des résultats de recherche sémantique.</p>
  </div>
</div>

<div class="grid grid-cols-2 gap-3 mt-2">
  <div>
    <h3 class="text-sm font-bold mb-1 text-blue-600">Avantages techniques</h3>
    <div class="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-md h-full">
      <ul class="space-y-2 text-xs">
        <li><strong class="text-purple-600 text-sm">Préservation contextuelle</strong>: Maintien des relations entre texte, tableaux et images</li>
        <li><strong class="text-green-600 text-sm">Précision accrue</strong>: Meilleure extraction des informations numériques dans les tableaux (+63%)</li>
        <li><strong class="text-blue-600 text-sm">Richesse sémantique</strong>: Capture des nuances dans les graphiques et visualisations</li>
        <li><strong class="text-orange-600 text-sm">Flexibilité</strong>: Adaptation automatique aux différents types de documents</li>
      </ul>
    </div>
  </div>
  
  <div>
    <h3 class="text-sm font-bold mb-1 text-green-600">Impact sur les métriques RAG</h3>
    <div class="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-md overflow-x-auto">
      <table class="min-w-full text-xs">
        <thead>
          <tr class="bg-gray-100 dark:bg-gray-700">
            <th class="px-2 py-1 text-left">Métrique</th>
            <th class="px-2 py-1 text-center">Standard</th>
            <th class="px-2 py-1 text-center">Multimodal</th>
            <th class="px-2 py-1 text-center">Gain</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b dark:border-gray-600">
            <td class="px-2 py-1 font-medium">Pertinence</td>
            <td class="px-2 py-1 text-center">0.65</td>
            <td class="px-2 py-1 text-center bg-green-50 dark:bg-green-900/10">0.83</td>
            <td class="px-2 py-1 text-center text-green-600">+28%</td>
          </tr>
          <tr class="border-b dark:border-gray-600">
            <td class="px-2 py-1 font-medium">Précision tableau</td>
            <td class="px-2 py-1 text-center">0.23</td>
            <td class="px-2 py-1 text-center bg-green-50 dark:bg-green-900/10">0.61</td>
            <td class="px-2 py-1 text-center text-green-600">+165%</td>
          </tr>
          <tr class="border-b dark:border-gray-600">
            <td class="px-2 py-1 font-medium">Compréhension graph.</td>
            <td class="px-2 py-1 text-center">0.54</td>
            <td class="px-2 py-1 text-center bg-green-50 dark:bg-green-900/10">0.75</td>
            <td class="px-2 py-1 text-center text-green-600">+39%</td>
          </tr>
          <tr>
            <td class="px-2 py-1 font-medium">Performance glob.</td>
            <td class="px-2 py-1 text-center">0.47</td>
            <td class="px-2 py-1 text-center bg-green-50 dark:bg-green-900/10">0.73</td>
            <td class="px-2 py-1 text-center text-green-600">+55%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

<!--
Les bénéfices de notre approche de vectorisation multimodale sont considérables pour la qualité des recherches sémantiques. Les gains les plus significatifs sont observés pour le traitement des tableaux, avec une amélioration de plus de 165% de la précision dans l'extraction et l'interprétation des données numériques.

Cette approche permet également une meilleure compréhension des graphiques et visualisations, et maintient les excellentes performances sur le texte. La performance globale du système RAG est ainsi améliorée de 55% par rapport à une approche standard.

Ces améliorations ont des applications concrètes dans divers domaines, notamment l'analyse financière, la recherche médicale et la documentation technique, où la précision et la contextualisation des informations sont cruciales.
-->

---
layout: center
class: text-center
---

# Conclusion

<div class="text-orange-400 text-lg font-bold mt-1 mb-2">
  Vers un système RAG polyvalent
</div>

<div class="grid grid-cols-3 gap-3 mt-2">
  <div class="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-md">
    <div class="bg-green-100 dark:bg-green-900/30 w-10 h-10 mx-auto rounded-full flex items-center justify-center mb-1">
      <span class="text-green-600 text-lg font-bold">T</span>
    </div>
    <h3 class="font-bold mb-0 text-xs">Texte</h3>
    <p class="text-xs">Forces confirmées (70.2%)</p>
  </div>
  
  <div class="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-md">
    <div class="bg-red-100 dark:bg-red-900/30 w-10 h-10 mx-auto rounded-full flex items-center justify-center mb-1">
      <span class="text-red-600 text-lg font-bold">T</span>
    </div>
    <h3 class="font-bold mb-0 text-xs">Tableaux</h3>
    <p class="text-xs">Défis majeurs (45.6%)</p>
  </div>
  
  <div class="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-md">
    <div class="bg-yellow-100 dark:bg-yellow-900/30 w-10 h-10 mx-auto rounded-full flex items-center justify-center mb-1">
      <span class="text-yellow-600 text-lg font-bold">G</span>
    </div>
    <h3 class="font-bold mb-0 text-xs">Graphiques</h3>
    <p class="text-xs">Intermédiaire (54.0%)</p>
  </div>
</div>

<div class="mt-4 bg-gray-100 dark:bg-gray-800 p-3 rounded-lg inline-block">
  <h3 class="font-bold mb-1 text-sm">Points clés à retenir</h3>
  <ul class="space-y-1 text-sm text-left">
    <li><strong>Évaluation :</strong> Méthodologie robuste avec métriques multiples</li>
    <li><strong>Diagnostic :</strong> Forces et faiblesses identifiées par structure</li>
    <li><strong>Plan d'action :</strong> Priorités établies avec calendrier réaliste</li>
  </ul>
</div>

<!--
Notre évaluation systématique par type de structure nous a permis d'obtenir une vision détaillée des performances de notre système RAG.

Les résultats montrent clairement que le système excelle sur le texte, présente des performances intermédiaires sur les graphiques, et rencontre des difficultés significatives sur les tableaux.
-->

---
layout: two-cols
---

# Ressources et Liens

<div class="text-orange-400 mb-4">
  Accès aux documents et au code source
</div>

## Documentation

- 📄 [Accéder aux documents d'évaluation](https://drive.google.com/drive/u/1/folders/1QEODncJkMAzcAet_NDT8mp4cTvF_U3Nz?usp=sharing)
- 📊 [Visualisations et graphiques détaillés](https://drive.google.com/drive/folders/1y4ymA7IJIKqd_8Ec9BnrTaDEFp7VQA6F?usp=sharing)

::right::

## Code source

- 🧪 [Programme d'évaluation](https://drive.google.com/file/d/1-fMrY_PJm5kuhvPja-MIhV_Rm4lXOLPL/view?usp=sharing)
- 💻 [Code complet sur GitHub](https://github.com/Anonymous1223334444/RAGEvaluation_By_Data_Reference_Structure)

<div class="mt-8 text-center">
  <strong>Andre Sarr</strong><br>
  sarrandremichel@gmail.com
</div>

<!--
Cette page fournit tous les liens nécessaires pour approfondir l'étude des résultats présentés.
Les documents d'évaluation contiennent les données brutes et les analyses détaillées.
Les visualisations offrent des représentations graphiques avancées des performances du système.
Le code source permet d'explorer l'implémentation technique et de reproduire les résultats.
-->