ALTER TABLE cycling.cyclist_alt_stats
ALTER birthday TYPE  blob;

ALTER TYPE fullname ADD middlename text ;

ALTER TYPE cycling.fullname
RENAME middlename TO middle
AND lastname to last
AND firstname to first;
