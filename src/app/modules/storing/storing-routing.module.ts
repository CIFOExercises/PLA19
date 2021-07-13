import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoringIncomingComponent } from './storing-incoming/storing-incoming.component';
import { StoringListComponent } from './storing-list/storing-list.component';
import { StoringOutgoingComponent } from './storing-outgoing/storing-outgoing.component';

export const routes: Routes = [
  { path: 'almacenlista', component: StoringListComponent },
  { path: 'almacenin', component: StoringIncomingComponent },
  { path: 'almacenout', component: StoringOutgoingComponent },
  { path: '**', redirectTo: 'almacen', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoringRoutingModule {}
