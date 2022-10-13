public with sharing class AccountController {
    @AuraEnabled (cacheable=true)
    public static List<Account> getAccountList(){
        return [Select id,name, type,Industry from Account LIMIT 5];
    }

    @AuraEnabled (cacheable=true)
    public static List<Account> getAccountListbyType(String type){
        return [Select id,name, Type,Industry from Account where Type=:type LIMIT 5];
    }

    @AuraEnabled (cacheable=true)
    public static List<Account> getAccountListtwo(){
        return [Select Id,Name, Type,Industry from Account LIMIT 5];
    }
}

