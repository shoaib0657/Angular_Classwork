import { Component } from '@angular/core';

interface QaItem {
  question: string;
  answer: string;
  imageUrl: string;
  showAnswer: boolean;
}

@Component({
  selector: 'app-q1',
  templateUrl: './q1.component.html',
  styleUrls: ['./q1.component.css']
})
export class Q1Component {

  q = {
    question: "What is REST API?",
    answer: "A REST API (Representational State Transfer Application Programming Interface) is a design approach for creating web services that enable communication and data exchange between a client and a server. It adheres to a set of architectural principles, promoting simplicity and scalability in web applications.\n Key features of RESTful APIs include statelessness, where each client request contains all necessary information for processing, fostering scalability and easy maintenance. REST follows a client-server architecture, separating concerns for flexibility. It also maintains a uniform interface using standard HTTP methods (GET, POST, PUT, DELETE) for resource manipulation via URIs. Resources are represented as nouns, and multiple formats (JSON, XML) are supported for data representation. Stateless communication ensures no session state is stored on the server, enhancing scalability.\n REST APIs are widely used in web and mobile applications, offering simplicity, scalability, and versatility. Their layered system architecture allows for additional components without impacting core functionality, making them a popular choice in modern web development.",
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
