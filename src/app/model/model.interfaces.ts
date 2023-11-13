import { HttpErrorResponse } from "@angular/common/http";

export interface Sort {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
}

export interface Pageable {
    sort: Sort;
    offset: number;
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    unpaged: boolean;
}

export interface IPage<T> {
    content: T[];
    pageable: Pageable;
    totalPages: number;
    totalElements: number;
    last: boolean;
    size: number;
    number: number;
    sort: Sort;
    first: boolean;
    numberOfElements: number;
    empty: boolean;

    strSortField: string;
    strSortDirection: string;
    strFilter: string;
    strFilteredTitle: string;
    strFilteredMessage: string;
    nRecords: number;
}

export interface IEntity {
    id: number,
}

export interface IPokemon extends IEntity {
    nombre: string,
    tipo1: string,
    tipo2: string,
    ataque1: string,
    ataque2: string,
    ataque3: string,
    ataque4: string,
    ataque: number,
    defensa: number,
    velocidad: number,
    salud: number,
    defensa_especial: number,
    ataque_especial: number,
    objeto: number,
    habilidad: string,
    naturaleza: string,
    nivel : number
}

export interface IPokemonPage extends IPage<IPokemon> {
}

export interface IEquipo extends IEntity {
    nombre: string,
    descripcion: string,
    pokemon: IPokemon,
    entrenador: IEntrenador
}

export interface IEquipoPage extends IPage<IEquipo> {
}

export interface IEntrenador extends IEntity {
    email: string,
    username: string,
    password: string,
    role: boolean
}

export interface IEntrenadorPage extends IPage<IEntrenador> {
}

export type formOperation = 'EDIT' | 'NEW';

export interface SessionEvent {
    type: string;
}

export interface IToken {
    jti: string;
    iss: string;
    iat: number;
    exp: number;
    name: string;
}