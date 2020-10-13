package hello;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class HelloController {

    @RequestMapping("/hello")
    public String hello() {
        String style = "<style type='text/css' media='screen'>";
        style += "body { background-color: #a6b9d8; position: fixed; top: 30%; left: 50%; transform: translate(-50%, -50%); color: white; font-size: 250%; }";
        style += "</style>";
        
        String message = "Hello from GitLab via Java Maven";
        String message2 = "<BR>Go to our <a href='/'>home</a> page";
        
        String body = "<body>" + message  + "</body>";

        return style + body;

    }

}