import { Component,OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { CustomValidationService } from '../../services/custom-validation-service';
import { DataStoreService } from '../../services/data-store-service';

@Component ({
	selector: 'home-page',
    templateUrl: "./home-page.component.html",
    styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {
    title = "CREDIT CARD DETAILS";
    dataForm: FormGroup;
    data
    submitted = false;
    constructor(
        private fb: FormBuilder,
        private customValidation: CustomValidationService,
        private dataStoreService: DataStoreService
        ) {}
        ngOnInit(){
            
            this.dataForm = this.fb.group({
                creditCardNumber: ['', Validators.required],
                cardHolder: ['', Validators.required],
                expirationDate: ['', Validators.required],
                securityCode: ['', [Validators.maxLength(3), Validators.minLength(3)]],
                amount: ['', Validators.required]
            });
        }
        get dataFormControl(){
            return this.dataForm.controls;
        }
        onSubmit(){
            this.submitted = true;  
            if(this.dataForm.valid){
                alert('Form Submitted Successfully!!!');
                this.dataStoreService.postData(this.dataForm.value)
            }
        }
        postData(){}

}