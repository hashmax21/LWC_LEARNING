import { LightningElement, wire,api } from 'lwc';
import { getRecordUi } from 'lightning/uiRecordApi';

export default class Example extends LightningElement {
    retrievedData
    @api recordId
    formfields= [{fieldname:'AccountNumber' , label:'Account Number' }]

  @wire(getRecordUi, { recordIds: '$recordId' , layoutTypes: 'Full', modes:'Edit'})
  propertyOrFunction({data,error})
  {
    if(data){
        console.log('sdhcb')
        console.log(data)
    this.formfields = this.formfields.map((item)=> {
        return {...this.formfields, value: data.records[this.recordId].fields[item.fieldname].value3}
    })
    
    }
    if(error){}
  }
}

