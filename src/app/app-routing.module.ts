import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PlayerComponent} from './url-components/player/player.component';


const routes: Routes = [
    {path: '', redirectTo: 'player', pathMatch: 'full'},
    {path: 'player', component: PlayerComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
