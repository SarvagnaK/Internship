import { Routes } from '@angular/router';
import { PipeBasicComponent } from './pipe-basic/pipe-basic.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { AdminComponent } from './admin/admin.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo: 'pipeBasic',
        pathMatch: 'full'
    },
    {
        path:'pipeBasic',
        component:PipeBasicComponent
    },
    {
        path:'reactiveForm',
        component:ReactiveFormComponent
    },
    {
        path:'admin',
        component:AdminComponent
    }
];
