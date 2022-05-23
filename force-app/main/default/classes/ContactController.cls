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

    public integer add(integer i,integer b){
        integer k = 1+2+3+4;
        return i+j;
    }

    public integer subtraction(integer i ,integer j){
        return j-i;
    }
}