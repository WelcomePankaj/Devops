import { LightningElement,api} from 'lwc';

export default class PublicMethodChild extends LightningElement {

    value = ['red'];


    get options() {
        return [
            { label: 'Red Marker', value: 'red' },
            { label: 'Blue Marker', value: 'blue' },
            { label: 'Green Marker', value: 'green' },
            { label: 'Yello Marker', value: 'yello' },
        ];
    }
    @api
    clildCmpMethod(parentvalue){
        alert(parentvalue);
    }
   

}