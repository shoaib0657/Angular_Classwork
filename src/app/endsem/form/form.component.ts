import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {

  myform = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobile1: new FormControl('', [Validators.required, Validators.pattern("[6-9][0-9]{9}")]),
    mobile2: new FormControl('', [Validators.pattern("[6-9][0-9]{9}")]),
    address: new FormControl('', [Validators.required]),
  })

  toDisplay = false;
  entries: any = [];

  save(data: any) 
  {
    this.entries.push(data);
    this.toDisplay = true;
  }

  reset(){
    this.myform.reset();
  }

  delete(data: any)
  {
    for(let i = 0; i < this.entries.length; i++)
    {
      if(this.entries[i] === data)
      {
        this.entries.splice(i, 1);
        break;
      }
    }
  }

}
