import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { TestFoodComponent } from './test-food/test-food.component';
import { TestRestaurantComponent } from './test-restaurant/test-restaurant.component';



const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'food', component: TestFoodComponent},
  { path: 'food/:id', component: TestFoodComponent },
  { path: 'restaurant', component: TestRestaurantComponent}
];

@NgModule({
 imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
 exports: [RouterModule]
})
export class AppRoutingModule { }
