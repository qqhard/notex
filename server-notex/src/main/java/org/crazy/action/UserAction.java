package org.crazy.action;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.crazy.model.User;
import org.crazy.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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
    
    @RequestMapping(value = "/user/addUser")
    public Object addUser(@RequestParam("username") String username,
                          @RequestParam("password") String password){
        User user = new User();
        user.setUsername(username);
        user.setPassword(password);
        User rst = userRepository.save(user);
        if(rst != null) {
            return true;
        }
        else {
            return false;
        }
        
    }
    
    @RequestMapping(value = "/user/login")
    public Object login(@RequestParam("username") String username,
                          @RequestParam("password") String password){
        HttpSession session = request.getSession(); 
        User user = userRepository.findByUsernameAndPassword(username, password);
        if(user == null) {
            return false;
        } 
        else {
            session.setAttribute("currUser", user);
            return true;
        }
    }
    
    @RequestMapping(value = "/user/logout")
    public Object logout() {
        HttpSession session = request.getSession();
        session.invalidate();
        return null;
    }
}
