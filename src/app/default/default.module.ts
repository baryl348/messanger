import { DefaultComponent } from './default.component';
import { NgModule } from "@angular/core";
import { DefaultRouterModule } from './default-routing.module';
import { LeftSideComponent } from './left-side/left-side.component';
import { CommonModule } from '@angular/common';
import { ProfileBlockComponent } from '../profile-block/profile-block.component';

@NgModule({
    declarations: [
        DefaultComponent,
        LeftSideComponent,
        ProfileBlockComponent,
    ],
    imports: [
        DefaultRouterModule,
        CommonModule,
    ],
    exports: [
        DefaultRouterModule
    ]
})

export class DefaultComponentModule {}