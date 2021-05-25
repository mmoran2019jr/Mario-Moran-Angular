import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Poliza } from 'src/app/poliza';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-poliza-actualizar',
  templateUrl: './poliza-actualizar.component.html',
  styleUrls: ['./poliza-actualizar.component.css']
})
export class PolizaActualizarComponent implements OnInit {
  id:any;
  clientes:any;
  productos:any;
  data:any;
  poliza = new Poliza();
  constructor(private route:ActivatedRoute, private dataService: DataService) { 

  }

  ngOnInit(): void {
    console.log(this.route.snapshot.params.id);
    this.id = this.route.snapshot.params.id;
    this.getData();
    this.getClientesData();
    this.getProductosData();
  }

  getData(){
    this.dataService.getPolizaById(this.id).subscribe(res =>{
      this.data = res;
      this.poliza = this.data;
    });
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

  actualizarPoliza(){
    this.dataService.actualizarData(this.id, this.poliza).subscribe(res => {
      alert("Registro actualizado")
    });
  }

}
