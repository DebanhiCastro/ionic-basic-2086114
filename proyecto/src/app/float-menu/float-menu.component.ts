import { Component, OnInit } from '@angular/core';
import { Menu } from '../interface/menu';
import { Router } from '@angular/router';
@Component({
  selector: 'app-float-menu',
  templateUrl: './float-menu.component.html',
  styleUrls: ['./float-menu.component.scss'],
})
export class FloatMenuComponent  implements OnInit {

  datosMenu: Menu[] =[
    {nombre: 'home',enlace:'/home',
    icono:'home-outline'},
    {nombre: 'Alumnos',enlace:'/alumnos',
  icono:'school-outline'},
    {nombre: 'Receteas',enlace:'/receta',
    icono:'restaurant-outline'},
    {nombre: 'Presupuesto',enlace:'/presupuesto',
    icono:'cash-outline'},
    {nombre: 'inicio',enlace:'/inicio',
    icono:'navigate-outline'},
    {nombre: 'Tabs',enlace:'/tabs',
    icono:'folder-outline'}
  ];
  constructor(private router: Router) { }

  ngOnInit() {}

  navegar(link: string){
    this.router.navigate([link]);
  }

<ion-header>
<ion-toolbar>
        <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>{{titleMenu}}</ion-title>
        </ion-toolbar>
    </ion-header>
    <ion-menu side="start" content-id="main" (ionWillOpen)="onMenuOpen()">
    <ion-content id="menuFloat">
        <ion-list>
            <ion-menu-toggle *ngFor="let c of datosMenu">
                <ion-item (click)="navegar(c.enlace, c.nombre)">
                    <ion-icon name='{{c.icono}}'></ion-icon>
                    <ion-label>{{ c.nombre }}</ion-label>
                </ion-item>
            </ion-menu-toggle>
        </ion-list>
    </ion-content>
</ion-menu>
}
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Menu } from '../interface/menu';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthFirebaseService } from '../service/auth-firebase.service';
import { MenuService } from '../service/menu.service';
import { onAuthStateChanged } from 'firebase/auth';
@Component({
    selector: 'app-float-menu',
    templateUrl: './float-menu.component.html',
    styleUrls: ['./float-menu.component.scss'],
  })
  titleMenu: string='home';
  public isLoged : any = false;

  public subscription : Subscription | undefined ;

  datosMenu: Menu[] =[
    {nombre: 'login',enlace:'/login',
    icono:'log-in-outline'},
    {nombre: 'logout',enlace:'/home',
    icono:'log-out-outline'}
  ];
  constructor(
    private autService: AuthFirebaseService,
    private menuService: MenuService,
    private router: Router
  ) { 
    onAuthStateChanged(this.autService.getStateAuth(), user=>{
      if(user!=null && user != undefined){
        this.isLoged = true;
      }
    });

    this.subscription = this.menuService.$getTitleMenu.subscribe(data=>{
      console.log(data);
      this.titleMenu =data;
    });

  }

  ngOnDestroy(): void {
    if(this.subscription != null || this.subscription!= undefined){
      this.subscription.unsubscribe();
    }
  }
  ngOnInit() {}
  navegar(link: string, titleMenu: string){
    this.titleMenu =titleMenu;
    this.menuService.setTitle(titleMenu);
    this.router.navigate([link]);
  }

  onMenuOpen(){
    onAuthStateChanged(this.autService.getStateAuth(), user=>{
      if(user!=null && user != undefined){
        this.datosMenu =[
          {nombre: 'Alumnos',enlace:'/alumnos',
    icono:'school-outline'},
      {nombre: 'Receteas',enlace:'/receta',
      icono:'restaurant-outline'},
      {nombre: 'inicio',enlace:'/inicio',
      icono:'navigate-outline'},
      {nombre: 'Tabs',enlace:'/tabs',
      icono:'folder-outline'},
      {nombre: 'login',enlace:'/login',
      icono:'log-in-outline'},
          {nombre: 'logout',enlace:'/logout',
          icono:'log-out-outline'}
        ];

      } 
      else{
        this.datosMenu =[
          {nombre: 'login',enlace:'/login',
          icono:'log-in-outline'},
          {nombre: 'logout',enlace:'/logout',
          icono:'log-out-outline'}
        ];
      }
    });
  }

}
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Menu } from '../interface/menu';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthFirebaseService } from '../service/auth-firebase.service';
import { MenuService } from '../service/menu.service';
import { onAuthStateChanged } from 'firebase/auth';
@Component({
  selector: 'app-float-menu',
  templateUrl: './float-menu.component.html',
  styleUrls: ['./float-menu.component.scss'],
})
export class FloatMenuComponent  implements OnInit, OnDestroy {
  titleMenu: string='home';
  public isLoged : any = false;
  public subscription : Subscription | undefined ;
  datosMenu: Menu[] =[
    {nombre: 'login',enlace:'/login',
    icono:'log-in-outline'},
    {nombre: 'logout',enlace:'/home',
    icono:'log-out-outline'}
  ];
  constructor(
    private autService: AuthFirebaseService,
    private menuService: MenuService,
    private router: Router
  ) { 
    onAuthStateChanged(this.autService.getStateAuth(), user=>{
      if(user!=null && user != undefined){
        this.isLoged = true;
      }
    });
    this.subscription = this.menuService.$getTitleMenu.subscribe(data=>{
      console.log(data);
      this.titleMenu =data;
    });
  }
  ngOnDestroy(): void {
    if(this.subscription != null || this.subscription!= undefined){
      this.subscription.unsubscribe();
    }
  }
  ngOnInit() {}
  navegar(link: string, titleMenu: string){
    this.titleMenu =titleMenu;
    this.menuService.setTitle(titleMenu);
    this.router.navigate([link]);
  }
  onMenuOpen(){
    onAuthStateChanged(this.autService.getStateAuth(), user=>{
      if(user!=null && user != undefined){
        this.datosMenu =[
          {nombre: 'Alumnos',enlace:'/alumnos',
    icono:'school-outline'},
      {nombre: 'Receteas',enlace:'/receta',
      icono:'restaurant-outline'},
      {nombre: 'inicio',enlace:'/inicio',
      icono:'navigate-outline'},
      {nombre: 'Turismo',enlace:'/destinos',
      icono:'airplane'},
      {nombre: 'Tabs',enlace:'/tabs',
      icono:'folder-outline'},
      {nombre: 'login',enlace:'/login',
      icono:'log-in-outline'},
          {nombre: 'logout',enlace:'/logout',
          icono:'log-out-outline'}
        ];
    }       
    else{
       this.datosMenu =[
         {nombre: 'login',enlace:'/login',
         icono:'log-in-outline'},
         {nombre: 'logout',enlace:'/logout',
         icono:'log-out-outline'}
       ];
     }
   });
 }
}