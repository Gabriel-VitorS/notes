<script setup lang="ts">
// import { onMounted, ref } from 'vue';

// import {signInWithEmailAndPassword, getAuth, createUserWithEmailAndPassword,
//   GoogleAuthProvider, signInWithPopup, signOut
  
// } from "firebase/auth"

// import {addDoc, collection, doc, getDoc, setDoc} from 'firebase/firestore'
// import {db} from "@/firebase"

// import { useCollection, useCurrentUser, useFirebaseAuth, useFirebaseStorage  } from 'vuefire';
import { RouterView } from 'vue-router';

// const user = useCurrentUser()
// const auth = useFirebaseAuth()

// const email = ref('')
// const password = ref('')
// const content = ref('')

// function submit(){
//   console.log(password.value, email.value)

//   createUserWithEmailAndPassword(getAuth(), email.value, password.value)
//   .then((data)=>{
//     console.log(data)
//   })
// }

// function submit2(){
//   console.log(password.value, email.value)

//   signInWithEmailAndPassword(getAuth(), email.value, password.value)
//   .then((data)=>{
    
//   })
// }

// async function createInitialConfig(){
  
//   const userRef = doc(db, 'users', user.value?.uid!)
//   const userSnap = await getDoc(userRef)
  
//   if(!userSnap.exists()){
//     await setDoc(userRef, {
//       darkMode: false,
//       createdAt: new Date()
//     })
//   }
// }

// async function addNote(){
//   await addDoc(
//     collection(db, 'users', user.value?.uid!, 'notes'),
//     {
//       title: '',
//       content: content.value,
//       fixed: false,
//       createdAt: new Date()
//     })
  
// }

// const notes = ref<any>()

// async function buscarNotas(){

//   const notesRef = collection(db, 'users', user.value?.uid!, 'notes')
  
//   notes.value = useCollection(notesRef)
// }

// onMounted(async ( )=>{

//   console.log(notes.value)
// })


// function signInWithGoogle(){
//   const provider = new GoogleAuthProvider()
//   signInWithPopup(getAuth(), provider)
//   .then((data)=>{
//     console.log('sucessss')
//   })
//   .catch((error)=>{
//     console.log('erro')
//   })
// }

// function sair(){
//   signOut(auth!)
//   // auth
// }
</script>

<template>
  <!-- <h1 class="color-danger-500 border-blue-2">You did it</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <h1>cadastro</h1>
  <form @submit.prevent="submit">
    <label for="">e-mail</label>
    <input type="text" v-model="email" name="email" id="">
    <br>
    <label for="">password</label>
    <input type="text" v-model="password" class="border-solid border-1 border-blue-1" name="password" id="">
    <button class="m-1">Manda</button>
  </form>
  {{ password }}
  {{  }}
  {{ user?.email }}

  <h1>Login</h1>
  <form @submit.prevent="submit2">
    <label for="">e-mail</label>
    <input type="text" v-model="email" name="email" id="">
    <br>
    <label for="">password</label>
    <input type="text" v-model="password" class="border-solid border-1 border-blue-1" name="password" id="">
    <button type="button" @click="signInWithGoogle">Login com google</button>
    <button class="m-1">Manda</button>
  </form>
  <br>
  <button @click="sair" class="cursor-pointer border-solid border-1 p-1 m-12">sair</button>

  <button @click="createInitialConfig" class="cursor-pointer border-solid border-1 p-1 m-5">collection</button>

  <div>
    <input type="text" v-model="content" name="" id="">
    <button @click="addNote"">add notda</button>
  </div>
  <div>
    <button @click="buscarNotas">Buscar notas</button>
  </div>
  {{ notes?.data }} -->
  <RouterView></RouterView>
</template>

<style>
</style>
