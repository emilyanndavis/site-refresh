import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DevComponent } from './dev/dev.component';
import { TranslationComponent } from './translation/translation.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'dev',
        component: DevComponent
    },
    {
        path: 'translation',
        component: TranslationComponent
    },
    {
        path: 'resume',
        component: ResumeComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
