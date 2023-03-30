import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent {

  inputDisplay = new FormControl();
  operatorClicked : boolean;
  lastOperator : string;


  constructor(){}

  ngOnInit(){
    this.inputDisplay.setValue("");
  }

  clearAll(){
    this.inputDisplay.setValue("");
    this.operatorClicked = false;
    this.lastOperator = "";
  }

  operatorClick(operator : string){
    const val = this.inputDisplay.value;
    if(!this.operatorClicked && val){
      this.operatorClicked = true;
      switch (operator){
        case '/':
          this.lastOperator = "/";
          this.inputDisplay.setValue(val+"/");
          break
        case '+':
          this.lastOperator = "+";
          this.inputDisplay.setValue(val+"+");
          break
          case '-':
            this.lastOperator = "-";
            this.inputDisplay.setValue(val+"-");
            break
          case '*': 
            this.lastOperator = "*";
            this.inputDisplay.setValue(val+"*");
            break
      }
    }
    else{
      return;
    }
    
    
  }

  numClick(num : string){
    const val = this.inputDisplay.value;
    if(num==="0" || num==="00"){
      if(val===""){
        return;
      }
    }

    if(num==="."){
      if(val === ""){
        this.inputDisplay.setValue("0.");
      }
      if(val.includes(".")){
        return;
      }
    }

    this.inputDisplay.setValue(val+num);
    
  }

  del(){
    
    if(this.inputDisplay.value!=""){
      const op = this.getLastOperand();
    if(op==='operator'){
      this.operatorClicked = false;
    }
      this.inputDisplay.setValue(this.inputDisplay.value.substr(0,this.inputDisplay.value.length-1));
    }
  }
  getLastOperand():string {
    const val = this.inputDisplay.value;
    const lastOperand = val[val.length-1];
    if(lastOperand === "+" || lastOperand === "-" || lastOperand === "/" || lastOperand === "*"){
      return "operator";
    }
    return "num";
  }  
}


