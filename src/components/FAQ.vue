<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What types of videos can I process with ClipBoost?",
    answer: "All video formats are acceptable in ClipBoost.",
    value: "item-1",
  },
  {
    question: "Will this make me go Viral?",
    answer:
      "Clean data alone won't make your content go viral; the quality of your content does. We recommend using videos with a minimum of 2k-10k views",
    value: "item-2",
  },
  {
    question:
      "Does this repost for you?",
    answer:
      "Not yet, but we currently have the API and are working on developing the user interface for ClipBoost V2.",
    value: "item-3",
  },
  {
    question: "Is it only take 30 second clips?",
    answer: "No you can use any length videos you want.",
    value: "item-4",
  },
  {
    question:
      "Does it work on Tiktok?",
    answer: "The videos are downloaded to your local hardrive so you can reuse your content on any platform after you clean it.",
    value: "item-5",
  },
];
</script>

<template>
  <section
    id="faq"
    class="w-full bg-gray-50 dark:bg-gray-900 py-24 sm:py-32 relative"
  >
    <!-- Divider line -->
    <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"></div>

    <div class="container md:w-[700px] mx-auto">
      <div class="text-center mb-8">
        <h2 class="text-lg text-primary text-center mb-2 tracking-wider">FAQS</h2>

        <h2 class="text-3xl md:text-5xl text-center font-bold">
          Common Questions
        </h2>
      </div>

      <Accordion
        type="single"
        collapsible
        class="AccordionRoot"
      >
        <AccordionItem
          v-for="{ question, answer, value } in FAQList"
          :key="value"
          :value="value"
          :style="{ backgroundColor: 'rgb(31 41 55 / var(--tw-bg-opacity))' }"
        >
          <AccordionTrigger class="text-left" :style="{ backgroundColor: 'rgb(31 41 55 / var(--tw-bg-opacity))' }">
            {{ question }}
          </AccordionTrigger>

          <AccordionContent :style="{ backgroundColor: 'rgb(31 41 55 / var(--tw-bg-opacity))' }">
            {{ answer }}
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <h3 class="font-medium mt-4">
        Still have questions?
        <a
          href="#"
          class="text-muted-foreground"
        >
          <a
            href="#"
            class="underline"
            >Contact us</a
          >
        </a>
      </h3>
    </div>
  </section>
</template>