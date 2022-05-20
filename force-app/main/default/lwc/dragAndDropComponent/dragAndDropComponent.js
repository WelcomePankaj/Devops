import { LightningElement,track } from 'lwc';

export default class DragAndDropComponent extends LightningElement {
          
    
    handleDragStart(e) {
        this.style.opacity = '0.4';
        alert('pankaj>>>');
      }
       handleDragEnd(e) {
        this.style.opacity = '1';
      }

       handleDragOver(e) {
        if (e.preventDefault) {
          e.preventDefault();
        }
    
        return false;
      }
    
       handleDragEnter(e) {
        this.classList.add('over');
      }
    
       handleDragLeave(e) {
        this.classList.remove('over');
      }

    renderedCallback() {
        let items =   this.template.querySelectorAll(".container .box");
        items.forEach(function (item) {
            this.item.addEventListener('dragstart', handleDragStart);
            this.item.addEventListener('dragend', handleDragEnd);
            this.item.addEventListener('dragenter', handleDragEnter);
            this.item.addEventListener('dragleave', handleDragLeave);
            this.item.addEventListener('dragend', handleDragEnd);
          });
    }

}