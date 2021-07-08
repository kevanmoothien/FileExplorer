import { LightningElement } from 'lwc';

export default class TestEvent extends LightningElement {

    constructor () {
        super()
        window.addEventListener('itemclick', this.handleClick);
    }

    handleClick = (event) => {
        console.log('mo icicicic')
        console.log(JSON.stringify(event.detail))
    }

}