<template>
    <span
    class="text-white px-4 py-2 rounded font-bold cursor-pointer hover:bg-opacity-80 hover:text-black duration-200"
    :class="botonProps.color ? `bg-${botonProps.color}` : `bg-primary`"
    >
    {{ botonProps.title }}
    </span>
</template>


<script setup lang="ts">
    
    interface botonProps {
        title: string
        color?: "primary" | "secondary" | "third";
    }

const botonProps = defineProps<botonProps>();

</script>