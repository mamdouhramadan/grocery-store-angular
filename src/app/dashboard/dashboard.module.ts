import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './components/data-table/data-table.component';
import { EvaluationsPipe } from './pages/evaluations.pipe';
import { EvaluationsComponent } from './pages/evaluations/evaluations.component';
import { AllUsersComponent } from './pages/all-users/all-users.component';



@NgModule({
  declarations: [
    DataTableComponent,
    EvaluationsPipe,
    EvaluationsComponent,
    AllUsersComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
