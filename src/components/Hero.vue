<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-vue-next';

const onClick = () => {
    window.location.assign('/register');
};
</script>

<template>
  <section class="relative w-full bg-gray-100 dark:bg-gray-900 overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-b from-gray-50 to-transparent dark:from-gray-800 dark:to-transparent opacity-50"></div>
    <div class="container relative mx-auto px-4 py-16 md:py-24 lg:py-32">
      <div class="max-w-6xl mx-auto text-center">
        <h1 class="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 leading-tight">
          <span class="text-transparent bg-gradient-to-r from-[#D247BF] to-[#FF6B35] bg-clip-text">
            ClipBoost
          </span>
        </h1>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
          <span class="text-transparent bg-gradient-to-r from-[#FF7E5F] to-[#FEB47B] bg-clip-text">
            Refresh, Repost, Repeat
          </span>
        </h2>
        <p class="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
          Your Ultimate Tool for Refreshing and Reposting Content
        </p>
        <Button 
          class="px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold bg-[#FF6B35] hover:bg-[#FF8C5A] text-white rounded-full transition-all duration-300 group shadow-lg hover:shadow-xl"
          @click="onClick"
        >
          Get Started
          <ArrowRight class="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
    <div class="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
  </section>
</template>

<style scoped>
@media (min-width: 1536px) {
  .container {
    max-width: 1400px;
  }
}
</style>