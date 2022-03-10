import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user  :string;
  clave :string;

  constructor( private usuario:UsuarioService ) { }

  ngOnInit() {
    
    
  }

  loguear(){

    this.usuario.login(this.user,this.clave).subscribe((data)=>{
        console.log(data);
    })
  }

}
