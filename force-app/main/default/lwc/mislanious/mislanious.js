import { LightningElement,track} from 'lwc';

export default class Mislanious extends LightningElement {
    personName='hello';
    
    handleChange(e) {
        //this.personName = e.detail.value;
        //alert(e.target.value);
        this.personName = e.target.value;
    }
    
    
}