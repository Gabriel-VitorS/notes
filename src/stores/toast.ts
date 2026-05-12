import {defineStore} from 'pinia'
import { useToast, TYPE, } from "vue-toastification";

const toast = useToast();

export const useToastStore = defineStore('toast', {
    actions: {
        success(message: string) {
            toast(message, { type: TYPE.SUCCESS,});
        },
        error(message: string) {
            toast(message, { type: TYPE.ERROR });
        },
        info(message: string) {
            toast(message, { type: TYPE.INFO });
        },
        warning(message: string) {
            toast(message, { type: TYPE.WARNING });
        }
    }
})
