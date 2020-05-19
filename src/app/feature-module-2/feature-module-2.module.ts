import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FeatureModule2Component } from './feature-module-2.component';
import { FeatureModule2RoutesModule } from './feature-module-2.routing';

@NgModule({
  imports: [
    CommonModule,
    FeatureModule2RoutesModule
  ],
  declarations: [FeatureModule2Component]
})
export class FeatureModule2Module { }
