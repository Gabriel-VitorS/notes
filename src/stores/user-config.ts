import type { CreateUserConfig } from "@/interfaces";
import { defineStore } from "pinia";

import { doc, getDoc, setDoc} from 'firebase/firestore'
import {db} from "@/firebase"
import { useCurrentUser} from 'vuefire';
import { useToastStore } from "./toast";

export const useUserConfigStore = defineStore('userConfig', ()=>{
    const user = useCurrentUser()
    
    async function verifyIfUserConfigExistAndCreate(userConfig:CreateUserConfig) {
        const userRef = doc(db, 'users', user.value?.uid!)
        const userSnap = await getDoc(userRef)

        if(!userSnap.exists()){
            await setDoc(userRef, userConfig)
            .catch((error)=>{
                console.log(error)
                useToastStore().error('Erro ao salvar configuração do usuário')
            })
        }
    }

    return {verifyIfUserConfigExistAndCreate}
})