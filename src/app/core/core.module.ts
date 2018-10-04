import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NetReqService } from './net-req.service';
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [NetReqService],
  declarations: []
})
export class CoreModule { }
