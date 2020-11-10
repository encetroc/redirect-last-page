import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private route: ActivatedRoute, private router: Router) { }

  logout() {
    this.route.url.subscribe(url => {
      console.log(url)
      localStorage.setItem('last-route-visited', url[0].path)
      this.router.navigate(['/login'])
    })
  }

  login() {
    const lastRouteVisited = localStorage.getItem('last-route-visited')
    this.router.navigate([lastRouteVisited])
  }
}
