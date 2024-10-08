import { Component, Input } from '@angular/core';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'ui-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @Input() image!:string;
  @Input() title!:string;
  @Input() info!:string;
  @Input() btnText!:string;
  @Input() clickEvent!:() => void;

  onClick(){
    this.clickEvent();
  }
}
