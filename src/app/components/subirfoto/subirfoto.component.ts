import { Component, OnInit } from '@angular/core';
import { SubirfotoService } from '../../services/subirfoto.service';
@Component({
  selector: 'app-subirfoto',
  templateUrl: './subirfoto.component.html',
  styleUrls: ['./subirfoto.component.scss']
})
export class SubirfotoComponent implements OnInit {

  constructor(private servicio:SubirfotoService) { }

  ngOnInit() {

  }

getImage(){

  this.servicio.getBytesFile().subscribe(data=>{
    let file_bytes=data;
    let uints = new Uint8Array(file_bytes);
    let base64 = btoa(String.fromCharCode.apply(null, uints));
    let url = 'data:image/jpeg;base64,' + base64;
  });
  /*let bytes = [ ... ]; // get from server
  let uints = new UInt8Array(bytes);
  let base64 = btoa(String.fromCharCode(null, uints));
  let url = 'data:image/jpeg;base64,' + base64;*/

///"data:image/png;base64," + btoa(String.fromCharCode.apply(null, new Uint8Array([137,80,78,71,13,10,26,10,0,...])));
}
  
}
