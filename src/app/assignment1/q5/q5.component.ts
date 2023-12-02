import { Component } from '@angular/core';

interface QaItem {
  question: string;
  answer: string;
  imageUrl: string;
  showAnswer: boolean;
}

@Component({
  selector: 'app-q5',
  templateUrl: './q5.component.html',
  styleUrls: ['./q5.component.css']
})
export class Q5Component {

  q = {
    question: "What is difference between let , var and const in javascript?",
    answer: "In JavaScript, **let**, **var**, and **const** are used to declare variables, but they have some important differences:\n 1. **Var:**\n In JavaScript, the **var** keyword is used to declare variables. Variables declared with **var** are function-scoped, which means they are accessible only within the function in which they are declared or as global variables if declared outside of any function. One notable characteristic of **var** is hoisting, where variable declarations are moved to the top of their containing function or global scope during compilation, making them accessible before their actual declaration in the code. However, **var** variables initialized without a value explicitly assigned to them are initialized with **undefined**. While **var** allows for reassignment and modification of its value, its loose scoping and hoisting behavior can lead to unintended bugs in complex code.\n 2. **Let:**\n The **let** keyword was introduced in ECMAScript 6 (ES6) to address some of the issues associated with **var**. Variables declared with **let** are block-scoped, meaning they are confined to the block of code (enclosed within **{}**) in which they are declared. This provides more predictable scoping behavior and reduces the risk of unintended variable access or modification. Unlike **var**, **let** variables are not initialized until they are explicitly assigned a value, avoiding the issue of variables being automatically initialized to **undefined**. **let** also respects the Temporal Dead Zone (TDZ), which prevents variable access before declaration, enhancing code safety.\n 3. **Const:**\n The **const** keyword is used to declare constants, variables whose values should not change after initialization. Like **let**, **const** is also block-scoped, ensuring that the constant is only accessible within the block in which it is defined. It is a good practice to use **const** for values that should remain unchanged, such as mathematical constants or configuration settings. However, it's important to note that while **const** variables themselves cannot be reassigned, they can store mutable data structures like objects or arrays. In such cases, the properties or elements of the object or array can still be modified. **const** is particularly useful for preventing accidental reassignment of critical values in your codebase and making your intentions regarding immutability clear.",
    imageUrl:"",
    showAnswer: false,
  }

  name = "Show Answer"

  // In your component.ts file
  toggleAnswerVisibility(q: QaItem) {
    q.showAnswer = !q.showAnswer;
    if(this.name == "Show Answer")
    {
      this.name = "Hide Answer";
    }
    else
    {
      this.name = "Show Answer"
    }
  }

}
