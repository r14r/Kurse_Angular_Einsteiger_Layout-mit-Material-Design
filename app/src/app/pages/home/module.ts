import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './component';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from 'src/app/material.module';

@NgModule({
  imports: [CommonModule, FormsModule, MaterialModule],
  declarations: [HomeComponent],
})
export class HomeModule {}
