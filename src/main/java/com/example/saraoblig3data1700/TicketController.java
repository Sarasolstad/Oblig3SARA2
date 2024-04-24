package com.example.saraoblig3data1700;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController

public class TicketController {

        @Autowired
        private TicketRepository rep;
        @PostMapping("/save")
        public void saveTicket(Ticket newTicket){
            rep.saveTicket(newTicket);
        }

        @GetMapping("/getAll")
        public List<Ticket> getAll(){
            return rep.getAll();
        }

        @GetMapping("/getOneTicket")
        public Ticket getOneTicket(int id){
            return rep.getOneTicket(id);
        }


        @PostMapping("/changeOneTicket")
        public void changeTicket(Ticket newTicket){
            rep.changeTicket(newTicket);
        }

        @GetMapping("/deleteAll")
        public void deleteAll(){
            rep.deleteAll();
        }

        @GetMapping("/deleteOne")
        public void deleteOne(int id){
            rep.deleteOne(id);
        }
}
