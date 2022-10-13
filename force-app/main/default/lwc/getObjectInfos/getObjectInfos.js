import { LightningElement,wire } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity'
import { getObjectInfos } from "lightning/uiObjectInfoApi";


export default class GetObjectInfos extends LightningElement {
    apiName
    objectApiNames = [ACCOUNT_OBJECT,OPPORTUNITY_OBJECT]
    dataReceived
    @wire(getObjectInfos, { objectApiNames: '$objectApiNames' })
    wireHandlergetObjectInfos({data,error}){
    
        if(data){
           // this.apiName = data.results[0].result.apiName
           
           this.dataReceived = data
        }
        if (error){
            console.error(error)
        }
    }
}