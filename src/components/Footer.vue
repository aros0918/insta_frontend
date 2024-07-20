<script setup lang="ts">
import { ChevronsDown } from "lucide-vue-next";
</script>

<template>
  <footer id="footer" class="w-full border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
    <div class="container mx-auto py-12 sm:py-16">
      <div class="flex flex-col items-center gap-4">
        <a href="#" class="flex font-bold items-center">
          <ChevronsDown
            class="bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white"
          />
          <h3 class="text-2xl">ClipBoost</h3>
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
@media (min-width: 1536px) {
  .container {
    max-width: 1400px;
  }
}
</style>