import {  LightningElement, wire } from 'lwc';
import sampleMC from "@salesforce/messageChannel/SampleMessageChannel__c" ;// sampleMC is a custom name, can be anything
import {
    APPLICATION_SCOPE,
    createMessageContext,
    MessageContext,
    publish,
    releaseMessageContext,
    subscribe,
    unsubscribe,
} from 'lightning/messageService';

export default class LmsChannelA extends LightningElement {

    @wire(MessageContext) context;
    receivedMessage
    connectedCallback()
    {
        this.subsribeMethod()
    }
    subsribeMethod(){
        subscribe(this.context,sampleMC,(message)=> {this.handldeMsg(message)},{scope:APPLICATION_SCOPE})
        // WHEN THIS LINE WAS OUT OF THIS FUNCTION IT WAS GIVING ERROR WHY?
    
    }
    handldeMsg(messasge){
        this.receivedMessage = messasge.lmsData.value  ?messasge.lmsData.value  : "no msg" 
    }

    
}