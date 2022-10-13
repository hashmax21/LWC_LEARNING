import { LightningElement } from 'lwc';

export default class Percentagebar extends LightningElement {
    percent = 10

    fetchpercenatge (e){
        this.percent = e.target.value
    }

    get percentage (){
        return `width:${this.percent}%` 
    }

}