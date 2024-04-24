CREATE TABLE Ticket
(
    id              INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
    movie           VARCHAR(255),
    numberTicket    INTEGER,
    firstName       VARCHAR(255),
    lastName        VARCHAR(255),
    phoneNumber     VARCHAR(20),
    eMail           VARCHAR(100)
);
