import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ItemCheck } from 'src/app/interfaces/item-check';

@Component({
  selector: 'app-container-options-checkbox',
  templateUrl: './container-options-checkbox.component.html',
  styleUrls: ['./container-options-checkbox.component.css']
})

export class ContainerOptionsCheckboxComponent {
  @Input() title: string=''; 
  @Input() listItem: ItemCheck[] = [];
  @Output() actionListItemCheck = new EventEmitter();


  get selectAll(): boolean {
    return this.listItem.every(item => item.checked);
  }
  set selectAll(value: boolean) {
    this.listItem.forEach(item => (item.checked = value));
  }

  onItemChange() {
    this.actionListItemCheck.emit();
  }

}
