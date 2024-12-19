import { ChangeDetectionStrategy, Component, HostBinding, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NgDocNavbarComponent,
  NgDocRootComponent,
  NgDocSidebarComponent,
  NgDocThemeToggleComponent
} from '@ng-doc/app';
import { RouterOutlet } from '@angular/router';
import { NgDocButtonIconComponent, NgDocIconComponent, NgDocTooltipDirective } from '@ng-doc/ui-kit';
import { Location } from '@angular/common';
import { LogoComponent } from '../components/logo';


@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-root',
  imports: [
    CommonModule,
    NgDocRootComponent,
    NgDocNavbarComponent,
    NgDocSidebarComponent,
    RouterOutlet,
    NgDocThemeToggleComponent,
    NgDocIconComponent,
    LogoComponent,
    NgDocButtonIconComponent,
    NgDocTooltipDirective,
  ],
  host: {
    '[attr.data-is-landing]': 'isLandingPage',
  },
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShellComponent {
  protected readonly location = inject(Location);

  @HostBinding('attr.data-ng-doc-is-landing')
  get isLandingPage(): boolean {
    return this.location.path() === '';
  }
}
