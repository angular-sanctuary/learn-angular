import { NgIf } from '@angular/common';
import {Component, computed, input, Input, output} from '@angular/core';
import type {Option} from "../../pages/quiz/quiz.model.ts";
import {FormsModule} from "@angular/forms";

@Component({
    selector: 'app-quiz-option',
    standalone: true,
    imports: [NgIf],
    template: `
    <li [attr.class]="classes()">
        <input type="radio" [attr.id]="'option-' + option().id" name="question" />
        <label [attr.for]="'option-' + option().id" (click)="setAnswer.emit(option())">{{option().title}}</label>
   </li>
  `,
})
export class QuizOptionComponent {
    option = input.required<Option>();
    selectedOption = input<Option>();

    setAnswer = output();

    classes = computed(() => {
        console.log(this.option().title)
        if (this.selectedOption()?.id === this.option().id && this.option().isCorrect) {
            console.log(this.option().title)
            return 'bg-green-500 text-white';
        }
        if (this.selectedOption()?.id === this.option().id && !this.option().isCorrect) {
            return 'bg-red-500 text-white';
        }
        return 'bg-gray-200';
    });
}
