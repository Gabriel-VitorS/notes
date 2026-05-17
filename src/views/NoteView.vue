<script setup lang="ts">
import router from '@/router';
import { useNotesStore } from '@/stores/notes';
import { storeToRefs } from 'pinia';
import { computed, onMounted, ref, watch } from 'vue';
import { EllipsisVertical, ArrowLeft, Trash } from '@lucide/vue';
import Dropdown from '@/components/ui/Dropdown.vue';
import { useToastStore } from '@/stores/toast';

const noteId = ref(`${router.currentRoute.value.params.id}`)

const noteStore = useNotesStore()
const {notes} = storeToRefs(noteStore)
const toastStore = useToastStore()
const selectedNote = computed(()=>{
    return notes.value.filter(note =>{
        return note.id == noteId.value
    })
})

const titleText = ref()
const contentText = ref()
const isFixed = ref(false)
const content = ref<HTMLElement | null>(null)

const selectedColor = ref('#E7E5E4')
const colors = ['#ECFDF5', '#FDE99D', '#D9E8FC', '#B0E9CA', '#FFD8F4', '#E7E5E4']


if(noteId.value != 'new')
    selectedColor.value = selectedNote.value[0]?.color!


function onInputTitle(e: InputEvent){
    const titleElement = e.target as HTMLElement
    titleText.value = titleElement.innerText
}

function onInputContent(e: InputEvent){
    const contentElement = e.target as HTMLElement
    contentText.value = contentElement.innerText
}

let timeout: any

watch([contentText, titleText, selectedColor], ()=>{

    clearTimeout(timeout)
    
    timeout = setTimeout( async ()=>{
        if(noteId.value == 'new')
            await addNote()
        else
            await updateNote()
    }, 1000)
})

function changeColor(color: string){
    selectedColor.value = color
}

async function updateNote(){

    await noteStore.updateNote({
        noteId: noteId.value,
        content: contentText.value,
        title: titleText.value,
        fixed: isFixed.value,
        color: selectedColor.value
    })

}

async function addNote() {
    try {
        
        const {id} = await noteStore.addNote({
            content: contentText.value,
            title: titleText.value,
            color: selectedColor.value
        })
    
        noteId.value = id
    } catch (error) {
        console.log(error)
        toastStore.error("Error ao atualizar nota")
    }
}

async function exlodeNote(noteId: string) {
    try {
        await noteStore.excludeNote(noteId)
        .then(()=>{
            router.push({name: 'notes'})
        })
        
    } catch (error) {
        console.log(error)
        toastStore.error("Error ao atualizar nota")
    }
}

onMounted(()=>{
    if(noteId.value == 'new')
        content.value?.focus()
})

</script>
<template>
    <div class="h-dvh" :style="{backgroundColor: selectedColor}">
        
        <main class="grid grid-rows-1 gap-y-7 p-3">
            <header class="flex justify-between">
                
                <RouterLink :to="{name: 'notes'}">
                    <ArrowLeft />
                </RouterLink> 
                
                <Dropdown
                :drop-down-icon="EllipsisVertical"
                >
                    <button 
                    :disabled="noteId == 'new'"
                    @click="exlodeNote(noteId)"
                    class="w-full flex justify-evenly rounded-[8px] py-2 hover:bg-emerald-200 transition">
                        <Trash/> Excluir
                    </button>

                    <div class="w-full grid grid-cols-2 gap-y-1 mt-5">
                        <div 
                        @click="changeColor(color)"
                        v-for="color in colors"
                        :style="{backgroundColor: color}"
                        :class="{'border-emerald-400': selectedColor == color}"
                        class="h-[50px] w-[50px] border border-amber-50 rounded-full m-auto cursor-pointer hover:border-emerald-400 transition">
                        </div>
                    </div>
                </Dropdown>
            </header>
            <section class="md:flex md:justify-center">
                <div class="md:w-[600px]">

                    <h1
                    ref="title" 
                    @input="onInputTitle"
                    contenteditable="true"
                    class="focus:outline-none mb-2 text-xl font-medium"
                    data-placeholder="Título"
                    id="title">
                        {{ selectedNote[0]?.title }}
                    </h1>
                    <p ref="content"
                     contenteditable="true"
                     @input="onInputContent"
                     class="focus:outline-none whitespace-pre-wrap">
                        {{ selectedNote[0]?.content }}
                    </p>
                </div>
            </section>
        </main>
    </div>
</template>

<style scoped>
#title[contenteditable=true]:empty:before {
  content: attr(data-placeholder);
  color: #888;
  display: block; 
}
</style>