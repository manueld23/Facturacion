import { Component, OnInit } from '@angular/core';
import { CProdNPro } from '../../models/CProdNPro';
import { CProdNProService } from '../../services/cprod-npro.service';
import { NgForm } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'cdk-icons',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
// tslint:disable-next-line:component-class-suffix
export class Productos implements OnInit {

 constructor(private cprodnproService: CProdNProService) { }

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

  deleteCProdNPro(_idCProdNPro: number, form: NgForm): void {
    this.cprodnproService.eliminarCProdNPro(_idCProdNPro)
    .subscribe(res => {
      this.getCProdNPro();
      console.log('hola');
    });
  }

  addCProdNPro(form: NgForm) {
     this.cprodnproService.agregarProducto(form.value)
    .subscribe(res => {
      this.getCProdNPro();
      console.log(res);
    });
  }
}
  /*updateCProdNPro(form: NgForm): void {
      this.cprodnproService.putCProdNPro(form.value);
     .subscribe(res => {
       console.log(res);
     });
  }*/

  /*addCProdNPro(form: NgForm){
    console.log("agregado")
     /*if(form.value._id){
       /*this.CProdNProService.putcprodnpro(form.value)
       .subscribe(res => {
        this.resetForm();
        //M.toast({html: 'Updated Successfuly'});
        //this.getEmployees();
       })
       console.log("hola");
     } else {
      this.cprodnproService.addcprodnpro(form.value)
      .subscribe(res => {
        console.log("agregado");
       //this.resetForm();
       //M.toast({html: 'Save Successfuly'});
       //this.getEmployees();
      });
     }
  }

}*/

/*
import { Component, OnInit } from '@angular/core';
import { ICON_HELPERS } from './helpers.data';
import { CProdNProService } from '../../services/cprod-npro.service';
import { CProdNPro } from '../../models/CProdNPro';
import { NgForm } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Component({
  selector: 'cdk-icons',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
  providers: [CProdNProService]
})
export class Productos implements OnInit {

  constructor(private cprodnproService: CProdNProService) { }

  ngOnInit() {

  }
  iconHelpers: any = ICON_HELPERS;

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.cprodnproService.selectedCProdNPro = new CProdNPro();
    }
  }
}*/