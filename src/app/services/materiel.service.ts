import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MaterielService {

  materielUrl = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) { }

  // fonction teb3a lbase de donné reel 
  getAllMateriels() {
    return this.httpClient.get<{ message: string, materiels: any }>(`${this.materielUrl}/allMateriels`);

  }

  deleteMateriel(id: string) {
    return this.httpClient.delete(`${this.materielUrl}/deleteMateriel/${id}`);
  }
  addMateriel(materiel: any) {
    
    return this.httpClient.post(`${this.materielUrl}/addMateriel`, materiel);
  }
  editMateriel(materiel: any) {
    return this.httpClient.put(`${this.materielUrl}/editMateriel/${materiel._id}`, materiel);
  }
  getMaterielById(id: string) {
    return this.httpClient.get<{ materiel: any }>(`${this.materielUrl}/displayMateriel/${id}`);
    // 9a3din ne9blo fi reponse sous format json 5ater naba3tho sous format json
  }
  searchMateriel(term: any) {
    return this.httpClient.get<{ searchedMatches: any }>(`${this.materielUrl}/api/search/${term}`)
  }
}
