import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { ProgressBarComponent } from './components/header/progress-bar/progress-bar.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HeaderComponent, ProgressBarComponent],
  imports: [FormsModule, ReactiveFormsModule, SharedModule, HttpClientModule],
  exports: [HeaderComponent],
})
export class CoreModule {}
