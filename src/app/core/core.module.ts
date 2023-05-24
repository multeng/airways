import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import HeaderComponent from './components/header/header.component';
import ProgressBarComponent from './components/header/progress-bar/progress-bar.component';
import SharedModule from '../shared/shared.module';
import FooterComponent from './components/footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, ProgressBarComponent, FooterComponent],
  imports: [FormsModule, ReactiveFormsModule, SharedModule, HttpClientModule],
  exports: [HeaderComponent, FooterComponent],
})
export default class CoreModule {}
