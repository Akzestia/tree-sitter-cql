INSERT INTO cycling.cyclist_name (id, lastname, firstname)
  VALUES (6ab09bec-e68e-48d9-a5f8-97e6fb4c9b47, 'KRUIKSWIJK','Steven')
  USING TTL 86400 AND TIMESTAMP 123456789;

INSERT INTO cycling.cyclist_categories (id,lastname,categories)
  VALUES(
    '6ab09bec-e68e-48d9-a5f8-97e6fb4c9b47',
    'KRUIJSWIJK',
    {'GC', 'Time-trial', 'Sprint'});

INSERT INTO cycling.cyclist_teams (id,lastname,teams)
  VALUES(
    5b6962dd-3f90-4c93-8f61-eabfa4a803e2,
    'VOS',
    { 2015 : 'Rabobank-Liv Woman Cycling Team',
      2014 : 'Rabobank-Liv Woman Cycling Team' });

INSERT INTO cycling.cyclist_name (id, lastname, firstname)
   VALUES (c4b65263-fe58-4846-83e8-f0e1c13d518f, 'RATTO', 'Rissella')
IF NOT EXISTS;
