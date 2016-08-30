package org.crazy.config;


import org.crazy.listener.CsrfHeaderFilter;
import org.crazy.listener.LoginFailureHandler;
import org.crazy.listener.LoginSuccessHandler;
import org.crazy.listener.MyAccessDeniedHandler;
import org.crazy.listener.MyLoginUrlAuthenticationEntryPoint;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configurers.GlobalAuthenticationConfigurerAdapter;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.session.SessionRegistry;
import org.springframework.security.core.session.SessionRegistryImpl;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.csrf.CsrfFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;




@Configuration
@EnableWebSecurity
//@EnableGlobalMethodSecurity(prePostEnabled = true)
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
	
	@Override
    public void configure(WebSecurity web) throws Exception {  
    	web.ignoring().antMatchers("/image/**","/css/**","/js/**", "/note","/note/*");
    }
	
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.exceptionHandling().authenticationEntryPoint(myLoginUrlAuthenticationEntryPoint());
    	http
    		.authorizeRequests()
    			.antMatchers("/user/username","/note/*","/note").
    			permitAll()
    			.anyRequest()
    			.authenticated();
    	http.addFilterAfter(new CsrfHeaderFilter(), CsrfFilter.class);
    	
    	http.formLogin()
    		.loginProcessingUrl("/user/login")
    		.successHandler(loginSuccessHandler())
    		.failureHandler(loginFailureHandler())
    		.permitAll();
    	
    	http
    		.logout()
    			.logoutUrl("/user/logout")
    			.logoutSuccessUrl("/")
    			.invalidateHttpSession(true)
    			.logoutRequestMatcher(new AntPathRequestMatcher("/user/logout"));

    }
    
 
    @Configuration
    protected static class AuthenticationConfiguration extends
            GlobalAuthenticationConfigurerAdapter {

    	@Autowired
		private UserDetailsService userDetailsService;
    	
    	@Autowired
    	private PasswordEncoder passwordEncoder;
    	
        @Autowired
        public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
            auth.userDetailsService(userDetailsService)
            		.passwordEncoder(passwordEncoder);
            
        }
    }
    
    @Bean
    public PasswordEncoder passwordEncoder(){
    	PasswordEncoder passwordEncoder=new BCryptPasswordEncoder(4);
    	return passwordEncoder;
    }
    @Bean
    public SessionRegistry sessionRegistry(){
    	SessionRegistry sessionRegistry=new SessionRegistryImpl();
    	return sessionRegistry;
    }
    @Bean
    public LoginSuccessHandler loginSuccessHandler(){
    	return new LoginSuccessHandler();
    }
    @Bean
    public LoginFailureHandler loginFailureHandler(){
    	return new LoginFailureHandler();
    }
    
    @Bean
    public MyLoginUrlAuthenticationEntryPoint myLoginUrlAuthenticationEntryPoint(){
        return new MyLoginUrlAuthenticationEntryPoint();
    }
    
    @Bean
    public MyAccessDeniedHandler myAccessDeniedHandler(){
        return new MyAccessDeniedHandler();
    }

}