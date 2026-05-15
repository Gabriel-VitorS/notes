import { db } from "@/firebase";
import type { Notes } from "@/interfaces";
import { collection} from "firebase/firestore";
import { defineStore } from "pinia";
import { computed } from "vue";
import { useCollection, useCurrentUser } from "vuefire";

export const useNotesStore = defineStore('notes',()=>{

    const user = useCurrentUser()

    const notesRef = computed(()=>{
        return collection(db, 'users', user.value?.uid!, 'notes')
    })

    const notes = useCollection<Notes>(notesRef)

    return {notes}
})