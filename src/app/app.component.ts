import { Component } from '@angular/core';
import { UsuariosService } from './services/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interceptorApp';

  constructor(private usuarios: UsuariosService) {
    this.usuarios.obtenerUsuarios()
      .subscribe(res => {
        console.log(res);
      }, (err => {
        console.error('Error en el appComponent. ', err);
      }));
  }

}
