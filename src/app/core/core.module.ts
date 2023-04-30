import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { ProgressBarComponent } from './components/header/progress-bar/progress-bar.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HeaderComponent, ProgressBarComponent],
  imports: [FormsModule, ReactiveFormsModule, SharedModule],
  exports: [HeaderComponent],
})
export class CoreModule {}
