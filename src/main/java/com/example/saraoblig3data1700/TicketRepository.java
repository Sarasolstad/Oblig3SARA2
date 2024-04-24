package com.example.saraoblig3data1700;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public class TicketRepository {

            @Autowired
            private JdbcTemplate db;


            public void saveTicket(Ticket inTicket) {
                String sql = "INSERT INTO Ticket (movie, numberTicket, firstName, lastName, phoneNumber, eMail) VALUES(?,?,?,?,?,?)";
                db.update(sql, inTicket.getMovie(), inTicket.getNumberTicket(), inTicket.getFirstName(), inTicket.getLastName(), inTicket.getPhoneNumber(), inTicket.geteMail());
            }

            public List<Ticket> getAll() {
                String sql = "SELECT * FROM Ticket ORDER BY lastName";
                List<Ticket> allTickets = db.query(sql, new BeanPropertyRowMapper(Ticket.class));
                return allTickets;
            }
            public void deleteAll(){
                String sql ="DELETE FROM Ticket";
                db.update(sql);
            }

            public void deleteOne(int id) {
                String sql = "DELETE FROM Ticket WHERE id=?";
                db.update(sql,id);
            }
            public Ticket getOneTicket(int id) {
                Object[] param = new Object[1];
                param[0] = id;
                String sql = "SELECT * FROM Ticket WHERE id=?";
                Ticket oneTicket = db.queryForObject(sql, param, BeanPropertyRowMapper.newInstance(Ticket.class));
                return oneTicket;
            }

            public void changeTicket(Ticket inTicket){
                String sql = "UPDATE Ticket SET  movie=?, NumberTicket=?, firstName=?, lastName=?, phoneNumber=?, eMail=? WHERE id=?";
                db.update(sql, inTicket.getMovie(), inTicket.getNumberTicket(), inTicket.getFirstName(), inTicket.getLastName(), inTicket.getPhoneNumber(), inTicket.geteMail(),inTicket.getId());
            }
}
