import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Poliza } from '../poliza';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private httpClient:HttpClient) { }

  getData(){
    return this.httpClient.get('http://127.0.0.1:8000/api/polizas');
  }

  agregarData(data: Poliza){
    return this.httpClient.post('http://127.0.0.1:8000/api/agregarPoliza', data);
  }

  actualizarData(id: BigInteger, data: Poliza){
    return this.httpClient.put('http://127.0.0.1:8000/api/actualizarPoliza/'+id, data);
  }

  eliminarData(id: BigInteger){
    return this.httpClient.delete('http://127.0.0.1:8000/api/eliminarPoliza/'+id); 
  }

  getPolizaById(id: BigInteger,){
    return this.httpClient.get('http://127.0.0.1:8000/api/poliza/'+id);
  }

  getClientes(){
    return this.httpClient.get('http://127.0.0.1:8000/api/clientes');
  }

}
