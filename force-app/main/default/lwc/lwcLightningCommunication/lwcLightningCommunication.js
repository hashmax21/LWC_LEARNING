import { LightningElement ,api} from 'lwc';

export default class LwcLightningCommunication extends LightningElement {
@api title // public prop used in parent

handleClick(event)  // button event handler
{
this.dispatchEvent(new CustomEvent('passData',{
    detail:{'msg': 'i am aura msg'} // detail is a keyword here
}))
}

}
