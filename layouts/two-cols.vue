<template>
  <div class="slidev-layout two-cols">
    <NavBar />
    <div class="grid grid-cols-2 w-full h-full">
      <div class="col-left">
        <slot />
      </div>
      <div class="col-right">
        <slot name="right" />
      </div>
    </div>
  </div>
</template>