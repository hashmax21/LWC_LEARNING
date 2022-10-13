import { LightningElement,wire} from 'lwc';
import pubsub from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';
import { registerListener } from 'c/pubsub';

export default class Receiverpubsub extends LightningElement {
 viewMessage = ''
    @wire (CurrentPageReference) pageRef
    
 connectedCallback(){
registerListener('onclick',this.seedata,this)
 

} 

seedata(data){
    this.viewMessage = data
}

}