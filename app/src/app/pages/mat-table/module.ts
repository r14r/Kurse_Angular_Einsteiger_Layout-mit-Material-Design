import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoMatTableComponent } from './component';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from 'src/app/material.module';

@NgModule({
  imports: [CommonModule, FormsModule, MaterialModule],
  declarations: [DemoMatTableComponent],
})
export class DemoMatTableModule {}
