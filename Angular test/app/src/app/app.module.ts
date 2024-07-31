import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

import { HttpClientModule  , HTTP_INTERCEPTORS  } from '@angular/common/http';
import { CarouselModule } from 'primeng/carousel';
import { PaginatorModule } from 'primeng/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { ButtonModule } from 'primeng/button';
import { SearchPipe } from './search.pipe';
import { FormsModule } from '@angular/forms';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { CacheInterceptor } from './cache.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserListComponent,
    UserDetailsComponent,
    SearchPipe,
    PreloaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    HttpClientModule,
    PaginatorModule,
    NgxPaginationModule,
    ButtonModule,
    FormsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true },
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
