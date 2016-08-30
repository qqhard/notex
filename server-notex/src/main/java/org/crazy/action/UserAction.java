package org.crazy.action;

import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.crazy.model.User;
import org.crazy.model.UserForm;
import org.crazy.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * 
 * 类UserAction.java的实现描述：用户Controller 
 * @author bolin.fbl 2016年8月30日 下午12:51:40
 */

@RestController
public class UserAction {
    @Autowired
    private UserRepository userRepository;
    
    @Autowired  
    private  HttpServletRequest request;  
    
    @RequestMapping(value = "/user/addUser", method = RequestMethod.POST)
    public Object addUser(@RequestBody  User user){
        
        HashMap<String, Object> rstMap = new HashMap<String, Object>();
        
        if(user == null && user.getUsername() !=  null && user.getPassword() != null) {
            User rstUser = userRepository.findByUsername(user.getUsername());
            
            if(rstUser != null) {
                User rst = userRepository.save(user);
                if(rst != null) {
                    rstMap.put("success", true);
                }
            }
            else {
                rstMap.put("success", false);
                rstMap.put("msg", "username exist");
            }
        }
        else {
            rstMap.put("success", false);
            rstMap.put("msg", "wrong arguments");
        }
        
        return rstMap;
    }
    
    @RequestMapping(value = "/user/login", method = RequestMethod.POST)
    public Object login(@RequestBody  UserForm userForm){
        HttpSession session = request.getSession(); 
        User user = userRepository.findByUsernameAndPassword(userForm.getUsername(), userForm.getPassword());
        if(user == null) {
            return false;
        } 
        else {
            session.setAttribute("currUser", user);
            return true;
        }
    }
    
    @RequestMapping(value = "/user/logout", method = RequestMethod.POST)
    public Object logout(@RequestBody  UserForm userForm) {
        
        HttpSession session = request.getSession();
        session.invalidate();
        return null;
    }
}
