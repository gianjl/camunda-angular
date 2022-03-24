import { Input } from "@angular/core";
import { Oggetto } from "../schemas/Oggetto";

export const OGGETTI_FAM: Oggetto[] = [
    { idOggetto: 'vita', nomeOggetto: 'Assicurazione Vita', descrizioneOggetto: 'aaaaaaaa', areaBisogno: 'famiglia' },
    { idOggetto: 'casa', nomeOggetto: 'Assicurazione Immobile', descrizioneOggetto: 'aaaaaaaa', areaBisogno: 'famiglia' }
]

export const OGGETTI_AUTO: Oggetto[] = [
    { idOggetto: 'rca', nomeOggetto: 'Assicurazione RCA', descrizioneOggetto: 'aaaaaaaa', areaBisogno: 'auto' },
    { idOggetto: 'furto-incendio', nomeOggetto: 'Furto-Incendio', descrizioneOggetto: 'aaaaaaaa', areaBisogno: 'auto' },
    { idOggetto: 'kasko', nomeOggetto: 'KASKO', descrizioneOggetto: 'aaaaaaaa', areaBisogno: 'auto' },
    { idOggetto: 'ambientali', nomeOggetto: 'Danni Ambientali', descrizioneOggetto: 'aaaaaaaa', areaBisogno: 'auto' }
]

export const OGGETTI_SCI: Oggetto[] = [
    { idOggetto: 'sci', nomeOggetto: 'Assicurazione Neve', descrizioneOggetto: 'aaaaaaaaaaaaaa', areaBisogno:'sci'}
]