import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { Camera } from '@ionic-native/camera/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';

export const firebaseConfig = {
    apiKey: "AIzaSyD0pkZ4Ghkca2e6kBGwhvouugdCXCK1hes",
    authDomain: "foodbook-3da49.firebaseapp.com",
    projectId: "foodbook-3da49",
    storageBucket: "foodbook-3da49.appspot.com",
    messagingSenderId: "219397367084",
    appId: "1:219397367084:web:8e439b8eff543fc274f889",
    measurementId: "G-7319FKWB13"
};

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule, 
        IonicModule.forRoot(), 
        AppRoutingModule, 
        HttpClientModule,
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        AngularFireStorageModule],
    providers: [{ 
        provide: RouteReuseStrategy, 
        useClass: IonicRouteStrategy }, 
        NativeStorage, Camera],
    bootstrap: [AppComponent],
})
export class AppModule {}