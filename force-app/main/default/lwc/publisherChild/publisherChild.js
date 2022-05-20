import { LightningElement ,api,wire} from 'lwc';
import DataMessageChanel from "@salesforce/messageChannel/DataMessageChanel__c"
import {
    MessageContext,
    publish,
    subscribe,
    unsubscribe,
    APPLICATION_SCOPE
  } from "lightning/messageService"; 


export default class PublisherChild extends LightningElement {
    @api conData;
    @wire(MessageContext) MessageContext;
    handleClick(event){
        //alert(event.target.value);
        
        const messaage = {
            recordId: this.conData.Id,
            recordData: this.conData         
         };
      
         publish(this.MessageContext, DataMessageChanel, messaage);
         alert(this.conData.Name);
    }

    
}