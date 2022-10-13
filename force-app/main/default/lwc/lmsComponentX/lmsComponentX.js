import { LightningElement, wire } from 'lwc';
import sampleMC from "@salesforce/messageChannel/SampleMessageChannel__c" // sampleMC is a custom name, can be anything
import {
    APPLICATION_SCOPE,
    createMessageContext,
    MessageContext,
    publish,
    releaseMessageContext,
    subscribe,
    unsubscribe,
} from 'lightning/messageService';

export default class LmsComponentX extends LightningElement 
{   inputVal
    @wire(MessageContext) context; // context here gives information of all comoponents that use the LMS

    inputHandler(event){
        this.inputVal = event.target.value
    }

    handleClick()
    { 
        const message = {lmsData:{value:this.inputVal}}
        console.log(message)
        publish(this.context,sampleMC,message)
       
        
    }
}