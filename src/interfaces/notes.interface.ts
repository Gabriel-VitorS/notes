import type { Timestamp } from "firebase/firestore";

export interface Notes {
    color: string,
    content: string,
    createdAt: Timestamp,
    fixed: boolean,
    title: string
}

export interface NoteUpdate{
    noteId: string,
    title: string
    content: string,
    fixed: boolean,
    color: string
}

export interface NoteStore{
    title: string
    content: string,
    color: string
}