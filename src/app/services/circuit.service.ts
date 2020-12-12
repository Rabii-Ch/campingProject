import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CircuitService {

  circuitUrl = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) { }

  // fonction teb3a lbase de donné reel 
  getAllCircuit() {
    return this.httpClient.get<{ message: string, circuits: any }>(`${this.circuitUrl}/allCircuit`);

  }

  deleteCircuit(id: string) {
    return this.httpClient.delete(`${this.circuitUrl}/deleteCircuit/${id}`);
  }
  addCircuit(circuit: any) {
    
    return this.httpClient.post(`${this.circuitUrl}/addCircuit`, circuit);
  }
  editCircuit(circuit: any) {
    return this.httpClient.put(`${this.circuitUrl}/editCircuit/${circuit._id}`, circuit);
  }
  getCircuitById(id: string) {
    return this.httpClient.get<{ circuit: any }>(`${this.circuitUrl}/displayCircuit/${id}`);
    // 9a3din ne9blo fi reponse sous format json 5ater naba3tho sous format json
  }
  searchCircuit(term: any) {
    return this.httpClient.get<{ searchedMatches: any }>(`${this.circuitUrl}/api/search/${term}`)
  }

}
