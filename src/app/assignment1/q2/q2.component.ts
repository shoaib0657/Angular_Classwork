import { Component } from '@angular/core';

interface QaItem {
  question: string;
  answer: string;
  imageUrl: string;
  showAnswer: boolean;
}

@Component({
  selector: 'app-q2',
  templateUrl: './q2.component.html',
  styleUrls: ['./q2.component.css']
})
export class Q2Component {

  q = {
    question: "What are http and https protocols? Explain in detail the following http methods.\n a. GET\n b. POST\n c. PUT\n d. DELETE",
    answer: "HTTP is an application layer protocol designed to transfer information between networked devices and runs on top of other layers of the network protocol stack. A typical flow over HTTP involves a client machine making a request to a server, which then sends a response message.\nHTTPS, meaning Hypertext Transfer Protocol Secure, is the primary way to securely send data from a web browser to a website. HTTPS encrypts the data entered into a user's device to safely deliver it to the website they are interacting with.\n**GET :** The GET method is used to retrieve information from the given server using a given URI. Requests using GET should only retrieve data and should have no other effect on the data.\n**POST :** A POST request is used to send data to the server, for example, customer information, file upload, etc. using HTML forms.\n**PUT :** Replaces all current representations of the target resource with the uploaded content.\n**DELETE :** Removes all current representations of the target resource given by a URI.",
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
