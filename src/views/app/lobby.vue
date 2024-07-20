<template>
    <div class="instagram">
        <div class="flex items-center mb-6">
            <h1 class="text-lg font-semibold md:text-2xl">Instagram Tools</h1>
        </div>
        <div class="grid gap-6">
            <Card>
                <CardHeader>
                    <CardTitle>Instagram Reel Cleaner</CardTitle>
                    <CardDescription>Enter reel URL to clean the video.</CardDescription>
                </CardHeader>
                <form @submit="onBasicFormSubmit">
                    <CardContent>
                        <Input placeholder="Reel URL" required v-model="url" />
                    </CardContent>
                    <CardFooter class="border-t px-6 py-4 flex-col items-center">
                        <Button type="submit" :disabled="loading || credits.value === 0" class="w-32">
                            <template v-if="loading">
                                <Loader2 class="w-4 h-4 mr-2 animate-spin" />
                                Cleaning...
                            </template>
                            <template v-else> Clean </template>
                        </Button>
                        <p v-if="loading" class="text-sm text-muted-foreground mt-2">
                            {{ countdown }}s left
                        </p>
                        <p class="text-sm text-muted-foreground mt-2 text-center">
                            After cleaning, your video will be downloaded. Check your downloads folder.
                        </p>
                    </CardFooter>
                </form>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Instagram Profile Scraper</CardTitle>
                    <CardDescription>Clean metadata for multiple videos.</CardDescription>
                </CardHeader>
                <form @submit="onProfileFormSubmit">
                    <CardContent>
                        <Input placeholder="Instagram Username" type="text" required v-model="username" />
                        <Input class="mt-4" placeholder="Instagram Password" type="password" required v-model="password" />
                        <Input
                            class="mt-4"
                            placeholder="Target Username"
                            type="text"
                            required
                            v-model="targetUsername"
                        />
                        <Input class="mt-4" placeholder="Max Reels" type="number" required v-model="maxReels" />
                    </CardContent>
                    <CardFooter class="border-t px-6 py-4 flex-col items-center">
                        <Button type="submit" :disabled="profileLoading || credits.value === 0" class="w-32">
                            <template v-if="profileLoading">
                                <Loader2 class="w-4 h-4 mr-2 animate-spin" />
                                Cleaning..
                            </template>
                            <template v-else> Clean </template>
                        </Button>
                        <p class="text-sm text-muted-foreground mt-2 text-center">
                            After cleaning, your videos will be downloaded as a zip file. Check your downloads folder.
                        </p>
                    </CardFooter>
                </form>
            </Card>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Loader2 } from 'lucide-vue-next';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

import axios from 'axios';
import { ref, reactive } from 'vue';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
const url = ref('');
const username = ref('');
const password = ref('');
const maxReels = ref<string | number>('');
const loading = ref(false);
const profileLoading = ref(false);
const credits = ref<number>(parseInt(window.localStorage.getItem('credits') || '0'));
const state = reactive({
  creditNum: credits,
});
const onBasicFormSubmit = async (event: Event) => {
    if (state.creditNum === 0) {
        event.preventDefault();
        toast.info("Please subscribe to the Plans!", {
            autoClose: 2000,
        }); 
        setTimeout(() => {
            window.location.assign('/subscription');
        }, 3000); 
    } else {
        loading.value = true;
        try {
            event.preventDefault();
            startCountdown(50);

            const response = await axios.post(
                `${import.meta.env.VITE_API_URL}/download`,
                {
                    reelUrl: url.value,
                },
                {
                    headers: {
                        Authorization: `Bearer ${window.localStorage.getItem('token')}`,
                    },
                    responseType: 'blob',
                }
            );

            downloadFile(response.data);
            decreaseCredits();
        } catch (error) {
            alert('Error occurred in download process');
        }
        loading.value = false;
    }
};

const onProfileFormSubmit = async (event: Event) => {
    if (state.creditNum === 0) {
        event.preventDefault();
        toast.info("Please subscribe to the Plans!", {
            autoClose: 2000,
        }); 
        setTimeout(() => {
            window.location.assign('/subscription');
        }, 3000); 
    } else {
        profileLoading.value = true;
        try {
            event.preventDefault();
            maxReels.value = maxReels.value || 1;
            startCountdown(<number>maxReels.value * 50);

            const response = await axios.post(
                `${import.meta.env.VITE_API_URL}/download`,
                {
                    username: username.value,
                    password: password.value,
                    maxReels: maxReels.value,
                    targetUsername: targetUsername.value,
                },
                {
                    headers: {
                        Authorization: `Bearer ${window.localStorage.getItem('token')}`,
                    },
                    responseType: 'blob',
                }
            );

            downloadFile(response.data);
            decreaseCredits();
        } catch (error) {
            alert('Error occurred in download process');
        }
        profileLoading.value = false;
    }
};

const timer = ref();
const countdown = ref(0);
const startCountdown = (max: number) => {
    if (countdown.value > 0) return;

    countdown.value = max; // Set initial countdown value
    timer.value = setInterval(() => {
        if (countdown.value > 0) {
            countdown.value--;
        } else {
            clearInterval(timer.value);
        }
    }, 1000);
};

const downloadFile = (data: any) => {
    const href = URL.createObjectURL(data);
    const link = document.createElement('a');
    link.href = href;
    link.setAttribute('download', 'reels.zip');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(href);
};

const decreaseCredits = async() => {
    if (credits.value > 0) {
        credits.value--;
        console.log("drecresea", credits.value);
        const email = localStorage.getItem('email');
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/update-credits`, {email: email, credits: credits.value});
        credits.value = response.data.credits;
        state.creditNum = response.data.credits;
        console.log("drecresea", credits.value);
        window.localStorage.setItem('credits', credits.value.toString());
        location.reload();
        checkCreditsAndToggleDisplay();
    } else {
        console.log("drecresea", credits.value);
    }
};
const checkCreditsAndToggleDisplay = () => {
  const instagramSection = document.querySelector('.instagram');
  if (instagramSection) {
    instagramSection.style.display = credits.value === 0 ? 'none' : '';
  }
};
</script>

<style>
/* Add your styles here */
</style>