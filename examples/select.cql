SELECT JSON * FROM cycling.birthday_list;

SELECT id, commenter, toJson(created_at) FROM cycling.comments_vs;

SELECT CAST(created_at AS date) FROM cycling.comments;

SELECT DISTINCT country FROM cycling.country_flag;

SELECT start_month, MAX(start_day), COUNT(*) FROM cycling.events
WHERE year = 2017 AND discipline = 'Cyclo-cross';

SELECT count(cyclist_name) FROM cycling.country_flag
WHERE country='Belgium';

SELECT AVG(race_points) FROM cycling.cyclist_points
WHERE id = e3b19ec4-774a-4d1c-9e5a-decec1e30aac;

SELECT left(firstname, 1), lastname FROM cycling.cyclist_name;

SELECT average(cyclist_time_sec) AS Average FROM cycling.team_average
WHERE team_name = 'UnitedHealthCare Pro Cycling Womens Team';

SELECT race_name AS name, race_year AS year FROM cycling.rank_by_year_and_name
WHERE TOKEN(race_year, race_name)>= 4582455970709790046;

SELECT WRITETIME (firstname) FROM cycling.cyclist_points
WHERE id = e3b19ec4-774a-4d1c-9e5a-decec1e30aac;

SELECT TTL(race_name) FROM cycling.calendar WHERE race_id = 200;

SELECT race_date, race_time FROM cycling.race_times_summary
GROUP BY race_date;

SELECT * FROM cycling.calendar WHERE race_id IN (100, 101, 102)
ORDER BY race_start_date ASC;

SELECT * FROM cycling.comments_vs
ORDER BY comment_vector ANN OF [0.15, 0.1, 0.1, 0.35, 0.55]
LIMIT 3;

SELECT rank, cyclist_name AS name FROM cycling.rank_by_year_and_name
PER PARTITION LIMIT 2;

SELECT lastname, birthday, nationality FROM cycling.cyclist_alt_stats
WHERE birthday = '1991-08-25' AND nationality = 'Ethiopia'
ALLOW FILTERING;

SELECT <uuid>AsBlob() FROM system.IndexInfo;