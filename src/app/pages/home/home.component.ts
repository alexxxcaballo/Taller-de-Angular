import { Component, Input } from '@angular/core';
import { CommonModule} from '@angular/common';
import { CardComponent } from "../../components/card/card.component";
import { FormsModule } from '@angular/forms';
import { ReqresService } from '../../services/reqres.service';
import { error } from 'console';

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

  constructor(private apiReqres:ReqresService){}

   login(user:string, password:string){
     console.log(`User ${user}, password ${password}`);
     this.apiReqres.Login(user, password).subscribe(
      res => {
        alert("Login successfull "+ res.token)
        console.log("Login succesfull");
        console.log(res.token);
      },
      err => {
        alert(err.error.error);
      }
    )
   }
}
