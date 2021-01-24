import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionsService } from './services/questions.service';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    MaterialModule,
    ReactiveFormsModule
  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: SharedModule,
      providers: [UserService, QuestionsService]
    };
  }
 }
