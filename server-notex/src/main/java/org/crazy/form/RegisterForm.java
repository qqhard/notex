package org.crazy.form;

import javax.validation.constraints.Size;

import org.crazy.model.User;
import org.hibernate.validator.constraints.NotBlank;

public class RegisterForm {
    
    private String username;

    private String password;
    
    
    public RegisterForm() {
    }

    public User update(User user) {
        User ret = new User();
        ret.setUsername(this.username);
        ret.setPassword(this.password);
        return ret;
    }

    
    public String getUsername() {
        return username;
    }
    
    public void setUsername(String username) {
        this.username = username;
    }

    
    public String getPassword() {
        return password;
    }

    
    public void setPassword(String password) {
        this.password = password;
    }
    
}
