CREATE INDEX user_state
   ON myschema.users (state);

CREATE INDEX ON myschema.users (zip);

CREATE INDEX ON mykeyspace.users (state);

CREATE INDEX ON users (phones);

CREATE INDEX entries_idx ON race (ENTRIES(race_wins));

CREATE INDEX todo_dates ON users (KEYS(todo));

CREATE INDEX rnumbers_idx
ON cycling.race_starts (FULL(rnumbers));
