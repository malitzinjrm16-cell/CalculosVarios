package com.upiiz.CalculosVarios.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class CalculosController {

    @GetMapping("/calculos")
    public String calculos(){
        return "calculos";
    }
}
