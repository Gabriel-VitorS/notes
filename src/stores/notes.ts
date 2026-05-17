import { db } from "@/firebase";
import type { Notes, NoteStore, NoteUpdate } from "@/interfaces";
import { addDoc, collection, deleteDoc, doc, updateDoc} from "firebase/firestore";
import { defineStore } from "pinia";
import { computed } from "vue";
import { useCollection, useCurrentUser } from "vuefire";

export const useNotesStore = defineStore('notes',()=>{

    const user = useCurrentUser()

    const notesRef = computed(()=>{
        return collection(db, 'users', user.value?.uid!, 'notes')
    })

    const notes = useCollection<Notes>(notesRef)

    async function updateNote(noteParams: NoteUpdate){
        const noteRef = doc(
            db, 
            'users', 
            user.value?.uid!, 
            'notes', 
            noteParams.noteId)
        
        const payload: any = {}

        if(noteParams.title != undefined)
            payload.title = noteParams.title

        if(noteParams.content != undefined)
            payload.content = noteParams.content

        payload.fixed = false
        payload.color = noteParams.color
        return await updateDoc(noteRef,payload)
    }

    async function addNote(noteParams: NoteStore) {

        const payload: any = {}

        if(noteParams.title != undefined)
            payload.title = noteParams.title

        if(noteParams.content != undefined)
            payload.content = noteParams.content

        payload.fixed = false
        payload.color = noteParams.color
        payload.createdAt = new Date()

        return await addDoc(
            collection(          
            db,
            'users',
            user.value?.uid!,
            'notes'),
            payload
        )
    }

    async function excludeNote(noteId: string) {
        const noteRef = doc(
            db, 
            'users', 
            user.value?.uid!, 
            'notes', 
            noteId)
        
        return await deleteDoc(noteRef)
    }

    return {notes, updateNote, addNote, excludeNote}
})