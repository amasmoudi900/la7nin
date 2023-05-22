import { ReclamationComponent } from './components/reclamation/reclamation.component';
import { WeatherComponent } from './components/weather/weather.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupAdminComponent } from './components/signup-admin/signup-admin.component';
import { SearchTeamComponent } from './components/search-team/search-team.component';
import { EditStoreComponent } from './components/edit-store/edit-store.component';
import { StoreComponent } from './components/store/store.component';
import { AddStadiumComponent } from './components/add-stadium/add-stadium.component';
import { SearchComponent } from './components/search/search.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { PlayersComponent } from './components/players/players.component';
import { MatchesComponent } from './components/matches/matches.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // http://localhost:4200/ => Home Component will be displayed
  { path: "", component: HomeComponent },
  // http://localhost:4200/signin => Login Component will be displayed
  { path: "signin", component: LoginComponent },
  // http://localhost:4200/signup => Signup Component will be displayed
  { path: "signup", component: SignupComponent },
  { path: "signupAdmin", component: SignupAdminComponent },
  { path: "addMatch", component: AddMatchComponent },
  { path: "addTeam", component: AddTeamComponent },
  { path: "addPlayer", component: AddPlayerComponent },
  { path: "admin", component: AdminComponent },
  { path: "matches", component: MatchesComponent },
  { path: "players", component: PlayersComponent },
  { path: "matchInfo", component: MatchInfoComponent },
  // :x => param ("editMatch/4", "editMatch/9", .....)
  { path: "editMatch/:x", component: EditMatchComponent },
  { path: "teamInfo/:id", component: TeamInfoComponent },
  { path: "searchMatches", component: SearchComponent },
  { path: "addStadium", component: AddStadiumComponent },
  { path: "addStore", component: StoreComponent },
  { path: "editStore/:id", component: StoreComponent },
  { path: "searchTeam", component: SearchTeamComponent },
  { path: "profile/:id", component: ProfileComponent },
  { path: "weather", component: WeatherComponent },
  { path: "addReclamation", component: ReclamationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
