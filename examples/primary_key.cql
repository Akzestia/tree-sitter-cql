
create table if not exists users (
    id uuid,
    display_name text,

    primary key((id)) -- (())
);

create table if not exists users (
    id uuid,
    display_name text,

    primary key(id, (user_name)) -- (, ())
);

CREATE TABLE IF NOT EXISTS UsersByID (
    id UUID,
    user_name TEXT,

    PRIMARY KEY ((id), user_name) -- ((), )
);
