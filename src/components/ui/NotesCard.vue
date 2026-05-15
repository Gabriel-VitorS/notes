<script lang="ts" setup>
import type { Timestamp } from 'firebase/firestore';


defineProps<{
    color: string,
    content: string,
    createdAt: Timestamp,
    fixed: boolean,
    title: string
}>()
</script>

<template>
    <div
    class="p-3 h-[206px] w-[160px] rounded-[12px] cursor-pointer hover:-translate-0.5 transition-all"
    :style="{backgroundColor: color}">
        <section class="mb-3">
            <h2 class="font-medium truncate">{{ title}}</h2> 
        </section>
        <section class="h-full max-h-[145px] truncate-content">
           <p class="text-xs"> {{ content }}</p>
        </section>
    </div>
</template>

<style scoped>
    .truncate-content{
        display: -webkit-box;
        -webkit-line-clamp: 9;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
</style>