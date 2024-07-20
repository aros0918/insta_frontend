<template>
    <div class="auth">
        <RouterView />
    </div>
</template>

<script setup lang="ts">
import { useColorMode } from '@vueuse/core';

const mode = useColorMode();
mode.value = 'dark';
</script>

<style lang="css">
.auth {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
