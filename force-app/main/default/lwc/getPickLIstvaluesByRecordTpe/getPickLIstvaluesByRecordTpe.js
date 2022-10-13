import { LightningElement, wire } from 'lwc';
import { getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';


export default class Example extends LightningElement {
    value = 'inProgress';

    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
    propertyOrFunction
    rating
    accountObject = ACCOUNT_OBJECT
    @wire(getPicklistValuesByRecordType, { objectApiName: '$accountObject', recordTypeId: '$propertyOrFunction.data.defaultRecordTypeId' })
    getPicklistValuesByRecordTypehandler({data,error})
    {
        if(data){
            console.log('this is data')
            console.log(data)
            //this.rating = this.createPickList(data.picklistFieldValues.Ownership)
            this.rating = [...this.createPickList(data.picklistFieldValues.Rating)]
           
            
        }
        if(error){console.error(error)}
    }
   
    createPickList(data){
        return data.values.map((item)=> ({label: item.label, value: item.value}))
    }

    handleChange(event) {
        this.value = event.detail.value;
    }
    dispatch(data)
    {
            
    }
}