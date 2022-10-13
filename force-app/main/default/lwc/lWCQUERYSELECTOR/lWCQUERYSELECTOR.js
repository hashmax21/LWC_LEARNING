import { LightningElement } from 'lwc';

export default class LWCQUERYSELECTOR extends LightningElement {
    
    user=['a','b','c','d']
    fetch()
    {
     const elem =this.template.querySelectorAll('h1');
     console.log(elem.innerText)
     console.log(elem.innerText)

    }
}