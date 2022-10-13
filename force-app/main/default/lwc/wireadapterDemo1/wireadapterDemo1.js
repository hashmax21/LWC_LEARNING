import { LightningElement,wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import USER_NAME from '@salesforce/schema/User.Name'
import USER_EMAIL from '@salesforce/schema/User.Email'
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import {getObjectInfo} from 'lightning/uiObjectInfoApi';

import ID from '@salesforce/user/Id'  // by this you can get only id nothing else, no email no name, 
                                      //for that you need wire adapter

export default class WireadapterDemo1 extends LightningElement 
{
    userId = ID
    name = USER_NAME
    email= USER_EMAIL
    user
    defaultRecordTypeId // account obj
    //@wire(adapter, adapterConfig)
    //prop or method
    userDetails

    error
    @wire(getRecord, { recordId: '$userId', fields: ['User.Name','User.Email']})
    userHandler({data, error}){
    
        if(data){
            /*this.user = data
            this.name = this.user.fields.Name.value
            this.email= this.user.fields.Email.value*/
            this.name = data.fild
        }
   }
   
   @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
   userhandlerGetObject
  /* userhandlerGetObject({data, error})
   { 
    if(data){
        this.defaultRecordTypeId = data.defaultRecordTypeId
    }
    if(error)
    {
        console.error(error)
    }
   }   */
}