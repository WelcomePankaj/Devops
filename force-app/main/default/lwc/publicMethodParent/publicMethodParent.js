import { LightningElement,api } from 'lwc';

export default class PublicMethodParent extends LightningElement {
    @api inputvalue='asdasd';

    callMethodonChild(){
        ///alert(this.template.querySelector('c-public-method-child'));
        const selectedcmp=this.template.querySelector('c-public-method-child');
        selectedcmp.clildCmpMethod(this.inputvalue);
    }

    handleInputChange(event){
        this.inputvalue=event.detail.value; 
    }
}