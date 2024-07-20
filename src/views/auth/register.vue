<template>
    <div class="register">
        <Card class="mx-auto max-w-sm">
            <CardHeader>
                <CardTitle class="text-xl"> Registration </CardTitle>
                <CardDescription> Enter your information to create an account </CardDescription>
            </CardHeader>
            <CardContent>
                <form class="grid gap-4" @submit="onFormSubmit">
                    <div class="grid gap-2">
                        <Label for="email">Email</Label>
                        <Input id="email" type="email" placeholder="m@example.com" required v-model="email" />
                    </div>
                    <div class="grid gap-2">
                        <Label for="password">Password</Label>
                        <Input id="password" type="password" required v-model="password" />
                    </div>
                    <Button type="submit" class="w-full" :disabled="loading">
                        <template v-if="loading">
                            <Loader2 class="w-4 h-4 mr-2 animate-spin" />
                            Creating account..
                        </template>
                        <template v-else> Create an account </template>
                    </Button>
                </form>
                <div class="mt-4 text-center text-sm">
                    Already have an account?
                    <router-link to="/login" class="underline"> Login</router-link>
                </div>
            </CardContent>
        </Card>
    </div>
</template>

<script setup lang="ts">
import { Loader2 } from 'lucide-vue-next';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const loading = ref(false);

const router = useRouter();
const onFormSubmit = async (event: Event) => {
    loading.value = true;
    try {
        event.preventDefault();

        const response = await axios.post(`${import.meta.env.VITE_API_URL}/register`, {
            email: email.value,
            password: password.value,
        });

        const token = response.data.data.token;
        const credits = response.data.data.credits;
        
        window.localStorage.setItem('token', token);
        window.localStorage.setItem('email', email.value);
        window.localStorage.setItem('credits', credits);

        router.push('/app');
    } catch (error) {
        alert('Error accured in registration');
    }
    loading.value = false;
};
</script>

<style lang="css">
.register {
    height: 100vh;
    display: flex;
    align-items: center;
}
</style>
