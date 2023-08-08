import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessDeniedComponent } from './access-denied.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AccessDeniedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AccessDeniedComponent }]),
  ],
})
export class AccessDeniedModule {}
