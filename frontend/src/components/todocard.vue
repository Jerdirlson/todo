<template>
    <div class="border flex-col w-full p-2" :style="{'border-color' : task?.color}">
        <div class="flex flex-col w-4/5">
            <span class="font-bold text-lg">
                {{ task?.title }}
            </span>
            <span class="text-lg">
                {{ task?.description }}
            </span>
        </div>

        <div class="flex flex-col w-1/5">

        </div>
    </div>

</template>

<script setup lang="ts">

interface todoProps{
    task?:{
        id : string,
        title : string,
        description? : string,
        color? : string
    }
    
}

const todoProps = defineProps<todoProps>();

</script>