MySQL 

Tables SCHEMA

CREATE TABLE player (
    id INT AUTO_INCREMENT,
    username VARCHAR(60) NOT NULL, 
    email VARCHAR(60) NOT NULL UNIQUE,
    password VARCHAR(60) NOT NULL,
    role INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY (id)
);

CREATE TABLE campaigns (
    id VARCHAR(60) NOT NULL,
    userid INT NOT NULL,
    name VARCHAR(60) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY (id),
    FOREIGN KEY (userid) REFERENCES player (id) ON DELETE CASCADE
);

CREATE TABLE players_campaigns (
    userid INT NOT NULL,
    campaignid VARCHAR(60) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY (userid, campaignid),
    FOREIGN KEY (userid) REFERENCES player (id) ON DELETE CASCADE,
    FOREIGN KEY (campaignid) REFERENCES campaigns (id) ON DELETE CASCADE
);

CREATE TABLE discussions (
    id INT AUTO_INCREMENT,
    userid INT NOT NULL,
    campaignid VARCHAR(60) NOT NULL,
    image_url VARCHAR(256) NOT NULL,
    caption VARCHAR(2000) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    PRIMARY KEY (id),
    FOREIGN KEY (userid) REFERENCES player (id) ON DELETE CASCADE,
    FOREIGN KEY (campaignid) REFERENCES campaigns (id) ON DELETE CASCADE
);

    


