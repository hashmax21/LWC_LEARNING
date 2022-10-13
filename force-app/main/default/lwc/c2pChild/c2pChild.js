import { LightningElement } from 'lwc';

export default class C2pChild extends LightningElement {
    closeHandler(){

       const myevent = new CustomEvent('close',{detail: "modal closed"})
       this.dispatchEvent(myevent)
       //this.dispatchEvent(new CustomEvent('close'))
    }
}
