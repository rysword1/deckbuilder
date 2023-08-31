INSERT INTO decks (id, title, date_created, descr, card_ids)

VALUES (1, 'deck1', '2023-08-01', '1 card in deck', ARRAY ['5909e77e-a930-4713-bca4-c6b265238c17']),
       (2, 'deck2', '1999-12-12', '2 cards in deck', ARRAY ['5c83074d-0c9b-4b58-94ca-d75240485579', 'f80cfcad-c82b-461d-8002-a8e1acddacf2']),
       (3, 'deck3', '2023-08-23', '', ARRAY ['f8c2e662-d8c3-44d4-b666-fe0d4a046271']);