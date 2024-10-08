import { Component, Input } from '@angular/core';
import { CommonModule} from '@angular/common';
import { CardComponent } from "../../components/card/card.component";

@Component({
  selector: 'ui-home',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  verPerfil(){
    alert("Ver Perfil");
  }

  conocerMas(){
    alert("Conocer Mas");
  }

  goProducts(){
    window.location.href = "/products";
  }
}
