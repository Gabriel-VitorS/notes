<script lang="ts" setup>
import { useFirebaseAuth } from 'vuefire';
import { signOut } from 'firebase/auth';
import { useNotesStore } from '@/stores/notes';
import { storeToRefs } from 'pinia';
import NotesCard from '@/components/ui/NotesCard.vue';
import { Cog, Plus,Search, SquareArrowRightExit } from "@lucide/vue";
import Dropdown from '@/components/ui/Dropdown.vue';
import { computed, ref } from 'vue';
 
const auth = useFirebaseAuth()
const notesStore = useNotesStore()

const {notes} = storeToRefs(notesStore)

const search = ref('')


const searchedNotes = computed(()=>{

    if(search.value == '') return notes.value

    const term = search.value.toLocaleLowerCase()
    
    return notes.value.filter(note =>{
        return (
            note.title?.toLocaleLowerCase().includes(term)
            ||
            note.content?.toLocaleLowerCase().includes(term)
        )
    })
})

</script>

<template>
    <div class="grid grid-rows-1 gap-y-15 p-3">
        
        <header class="grid md:grid-cols-2 grid-cols-1 h-12">

            <div class="grid md:grid-cols-2 grid-cols-1 gap-y-3">
                <div class="flex justify-between">
                    <div>

                        <h1 class="text-3xl">Minhas Notas</h1>
                    </div>

                    <div class="md:hidden">

                        <Dropdown
                        :drop-down-icon="Cog">
                            <button @click="signOut(auth!)" class="w-full flex justify-evenly rounded-[8px] py-2"><SquareArrowRightExit/> sair</button>
                            
                        </Dropdown>
                    </div>
                </div>
                <div class="relative">
                    <input type="text" placeholder="Pesquisar" v-model="search" class="bg-gray-200 border-0!" >
                    <Search class="absolute right-3 top-1"></Search>
                </div>
            </div>
            <div class="md:flex justify-end hidden">

                <Dropdown
                :drop-down-icon="Cog">
                    <button @click="signOut(auth!)" class="w-full flex justify-evenly rounded-[8px] py-2"><SquareArrowRightExit/> sair</button>
                    
                </Dropdown>
            </div>
        </header>

        <main 
        class="flex flex-wrap gap-x-3 gap-y-5 sm:justify-start"
        :class="{'justify-center': searchedNotes.length > 1}">
            
            <NotesCard
            v-for="note in searchedNotes"
            :color="note.color"
            :content="note.content"
            :created-at="note.createdAt"
            :title="note.title"
            :fixed="note.fixed"
            :key="note.id"
             />
        </main>
    </div>
    <div class="absolute  md:right-10 md:bottom-10 right-5 bottom-10 rounded-full cursor-pointer bg-[#006045]">
        <Plus :size="50" color="#FFFFFF"  stroke-width="1"></Plus>
    </div>
</template>