import {NgIf} from '@angular/common';
import {Component, computed, Input, signal, type WritableSignal} from '@angular/core';
import {versionIntermediateQuiz} from "../../pages/quiz/data/version-intermediate.ts";
import {FormsModule} from "@angular/forms";
import type {Option} from "../../pages/quiz/quiz.model.ts";
import {QuizOptionComponent} from "./quiz-option.component.ts";

@Component({
    selector: 'app-hello',
    standalone: true,
    imports: [NgIf, FormsModule, QuizOptionComponent],
    templateUrl: `./quiz.component.html`,
    styleUrls: ['./quiz.component.css'],
})
export default class QuizComponent {
    quiz = versionIntermediateQuiz;
    activeQuestion = signal(0);
    selectedOption: WritableSignal<Option | null> = signal(null);

    options = computed(() => {
        return this.quiz.questions[this.activeQuestion()].options;
    });

    setAnswer(option: Option) {
        console.log('set answer')
        this.selectedOption.set(option);
    }

    next() {
        this.activeQuestion.update((value) => value + 1);
        this.selectedOption.set(null);

    }
}
