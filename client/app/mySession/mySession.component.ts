import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators , FormControl} from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'app-mySession',
  templateUrl: 'mySession.component.html',
  styleUrls: ['mySession.component.css']
})
export class MySessionComponent implements OnInit {
  public show:boolean = false;
  
  // registerForm: FormGroup;
  // func: FormControl;
  // login: FormControl;
  // submitted = false;


  
  ngOnInit() {
    // this.func = new FormControl("", Validators.required);
    // this.login = new FormControl("", Validators.required);
    // this.registerForm = new FormGroup({
    //   func: this.func,
    //   login: this.login,
    // })
}

onSubmit(fxn:any){
    // console.log("Form Submitted!");
    // console.log(this.registerForm.value);
    // console.log(fxn.value)
    // console.log(fxn.value)
    // try{
    //   return fxn(this.registerForm.value.login);
    // }catch(err) {
    // 		alert(err)
    // 		return false;
    // 	}
  }
// }

toggle() {
  this.show = !this.show;
}

errWrap(func:any, form:any){
	try {
    console.log(func)
    console.log(form);
    return func(form);
	} catch(err) {
		alert("WebRTC is currently only supported by Chrome, Opera, and Firefox");
		return false;
	}
}

}
 
