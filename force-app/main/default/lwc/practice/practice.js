import { LightningElement ,track } from 'lwc';

export default class Practice extends LightningElement {
    text
    trackValue
    getterData= 'hi'
    getterDemo = ['a','b']
    ietratorDemo = ['a','b','c','d']
    forEachDemo= ['p','q','r','s']

    person={
        name:'harry', age:20, city: 'Delhi'
        }

    onchangeTrack(event)
    {
    this.person = {...this.person,"city":event.target.value}
    }

    get getterDatafn(){
        return `${this.getterData} I am salesforce`
    }
    get getterDatafnn(){
        return this.getterDemo[0]
    }
}