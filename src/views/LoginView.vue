<script lang="ts" setup>
import DefaultInput from '@/components/inputs/DefaultInput.vue';
import type { Login } from '@/interfaces';
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import {signInWithEmailAndPassword, getAuth,
  GoogleAuthProvider, signInWithPopup  } from "firebase/auth"
import LogoGoogleIcon from '@/components/icons/LogoGoogleIcon.vue';
import Spinner from '@/components/ui/Spinner.vue';
import { ref } from 'vue';
import router from '@/router';
import type { FirebaseError } from 'firebase/app';
import { CatchErrosAuth } from '@/components/utils';
import { useToastStore } from '@/stores/toast';



const {handleSubmit} = useForm<Login>({
    validationSchema: yup.object({
        email: yup.string().required("Campo obrigatório").email("E-mail inválido"),
        password: yup.string().required('Senha é obrigatória'),
    })
})

const loaderSpinner = ref(false)

const onSubmit = handleSubmit(async( values)=>{
    
    loaderSpinner.value = true
    signInWithEmailAndPassword(getAuth(), values.email, values.password)
    .then((data)=>{
        router.push({name: 'notes'})
    })
    .catch((error: FirebaseError)=>{
        useToastStore().error(CatchErrosAuth(error))
    })
    .finally(()=>{
        loaderSpinner.value = false
    })
})

function signInWithGoogle(){

    loaderSpinner.value = true

    const provider = new GoogleAuthProvider()

    signInWithPopup(getAuth(), provider)
    .then((data)=>{
        router.push({name: 'notes'})
    })
    .catch((error)=>{
        useToastStore().error(CatchErrosAuth(error))
    })
    .finally(()=>{
        loaderSpinner.value = false
    })
}

</script>

<template>
    <main class="h-dvh flex flex-col justify-center items-center">

        <div class="max-w-[500px] p-5 w-full sm:border rounded-[8px]">

            <form @submit.prevent="onSubmit" class="flex flex-col p-5 gap-5">
                <h1 class="text-5xl">Entrar</h1>
                <fieldset class="flex flex-col gap-2">

                    <DefaultInput
                    name="email"
                    label="E-mail"
                    type="email"
                    :required="true"/>
                </fieldset>
                
                <fieldset class="flex flex-col gap-2">

                    <DefaultInput
                    name="password"
                    label="Senha"
                    type="password"
                    :required="true"/>
                </fieldset>
        
                <button
                type="submit"
                :disabled="loaderSpinner"
                class="bg-emerald-800 hover:bg-emerald-900 transition text-white rounded-[8px] h-9 mt-4 flex justify-center items-center ">
                    <Spinner v-if="loaderSpinner" class="me-3" />
                    Entrar
                </button>

                <button type="button"
                @click="signInWithGoogle"
                :disabled="loaderSpinner"
                class="bg-neutral-100 hover:bg-neutral-200 transition rounded-[8px] h-9 border flex justify-center items-center -mt-2">
                    <LogoGoogleIcon class="me-3"/>
                    Entrar com Google
                </button>

            </form>
            <div class="flex justify-center">
                <RouterLink class="text-sm text-blue-500" :to="{name: 'register'}">
                    Não tem conta? cadastre-se
                </RouterLink>
            </div>
        </div>
    </main>

    
</template>
