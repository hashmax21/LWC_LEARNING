import { LightningElement ,wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList'  // extracting function from class
import getAccountListbyType from '@salesforce/apex/AccountController.getAccountListbyType'  // extracting function from class
import getAccountListtwo from '@salesforce/apex/AccountController.getAccountListtwo';

export default class AuraInLwcDemo extends LightningElement {
accountList
selectedType='Customer - Direct'
@wire (getAccountList)
accounts


@wire (getAccountList)
accountsHandler({data,error})
{   
    if(data){
        this.accountList = data.map(item=>{
            let newType = item.Type === 'Customer - Direct' ? 'Direct':item.Type
           
            return {...item, newType}
        })
       /* if(data){
            this.accountList = data.map(function(item){
                let newType
                if(item.Type=== 'Customer - Direct'){ newType= 'Direct'}
                else{newType = item.Type}
                return {...item, newType}
            })*/
    }
if(error){console.error(error)}   
}

@wire (getAccountListbyType,{type:'$selectedType'})
proporfn


accountsss
handleClick(event){
    getAccountListtwo().then((result)=>{console.log('myresult')
        console.log(result)
        this.accountsss = result
        
    }
        ).error((error)=>{console.error(error)})
}
}