import { LightningElement ,api} from 'lwc';

export default class P2cChild extends LightningElement {
 
    @api progress
    val = 10
     
    value = 20
    chngesliderval(event)
    {
this.value= event.target.value
    }

    @api resetSlider()
    {
        this.value = 50
    }
}