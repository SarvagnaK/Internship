import { Routes } from '@angular/router';
import { PipeBasicComponent } from './pipe-basic/pipe-basic.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { AdminComponent } from './admin/admin.component';
import { TopComponent } from './top/top.component';
import { BottomComponent } from './bottom/bottom.component';
import { GetApiComponent } from './api_integration/get-api/get-api.component';
import { UserComponent } from './user/user.component';

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
    },
    {
        path:'pure',
        component:TopComponent
    },
    {
        path:'impure',
        component:BottomComponent
    },
    {
        path:'get-api',
        component:GetApiComponent
    }
    ,
    {
        path:'user',
        component:UserComponent
    }

];
