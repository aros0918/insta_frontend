<script setup lang="ts">
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpFromLine, FileVideo, Share2, Repeat } from "lucide-vue-next";

interface Step {
  icon: any;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: ArrowUpFromLine,
    title: "Upload",
    description: "Upload your content"
  },
  {
    icon: FileVideo,
    title: "Clean",
    description: "Clean the videos"
  },
  {
    icon: Share2,
    title: "Post",
    description: "Publish it anywhere"
  },
  {
    icon: Repeat,
    title: "Repeat",
    description: "Just do it again!"
  }
];
</script>

<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div class="container mx-auto px-4 py-20">
      <h1 class="text-4xl md:text-5xl lg:text-5xl font-bold text-center mb-16">
        Just Upload, <span class="text-orange-500">Clean</span>, Post and Repeat
      </h1>
      <div class="flex flex-col sm:flex-row gap-8 justify-center">
        <Card 
          v-for="(step, index) in steps" 
          :key="index" 
          class="bg-white dark:bg-gray-800 flex-1 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <CardHeader class="text-center p-6">
            <component :is="step.icon" class="w-16 h-16 text-orange-500 mx-auto mb-6" />
            <CardTitle class="text-2xl font-semibold mb-3">{{ step.title }}</CardTitle>
            <CardDescription class="text-lg text-gray-600 dark:text-gray-400">{{ step.description }}</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  </section>
</template>