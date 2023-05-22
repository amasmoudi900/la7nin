import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  teamUrl: string = "http://localhost:3000/teams";
  constructor(private httpClient: HttpClient) { }


  getAllTeams() {
    return this.httpClient.get(this.teamUrl);
  }

  getTeamById(id) {
    return this.httpClient.get(`${this.teamUrl}/${id}`);
  }
  deleteTeamById(id) {
    return this.httpClient.delete(`${this.teamUrl}/${id}`);
  }

  addTeam(obj) {
    return this.httpClient.post(this.teamUrl, obj);
  }

  editTeam(obj) {
    return this.httpClient.put(this.teamUrl, obj);
  }
}
