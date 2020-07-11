import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { JobsComponent } from './jobs/jobs.component';

const routes: Routes = [
	/*{
		path: '',
		component: JobsComponent
	},
	{
		path: '',
		component: ProjectsComponent
	},*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
