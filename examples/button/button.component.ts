import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  template: `
    <button
      [style.background-color]="background"
      [style.width]="size === 'small' ? '100px' : size === 'medium' ? '150px' : '200px'"
      [style.height]="size === 'small' ? '30px' : size === 'medium' ? '40px' : '50px'"
      [style.color]="textColor"
      (click)="handleClick()"
    >
      Click me
    </button>
  `,
  styles: [
    `
      button {
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }
    `,
  ],
})
export class CustomButtonComponent {
  @Input() background: 'primary' | 'secondary' | 'danger' = 'primary'; // Default background color
  @Input() size: string = 'medium'; // Default button size
  @Input() textColor: string = 'white'; // Default text color

  @Output() onClick = new EventEmitter();

  handleClick() {
    this.onClick.emit();
  }
}
