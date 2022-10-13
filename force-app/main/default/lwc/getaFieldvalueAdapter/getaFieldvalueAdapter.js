import { LightningElement,wire,api } from 'lwc';
import {getRecord ,getFieldValue} from 'lightning/uiRecordApi'
import NAME_FIELD from '@salesforce/schema/Account.Name';
import OWNER_NAME_FIELD from '@salesforce/schema/Account.Owner.Name';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';




export default class GetaFieldvalueAdapter extends LightningElement {
    @api recordId // this is  obtaained bydefault when the object is placed on the on record page
    name
    mydata
    
    @wire(getRecord, { recordId: '$recordId', fields: [NAME_FIELD,OWNER_NAME_FIELD,PHONE_FIELD,INDUSTRY_FIELD]  })
    propertyOrFunction({data , error}){
        if(data)
    {   this.mydata = data
        
        this.name= data.fields.Name.value
        
    }
    

    }
    
    //getFieldValue(record: Record, field: string)
}