import { LightningElement,wire } from 'lwc';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import EmailPreferencesStayInTouchReminder from "@salesforce/schema/User.EmailPreferencesStayInTouchReminder";

export default class PicklistValueAdapter extends LightningElement {
    industryField = INDUSTRY_FIELD
    accountObject =  ACCOUNT_OBJECT
    recordtypeIds
    selectedIndustry = '';
    options = []

    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
    propertyOrFunction
    
    @wire(getPicklistValues, { recordTypeId: '$propertyOrFunction.data.defaultRecordTypeId', fieldApiName: '$industryField' })
 getPicklistValues({data, error}){

        if(data)
        {
     this.options = [...this.generatePicklist(data)]

        }
        if(error)
        {
console.error(error)
        }
    }

    
    handleChange(event) {
    this.value = event.detail.value;
    }

    generatePicklist(data){
        return data.values.map((item)=>({label:item.label, value:item.value}))

    }
    
    
}



