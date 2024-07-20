<template>
  <section class="bg-gray-100 dark:bg-gray-900 py-30 sm:py-30">
    <!-- Divider line -->
    <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>

    <div class="container mx-auto px-4">
      <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
        Pricing
      </h2>

      <h2 class="text-3xl md:text-5xl text-center font-bold mb-4">
        Get Unlimited Access
      </h2>

      <h3 class="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        Affordable Plans to Keep Content Viralizing
      </h3>

      <div class="flex justify-center gap-8 flex-wrap">
        <Card
          v-for="{
            title,
            popular,
            price,
            description,
            benefitList,
          } in plans"
          :key="title"
          class="w-full max-w-md flex flex-col drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-orange-500 bg-gray-50 dark:bg-gray-800"
        >
          <CardHeader>
            <CardTitle class="pb-2">
              {{ title }}
            </CardTitle>

            <CardDescription class="pb-4">{{ description }}</CardDescription>

            <div>
              <span class="text-3xl font-bold">{{ typeof price === 'number' ? '$' + price : price }}</span>
              <span class="text-muted-foreground" v-if="typeof price === 'number'"> /month</span>
            </div>
          </CardHeader>

          <CardContent class="flex-grow">
            <div class="space-y-4 w-full">
              <span
                v-for="benefit in benefitList"
                :key="benefit"
                class="flex"
              >
                <Check class="text-primary mr-2 flex-shrink-0" />
                <h3>{{ benefit }}</h3>
              </span>
            </div>
          </CardContent>

          <CardFooter>
            <Button
              class="w-full bg-orange-500 text-white hover:bg-orange-600"
              @click="onClick"
            >
              Get Started
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Check } from "lucide-vue-next";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: number | string;
  benefitList: string[];
  description?: string;
}

const plans: PlanProps[] = [
  {
    title: "Kickstarter",
    popular: PopularPlan.YES,
    price: 99,
    description: "Perfect for beginners and small projects",
    benefitList: [
      "1000 Cleanings",
      "Metadata Removal",
      "ICC Profile Change",
      "MD5 Hash Change",
      "Video Color Space Change",
      "10% Increase In Saturation",
    ],
  },
  {
    title: "Pro",
    popular: PopularPlan.NO,
    price: 149,
    description: "Advanced features for power users",
    benefitList: [
      "2500 Cleanings",
      "All Kickstarter Features",
      "Priority Support",
    ],
  },
];

const onClick = () => {
  window.location.assign('/register');
};
</script>
