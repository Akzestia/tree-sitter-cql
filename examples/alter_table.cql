ALTER TABLE cycling.teams ALTER ID TYPE uuid;

ALTER TABLE cycling.cyclist_alt_stats
ALTER birthday TYPE blob;

ALTER TABLE cycling.cyclist_races
ADD firstname text;

ALTER TABLE cycling.upcoming_calendar
ADD events list<text>;

ALTER TABLE cycling.basic_info
DROP birth_year;

ALTER TABLE cyclist_mv
  WITH comment = 'ID, name, birthdate and country'
     AND read_repair_chance = 0.2;

ALTER TABLE cycling_comments
WITH compression = {
   'sstable_compression' : 'DeflateCompressor',
   'chunk_length_kb' : 64 };

ALTER TABLE cycling.events
   WITH caching = {
    'keys': 'NONE',
    'rows_per_partition': 10 };

ALTER TABLE cycling.basic_info
DROP COMPACT STORAGE;
