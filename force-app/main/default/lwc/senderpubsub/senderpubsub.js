import { LightningElement, wire } from 'lwc';
import pubsub from 'c/pubsub'
import { CurrentPageReference } from 'lightning/navigation';
// import { registerListener } from 'c/pubsub';
import {fireEvent} from 'c/pubsub';



export default class Senderpubsub extends LightningElement {
    
@wire(CurrentPageReference) pageRef // means sender's address

    KeyPresshandler(event){
        fireEvent(this.pageRef,'onclick',event.target.value)
    
        
        
        
    }

    
}