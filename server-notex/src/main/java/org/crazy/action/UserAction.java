
package org.crazy.action;

import java.util.HashMap;

import javax.servlet.http.HttpSession;

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
    
    private PasswordEncoder passwordEncoder=new BCryptPasswordEncoder(4);
   
    @RequestMapping(value = "/user/register", method = RequestMethod.POST)
    public Object register(@RequestBody User user){
        
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
    
    @RequestMapping(value = "/user/login", method = RequestMethod.POST)
    public Object login(@RequestBody User user,HttpSession httpSession){
        System.out.println(user.getUsername());
        HashMap<String, Object> rstMap = new HashMap<String, Object>();
        
        User rstUser = userRepository.findByUsername(user.getUsername());
        
        boolean flag = false;
        if(rstUser != null){
        	flag = passwordEncoder.matches(user.getPassword(), rstUser.getPassword());
        	if(flag){
        		httpSession.setAttribute("userId", rstUser.getUserId());
        		rstMap.put("userId", rstUser.getUserId());
        	}
        }
        rstMap.put("success", flag);
        return rstMap;
    }
    
    @RequestMapping(value = "/user/logout", method = RequestMethod.GET)
    public Object logout(HttpSession httpSession){
    	httpSession.removeAttribute("userId");
    	HashMap<String,Object> map = new HashMap<String,Object>();
    	map.put("success", true);
    	return map;
    }
}
