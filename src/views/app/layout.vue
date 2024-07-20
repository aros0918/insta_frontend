<!-- YourLayout.vue -->

<template>
  <div class="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
    <!-- Left Sidebar (Navigation) -->
    <div class="hidden border-r bg-muted/40 md:block">
      <!-- Sidebar Content -->
      <div class="flex h-full max-h-screen flex-col gap-2">
        <!-- Logo and Title -->
        <div class="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <a href="/" class="flex items-center gap-2 font-semibold">
            <Package2 class="h-6 w-6" />
            <span>ClipBoost</span>
          </a>
        </div>
        <!-- Navigation Links -->
        <div class="flex-1">
          <nav class="grid items-start px-2 text-sm font-medium lg:px-4">
            <router-link
              to="/app"
              class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Home class="h-4 w-4" />
              Metadata Cleaner
            </router-link>
            <router-link
              to="/subscription"
              class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <Home class="h-4 w-4" />
              Subscription Page
            </router-link>
          </nav>
        </div>
        <!-- User Information -->
       
      </div>
    </div>
    <!-- Main Content Area -->
    <div class="flex flex-col">
      <!-- Header -->
      <header class="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
        <!-- Mobile Menu Button -->
        <Sheet>
          <SheetTrigger as-child>
            <Button variant="outline" size="icon" class="shrink-0 md:hidden">
              <Menu class="h-5 w-5" />
              <span class="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <!-- Side Sheet Content -->
          <SheetContent side="left" class="flex flex-col">
            <!-- App Logo and Title -->
            <nav class="grid gap-2 text-lg font-medium">
              <a href="#" class="flex items-center gap-2 text-lg font-semibold">
                <Package2 class="h-6 w-6" />
                <span class="sr-only">Instagram Bot</span>
              </a>
              <router-link
                to="/app"
                class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
              >
                <Home class="h-5 w-5" />
                Downloader
              </router-link>
            </nav>
            <!-- Upgrade Card -->
            <div class="mt-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Upgrade to Pro</CardTitle>
                  <CardDescription>
                    Unlock all features and get unlimited access to our support team.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button size="sm" class="w-full">Upgrade</Button>
                </CardContent>
              </Card>
            </div>
          </SheetContent>
        </Sheet>
        <!-- Spacer -->
        <div class="w-full flex-1"></div>
        <!-- User Dropdown Menu -->
        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <Button variant="secondary" size="icon" class="rounded-full">
              <CircleUser class="h-5 w-5" />
              <span class="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account <br><span class="font-medium">{{ userEmail }}</span> </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>{{ credits }} credits</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem @click="onLogoutClick">Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <!-- Main Content -->
      <main class="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CircleUser, Home, Menu, Package2 } from 'lucide-vue-next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useRouter } from 'vue-router';

import { useColorMode } from '@vueuse/core';
import { ref, onMounted } from 'vue';

const mode = useColorMode();
mode.value = 'dark';

const router = useRouter();
const userEmail = ref('');
const credits = ref(parseInt(localStorage.getItem('credits') ?? '0'));

// Fetch user email and credits from localStorage on component mount
onMounted(() => {
  userEmail.value = localStorage.getItem('email') ?? '';
  credits.value = parseInt(localStorage.getItem('credits') ?? '0');
});

const onLogoutClick = () => {
  window.localStorage.clear();
  router.push('/login');
};

</script>

<style scoped>
/* Add your scoped styles here */
</style>
