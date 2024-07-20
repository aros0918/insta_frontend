<script lang="ts" setup>
import { useColorMode } from '@vueuse/core';
import { ChevronsDown } from 'lucide-vue-next';
import ToggleTheme from './ToggleTheme.vue';

const colorMode = useColorMode();

// Remove this line to prevent automatic dark mode setting
// colorMode.value = 'dark';

const handleLogoClick = (event: Event) => {
  event.preventDefault();
  // Add your navigation logic here, e.g.:
  // router.push('/');
}
</script>

<template>
  <div class="relative">
    <header class="sticky top-5 z-40 w-full">
      <div class="bg-white dark:bg-gray-800 shadow-md">
        <div class="w-full md:w-[90%] lg:w-[95%] lg:max-w-screen-xl mx-auto px-4 py-2 flex justify-between items-center">
          <a href="/" @click="handleLogoClick" class="font-bold text-lg flex items-center">
            <ChevronsDown
              class="bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white"
            />
            ClipBoost
          </a>
          
          <div>
            <ToggleTheme />
          </div>
        </div>
      </div>
    </header>
  </div>
</template>