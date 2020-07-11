import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { JobsComponent } from './jobs/jobs.component';
import { ProfileComponent } from './profile/profile.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { GitgraphComponent } from './gitgraph/gitgraph.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    JobsComponent,
    ProfileComponent,
    GitgraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
