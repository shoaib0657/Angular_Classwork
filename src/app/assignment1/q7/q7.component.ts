import { Component } from '@angular/core';

interface QaItem {
  question: string;
  answer: string;
  imageUrl: string;
  showAnswer: boolean;
}

@Component({
  selector: 'app-q7',
  templateUrl: './q7.component.html',
  styleUrls: ['./q7.component.css']
})
export class Q7Component {

  q = {
    question: "What is a single page application?",
    answer: "A single page application is a website or web application that dynamically rewrites a current web page with new data from the web server, instead of the default method of a web browser loading entire new pages.\nSome popular examples of single page applications like Gmail, Google Maps, Airbnb, Netflix, Pinterest, Paypal, and many more. Companies all over the internet are using SPAs to build a fluid, scalable experience.\nA single page application is a single page (hence the name) where a lot of information stays the same and only a few pieces need to be updated at a time.\nFor example, when you browse through your email, you’ll notice that not much changes during navigation — the sidebar and header remain untouched as you go through your inbox.",
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
