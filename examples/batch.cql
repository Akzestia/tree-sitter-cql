BEGIN BATCH USING TIMESTAMP 1481124356754405
INSERT INTO cycling.cyclist_expenses
   (cyclist_name, expense_id, amount, description, paid)
   VALUES ('Vera ADRIAN', 2, 13.44, 'Lunch', true);
INSERT INTO cycling.cyclist_expenses
   (cyclist_name, expense_id, amount, description, paid)
   VALUES ('Vera ADRIAN', 3, 25.00, 'Dinner', true);
APPLY BATCH;

BEGIN BATCH USING TIMESTAMP 1481124356754405
  INSERT INTO cycling.cyclist_expenses
     (cyclist_name, expense_id, amount, description, paid)
     VALUES ('Vera ADRIAN', 2, 13.44, 'Lunch', true);
  INSERT INTO cycling.cyclist_expenses
     (cyclist_name, expense_id, amount, description, paid)
     VALUES ('Vera ADRIAN', 3, 25.00, 'Dinner', false) IF NOT EXISTS;
APPLY BATCH;

BEGIN BATCH
  INSERT INTO purchases (user, balance) VALUES ('user1', -8) IF NOT EXISTS;
  INSERT INTO purchases (user, expense_id, amount, description, paid)
    VALUES ('user1', 1, 8, 'burrito', false);
APPLY BATCH;

BEGIN BATCH
  UPDATE purchases SET balance = -208 WHERE user='user1' IF balance = -8;
  INSERT INTO purchases (user, expense_id, amount, description, paid)
    VALUES ('user1', 2, 200, 'hotel room', false);
APPLY BATCH;

BEGIN COUNTER BATCH
  UPDATE UserActionCounts SET total = total + 2 WHERE keyalias = 523;
  UPDATE AdminActionCounts SET total = total + 2 WHERE keyalias = 701;
APPLY BATCH;
