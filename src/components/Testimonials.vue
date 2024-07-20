<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Star } from "lucide-vue-next";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [

  {
    image: "https://github.com/shadcn.png",
    name: "Sarah Johnson",
    userName: "Digital Marketing Manager",
    comment: "As someone managing multiple client accounts, ClipBoost has been a lifesaver. It's so easy to refresh and repurpose content, especially when clients are slow to produce new material.",
    rating: 4.9,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Mike Chen",
    userName: "E-commerce Store Owner",
    comment: "ClipBoost has revolutionized how I showcase my products. I can now create fresh content from my best-performing videos without spending a fortune on new productions. Highly recommended!",
    rating: 4.8,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Emma Joy ",
    userName: "Online Course Creator",
    comment: "This tool is perfect for educators! I've turned my long-form lectures into engaging short clips that have significantly increased my course enrollment rates. ClipBoost is a must-have!",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "David Singh",
    userName: "Crypto Influencer",
    comment: "Being in a niche that often faces restrictions, ClipBoost has been crucial for maintaining my online presence. It helps me keep my content fresh and engaging without risking bans.",
    rating: 4.9,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Lisa Thompson",
    userName: "Small Business Owner",
    comment: "I was skeptical at first, but ClipBoost has truly transformed my marketing strategy. It's made creating consistent, engaging content so much easier and more affordable for my small business.",
    rating: 4.7,
  },
];
</script>

<template>
  <section
    id="testimonials"
    class="relative bg-gray-100 dark:bg-gray-800 py-24 sm:py-32"
  >
    <!-- Separator line -->
    <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>

    <div class="container mx-auto">
      <div class="text-center mb-8">
        <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
          Testimonials
        </h2>

        <h2 class="text-3xl md:text-5xl text-center font-bold mb-4 text-gray-900 dark:text-white">
          Hear What Our Clients Say
        </h2>
      </div>

      <Carousel
        :opts="{
          align: 'start',
        }"
        class="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          <CarouselItem
            v-for="review in reviewList"
            :key="review.name"
            class="md:basis-1/2 lg:basis-1/3"
          >
            <Card class="bg-white dark:bg-gray-700 shadow-md">
              <CardContent class="pt-6 pb-0">
                <div class="flex gap-1 pb-6">
                  <Star v-for="_ in 5" :key="_" class="size-4 fill-primary text-primary" />
                </div>

                <p class="text-gray-600 dark:text-gray-300">"{{ review.comment }}"</p>
              </CardContent>

              <CardHeader>
                <div class="flex flex-row items-center gap-4">

                  <div class="flex flex-col">
                    <CardTitle class="text-lg text-gray-900 dark:text-white">{{ review.name }}</CardTitle>
                    <CardDescription class="text-gray-600 dark:text-gray-400">{{ review.userName }}</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  </section>
</template>
