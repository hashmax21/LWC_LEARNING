import { LightningElement } from 'lwc';
import CONTACT_OBJECT from '@salesforce/schema/Contact'
import CONTACT_NAME from '@salesforce/schema/Contact.Name'
import CONTACT_TITLE from '@salesforce/schema/Contact.Title'
import CONTACT_PHONE from '@salesforce/schema/Contact.Phone'
import CONTACT_EMAIL from '@salesforce/schema/Contact.Email'
import CONTACT_ACCOUNTID from '@salesforce/schema/Contact.AccountId'
export default class LightningEdiFormDemo extends LightningElement {
    object = CONTACT_OBJECT
    fieldList = {contactName:CONTACT_NAME,contactTitle:CONTACT_TITLE,contactPhone:CONTACT_PHONE,
        contactEmail:CONTACT_EMAIL,contactAccountId:CONTACT_ACCOUNTID}

        handleclick(event){
            const inputs = this.template.querySelectorAll('lightning-input-field')
            if(inputs)
            {   
                Array.from(inputs).forEach(input=>{
                    input.reset()
                })
        }
            
        }
}