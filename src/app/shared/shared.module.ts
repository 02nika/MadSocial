import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentComponent } from './component/component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../model/material.module';
// import { AngularSvgIconModule } from 'angular-svg-icon';
// import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';


export function culture() {
  const locale = localStorage.getItem('culture');
  return locale ? locale.substr(0, locale.indexOf('-')) : 'ka';
}

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule,
      MaterialModule,
      // TranslateSharedModule,
      // AngularMultiSelectModule,
      // AngularSvgIconModule,
  ],
  // declarations: [
  //     ExtendedSelectComponent,
  //     AccordionDirective,
  // ],
  // providers: [
  //     { provide: MAT_DATE_LOCALE, useValue: culture() },
  //     { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
  //     { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS }
  // ],
  exports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule,
      MaterialModule,
      // AngularSvgIconModule,
      // TranslateSharedModule,
      // ExtendedSelectComponent,
      // AccordionDirective
  ]
})
export class SharedModule { }
