import { Component } from '@angular/core';
import { Usuario } from '../../models/test';
import { CardComponent } from "../../components/card/card.component";


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  usuarios:Usuario[] = [
    {
      id:1,
      name:"Alejandro Bonilla",
      description:"Estudiante de INGC",
      rol:{rol:"cliente"}
    },
    {
      id:2,
      name:"Juancho Perez",
      description:"Administrador de la app",
      rol:{rol:"admin"}
    },
    {
      id:3,
      name:"Rodolfo Becerra",
      description:"Vendedor estrella, vendio tres casas en una semana",
      rol:{rol:"vendedor"}
    }
  ];

}
