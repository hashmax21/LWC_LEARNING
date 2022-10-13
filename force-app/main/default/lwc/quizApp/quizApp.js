import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
   selected = {}
   correctAnswers = 0
   isSubmitted = false
    myQuestions = [
    {   id:'Question1',
        question:"Which of the following are Loop methoods?",
        answers : {a: "for-each",b: 'iterator' ,c : "map-loop"},
        correctAnswer:"c"
    },
    {   id:'Question2',
        question:"Which of the file is invalid in the LWC component folder?",
        answers : {a: ".svg",b: '.apex' ,c : ".js"},
        correctAnswer:"b"
    },
    {   id:'Question3',
        question:"Which of the following is not a directive",
        answers : {a: "for-each",b: 'iterator' ,c : '@track'},
        correctAnswer:"c"
    }

]
 
changeHandler(event){
console.log(event.target.name);
console.log(event.target.value);
const {name, value} = event.target
this.selected = {...this.selected, [name]:value}
}

SubmithandleClick(event){
event.preventDefault()
this.isSubmitted = true
let correct = this.myQuestions.filter(item=> this.selected[item.id]=== item.correctAnswer)
this.correctAnswers = correct.length

}

ResethandleClick(){
    this.selected = {}
    this.correctAnswers = 0
}

get allNotSelected(){
    return !(Object.keys(this.selected).length === this.myQuestions.length)
}
}