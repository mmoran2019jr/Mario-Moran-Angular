import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  clientes:any;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getClientesData();
  }

  getClientesData(){
    this.dataService.getClientes().subscribe(res => {
      this.clientes = res;
    });
  }
}
