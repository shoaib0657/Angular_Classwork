import { Component } from '@angular/core';

interface QaItem {
  question: string;
  answer: string;
  imageUrl: string;
  showAnswer: boolean;
}

@Component({
  selector: 'app-q4',
  templateUrl: './q4.component.html',
  styleUrls: ['./q4.component.css']
})
export class Q4Component {

  q = {
    question: "What are different array methods in javascript? Explain with examples",
    answer: "JavaScript provides a variety of array methods that allow you to manipulate and work with arrays in a flexible and efficient manner. Here are some commonly used array methods along with examples:\n 1.  **push(): ** Adds one or more elements to the end of an array and returns the new length of the array.\n **const fruits = ['apple', 'banana'];**\n **fruits.push('cherry');** \n **console.log(fruits); // ['apple', 'banana', 'cherry']**\n 2.  **pop(): ** Removes the last element from an array and returns it.\n **const fruits = ['apple', 'banana', 'cherry'];** \n **const lastFruit = fruits.pop();**\n **console.log(lastFruit); // 'cherry'**\n **console.log(fruits);    // ['apple', 'banana']**\n 3.   **slice(): ** Returns a shallow copy of a portion of an array into a new array. It doesn't modify the original array.\n **const fruits = ['apple', 'banana', 'cherry', 'orange'];**\n **const sliced = fruits.slice(1, 3);**\n **console.log(sliced); // ['banana', 'cherry']**\n 4.   **splice(): ** Adds or removes elements from an array at a specified index.\n **const fruits = ['apple', 'banana', 'cherry'];**\n **fruits.splice(1, 1, 'orange');**\n **console.log(fruits); // ['apple', 'orange', 'cherry']**\n 5.  **forEach(): ** Executes a provided function once for each array element.\n **const numbers = [1, 2, 3];**\n **numbers.forEach((num) => {**\n **console.log(num * 2);**\n **});**\n **// Output:**\n **// 2** \n **// 4** \n **// 6** \n 6.  **map(): ** Creates a new array by applying a function to each element of the original array.\n **const numbers = [1, 2, 3];** \n **const doubled = numbers.map((num) => num * 2);**\n **console.log(doubled); // [2, 4, 6]**\n 7.  **filter(): ** Creates a new array with all elements that pass a test provided by a given function.\n **const numbers = [1, 2, 3, 4, 5];**\n **const evenNumbers = numbers.filter((num) => num % 2 === 0);**\n **console.log(evenNumbers); // [2, 4]**",
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
