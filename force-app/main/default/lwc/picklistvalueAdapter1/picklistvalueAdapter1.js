
import { LightningElement , wire} from 'lwc';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';

export default class PicklistvalueAdapter1 extends LightningElement {
    industryField = INDUSTRY_FIELD
    accountObject=ACCOUNT_OBJECT
    value = ""
    options = []

    @wire(getObjectInfo, { objectApiName: '$accountObject' })
    propertyOrFunction

    @wire(getPicklistValues, { recordTypeId: '$propertyOrFunction.data.defaultRecordTypeId', fieldApiName: '$industryField' })
    getPicklistValues1({data, error})
    {
        if(data)
        {
         this.options =  [...this.  generatePicklist(data)]
         console.log(this.options)
        }
        if(error)
        {
            console.error(error)
        }
    }

    generatePicklist(data){

       return data.values.map((item)=>({label: item.label, value: item.value}))
    }

    handleChange(event) {
    
        this.value = event.detail.value;
        
    }
  

}