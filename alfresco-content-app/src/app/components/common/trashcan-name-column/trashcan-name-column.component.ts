/*!
 * @license
 * Alfresco Example Content Application
 *
 * Copyright (C) 2005 - 2018 Alfresco Software Limited
 *
 * This file is part of the Alfresco Example Content Application.
 * If the software was purchased under a paid Alfresco license, the terms of
 * the paid license agreement will prevail.  Otherwise, the software is
 * provided under the following open source license terms:
 *
 * The Alfresco Example Content Application is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * The Alfresco Example Content Application is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with Alfresco. If not, see <http://www.gnu.org/licenses/>.
 */

import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  OnInit,
  Input
} from '@angular/core';
import { MinimalNodeEntity } from 'alfresco-js-api';

@Component({
  selector: 'app-trashcan-name-column',
  template: `
    <span
      title="{{ node | adfNodeNameTooltip }}">
      {{ displayText }}
    </span>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: { class: 'adf-datatable-cell app-trashcan-name-column' }
})
export class TrashcanNameColumnComponent implements OnInit {
  @Input()
  context: any;

  displayText: string;
  node: MinimalNodeEntity;

  ngOnInit() {
    this.node = this.context.row.node;
    if (this.node && this.node.entry) {
      this.displayText = this.node.entry.name || this.node.entry.id;
    }
  }
}
