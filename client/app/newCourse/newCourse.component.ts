import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService, UserService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'newCourse.component.html'
})

export class NewCourseComponent implements OnInit {
    registerForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder, private userService: UserService,) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            courseName: ['', [Validators.required]],
            description: ['', [Validators.required]],
            detail: ['', [Validators.required]],
            image: ['', [Validators.required]],
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;
        console.log(this.f.firstName)
        // this.userService.createCourse(this.registerForm)

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        alert('SUCCESS!! :-)')
    }
}