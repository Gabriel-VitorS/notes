import type { Timestamp } from "firebase/firestore";

export interface Notes {
    color: string,
    content: string,
    createdAt: Timestamp,
    fixed: boolean,
    title: string
}