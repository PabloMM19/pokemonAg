import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPokemon, IPokemonPage } from '../model/model.interfaces';
import { API_URL } from 'src/environment/environment';

@Injectable()
export class PokemonAjaxService {

    sUrl: string = API_URL + "/pokemon";

    constructor(
        private oHttpClient: HttpClient
    ) { }

    getOne(id: number): Observable<IPokemon> {
        return this.oHttpClient.get<IPokemon>(this.sUrl + "/" + id);
    }

    getPage(size: number | undefined, page: number | undefined, orderField: string, orderDirection: string): Observable<IPokemonPage> {
        if (!size) size = 10;
        if (!page) page = 0;
        return this.oHttpClient.get<IPokemonPage>(this.sUrl + "?size=" + size + "&page=" + page + "&sort=" + orderField + "," + orderDirection);
    }

    removeOne(id: number | undefined): Observable<number> {
        if (id) {
            return this.oHttpClient.delete<number>(this.sUrl + "/" + id);
        } else {
            return new Observable<number>();
        }
    }

    newOne(oUser: IPokemon): Observable<IPokemon> {
        return this.oHttpClient.post<IPokemon>(this.sUrl, oUser);
    }

    updateOne(oUser: IPokemon): Observable<IPokemon> {
        return this.oHttpClient.put<IPokemon>(this.sUrl, oUser);
    }

}