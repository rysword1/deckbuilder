INSERT INTO decks (title, date_created, description, card_ids)

VALUES ('deck1', '2023-08-01', '1 card in deck', ARRAY ['5909e77e-a930-4713-bca4-c6b265238c17']),
       ('deck2', '1999-12-12', '2 cards in deck', ARRAY ['5c83074d-0c9b-4b58-94ca-d75240485579', 'f80cfcad-c82b-461d-8002-a8e1acddacf2']),
       ('deck3', '2023-08-23', '', ARRAY ['f8c2e662-d8c3-44d4-b666-fe0d4a046271']);


INSERT INTO users (username, password, first_name, last_name, email)

VALUES ('user1', 'password', 'Test', 'User1', 'user1@email.com'),
       ('user2', 'password', 'User', '2', 'user2@email.com');