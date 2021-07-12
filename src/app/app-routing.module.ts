import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserDetailsComponent } from "./components/user-details/user-details.component";
const routes: Routes = [
  { path: "user-details", component: UserDetailsComponent },
  {
    path: "user-register",
    loadChildren: () => import('./register-module/register.module').then(module => module.RegisterModule)
  },
  { path: "**", redirectTo: "user-details" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
