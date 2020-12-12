import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuideService {

  guideUrl = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) { }

  // fonction teb3a lbase de donné reel 
  getAllGuides() {
    return this.httpClient.get<{ message: string, guides: any }>(`${this.guideUrl}/allGuides`);

  }

  deleteGuide(id: string) {
    return this.httpClient.delete(`${this.guideUrl}/deleteGuide/${id}`);
  }
  addGuide(guide: any) {
    
    return this.httpClient.post(`${this.guideUrl}/addGuide`, guide);
  }
  editGuide(guide: any) {
    return this.httpClient.put(`${this.guideUrl}/editGuide/${guide._id}`, guide);
  }
  getGuideById(id: string) {
    return this.httpClient.get<{ guide: any }>(`${this.guideUrl}/displayGuide/${id}`);
    // 9a3din ne9blo fi reponse sous format json 5ater naba3tho sous format json
  }
  searchGuide(term: any) {
    return this.httpClient.get<{ searchedMatches: any }>(`${this.guideUrl}/api/search/${term}`)
  }
}
