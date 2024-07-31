import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  private cache = new Map<string, HttpEvent<any>>();

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.method !== 'GET') {
      // Skip caching for non-GET requests
      return next.handle(req);
    }

    const cachedResponse = this.cache.get(req.url);
    if (cachedResponse) {
      // Return cached response if available
      return of(cachedResponse);
    }

    // Handle the request and cache the response
    return next.handle(req).pipe(
      tap(event => {
        if (event && 'body' in event) {
          this.cache.set(req.url, event);
        }
      })
    );
  }
}
