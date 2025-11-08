import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Contatc } from "../models/contact.model";

@Injectable ({providedIn: 'root'})
export class ContactService {
    private apiUrl = 'http://caiovcpdev-api.runasp.net/api/Contact/send';

    constructor (private http: HttpClient) {}

    sendContact(data: Contatc): Observable <Contatc> {
        return this.http.post<Contatc>(this.apiUrl, data);
    }
}