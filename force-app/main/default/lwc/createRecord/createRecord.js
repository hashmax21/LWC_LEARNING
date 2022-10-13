import { LightningElement } from 'lwc';
import { createRecord } from "lightning/uiRecordApi";
import CONTACT_OBJECT from '@salesforce/schema/Contact'
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class CreateRecord extends LightningElement {
    formfields = {}
    changeHandler(event){
       //const{name, value} = event.target // value assignmnet vuia destructuring
       const{name,value} = event.target
       this.formfields[name] = value
       console.log(this.formfields)  
    }

    createContact(event)
    {   const recordInput = {apiName:CONTACT_OBJECT.objectApiName , fields:this.formfields}
    createRecord(recordInput).then(result=>{
        this.showToast('Record created',`RECORD WITH ID ${result.id}`)
        this.template.querySelector('xx').reset()
        this.formfields={}
    }).catch(error=>{this.showToast('error',error.body.message,'error')})
    }

    showToast(title, message, variant){	
        this.dispatchEvent(new ShowToastEvent({	
            title,	
            message,	
            variant:variant || 'success'	
        }))	

    }}