import { LightningElement } from 'lwc';

export default class PracticeQuizApp extends LightningElement {
    value = '';
    selected={}
    correct = 0
   get allNotSelected(){
        
       return  !(Object.keys(this.selected).length === this.quizData.length)
    }
    changeHandler(event){
        const{name, value} = event.target
        this.selected = {...this.selected,[name]:value}
        
        
    }
    quizData =[
        {
            id:'Question1' , question:'Which of the following is not a template loop',
             answers:{a:"for:each", b:"iterator",c:"map"}, correctAnswer:'c'
        },
        {
            id:'Question2' , question:'Which of the file is invalid in the LWC component folder',
             answers:{a:".svg", b:".apex",c:".js"}, correctAnswer:'b'
        },
        {
            id:'Question3' , question:'Which of the following is not a directive',
             answers:{a:"for:each", b:"if:true",c:"track"}, correctAnswer:'c'
        }


    ] 

    SubmitHandler(event){
        event.preventDefault()
        let correct = this.quizData.filter((item)=>this.selected[item.id]=== item.correctAnswer)
        this.correct = correct.length
        
    }
    ResetHandler(){
this.selected={}
this.correct=0
    }
    
}