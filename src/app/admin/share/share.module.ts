import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScaleComponent } from '../JD/scale/scale/scale.component';
import { HeaderComponent } from '../JD/header/header/header.component';
import { ArrayToStringPipe } from '../../pipes/array-to-string.pipe';
import { AssessmentTypeComponent } from '../JD/assessment-type/assessment-type.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [ScaleComponent, ScaleComponent, HeaderComponent, ArrayToStringPipe, AssessmentTypeComponent],
  exports: [ScaleComponent, ScaleComponent, HeaderComponent, ArrayToStringPipe, AssessmentTypeComponent],
})
export class SharedModule { }
