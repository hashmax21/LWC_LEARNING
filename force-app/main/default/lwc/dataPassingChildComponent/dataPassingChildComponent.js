import { LightningElement,api } from 'lwc';

export default class DataPassingChildComponent extends LightningElement {
    @api message
    @api isBoolean
}