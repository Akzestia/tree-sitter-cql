CREATE ROLE IF NOT EXISTS coach
WITH LOGIN = true
AND PASSWORD = 'All4One2day!';

CREATE ROLE IF NOT EXISTS sys_admin
WITH LOGIN = true
AND PASSWORD = 'changeme'
AND SUPERUSER = true;
