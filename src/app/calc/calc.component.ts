import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent {

  inputDisplay = new FormControl();

  ngOnInit(){
    this.inputDisplay.setValue("");
  }

  clearAll(){
    this.inputDisplay.setValue("");
  }

  operatorClick(operator : string){
    switch (operator){
      case '=':
        console.log(this.inputDisplay.value);
    }
  }

  numClick(){}

  del(){}

  
}
