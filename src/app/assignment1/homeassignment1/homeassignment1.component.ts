import { Component } from '@angular/core';

interface QaItem {
  question: string;
  answer: string;
  imageUrl: string;
  showAnswer: boolean;
}

@Component({
  selector: 'app-homeassignment1',
  templateUrl: './homeassignment1.component.html',
  styleUrls: ['./homeassignment1.component.css']
})
export class Homeassignment1Component {

  qaList: QaItem[] = [
    {
      question: "What is REST API?",
      answer: "A REST API (Representational State Transfer Application Programming Interface) is a design approach for creating web services that enable communication and data exchange between a client and a server. It adheres to a set of architectural principles, promoting simplicity and scalability in web applications.\n Key features of RESTful APIs include statelessness, where each client request contains all necessary information for processing, fostering scalability and easy maintenance. REST follows a client-server architecture, separating concerns for flexibility. It also maintains a uniform interface using standard HTTP methods (GET, POST, PUT, DELETE) for resource manipulation via URIs. Resources are represented as nouns, and multiple formats (JSON, XML) are supported for data representation. Stateless communication ensures no session state is stored on the server, enhancing scalability.\n REST APIs are widely used in web and mobile applications, offering simplicity, scalability, and versatility. Their layered system architecture allows for additional components without impacting core functionality, making them a popular choice in modern web development.",
      imageUrl:"",
      showAnswer: false,
    },
    {
      question: "What are http and https protocols? Explain in detail the following http methods.\n a. GET\n b. POST\n c. PUT\n d. DELETE",
      answer: "HTTP is an application layer protocol designed to transfer information between networked devices and runs on top of other layers of the network protocol stack. A typical flow over HTTP involves a client machine making a request to a server, which then sends a response message.\nHTTPS, meaning Hypertext Transfer Protocol Secure, is the primary way to securely send data from a web browser to a website. HTTPS encrypts the data entered into a user's device to safely deliver it to the website they are interacting with.\n**GET :** The GET method is used to retrieve information from the given server using a given URI. Requests using GET should only retrieve data and should have no other effect on the data.\n**POST :** A POST request is used to send data to the server, for example, customer information, file upload, etc. using HTML forms.\n**PUT :** Replaces all current representations of the target resource with the uploaded content.\n**DELETE :** Removes all current representations of the target resource given by a URI.",
      imageUrl:"",
      showAnswer: false,
    },
    {
      question: "Explain the following with a component diagram (png image): 3-tier architecture",
      answer: "3-tier architecture divides the complete system into three inter-related but independent modules as shown:\n**1. Physical Level:** At the physical level, the information about the location of database objects in the data store is kept. Various users of DBMS are unaware of the locations of these objects.In simple terms,physical level of a database describes how the data is being stored in secondary storage devices like disks and tapes and also gives insights on additional storage details.\n**2. Conceptual Level:** At conceptual level, data is represented in the form of various database tables. For Example, STUDENT database may contain STUDENT and COURSE tables which will be visible to users but users are unaware of their storage.Also referred as logical schema,it describes what kind of data is to be stored in the database.\n **3. External Level:**  An external level specifies a view of the data in terms of conceptual level tables.  Each external level view is used to cater to the needs of a particular category of users. For Example, FACULTY of a university is interested in looking course details of students, STUDENTS are interested in looking at all details related to academics, accounts, courses and hostel details as well. So, different views can be generated for different users. The main focus of external level is data abstraction.\n\n The 3-tier architecture is widely used in modern web applications and enterprise systems because it offers scalability, flexibility, and security. ",
      imageUrl:"/assets/img/dbms-3tier.jpg",
      showAnswer: false,
    },
    {
      question: "What are different array methods in javascript? Explain with examples",
      answer: "JavaScript provides a variety of array methods that allow you to manipulate and work with arrays in a flexible and efficient manner. Here are some commonly used array methods along with examples:\n 1.  **push(): ** Adds one or more elements to the end of an array and returns the new length of the array.\n **const fruits = ['apple', 'banana'];**\n **fruits.push('cherry');** \n **console.log(fruits); // ['apple', 'banana', 'cherry']**\n 2.  **pop(): ** Removes the last element from an array and returns it.\n **const fruits = ['apple', 'banana', 'cherry'];** \n **const lastFruit = fruits.pop();**\n **console.log(lastFruit); // 'cherry'**\n **console.log(fruits);    // ['apple', 'banana']**\n 3.   **slice(): ** Returns a shallow copy of a portion of an array into a new array. It doesn't modify the original array.\n **const fruits = ['apple', 'banana', 'cherry', 'orange'];**\n **const sliced = fruits.slice(1, 3);**\n **console.log(sliced); // ['banana', 'cherry']**\n 4.   **splice(): ** Adds or removes elements from an array at a specified index.\n **const fruits = ['apple', 'banana', 'cherry'];**\n **fruits.splice(1, 1, 'orange');**\n **console.log(fruits); // ['apple', 'orange', 'cherry']**\n 5.  **forEach(): ** Executes a provided function once for each array element.\n **const numbers = [1, 2, 3];**\n **numbers.forEach((num) => {**\n **console.log(num * 2);**\n **});**\n **// Output:**\n **// 2** \n **// 4** \n **// 6** \n 6.  **map(): ** Creates a new array by applying a function to each element of the original array.\n **const numbers = [1, 2, 3];** \n **const doubled = numbers.map((num) => num * 2);**\n **console.log(doubled); // [2, 4, 6]**\n 7.  **filter(): ** Creates a new array with all elements that pass a test provided by a given function.\n **const numbers = [1, 2, 3, 4, 5];**\n **const evenNumbers = numbers.filter((num) => num % 2 === 0);**\n **console.log(evenNumbers); // [2, 4]**",
      imageUrl:"",
      showAnswer: false,
    },
    {
      question: "What is difference between let , var and const in javascript?",
      answer: "In JavaScript, **let**, **var**, and **const** are used to declare variables, but they have some important differences:\n 1. **Var:**\n In JavaScript, the **var** keyword is used to declare variables. Variables declared with **var** are function-scoped, which means they are accessible only within the function in which they are declared or as global variables if declared outside of any function. One notable characteristic of **var** is hoisting, where variable declarations are moved to the top of their containing function or global scope during compilation, making them accessible before their actual declaration in the code. However, **var** variables initialized without a value explicitly assigned to them are initialized with **undefined**. While **var** allows for reassignment and modification of its value, its loose scoping and hoisting behavior can lead to unintended bugs in complex code.\n 2. **Let:**\n The **let** keyword was introduced in ECMAScript 6 (ES6) to address some of the issues associated with **var**. Variables declared with **let** are block-scoped, meaning they are confined to the block of code (enclosed within **{}**) in which they are declared. This provides more predictable scoping behavior and reduces the risk of unintended variable access or modification. Unlike **var**, **let** variables are not initialized until they are explicitly assigned a value, avoiding the issue of variables being automatically initialized to **undefined**. **let** also respects the Temporal Dead Zone (TDZ), which prevents variable access before declaration, enhancing code safety.\n 3. **Const:**\n The **const** keyword is used to declare constants, variables whose values should not change after initialization. Like **let**, **const** is also block-scoped, ensuring that the constant is only accessible within the block in which it is defined. It is a good practice to use **const** for values that should remain unchanged, such as mathematical constants or configuration settings. However, it's important to note that while **const** variables themselves cannot be reassigned, they can store mutable data structures like objects or arrays. In such cases, the properties or elements of the object or array can still be modified. **const** is particularly useful for preventing accidental reassignment of critical values in your codebase and making your intentions regarding immutability clear.",
      imageUrl:"",
      showAnswer: false,
    },
    {
      question: "What is AJAX? Explain with examples.",
      answer: "AJAX (Asynchronous JavaScript and XML) is a web development technique that allows web applications to fetch and update data from a server without requiring a full page refresh. It enables dynamic and interactive web experiences by making asynchronous requests to the server and updating specific parts of a web page with the server's response. For example, AJAX can be used to load product lists, implement autocomplete search, or update chat messages in real-time without disrupting the overall user experience.\n Examples of AJAX Usage: \n **Form Validation: ** AJAX can be used for real-time form validation. As the user fills out a form, AJAX can send data to the server for validation and provide instant feedback to the user without reloading the page.\n **Live Search: ** AJAX is often used to create live search functionality. As the user types in a search query, AJAX requests are sent to the server to fetch matching results, which are then displayed without refreshing the page.\n **Infinite Scrolling: ** On social media platforms and other content-heavy websites, AJAX can be used to implement infinite scrolling. When users scroll down, new content is loaded from the server without requiring a full page reload.\n **Chat Applications: ** AJAX is commonly used in chat applications to send and receive messages in real-time. When a user sends a message, AJAX sends it to the server and updates the chat window with the new message without refreshing.\n **Updating User Profiles: ** When users update their profiles on a website, AJAX can be used to send the changes to the server and update the displayed information without navigating away from the profile page.\n **Weather Updates: ** AJAX can fetch weather data from a server and display it on a webpage. Users can see real-time weather updates without refreshing the page.",
      imageUrl: "/assets/img/ajax.png",
      showAnswer: false,
    },
    {
      question: "What is a single page application?",
      answer: "A single page application is a website or web application that dynamically rewrites a current web page with new data from the web server, instead of the default method of a web browser loading entire new pages.\nSome popular examples of single page applications like Gmail, Google Maps, Airbnb, Netflix, Pinterest, Paypal, and many more. Companies all over the internet are using SPAs to build a fluid, scalable experience.\nA single page application is a single page (hence the name) where a lot of information stays the same and only a few pieces need to be updated at a time.\nFor example, when you browse through your email, you’ll notice that not much changes during navigation — the sidebar and header remain untouched as you go through your inbox.",
      imageUrl:"",
      showAnswer: false,
    },
    {
      question: "What is a component in angular?",
      answer: "Components are the most basic UI building block of an Angular app. An Angular app contains a tree of Angular components. Angular components are a subset of directives, always associated with a template. Unlike other directives, only one component can be instantiated for a given element in a template.\nThe Angular component allows us to provide a way for styling the component. This means that we can provide different CSS styling, rules, and other device-specific style configuration for a specific component. For that, the Angular component has metadata properties based on your different needs and requirements.",
      imageUrl:"",
      showAnswer: false,
    },
    {
      question: "Explain with syntax the following directives:\n  a.  ngFor\n  b.  ngIf",
      answer: '**ngFor :**\nThe syntax is:\n ***ngFor="let <value> of <collection>"** \n<value> is a variable name of your choosing, <collection> is a property on your component which holds a collection, usually an array but anything that can be iterated over in a for-of loop.It is used to repeat a node for each item in a list.\n **ngIf :** \n The syntax is: \n **<div *ngIf="condition">Content to render when condition is true.</div>** \n The ngIf Directive in Angular10 is used to remove or recreate a portion of HTML element based on an expression. If the expression inside it is false then the element is removed and if it is true then the element is added to the DOM.It conditionally creates or destroys subview from the template.',
      imageUrl:"",
      showAnswer: false,
    },

  ];

  // In your component.ts file
  toggleAnswerVisibility(item: QaItem) {
    item.showAnswer = !item.showAnswer;
  }

}
