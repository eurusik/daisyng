import { Component } from '@angular/core';
import { InstallComponent } from '../../components/install';
import { FooterComponent } from '../../components/footer';
import { WelcomeComponent } from '../../components/welcome';
import { ShowcaseComponent } from '../../components/showcase';

@Component({
  selector: 'docs-introduce',
  imports: [
    InstallComponent,
    FooterComponent,
    WelcomeComponent,
    ShowcaseComponent,
  ],
  templateUrl: './introduce.component.html',
  styleUrl: './introduce.component.scss',
})
export class IntroduceComponent {}
