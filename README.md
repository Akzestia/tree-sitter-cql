# Tree-Sitter grammar for CQL

> [!TIP]
> Reference docs [DataStax HCD](https://docs.datastax.com/en/cql/hcd/reference/cql-reference-about.html)

# List of supported CQL commands

| function_name              | implemented         |
|:--------------------------:|:-------------------:|
| ALTER KEYSPACE              | :white_check_mark: |
| ALTER MATERIALIZED VIEW     | :white_check_mark: |
| ALTER ROLE                  | :white_check_mark: |
| ALTER TABLE                 | :white_check_mark: |
| ALTER TYPE                  | :white_check_mark: |
| ALTER USER (Deprecated)     | :white_check_mark: |
| BATCH                       | :white_check_mark: |
| COMMIT SEARCH INDEX         | :white_check_mark: |
| CREATE AGGREGATE            | :white_check_mark: |
| CREATE FUNCTION             | :white_check_mark: |
| CREATE INDEX                | :white_check_mark: |
| CREATE KEYSPACE             | :white_check_mark: |
| CREATE MATERIALIZED VIEW    | :white_check_mark: |
| CREATE ROLE                 | :white_check_mark: |
| CREATE SEARCH INDEX         | :white_check_mark: |
| CREATE TABLE                | :white_check_mark: |
| CREATE TYPE                 | :white_check_mark: |
| CREATE USER (Deprecated)    | :white_check_mark: |
| DELETE                      | :white_check_mark: |
| DROP AGGREGATE              | :white_check_mark: |
| DROP FUNCTION               | :white_check_mark: |
| DROP INDEX                  | :white_check_mark: |
| DROP KEYSPACE               | :white_check_mark: |
| DROP MATERIALIZED VIEW      | :white_check_mark: |
| DROP ROLE                   | :white_check_mark: |
| DROP SEARCH INDEX           | :white_check_mark: |
| DROP TABLE                  | :white_check_mark: |
| DROP TYPE                   | :white_check_mark: |
| DROP USER (Deprecated)      | :white_check_mark: |
| GRANT ROLE                  | :white_check_mark: |
| GRANT PERMISSION            | :white_check_mark: |
| INSERT                      | :white_check_mark: |
| LIST PERMISSIONS            | :white_check_mark: |
| LIST ROLES                  | :white_check_mark: |
| LIST USERS (Deprecated)     | :white_check_mark: |
| REVOKE ROLE                 | :white_check_mark: |
| REVOKE PERMISSION           | :white_check_mark: |
| SELECT                      | :white_check_mark: |
| TRUNCATE                    | :white_check_mark: |
| UPDATE                      | :white_check_mark: |
| USE                         | :white_check_mark: |

# List of supported CQL keywords

| keyword              | implemented         |
|:--------------------:|:-------------------:|
| USE                  | :white_check_mark: |
| ALTER                | :white_check_mark: |
| CREATE               | :white_check_mark: |
| KEYSPACE             | :white_check_mark: |
| TABLE                | :white_check_mark: |
| WITH                 | :white_check_mark: |
| WHERE                | :white_check_mark: |
| IF                   | :white_check_mark: |
| AND                  | :white_check_mark: |
| SET                  | :white_check_mark: |
| IN                   | :white_check_mark: |
| TO                   | :white_check_mark: |
| FROM                 | :white_check_mark: |
| USING                | :white_check_mark: |
| TIMESTAMP            | :white_check_mark: |
| TTL                  | :white_check_mark: |
| EXISTS               | :white_check_mark: |
| NOT                  | :white_check_mark: |
| TYPE                 | :white_check_mark: |
| VIEW                 | :white_check_mark: |
| MATERIALIZED         | :white_check_mark: |
| REPLICATION          | :white_check_mark: |
| DURABLE_WRITES       | :white_check_mark: |
| BATCH                | :white_check_mark: |
| APPLY                | :white_check_mark: |
| BEGIN                | :white_check_mark: |
| UNLOGGED             | :white_check_mark: |
| LOGGED               | :white_check_mark: |
| COUNTER              | :white_check_mark: |
| TRUNCATE             | :white_check_mark: |
| INSERT               | :white_check_mark: |
| INTO                 | :white_check_mark: |
| VALUES               | :white_check_mark: |
| UPDATE               | :white_check_mark: |
| DELETE               | :white_check_mark: |
| ROLE                 | :white_check_mark: |
| PASSWORD             | :white_check_mark: |
| USER                 | :white_check_mark: |
| SUPERUSER            | :white_check_mark: |
| NOSUPERUSER          | :white_check_mark: |
| ADD                  | :white_check_mark: |
| DROP                 | :white_check_mark: |
| RENAME               | :white_check_mark: |
| COMPACT              | :white_check_mark: |
| STORAGE              | :white_check_mark: |
| CONTAINS             | :white_check_mark: |
| KEY                  | :white_check_mark: |
| LOGIN                | :white_check_mark: |
| OPTIONS              | :white_check_mark: |
| OR                   | :white_check_mark: |
| REPLACE              | :white_check_mark: |
| SFUNC                | :white_check_mark: |
| STYPE                | :white_check_mark: |
| FINALFUNC            | :white_check_mark: |
| INITCOND             | :white_check_mark: |
| LANGUAGE             | :white_check_mark: |
| INPUT                | :white_check_mark: |
| ON                   | :white_check_mark: |
| FUNCTION             | :white_check_mark: |
| CALLED               | :white_check_mark: |
| RETURNS              | :white_check_mark: |
| FILTERING            | :white_check_mark: |
| DISTINCT             | :white_check_mark: |
| AS                   | :white_check_mark: |
| KEYS                 | :white_check_mark: |
| GROUP                | :white_check_mark: |
| BY                   | :white_check_mark: |
| JSON                 | :white_check_mark: |
| NULL                 | :white_check_mark: |
| CUSTOM               | :white_check_mark: |
| AGGREGATE            | :white_check_mark: |
| ALL                  | :white_check_mark: |
| ALLOW                | :white_check_mark: |
| ASC                  | :white_check_mark: |
| AUTHORIZE            | :white_check_mark: |
| CLUSTERING           | :white_check_mark: |
| DESC                 | :white_check_mark: |
| DESCRIBE             | :white_check_mark: |
| ENTRIES              | :white_check_mark: |
| FULL                 | :white_check_mark: |
| GRANT                | :white_check_mark: |
| INDEX                | :white_check_mark: |
| KEYSPACES            | :white_check_mark: |
| LIMIT                | :white_check_mark: |
| MODIFY               | :white_check_mark: |
| NORECURSIVE          | :white_check_mark: |
| OF                   | :white_check_mark: |
| ORDER                | :white_check_mark: |
| PARTITION            | :white_check_mark: |
| PER                  | :white_check_mark: |
| PERMISSIONS          | :white_check_mark: |
| PRIMARY              | :white_check_mark: |
| REVOKE               | :white_check_mark: |
| SELECT               | :white_check_mark: |
| USERS                | :white_check_mark: |
| COMMIT               | :white_check_mark: |
| SEARCH               | :white_check_mark: |
| ROLES                | :white_check_mark: |
| DETERMINISTIC        | :white_check_mark: |
| MONOTONIC            | :white_check_mark: |
| JAVA                 | :white_check_mark: |
| JAVASCRIPT           | :white_check_mark: |
| IS                   | :white_check_mark: |
| HASHED               | :white_check_mark: |
| ACCESS               | :white_check_mark: |
| DATACENTERS          | :white_check_mark: |
| CIDRS                | :white_check_mark: |
| COLUMNS              | :white_check_mark: |
| PROFILES             | :white_check_mark: |
| CONFIG               | :white_check_mark: |
| ROWS                 | :white_check_mark: |
| FUNCTIONS            | :white_check_mark: |
| MBEANS               | :white_check_mark: |
| MBEAN                | :white_check_mark: |
| PATTERN              | :white_check_mark: |
| EXECUTE              | :white_check_mark: |
| PROXY                | :white_check_mark: |
| ID                   | :white_check_mark: |
| LIKE                 | :white_check_mark: |
| ANN                  | :white_check_mark: |
| OFFSET               | :white_check_mark: |
| LIST                 | :white_check_mark: |
| MAX                  | :white_check_mark: |
| MIN                  | :white_check_mark: |
| SUM                  | :white_check_mark: |
| AVG                  | :white_check_mark: |
| TOKEN                | :white_check_mark: |
| WRITETIME            | :white_check_mark: |
| COUNT                | :white_check_mark: |
| INFINITY             | :white_check_mark: |
| NAN                  | :white_check_mark: |
| STATIC               | :white_check_mark: |
| ANY                  | :white_check_mark: |
| HAVING               | :white_check_mark: |
| CONSISTENCY          | :white_check_mark: |
| LEVEL                | :white_check_mark: |
| ONE                  | :white_check_mark: |
| TWO                  | :white_check_mark: |
| THREE                | :white_check_mark: |
| QUORUM               | :white_check_mark: |
| LOCAL_ONE            | :white_check_mark: |
| LOCAL_QUORUM         | :white_check_mark: |
| EACH_QUORUM          | :white_check_mark: |

# List of supported CQL data types

| Data Type          | implemented         |
|:------------------:|:-------------------:|
| ASCII              | :white_check_mark: |
| BIGINT             | :white_check_mark: |
| BLOB               | :white_check_mark: |
| BOOLEAN            | :white_check_mark: |
| COUNTER            | :white_check_mark: |
| DATE               | :white_check_mark: |
| DECIMAL            | :white_check_mark: |
| DOUBLE             | :white_check_mark: |
| FLOAT              | :white_check_mark: |
| FROZEN             | :white_check_mark: |
| INET               | :white_check_mark: |
| INT                | :white_check_mark: |
| LIST               | :white_check_mark: |
| MAP                | :white_check_mark: |
| SET                | :white_check_mark: |
| SMALLINT           | :white_check_mark: |
| TEXT               | :white_check_mark: |
| TIME               | :white_check_mark: |
| TIMESTAMP          | :white_check_mark: |
| TIMEUUID           | :white_check_mark: |
| TINYINT            | :white_check_mark: |
| TUPLE              | :white_check_mark: |
| UUID               | :white_check_mark: |
| VARCHAR            | :white_check_mark: |
| VARINT             | :white_check_mark: |
