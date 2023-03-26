import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Produto } from "./produto";
import { Observable } from "rxjs";//javascript reativo é um callback

@Injectable() //Somente após importar o Injectable o angular reconhece como uma entidade injetavel
//deve depois registrar no módulo principal esse serviço

export class ProductoService {
    constructor(private http: HttpClient) {

    }
    protected UrlServiceV1: string = "http://localhost:3000/";

    obterProdutos(): Observable<Produto[]> {//Por ser assincrona, vc nao sabe quando o resultado chega voce atribui um Observable
        return this.http
            .get<Produto[]>(this.UrlServiceV1 + "produtos");
    }
}