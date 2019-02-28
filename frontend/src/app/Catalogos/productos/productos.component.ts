import { Component, OnInit } from '@angular/core';
import { CProdNPro } from '../../models/CProdNPro';
import { CProdNProService } from '../../services/cprod-npro.service';
import { NgForm } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Numeric } from 'd3';
import { id } from '@swimlane/ngx-charts/release/utils';

declare var M: any;

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'cdk-icons',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
// tslint:disable-next-line:component-class-suffix
export class Productos implements OnInit {

 constructor(private cprodnproService: CProdNProService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCProdNPro();
  }

  getCProdNPro() {
    this.cprodnproService.obtenerCProdNPro()
     .subscribe(res => {
       this.cprodnproService.cprodnpros = res as CProdNPro[];
       // console.log(cprodnpros);
     });
  }

  /*mostrarCProdNPro(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.cprodnproService.obtenerIdCProdNPro(id)
    .subscribe(res => {
      console.log(res);
    });
  }*/

  deleteCProdNPro(_idCProdNPro: number, form: NgForm): void {
    this.cprodnproService.eliminarCProdNPro(_idCProdNPro)
    .subscribe(res => {
      this.getCProdNPro();
      console.log('hola');
    });
  }

  addCProdNPro(form?: NgForm) {
    console.log(form.value);
     this.cprodnproService.agregarProducto(form.value)
    .subscribe(res => {
      this.getCProdNPro();
      console.log(res);
    });
  }

  /*updateCProdNPro(cprodnpro: CProdNPro) {
    this.cprodnproService.selectedCProdNPro = cprodnpro;
    console.log('hola');
  } */

  /*updateCProdNPro(cprodnpro: CProdNPro): void {
    this.cprodnproService.selectedCProdNPro = cprodnpro;
    //this.cprodnproService.putCProdNPro(cprodnpro);
      console.log(cprodnpro);
  }*/

  mostrarCProdNPro(cprodnpro): void {
    this.cprodnproService.selectedCProdNPro = cprodnpro;
    console.log(cprodnpro);
  }

  updateCProdNPro(cprodnpro) {
    this.cprodnproService.putCProdNPro(cprodnpro)
    .subscribe(res => {
       console.log(res);
    });
  }
}