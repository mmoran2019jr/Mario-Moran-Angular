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
  data:any;
  poliza = new Poliza();
  //editing borrar
  //editing: boolean = false;
  constructor(private route:ActivatedRoute, private dataService: DataService) { 
    /*este codigo se elimina despues
    this.id = this.route.snapshot.params['id'];
    if(this.id){
      this.editing = true;
    }else{
      this.editing = false;
    }*/
  }

  ngOnInit(): void {
    console.log(this.route.snapshot.params.id);
    this.id = this.route.snapshot.params.id;
    this.getData();
  }

  getData(){
    this.dataService.getPolizaById(this.id).subscribe(res =>{
      //console.log(res);
      this.data = res;
      this.poliza = this.data;
      console.log(res + "data");
    });
  }

  actualizarPoliza(){
    this.dataService.actualizarData(this.id, this.poliza).subscribe(res => {
      alert("Registro actualizado")
    });
  }

}
