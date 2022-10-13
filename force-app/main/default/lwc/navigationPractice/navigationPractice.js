import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'

export default class NavigationPractice extends NavigationMixin (LightningElement)  {
    handleClick(event){
        this[NavigationMixin.Navigate]({type:'standard__namedPage',attributes: {pageName:'home'}})
    }
    handleClickChatter(event){
        this[NavigationMixin.Navigate]({type:'standard__namedPage',attributes: {pageName:'chatter'}})
    }
    handleClickRecordType(event){
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: '0016D00000eYWonQAG',
                objectApiName: 'Account',
                actionName: 'edit'
            }
     })
    }
}