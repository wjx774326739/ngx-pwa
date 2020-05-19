
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FeatureModule1Component } from './feature-module-1.component';
import { FeatureModule1RoutesModule } from './feature-module-1.routing';

@NgModule({
  imports: [
    CommonModule,
    FeatureModule1RoutesModule
  ],
  declarations: [FeatureModule1Component]
})
export class FeatureModule1Module { }
