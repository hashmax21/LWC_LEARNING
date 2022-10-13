import { LightningElement } from 'lwc';

export default class LifeCycleHooks extends LightningElement {
    constructor(){
        super()
        console.log('constructor fired')
    }
    connectedCallback()
    {
        console.log('connectedCallback called')
    }

}