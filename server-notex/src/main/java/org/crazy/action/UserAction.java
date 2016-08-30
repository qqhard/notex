
package org.crazy.action;

import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;

import org.crazy.model.User;
import org.crazy.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
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
    public Object addUser(@RequestBody User user){
        PasswordEncoder passwordEncoder=new BCryptPasswordEncoder(4);
        HashMap<String, Object> rstMap = new HashMap<String, Object>();
        
        
        
        User rstUser = userRepository.findByUsername(user.getUsername());
        
        if(rstUser != null) {
            rstMap.put("success", false);
            rstMap.put("msg", "username exist");
        }
        else {
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            userRepository.save(user);
            rstMap.put("success", true);
        }
        
        return rstMap;
    }
    
    
    

    
//    @RequestMapping(value = "/user/logout", method = RequestMethod.POST)
//    public Object logout(@RequestBody  UserForm userForm) {
//        //CsrfToken csrf = (CsrfToken) request.getAttribute(CsrfToken.class.getName());
//        //String token =  csrf.getToken();
//        HttpSession session = request.getSession();
//        session.invalidate();
//        HashMap<String, Object> rstMap = new HashMap<String, Object>();
//        rstMap.put("success", true);
//        return rstMap;
//    }
}
