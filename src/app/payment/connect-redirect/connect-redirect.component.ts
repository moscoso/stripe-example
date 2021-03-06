import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../core/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { fromPromise } from 'rxjs/observable/fromPromise';

@Component({
  selector: 'connect-redirect',
  templateUrl: './connect-redirect.component.html',
  styleUrls: ['./connect-redirect.component.sass']
})
export class ConnectRedirectComponent implements OnInit {

  constructor(private http: HttpClient, private route: ActivatedRoute, public auth: AuthService) { }

  ngOnInit() {
    const code = this.route.snapshot.queryParamMap.get('code')
    const url  = `${environment.functionsURL}/oauthCallback?code=${code}`;

    // Use the Stripe OAuth code to mint the custom Firebase auth token
    if (code) {
      
      this.http.post<any>(url, {}).pipe(
        switchMap(res => {
          console.log(res);
          return fromPromise( this.auth.customSignIn(res.token)  )
        })
      )
      .subscribe()
    }
  }

}
