<script setup lang="ts">
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Eye, TrendingUp, Layers } from 'lucide-vue-next';

interface BenefitsProps {
  title: string;
  value: string;
  icon: any;
}

const benefitList: BenefitsProps[] = [
  {
    title: "Average Copyright Strikes",
    value: "0",
    icon: Layers
  },
  {
    title: "Average Views Per Generated Post",
    value: "8K+",
    icon: Eye
  },
  {
    title: "New Followers/Subs Per Week",
    value: "500+",
    icon: Users
  },
  {
    title: "Average Accounts Running Per User",
    value: "8",
    icon: TrendingUp
  },
];
</script>

<template>
  <section id="benefits" class="bg-gray-100 dark:bg-gray-900 py-16 sm:py-24 relative">
    <!-- Separator line -->
    <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>

    <div class="container mx-auto px-4">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <div>
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Revolutionize Your Content with <span class="text-orange-500">ClipBoost</span>
          </h2>
          <ul class="space-y-4 text-lg text-gray-600 dark:text-gray-300 mb-8">
            <li class="flex items-start">
              <span class="text-orange-500 mr-2">►</span>
              Transform old viral hits into fresh, engaging material
            </li>
            <li class="flex items-start">
              <span class="text-orange-500 mr-2">►</span>
              Effortlessly repurpose your best content with our innovative video data cleansing
            </li>
            <li class="flex items-start">
              <span class="text-orange-500 mr-2">►</span>
              Save thousands on production costs and eliminate constant filming/editing
            </li>
            <li class="flex items-start">
              <span class="text-orange-500 mr-2">►</span>
              Keep your audience engaged with renewed content across all platforms
            </li>
          </ul>
          <p class="text-xl font-semibold text-gray-800 dark:text-gray-200">
            With ClipBoost, your past successes fuel your future growth!
          </p>
        </div>
        
        <div class="grid sm:grid-cols-2 gap-6">
          <Card
            v-for="({ title, value, icon }, index) in benefitList"
            :key="title"
            class="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <CardHeader class="text-center p-6">
              <component :is="icon" class="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <div class="mb-4">
                <span class="text-4xl font-bold text-gray-800 dark:text-white">
                  {{ value }}
                </span>
              </div>
              <CardTitle class="text-lg text-gray-600 dark:text-gray-300">{{ title }}</CardTitle>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  </section>
</template>
