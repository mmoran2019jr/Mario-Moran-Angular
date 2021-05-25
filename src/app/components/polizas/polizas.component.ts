import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Poliza } from 'src/app/poliza';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-polizas',
  templateUrl: './polizas.component.html',
  styleUrls: ['./polizas.component.css']
})
export class PolizasComponent implements OnInit {
  polizas:any;
  clientes:any;
  productos:any;
  poliza = new Poliza();

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getPolizasData();
    this.getClientesData();
    this.getProductosData();
  }

  getClientesData(){
    this.dataService.getClientes().subscribe(res =>{
      this.clientes = res;
    })
  }

  getProductosData(){
    this.dataService.getProductos().subscribe(res =>{
      this.productos = res;
    })
  }

  getPolizasData(){
    this.dataService.getData().subscribe(res => {
      this.polizas = res;
    });
  }

  agregarData(){
    this.dataService.agregarData(this.poliza).subscribe(res =>{
      this.getPolizasData();
    })
  }

  eliminarData(id: any){
    if(confirm('Seguro que desea eliminar la poliza?')){
      this.dataService.eliminarData(id).subscribe(res => {
        this.getPolizasData();
      })
    }else{
      alert('Poliza no eliminada')
    }
    
  }

}
