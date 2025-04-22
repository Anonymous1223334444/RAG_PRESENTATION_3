<template>
  <div class="slidev-layout section bg-gradient-to-b from-gray-900/95 via-gray-800/90 to-black">
    <NavBar />
    <div class="flex h-full items-center justify-center">
      <div>
        <slot />
      </div>
    </div>
  </div>
</template>

<style>
.section h1 {
  @apply text-4xl text-orange-400 font-bold mb-4;
}
</style>