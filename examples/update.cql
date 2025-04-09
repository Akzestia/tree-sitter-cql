UPDATE cycling.cyclist_name
SET comments = 'Rides hard, gets along with others, a real winner'
WHERE id = fb372533-eb95-4bb4-8685-6ef61e994caa IF EXISTS;

UPDATE cycling.upcoming_calendar
SET description =
{'Criterium du Dauphine' : 'Easy race',
 'Tour du Suisse' : 'Hard uphill race',
 'Tour de France' : 'Very competitive'}
WHERE year = 2015 AND month = 6;

UPDATE cycling.upcoming_calendar
SET description = description + { 'Tour de France' : 'Very competitive'}
WHERE year = 2015 AND month = 6;

UPDATE cycling.upcoming_calendar
SET description = description + {'Criterium du Dauphine' : 'Easy race', 'Tour du Suisse' : 'Hard uphill race'}
WHERE year = 2015 AND month = 6;

UPDATE cycling.upcoming_calendar
SET description = description + {'Criterium du Dauphine' : 'Easy race'} WHERE year = 2015;

UPDATE cycling.cyclist_career_teams
SET teams = {} WHERE id=5b6962dd-3f90-4c93-8f61-eabfa4a803e2;

UPDATE cycling.cyclist_career_teams
SET teams = teams - {'DSB Bank Nederland bloeit'} WHERE id=5b6962dd-3f90-4c93-8f61-eabfa4a803e2;
