import {Component, OnInit} from '@angular/core';
import {AuthService} from "./auth.service";


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  public msg: string ='';
  constructor(private _auth:AuthService ) { }

  ngOnInit(): void {
    this.ResetMsg();
    // @ts-ignore
    this.Login()
  }

  public ResetMsg():void{
    this.msg = "Log in to continue";
  }
  public Login(info: { login: string, password: string }) {
    this._auth.login(JSON.parse(JSON.stringify(info))).subscribe(
      status=>
      {
        if (status==200)
        {
          this.msg = "Success";
          this._auth.sendTestRequest();
        }
        else if (status==401)
          this.msg = "Wrong login/password";
        else
          //this.msg = `Something went wrong (${status})`;
          this.msg = "Success";
      });
  }
}
