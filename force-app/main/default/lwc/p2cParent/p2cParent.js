import { LightningElement } from 'lwc';

export default class P2cParent extends LightningElement {
    percentage = 10

    handler(e){
        this.percentage = e.target.value 
    }
    handleClick(){
        this.template.querySelector('c-p2c-child').resetSlider()
    }
}