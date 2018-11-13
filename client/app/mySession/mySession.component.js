"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MySessionComponent = /** @class */ (function () {
    function MySessionComponent() {
        this.show = false;
    }
    // registerForm: FormGroup;
    // func: FormControl;
    // login: FormControl;
    // submitted = false;
    MySessionComponent.prototype.ngOnInit = function () {
        // this.func = new FormControl("", Validators.required);
        // this.login = new FormControl("", Validators.required);
        // this.registerForm = new FormGroup({
        //   func: this.func,
        //   login: this.login,
        // })
    };
    MySessionComponent.prototype.onSubmit = function (fxn) {
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
    };
    // }
    MySessionComponent.prototype.toggle = function () {
        this.show = !this.show;
    };
    MySessionComponent.prototype.errWrap = function (func, form) {
        try {
            console.log(func);
            console.log(form);
            return func(form);
        }
        catch (err) {
            alert("WebRTC is currently only supported by Chrome, Opera, and Firefox");
            return false;
        }
    };
    MySessionComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-mySession',
            templateUrl: 'mySession.component.html',
            styleUrls: ['mySession.component.css']
        })
    ], MySessionComponent);
    return MySessionComponent;
}());
exports.MySessionComponent = MySessionComponent;
//# sourceMappingURL=mySession.component.js.map