import type { FirebaseError } from "firebase/app";

export function CatchErrosAuth(error: FirebaseError): string{
    console.log(error.code)
    const code = error.code

    switch(code){
        case 'auth/invalid-email':
            return 'E-mail inválido'
        case 'auth/user-disabled':
            return 'Conta desativada'
        case 'auth/user-not-found':
            return 'Não há usuário registrado com esse e-mail'
        case 'auth/wrong-password':
            return 'Senha inválida'
        case 'auth/email-already-in-use':
            return 'E-mail já cadastrado'
        case 'auth/weak-password':
            return 'Senha muito fraca'
        case 'auth/too-many-requests':
            return 'Muitas solicitações bloqueadas por atividade suspeita'
        case 'auth/popup-closed-by-user':
            return 'Error ao fazer login'
        case 'auth/invalid-credential':
            return 'E-mail ou senha incorretos'
        default:
            return 'Contante o suporte'
    }
}