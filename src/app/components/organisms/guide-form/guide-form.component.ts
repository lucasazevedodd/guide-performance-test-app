import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PsCPFValidator } from 'porto-seguro-guide';

@Component({
  selector: 'app-guide-form',
  templateUrl: './guide-form.component.html',
  styleUrls: ['./guide-form.component.sass']
})
export class GuideFormComponent implements OnInit {
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
