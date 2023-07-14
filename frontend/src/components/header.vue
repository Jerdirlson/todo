<template>
    <div class="w-full h-20 flex justify-between"
    :class="headerProps.color ? `bg-${headerProps.color}` : `bg-primary`">
        <div class="w-1/4 flex font-bold flex-wrap justify-center items-center h-20">
            {{ headerProps.text }}
        </div>
        <div class="w-1/4 flex justify-end items-center">
            component para cambiar idioma o nigth mode
        </div>

    </div>
</template>

<script setup lang="ts">

interface headerProps {
        text : string,
        color?: "primary" | "secondary" | "third";
    }

const headerProps = defineProps<headerProps>();
    
</script>