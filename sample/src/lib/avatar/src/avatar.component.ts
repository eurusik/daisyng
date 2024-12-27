import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from '@daisyng/kit/components/avatar';
import { AvatarDirective } from '@daisyng/kit/directives/avatar';

@Component({
  selector: 'smp-avatar',
  imports: [CommonModule, AvatarComponent, AvatarDirective],
  templateUrl: './avatar.component.html',
  styles: ``,
})
export class SampleAvatarComponent {}
