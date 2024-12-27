import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { classMerge } from '@daisyng/kit/core/tools';
import { avatarConfig } from './avatar.config';

@Component({
  selector: 'dsy-avatar-group',
  imports: [CommonModule],
  templateUrl: './avatar-group.component.html',
  host: {
    '[class]': 'classes()',
  },
})
export class AvatarGroupComponent {
  readonly classes = computed(() =>
    classMerge(avatarConfig({ avatarGroup: 'group' })),
  );
}
