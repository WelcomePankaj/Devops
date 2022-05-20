public with sharing class ContactController {
   

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList() {
        return [
            SELECT Id, Name, Title, Phone, Email
            FROM Contact
            WITH SECURITY_ENFORCED
            LIMIT 10
        ]; 
    }

    public integer add(integer i, integer j){
            retunr i+j;
    }
    public integer substract(integer i, integer j){
        integer i+1;
        return j-i ;   
    }
}