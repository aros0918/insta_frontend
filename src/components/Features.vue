<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Users, UserCircle, BadgeAlert, ShoppingCart, GraduationCap } from "lucide-vue-next";

interface FeaturesProps {
  icon: any;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: Building2,
    title: "All Enterprises",
    description: "Generate leads for your company with the cheapest form of marketing - free organic marketing. Revolutionize your approach with the ongoing Organic Marketing boom.",
  },
  {
    icon: Users,
    title: "Marketers & Advertisers",
    description: "A godsend for agencies managing multiple business or influencer accounts, especially when clients are slow to produce new content.",
  },
  {
    icon: UserCircle,
    title: "Influencers & Personalities",
    description: "Simplify your content management by reusing old viral content, making it easier to maintain views and subscriptions.",
  },
  {
    icon: BadgeAlert,
    title: "Prohibited Industries",
    description: "A lifeline for those on prohibited lists or frequently shadow banned. Ideal for OFMs, Crypto, Financial Services, Processors, MLMs, Cannabis, Xrated, Tobacco, and Alcohol industries.",
  },
  {
    icon: ShoppingCart,
    title: "Online Sellers",
    description: "Boost your online presence without constant new content creation. Repurpose your best product showcases and customer testimonials effortlessly.",
  },
  {
    icon: GraduationCap,
    title: "Educators & Creators",
    description: "Transform your existing educational content into bite-sized, attention-grabbing snippets. Turn long-form lectures into viral short-form teasers to attract and engage students.",
  },
];
</script>

<template>
  <section id="features" class="bg-gray-100 dark:bg-gray-800 relative">
    <!-- Separator line -->
    <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>
    
    <div class="container py-24 sm:py-32">
      <h2 class="text-lg text-orange-500 text-center mb-2 tracking-wider font-semibold">
        Industries That Need This!
      </h2>

      <h2 class="text-3xl md:text-5xl text-center font-bold mb-6 text-gray-900 dark:text-white">
        What Makes Us Different
      </h2>

      <p class="md:w-3/4 mx-auto text-lg text-center text-gray-600 dark:text-gray-300 mb-16">
        Short-form marketing is essential today, as everyone is glued to their phones with the shortest attention spans in
        history. ClipBoost meets this demand with a focus on platforms like social media, sales funnels, video games,
        influencers, online education, e-commerce, subscription services, and more—all aiming for increased views and
        engagement.
      </p>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="{ icon, title, description } in featureList" :key="title">
          <Card class="h-full bg-white dark:bg-gray-700 border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader class="pb-2">
              <div class="bg-orange-100 dark:bg-orange-900 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <component :is="icon" class="w-8 h-8 text-orange-500 dark:text-orange-400" />
              </div>
              <CardTitle class="text-xl font-bold text-gray-900 dark:text-white">
                {{ title }}
              </CardTitle>
            </CardHeader>
            <CardContent class="text-gray-600 dark:text-gray-300">
              {{ description }}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </section>
</template>