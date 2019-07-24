import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { PsCPFValidator } from 'porto-seguro-guide';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.sass']
})
export class BasicFormComponent implements OnInit {
  nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ0-9 ]+(?:\s+[A-Za-zÀ-ÖØ-öø-ÿ0-9 ]+)+$/;
  userForm: FormGroup = new FormGroup({
    cpf: new FormControl('', [Validators.required, PsCPFValidator()]),
    gender: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required, Validators.maxLength(80), Validators.pattern(this.nameRegex)]),
  });

  constructor() { }

  ngOnInit() {
  }
}
