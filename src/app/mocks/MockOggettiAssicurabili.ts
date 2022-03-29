import { Input } from "@angular/core";
import { Oggetto } from "../schemas/Oggetto";

export const OGGETTI_FAM: Oggetto[] = [
    new Oggetto('vita', 'Assicurazione Vita', 'aaaaaaaa', 'famiglia'),
    new Oggetto('casa', 'Assicurazione Immobile', 'aaaaaaaa', 'famiglia')
]

export const OGGETTI_AUTO: Oggetto[] = [
    new Oggetto( 'rca', 'Assicurazione RCA', 'aaaaaaaa', 'auto', ),
    new Oggetto( 'furto-incendio', 'Furto-Incendio', 'aaaaaaaa', 'auto'),
    new Oggetto( 'kasko', 'KASKO', 'aaaaaaaa', 'auto'),
    new Oggetto( 'ambientali', 'Danni Ambientali', 'aaaaaaaa', 'auto')
]

export const OGGETTI_SCI: Oggetto[] = [
    new Oggetto( 'sci', 'Assicurazione Neve', 'aaaaaaaaaaaaaa', 'sci')
]