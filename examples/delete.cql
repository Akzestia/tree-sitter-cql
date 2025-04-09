DELETE firstname, lastname FROM cycling.cyclist_name
WHERE id = e7ae5cf3-d358-4d99-b900-85902fda9bb0;

DELETE FROM cycling.cyclist_name
WHERE id=e7ae5cf3-d358-4d99-b900-85902fda9bb0 IF EXISTS;

DELETE FROM cycling.cyclist_name
WHERE id = 321323
if firstname='Alex' and lastname='Smith';

DELETE id FROM cyclist_id
WHERE lastname = 'WELTEN' and firstname = 'Bram'
IF EXISTS;

DELETE id FROM cyclist_id
WHERE lastname = 'WELTEN' AND firstname = 'Bram'
IF age = 2000;

DELETE firstname, lastname
  FROM cycling.cyclist_name
  USING TIMESTAMP 1318452291034
  WHERE lastname = 'VOS';

DELETE FROM cycling.cyclist_name
WHERE id = 6ab09bec-e68e-48d9-a5f8-97e6fb4c9b47;

DELETE FROM cycling.cyclist_name
WHERE firstname IN ('Alex', 'Marianne');

DELETE sponsorship ['sponsor_name'] FROM cycling.races
WHERE race_name = 'Criterium du Dauphine';

DELETE categories[3] FROM cycling.cyclist_history
WHERE lastname = 'TIRALONGO';

DELETE sponsorship FROM cycling.races
WHERE race_name = 'Criterium du Dauphine';
