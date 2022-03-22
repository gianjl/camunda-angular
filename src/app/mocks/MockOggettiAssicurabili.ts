import { Input } from "@angular/core";
import { Oggetto } from "../schemas/Oggetto";

export const OGGETTI_FAM: Oggetto[] = [
    { id: 'vita', nome: 'Assicurazione Vita', descrizione: 'aaaaaaaa', areaBisogno: 'famiglia' },
    { id: 'casa', nome: 'Assicurazione Immobile', descrizione: 'aaaaaaaa', areaBisogno: 'famiglia' }
]

export const OGGETTI_AUTO: Oggetto[] = [
    { id: 'rca', nome: 'Assicurazione RCA', descrizione: 'aaaaaaaa', areaBisogno: 'auto' },
    { id: 'furto-incendio', nome: 'Furto-Incendio', descrizione: 'aaaaaaaa', areaBisogno: 'auto' },
    { id: 'kasko', nome: 'KASKO', descrizione: 'aaaaaaaa', areaBisogno: 'auto' },
    { id: 'ambientali', nome: 'Danni Ambientali', descrizione: 'aaaaaaaa', areaBisogno: 'auto' }
]

export const OGGETTI_SCI: Oggetto[] = [
    { id: 'sci', nome: 'Assicurazione Neve', descrizione: 'aaaaaaaaaaaaaa', areaBisogno:'sci'}
]