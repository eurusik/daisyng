import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'docs-install',
  imports: [CommonModule],
  templateUrl: './install.component.html',
  styleUrl: './install.component.scss',
})
export class InstallComponent {
  readonly codeSnippet = `
  // tailwind.config.js
  module.exports = {
    plugins: [
      require('daisyui'),
    ],
  };`;
}
