import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VideoDetailsComponent } from './components/video-details/video-details.component';

@NgModule({
  declarations: [NavbarComponent, VideoDetailsComponent],
  imports: [
    CommonModule
  ],
  exports: [NavbarComponent, VideoDetailsComponent]
})
export class SharedModule { }
