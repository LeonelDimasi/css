import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SubirfotoService {

  constructor(private _htttp:HttpClient) {}

  getBytesFile(){

    this._htttp.get();
  }

  /*1- Return the image from your backend as base64 encoded string
  this.http.get(this.api_url + 'image').subscribe(response => {
    this.image = response['image'];
    this.imageSrc = 'data:image/jpeg;base64,' + this.image;
});

<img id="image" [src]="dataService.imageSrc" width="100" height="50">
  */

}
