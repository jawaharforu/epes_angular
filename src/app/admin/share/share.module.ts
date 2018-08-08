import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScaleComponent } from '../master/JD/scale/scale/scale.component';
import { HeaderComponent } from '../master/JD/header/header/header.component';
import { ArrayToStringPipe } from '../../pipes/array-to-string.pipe';
import { AssessmentTypeComponent } from '../master/JD/assessment-type/assessment-type.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileSelectDirective } from 'ng2-file-upload';
@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [ScaleComponent, HeaderComponent, ArrayToStringPipe, AssessmentTypeComponent, FileSelectDirective],
  exports: [ScaleComponent, HeaderComponent, ArrayToStringPipe, AssessmentTypeComponent, FileSelectDirective],
})
export class SharedModule { }
