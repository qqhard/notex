package org.crazy.model;

public class UserForm extends User{
    private String crsfToken;
    
    public String getCrsfToken() {
        return crsfToken;
    }

    public void setCrsfToken(String crsfToken) {
        this.crsfToken = crsfToken;
    }
}
