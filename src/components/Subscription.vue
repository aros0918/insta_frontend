<template>
  <section class="container py-24 sm:py-30">
    <h2 class="text-lg text-primary text-center mb-2 tracking-wider">
      Pricing
    </h2>

    <h2 class="text-3xl md:text-4xl text-center font-bold mb-4">
      Get unlimited access
    </h2>

    <h3 class="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
      Affordable Plans to Keep Content Viralizing
    </h3>

    <div class="flex justify-center gap-8 flex-wrap">
      <Card
        v-for="(plan, index) in plans"
        :key="plan.title"
        :class="['w-full max-w-md flex flex-col drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-orange-500', 
                 state.selectedPlan === plan.title ? 'bg-blue-500' : '']"
      >
        <CardHeader class="relative p-6">
          <CardTitle class="pb-2 text-2xl">
            {{ plan.title }}
          </CardTitle>
          <CardDescription class="pb-4 text-lg">{{ plan.description }}</CardDescription>
          <div>
            <span class="text-4xl font-bold">{{ typeof plan.price === 'number' ? '$' + plan.price : plan.price }}</span>
            <span class="text-muted-foreground text-xl" v-if="typeof plan.price === 'number'"> /month</span>
          </div>
          <div v-if="state.selectedPlan === plan.title" class="absolute top-0 right-0 text-white p-2 text-sm">
            This is your current plan
          </div>
        </CardHeader>

        <CardContent class="flex-grow p-6">
          <div class="space-y-4 w-full">
            <span
              v-for="benefit in plan.benefitList"
              :key="benefit"
              class="flex items-center"
            >
              <Check class="text-primary mr-2 flex-shrink-0" />
              <h3 class="text-lg">{{ benefit }}</h3>
            </span>
          </div>
        </CardContent>

        <CardFooter class="p-6">
          <Button
            :id="plan.title"
            class="w-full bg-orange-500 text-white hover:bg-orange-600 text-lg py-3"
            @click="onClick(plan)"
          >
            Get Now
          </Button>
        </CardFooter>
      </Card>
    </div>
    <h3 class="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14 pt-8 gap-8">
      <Button
        class="w-full bg-blue-300 text-white hover:bg-blue-500 text-lg py-3"
        @click="onClickCancel()"
      >
        Cancel Current Subscription
      </Button>
    </h3>

  </section>
</template>

<script setup lang="ts">
import { ref, onBeforeMount, reactive} from 'vue';
import axios from 'axios';
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
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

enum PopularPlan {
  NO = 0,
  YES = 1,
}
const state = reactive({
  selectedPlan: '',
});
interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: number | string;
  benefitList: string[];
  description?: string;
}

const plans: PlanProps[] = [
  // {
  //   title: "Free",
  //   popular: PopularPlan.NO,
  //   price: 0,
  //   description: "Free plan",
  //   benefitList: [
  //     "5 Cleanings",
  //     "Metadata Removal",
  //   ],
  // },
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

const onClick = (plan: PlanProps) => {
  if (plan.title === "Free") {
    console.log("Free plan selected");
  } 
  else {
    const stripeLink = getStripeLink(plan);
    window.location.href = stripeLink;
  }
};

const getStripeLink = (plan: PlanProps) => {
  const stripeLinks: { [key: string]: string } = {
    "Kickstarter": `https://buy.stripe.com/test_5kA7uT5hkfBSf5ubII`,
    "Pro": `https://buy.stripe.com/test_dR6g1pdNQ2P6e1qfYZ`,
  };
  return stripeLinks[plan.title];
};

const onClickCancel = async() => {
  const email = localStorage.getItem('email');
  
  const response = await axios.post(`${import.meta.env.VITE_API_URL}/cancel`, {email: email});
  location.reload();
  state.selectedPlan = "Free";
}

const message = ref(''); // Reactive variable to hold payment status message

// Fetch payment status on component mount
onBeforeMount(async () => {
  console.log("mounted");
  const email = localStorage.getItem('email');
  
  const response = await axios.post(`${import.meta.env.VITE_API_URL}/get-credits`, {email: email});
  window.localStorage.setItem('credits', response.data.credits);
  try {

    const response = await axios.post(`${import.meta.env.VITE_API_URL}/payment-status`, {email: email});

    message.value = response.data.status;
    state.selectedPlan = response.data.plan; // Update selectedPlan using .value
    console.log(state.selectedPlan)
    console.log(message.value)

    if (message.value === 'success'){
      location.reload();

      toast.success("Payment was made successfully!", {
        autoClose: 2000,
      }); 
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/get-credits`, {email: email});
      window.localStorage.setItem('credits', response.data.credits);
    } else if (message.value === 'fail') {
      toast.error("Payment was failed!", {
        autoClose: 2000,
      }); 
    } else if (message.value === "cancel") {
      toast.info("Subscription is cancelled!", {
        autoClose: 2000,
      })
    }
    
  } catch (error) {
    console.error('Error fetching payment status:', error);
  }
});
</script>