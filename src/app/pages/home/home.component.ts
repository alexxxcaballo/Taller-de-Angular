import { Component, Input } from '@angular/core';
import { CommonModule} from '@angular/common';
import { CardComponent } from "../../components/card/card.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ui-home',
  standalone: true,
  imports: [CommonModule, CardComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  email:string = '';
  password:string = '';
   login(user:string, password:string){
     console.log(`User ${user}, password ${password}`);
   }
}
