DELETE FROM cycling.cyclist_name
WHERE id = e7ae5cf3-d358-4d99-b900-85902fda9bb0 IF EXISTS;

DELETE FROM cycling.cyclist_name
WHERE id = fb372533-eb95-4bb4-8685-6ef61e994caa
IF firstname = 'Michael' AND lastname = 'Smith';

DELETE id FROM cycling.cyclist_id
WHERE lastname = 'JONES'
AND firstname = 'Bram'
IF EXISTS;

DELETE id FROM cycling.cyclist_id
WHERE lastname = 'WELTEN'
AND firstname = 'Bram'
IF age = 20;

DELETE FROM cycling.cyclist_name WHERE id = 6ab09bec-e68e-48d9-a5f8-97e6fb4c9b47;

DELETE FROM cycling.cyclist_name WHERE id IN (5b6962dd-3f90-4c93-8f61-eabfa4a803e2, 220844bf-4860-49d6-9a4b-6b5d3a79cbfb);