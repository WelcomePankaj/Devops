import { LightningElement,api} from 'lwc';

export default class HolerRoomChild extends LightningElement {
    @api roomDetail;
    
    @api 
    publicMethodChild(valuepassfromParent){
        alert(valuepassfromParent);
    }
 
    handleRoomTile(event){
    
        const tileClicked= new CustomEvent('childroomtilechicked',{detail : this.roomDetail , bubbles :true});
        this.dispatchEvent(tileClicked);    
    
    }
}