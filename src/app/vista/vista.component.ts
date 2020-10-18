import { Component, OnInit,ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { from } from 'rxjs';
import{DataService} from '../data.service';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent implements OnInit, AfterViewInit {
  @ViewChild('imprimir') imprimir: ElementRef;

  @ViewChild('tipo') tipo: ElementRef;
  @ViewChild('servidor') servidor: ElementRef;
  @ViewChild('puerto') puerto: ElementRef;
  @ViewChild('BD') BD: ElementRef;
  @ViewChild('usuario') usuario: ElementRef;
  @ViewChild('clave') clave: ElementRef;
  @ViewChild('esquema') esquema: ElementRef;



  constructor(private dataService: DataService) { 
  
  }
  ngAfterViewInit(): void {
 
  }

  ngOnInit(): void {
    
  }
  prueba(){

    let variables:any = {
      esquema: this.esquema.nativeElement.value,
      tipo: this.tipo.nativeElement.value,
      servidor: this.servidor.nativeElement.value,
      puerto: this.puerto.nativeElement.value,
      BD: this.BD.nativeElement.value,
      usuario: this.usuario.nativeElement.value,
      clave: this.clave.nativeElement.value};
    
    console.log("soy Isaac");
    this.dataService.getPrueba(variables).subscribe(data=>{

      console.log(data);
      let resultado: any = data;
      let nombre: string;
      for(let i=0; i<resultado.length; i++){
        if(nombre == null){
          nombre = resultado[i].nombre+"\n";
        }
        else
        nombre = nombre+resultado[i].nombre+"\n";
        
      }

      this.imprimir.nativeElement.value = nombre;
      
    })
  }

}
