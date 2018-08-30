import { Routes, RouterModule} from "@angular/router";

const APP_ROUTES: Routes = [
	{ path: '**', pathMatch: 'full', redirectTo: 'home'} 
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);