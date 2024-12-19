import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer';
import { InstallComponent } from '../install';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'docs-welcome',
  imports: [CommonModule, FooterComponent, InstallComponent, RouterLink],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
})
export class WelcomeComponent {}
