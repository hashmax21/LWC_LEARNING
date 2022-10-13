import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    value
    ifVisible = false

    Address = {
        County: "India", City:"Delhi", Pin:110002 

    }

    changeHandler(event)
    {
this.value = event.target.value
    }

    changeAddresshandler(event)
    {
        this.Address = {...this.Address, 'City' : event.target.value}
    }
    // getter demo

    arr1 = ['a','v','c']
    get returnArrVal()
    {
        return this.arr1[0];
    }

    handleClick(event){
       
        this.ifVisible = true
       
    }
    carslist = ['car1','car2','car3','car4']
    cars = ['car121','car221','car323','car4']
    ceolist =[{
        id: 1 , name : 'zukerberg', company : 'facebook' 
    },{
        id: 2 , name : 'SUndar pichai', company : 'Google' 
    },{
        id: 3 , name : 'Tim cook', company : 'Apple' 
    }] 
    
}

