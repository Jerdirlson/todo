<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import boton from '../components/boton.vue'
import headerc from '@/components/header.vue';
import todocard from '@/components/todocard.vue';



</script>

<template>
  <headerc text="Welcome to TODOLISTAPP" color="primary"/>
  <div class="flex w-full flex-col relative">
    <div class="flex w-full flex-wrap p-5">
      <div class="w-full flex justify-end">
        <boton title="Add to TODO" color="primary"/>
      </div>
    </div>

    <div class="flex flex-row flex-wrap">
      <div class="flex w-1/3  flex-col  items-center">
        <div class="w-4/5 p-4 flex flex-col items-center bg-secondary shadow-lg rounded-lg ">
          <div class="text-xl">
            Pendientes
          </div>
        </div>
      </div>

      <div class="flex w-1/3 flex-wrap flex-col justify-center items-center">
        <div class="w-4/5 p-4 flex flex-col items-center bg-secondary shadow-lg rounded-lg ">
          <div class="text-xl ">
            Progreso
          </div>
        </div>
      </div>

      <div class="flex w-1/3 flex-wrap flex-col justify-center items-center">
        <div class="w-4/5 p-4 flex flex-col items-center bg-secondary shadow-lg rounded-lg ">
          <div class="text-xl ">
            Terminadas
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-row">
      <div class="flex w-1/3  flex-col  items-center p-3">
        <div class="w-full p-4 flex flex-col items-center bg-slate-300 shadow-lg rounded-lg ">

        </div>
      </div>

      <div class="flex w-1/3  flex-col  items-center p-3">
        <div class="w-full p-4 flex flex-col items-center bg-slate-300 shadow-lg rounded-lg ">

        </div>
      </div>

      <div class="flex w-1/3  flex-col  items-center p-3">
        <div class="w-full p-4 flex flex-col items-center bg-slate-300 shadow-lg rounded-lg ">  

        </div>
      </div>
    </div>
  </div>
</template>
