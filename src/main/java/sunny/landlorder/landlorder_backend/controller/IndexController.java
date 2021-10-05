package sunny.landlorder.landlorder_backend.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class IndexController {

    @RequestMapping(value = { "/", "/dashboard" })
    public ModelAndView home() {
        ModelAndView modelAndView = new ModelAndView("index");
        return modelAndView;
    }
}
