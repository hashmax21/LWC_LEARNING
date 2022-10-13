import { LightningElement } from 'lwc';

export default class TestingProgress extends LightningElement {
    percent=10
    
    changeHandler(event){
        this.percent =  event.target.value
     }
}