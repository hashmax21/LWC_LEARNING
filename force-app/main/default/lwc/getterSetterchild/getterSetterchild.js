import { LightningElement,api } from 'lwc';

export default class GetterSetterchild extends LightningElement {
    
    dataReceived

    @api get userDetails(){
        return this.dataReceived

    }
    
    set userDetails(data){
        let newAge = data.Age*2
        this.dataReceived = {...data, Age: newAge,location: 'Australia'}
    }

    
}