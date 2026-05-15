<script setup lang="ts">
import { ref } from 'vue';



const dropDownGroup = ref(null)
const hideDropdown = ref(true)

defineProps<{
    dropDownIcon: Function
}>()

function showDrop(){
    hideDropdown.value =false
}

function hideDrop(){
    hideDropdown.value =true
}
</script>

<template>

<div v-if="!hideDropdown" @click="hideDrop"
 class=" top-0 right-0 w-dvw absolute h-dvh backdrop-blur-[2px]">

</div>

<div class="group">
    <component :is="dropDownIcon" @click="showDrop"
    class="cursor-pointer" />
    
    <div ref="dropDownGroup" class="absolute right-5 z-10 bg-grey-200" :class="{'hidden': hideDropdown}">
        <div class="px-2 pt-2 pb-2 bg-slate-100 shadow-dropdown rounded-[12px] w-[170px]">
            <slot></slot>  
        </div>
    </div>
    
</div>


</template>

<style scoped>

.shadow-dropdown{
    box-shadow: 0px 0px 20.2px 2px rgba(0, 0, 0, 0.15);
    border-radius: 12px;

}

/* Observação: filtro de pano de fundo tem suporte de navegação mínimo */
</style>