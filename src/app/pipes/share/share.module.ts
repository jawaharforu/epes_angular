import { NgModule } from '@angular/core';
import { ArrayToStringPipe } from '../array-to-string.pipe';

@NgModule({
  declarations: [ArrayToStringPipe],
  exports: [ArrayToStringPipe]
})
export class ShareModule { }
