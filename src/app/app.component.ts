import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'math_project';
  rightAnswer: boolean = false
  fakeAnswer: boolean = false
  exercise = [{
    example: "3 + 3 =",
    answer: 6,
    fake: [2, 3, 4, 6]
  },
  {
    example: "5 * 20 =",
    answer: 100,
    fake: [1000, 60, 100, 36]
  },
  {
    example: "25 + 84 =",
    answer: 109,
    fake: [112, 109, 103, 99]
  },
  {
    example: "36 / 3 =",
    answer: 12,
    fake: [12, 13, 10, 21]
  },
  {
    example: "37 * 3 =",
    answer: 111,
    fake: [91, 94, 110, 111]
  }]

  index: number = 0;
  endExercise: boolean = false

  constructor() { }

  ngOnInit(): void { }

  next(): any {
    return this.exercise[this.index++].example;
  }

  hasNext(): boolean {
    return this.index < this.exercise.length - 1;
  }

  enumerationExample() {
    if (this.hasNext()) {
      setTimeout(() => {
        this.rightAnswer = false
        this.fakeAnswer = false
        this.next()
      }, 800)

    } else {
      this.endExercise = true
    }
  }

  answerClick(num: number) {
    if (this.exercise[this.index].answer === num) {
      this.rightAnswer = true;
      this.enumerationExample()
      return;
    }
    this.fakeAnswer = true
    setTimeout(() => {
      this.fakeAnswer = false
    }, 500)
  }


}
