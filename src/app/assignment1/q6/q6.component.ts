import { Component } from '@angular/core';

interface QaItem {
  question: string;
  answer: string;
  imageUrl: string;
  showAnswer: boolean;
}

@Component({
  selector: 'app-q6',
  templateUrl: './q6.component.html',
  styleUrls: ['./q6.component.css']
})
export class Q6Component {

  q = {
    question: "What is AJAX? Explain with examples.",
    answer: "AJAX (Asynchronous JavaScript and XML) is a web development technique that allows web applications to fetch and update data from a server without requiring a full page refresh. It enables dynamic and interactive web experiences by making asynchronous requests to the server and updating specific parts of a web page with the server's response. For example, AJAX can be used to load product lists, implement autocomplete search, or update chat messages in real-time without disrupting the overall user experience.\n Examples of AJAX Usage: \n **Form Validation: ** AJAX can be used for real-time form validation. As the user fills out a form, AJAX can send data to the server for validation and provide instant feedback to the user without reloading the page.\n **Live Search: ** AJAX is often used to create live search functionality. As the user types in a search query, AJAX requests are sent to the server to fetch matching results, which are then displayed without refreshing the page.\n **Infinite Scrolling: ** On social media platforms and other content-heavy websites, AJAX can be used to implement infinite scrolling. When users scroll down, new content is loaded from the server without requiring a full page reload.\n **Chat Applications: ** AJAX is commonly used in chat applications to send and receive messages in real-time. When a user sends a message, AJAX sends it to the server and updates the chat window with the new message without refreshing.\n **Updating User Profiles: ** When users update their profiles on a website, AJAX can be used to send the changes to the server and update the displayed information without navigating away from the profile page.\n **Weather Updates: ** AJAX can fetch weather data from a server and display it on a webpage. Users can see real-time weather updates without refreshing the page.",
    imageUrl: "/assets/img/ajax.png",
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
