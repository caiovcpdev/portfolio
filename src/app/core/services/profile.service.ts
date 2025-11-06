import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Profile } from "../models/profile.model";

@Injectable ({providedIn: 'root'})
export class ProfileService {
    private apiUrl = 'https://localhost:7076/api/Profile';

    constructor (private http: HttpClient) {}

    getProfile(): Observable <Profile> {
        return this.http.get<Profile>(this.apiUrl);
    }
}