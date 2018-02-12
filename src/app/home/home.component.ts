import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import * as Rx from "rxjs/Rx";
import 'rxjs/add/observable/interval';
import { JsonUrlService } from '../json-url.service';
import { AsyncPipe } from '@angular/common';
declare var $: any;

/*function numerosPrimos(max) {
  var numeroLimite = max;
  var unArr = [];
  // Mirar cada numero desde el 2 hasta el maximo
  for (let i = 2; i <= numeroLimite; i++) {
    for (let j = 2; j <= i; j++) {
      // Mirar cada numero previo por cada numero desde 2 si al dividirse por si mismo u otro numero
      // da 0 en la resta es decir que es divisible por ese numero y sal del bucle o si es divisible y es igual al
      // numero maximo entonces metelo en el array
      if (i % j == 0 && i == j) {
        unArr.push(j);
        break;
      }
      else if (i % j == 0) {
        break;
      }
    }
  }
  return unArr;
}

function pintaNumerosPrimos(callback, numMax) {
  var unArr = callback(numMax);
  var concatena = "";
  for (let i = 0; i < unArr.length; i++) {
    concatena += "<div>" + unArr[i] + "</div>";
  }
  return concatena;
}*/

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [JsonUrlService]
})

export class HomeComponent implements OnInit {
  title = 'Materialize';
  arrObj = [];
  arrNumPrimos = [];
  errorMessege: string;
  thing = Observable.interval(1000).map(function (e) {
    console.log("observable", e);
    return e;
  });
  constructor(private jsonObj: JsonUrlService) {
  }
  
  
  ngOnInit(): any {
    this.getUrl();
    //$("#num-primos").html(this.numerosPrimos(1000));
    this.arrNumPrimos = this.numerosPrimos(100000);
    //setTimeout(function () { alert("Hola"); this.arrNumPrimos = this.numerosPrimos(1000); }, 3000) 
    $("#btn").click(function (e) {
      alert($("#respawn").val());
      $("#respawn").val("");
    })
    //$("#num-primos").html(pintaNumerosPrimos(numerosPrimos, 100));
    /*$.get('http://www.mocky.io/v2/5a7f638d2e00004f00b568ac', function (pData, pStatus) {
      alert(pData);
    });*/
  }
  getUrl() {
    this.jsonObj.getInfoUrlJson().subscribe(param => this.arrObj = param,
      error => this.errorMessege = <any>error);
  }

  numerosPrimos(max: number) {
  var numeroLimite = max;
  var unArr = [];
  // Mirar cada numero desde el 2 hasta el maximo
  for (let i = 2; i <= numeroLimite; i++) {
    for (let j = 2; j <= i; j++) {
      // Mirar cada numero previo por cada numero desde 2 si al dividirse por si mismo u otro numero
      // da 0 en la resta es decir que es divisible por ese numero y sal del bucle o si es divisible y es igual al
      // numero maximo entonces metelo en el array
      if (i % j == 0 && i == j) {
        unArr.push(j);
        break;
      }
      else if (i % j == 0) {
        break;
      }
    }
  }
  return unArr;
}
}
