import { LightningElement } from 'lwc';

export default class HotelRomeParent extends LightningElement {

    selectedRoomDetails; 
    
     HotelRoomDetails=[
        {roomNo:'First Floor' , roomCapacity:10},
        {roomNo:'Second Floor' , roomCapacity:20},
        {roomNo:'Second Floor' , roomCapacity:30},
        {roomNo:'Second Floor' , roomCapacity:60},
        {roomNo:'First Floor' , roomCapacity:17},
        {roomNo:'First Floor' , roomCapacity:19}
    ]
   
    handleClick(event){
        
        const publicChildMehtos= this.template.querySelector('c-holer-room-child');
        publicChildMehtos.publicMethodChild('This value is passed from parent');
    }
    handlechildemethod(event){
        //alert(event.detail.roomNo);
        this.selectedRoomDetails=`You have Selected : ${event.detail.roomNo} rooms with Capacity of ${event.detail.roomCapacity}`
    }
    
    constructor(){
        super();
        this.template.addEventListener('childroomtilechicked', this.handlechildemethod.bind(this));
    }
   

}