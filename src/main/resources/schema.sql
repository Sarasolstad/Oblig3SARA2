CREATE TABLE Ticket
(
    id              INTEGER AUTO_INCREMENT NOT NULL,
    movie           VARCHAR(255),
    numberTicket    INTEGER,
    firstName       VARCHAR(255),
    lastName        VARCHAR(255),
    phoneNumber     VARCHAR(255),
    eMail           VARCHAR(255),
                    PRIMARY KEY (id)
);