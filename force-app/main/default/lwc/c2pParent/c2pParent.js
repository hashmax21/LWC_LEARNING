import { LightningElement } from 'lwc';

export default class C2pParent extends LightningElement {
    showModal = false
    msg
    handleClick(event){
        this.showModal = true
    }

    closeModal(event){
        this.msg = event.detail
        this.showModal = false
    }
}