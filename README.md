# Tree-Sitter grammar for CQL

> [!TIP]
> Reference docs [DataStax HCD](https://docs.datastax.com/en/cql/hcd/reference/cql-reference-about.html)

## Features

✅ &nbsp; Full CQL 3.4+ support  
✅ &nbsp; Syntax highlighting  
✅ &nbsp; Zed Editor integration  

## IDE Integration

### [Zed](https://zed.dev/)
🔗 [zed-cql on GitHub](https://github.com/Akzestia/zed-cql)

### 📋 CQL Commands

| Command                    | Status                                 |
|:--------------------------:|:--------------------------------------:|
| ALTER KEYSPACE              | :white_check_mark: &nbsp; Implemented |
| ALTER MATERIALIZED VIEW     | :white_check_mark: &nbsp; Implemented |
| ALTER ROLE                  | :white_check_mark: &nbsp; Implemented |
| ALTER TABLE                 | :white_check_mark: &nbsp; Implemented |
| ALTER TYPE                  | :white_check_mark: &nbsp; Implemented |
| ALTER USER (Deprecated)     | :white_check_mark: &nbsp; Implemented |
| BATCH                       | :white_check_mark: &nbsp; Implemented |
| COMMIT SEARCH INDEX         | :white_check_mark: &nbsp; Implemented |
| CREATE AGGREGATE            | :white_check_mark: &nbsp; Implemented |
| CREATE FUNCTION             | :white_check_mark: &nbsp; Implemented |
| CREATE INDEX                | :white_check_mark: &nbsp; Implemented |
| CREATE KEYSPACE             | :white_check_mark: &nbsp; Implemented |
| CREATE MATERIALIZED VIEW    | :white_check_mark: &nbsp; Implemented |
| CREATE ROLE                 | :white_check_mark: &nbsp; Implemented |
| CREATE SEARCH INDEX         | :white_check_mark: &nbsp; Implemented |
| CREATE TABLE                | :white_check_mark: &nbsp; Implemented |
| CREATE TYPE                 | :white_check_mark: &nbsp; Implemented |
| CREATE USER (Deprecated)    | :white_check_mark: &nbsp; Implemented |
| DELETE                      | :white_check_mark: &nbsp; Implemented |
| DROP AGGREGATE              | :white_check_mark: &nbsp; Implemented |
| DROP FUNCTION               | :white_check_mark: &nbsp; Implemented |
| DROP INDEX                  | :white_check_mark: &nbsp; Implemented |
| DROP KEYSPACE               | :white_check_mark: &nbsp; Implemented |
| DROP MATERIALIZED VIEW      | :white_check_mark: &nbsp; Implemented |
| DROP ROLE                   | :white_check_mark: &nbsp; Implemented |
| DROP SEARCH INDEX           | :white_check_mark: &nbsp; Implemented |
| DROP TABLE                  | :white_check_mark: &nbsp; Implemented |
| DROP TYPE                   | :white_check_mark: &nbsp; Implemented |
| DROP USER (Deprecated)      | :white_check_mark: &nbsp; Implemented |
| GRANT ROLE                  | :white_check_mark: &nbsp; Implemented |
| GRANT PERMISSION            | :white_check_mark: &nbsp; Implemented |
| INSERT                      | :white_check_mark: &nbsp; Implemented |
| LIST PERMISSIONS            | :white_check_mark: &nbsp; Implemented |
| LIST ROLES                  | :white_check_mark: &nbsp; Implemented |
| LIST USERS (Deprecated)     | :white_check_mark: &nbsp; Implemented |
| REVOKE ROLE                 | :white_check_mark: &nbsp; Implemented |
| REVOKE PERMISSION           | :white_check_mark: &nbsp; Implemented |
| SELECT                      | :white_check_mark: &nbsp; Implemented |
| TRUNCATE                    | :white_check_mark: &nbsp; Implemented |
| UPDATE                      | :white_check_mark: &nbsp; Implemented |
| USE                         | :white_check_mark: &nbsp; Implemented |

### 🔑 Keywords

| keyword              | Status                                |
|:--------------------:|:-------------------------------------:|
| USE                  | :white_check_mark: &nbsp; Implemented |
| ALTER                | :white_check_mark: &nbsp; Implemented |
| CREATE               | :white_check_mark: &nbsp; Implemented |
| KEYSPACE             | :white_check_mark: &nbsp; Implemented |
| TABLE                | :white_check_mark: &nbsp; Implemented |
| WITH                 | :white_check_mark: &nbsp; Implemented |
| WHERE                | :white_check_mark: &nbsp; Implemented |
| IF                   | :white_check_mark: &nbsp; Implemented |
| AND                  | :white_check_mark: &nbsp; Implemented |
| SET                  | :white_check_mark: &nbsp; Implemented |
| IN                   | :white_check_mark: &nbsp; Implemented |
| TO                   | :white_check_mark: &nbsp; Implemented |
| FROM                 | :white_check_mark: &nbsp; Implemented |
| USING                | :white_check_mark: &nbsp; Implemented |
| TIMESTAMP            | :white_check_mark: &nbsp; Implemented |
| TTL                  | :white_check_mark: &nbsp; Implemented |
| EXISTS               | :white_check_mark: &nbsp; Implemented |
| NOT                  | :white_check_mark: &nbsp; Implemented |
| TYPE                 | :white_check_mark: &nbsp; Implemented |
| VIEW                 | :white_check_mark: &nbsp; Implemented |
| MATERIALIZED         | :white_check_mark: &nbsp; Implemented |
| REPLICATION          | :white_check_mark: &nbsp; Implemented |
| DURABLE_WRITES       | :white_check_mark: &nbsp; Implemented |
| BATCH                | :white_check_mark: &nbsp; Implemented |
| APPLY                | :white_check_mark: &nbsp; Implemented |
| BEGIN                | :white_check_mark: &nbsp; Implemented |
| UNLOGGED             | :white_check_mark: &nbsp; Implemented |
| LOGGED               | :white_check_mark: &nbsp; Implemented |
| COUNTER              | :white_check_mark: &nbsp; Implemented |
| TRUNCATE             | :white_check_mark: &nbsp; Implemented |
| INSERT               | :white_check_mark: &nbsp; Implemented |
| INTO                 | :white_check_mark: &nbsp; Implemented |
| VALUES               | :white_check_mark: &nbsp; Implemented |
| UPDATE               | :white_check_mark: &nbsp; Implemented |
| DELETE               | :white_check_mark: &nbsp; Implemented |
| ROLE                 | :white_check_mark: &nbsp; Implemented |
| PASSWORD             | :white_check_mark: &nbsp; Implemented |
| USER                 | :white_check_mark: &nbsp; Implemented |
| SUPERUSER            | :white_check_mark: &nbsp; Implemented |
| NOSUPERUSER          | :white_check_mark: &nbsp; Implemented |
| ADD                  | :white_check_mark: &nbsp; Implemented |
| DROP                 | :white_check_mark: &nbsp; Implemented |
| RENAME               | :white_check_mark: &nbsp; Implemented |
| COMPACT              | :white_check_mark: &nbsp; Implemented |
| STORAGE              | :white_check_mark: &nbsp; Implemented |
| CONTAINS             | :white_check_mark: &nbsp; Implemented |
| KEY                  | :white_check_mark: &nbsp; Implemented |
| LOGIN                | :white_check_mark: &nbsp; Implemented |
| OPTIONS              | :white_check_mark: &nbsp; Implemented |
| OR                   | :white_check_mark: &nbsp; Implemented |
| REPLACE              | :white_check_mark: &nbsp; Implemented |
| SFUNC                | :white_check_mark: &nbsp; Implemented |
| STYPE                | :white_check_mark: &nbsp; Implemented |
| FINALFUNC            | :white_check_mark: &nbsp; Implemented |
| INITCOND             | :white_check_mark: &nbsp; Implemented |
| LANGUAGE             | :white_check_mark: &nbsp; Implemented |
| INPUT                | :white_check_mark: &nbsp; Implemented |
| ON                   | :white_check_mark: &nbsp; Implemented |
| FUNCTION             | :white_check_mark: &nbsp; Implemented |
| CALLED               | :white_check_mark: &nbsp; Implemented |
| RETURNS              | :white_check_mark: &nbsp; Implemented |
| FILTERING            | :white_check_mark: &nbsp; Implemented |
| DISTINCT             | :white_check_mark: &nbsp; Implemented |
| AS                   | :white_check_mark: &nbsp; Implemented |
| KEYS                 | :white_check_mark: &nbsp; Implemented |
| GROUP                | :white_check_mark: &nbsp; Implemented |
| BY                   | :white_check_mark: &nbsp; Implemented |
| JSON                 | :white_check_mark: &nbsp; Implemented |
| NULL                 | :white_check_mark: &nbsp; Implemented |
| CUSTOM               | :white_check_mark: &nbsp; Implemented |
| AGGREGATE            | :white_check_mark: &nbsp; Implemented |
| ALL                  | :white_check_mark: &nbsp; Implemented |
| ALLOW                | :white_check_mark: &nbsp; Implemented |
| ASC                  | :white_check_mark: &nbsp; Implemented |
| AUTHORIZE            | :white_check_mark: &nbsp; Implemented |
| CLUSTERING           | :white_check_mark: &nbsp; Implemented |
| DESC                 | :white_check_mark: &nbsp; Implemented |
| DESCRIBE             | :white_check_mark: &nbsp; Implemented |
| ENTRIES              | :white_check_mark: &nbsp; Implemented |
| FULL                 | :white_check_mark: &nbsp; Implemented |
| GRANT                | :white_check_mark: &nbsp; Implemented |
| INDEX                | :white_check_mark: &nbsp; Implemented |
| KEYSPACES            | :white_check_mark: &nbsp; Implemented |
| LIMIT                | :white_check_mark: &nbsp; Implemented |
| MODIFY               | :white_check_mark: &nbsp; Implemented |
| NORECURSIVE          | :white_check_mark: &nbsp; Implemented |
| OF                   | :white_check_mark: &nbsp; Implemented |
| ORDER                | :white_check_mark: &nbsp; Implemented |
| PARTITION            | :white_check_mark: &nbsp; Implemented |
| PER                  | :white_check_mark: &nbsp; Implemented |
| PERMISSIONS          | :white_check_mark: &nbsp; Implemented |
| PRIMARY              | :white_check_mark: &nbsp; Implemented |
| REVOKE               | :white_check_mark: &nbsp; Implemented |
| SELECT               | :white_check_mark: &nbsp; Implemented |
| USERS                | :white_check_mark: &nbsp; Implemented |
| COMMIT               | :white_check_mark: &nbsp; Implemented |
| SEARCH               | :white_check_mark: &nbsp; Implemented |
| ROLES                | :white_check_mark: &nbsp; Implemented |
| DETERMINISTIC        | :white_check_mark: &nbsp; Implemented |
| MONOTONIC            | :white_check_mark: &nbsp; Implemented |
| JAVA                 | :white_check_mark: &nbsp; Implemented |
| JAVASCRIPT           | :white_check_mark: &nbsp; Implemented |
| IS                   | :white_check_mark: &nbsp; Implemented |
| HASHED               | :white_check_mark: &nbsp; Implemented |
| ACCESS               | :white_check_mark: &nbsp; Implemented |
| DATACENTERS          | :white_check_mark: &nbsp; Implemented |
| CIDRS                | :white_check_mark: &nbsp; Implemented |
| COLUMNS              | :white_check_mark: &nbsp; Implemented |
| PROFILES             | :white_check_mark: &nbsp; Implemented |
| CONFIG               | :white_check_mark: &nbsp; Implemented |
| ROWS                 | :white_check_mark: &nbsp; Implemented |
| FUNCTIONS            | :white_check_mark: &nbsp; Implemented |
| MBEANS               | :white_check_mark: &nbsp; Implemented |
| MBEAN                | :white_check_mark: &nbsp; Implemented |
| PATTERN              | :white_check_mark: &nbsp; Implemented |
| EXECUTE              | :white_check_mark: &nbsp; Implemented |
| PROXY                | :white_check_mark: &nbsp; Implemented |
| ID                   | :white_check_mark: &nbsp; Implemented |
| LIKE                 | :white_check_mark: &nbsp; Implemented |
| ANN                  | :white_check_mark: &nbsp; Implemented |
| OFFSET               | :white_check_mark: &nbsp; Implemented |
| LIST                 | :white_check_mark: &nbsp; Implemented |
| MAX                  | :white_check_mark: &nbsp; Implemented |
| MIN                  | :white_check_mark: &nbsp; Implemented |
| SUM                  | :white_check_mark: &nbsp; Implemented |
| AVG                  | :white_check_mark: &nbsp; Implemented |
| TOKEN                | :white_check_mark: &nbsp; Implemented |
| WRITETIME            | :white_check_mark: &nbsp; Implemented |
| COUNT                | :white_check_mark: &nbsp; Implemented |
| INFINITY             | :white_check_mark: &nbsp; Implemented |
| NAN                  | :white_check_mark: &nbsp; Implemented |
| STATIC               | :white_check_mark: &nbsp; Implemented |
| ANY                  | :white_check_mark: &nbsp; Implemented |
| HAVING               | :white_check_mark: &nbsp; Implemented |
| CONSISTENCY          | :white_check_mark: &nbsp; Implemented |
| LEVEL                | :white_check_mark: &nbsp; Implemented |
| ONE                  | :white_check_mark: &nbsp; Implemented |
| TWO                  | :white_check_mark: &nbsp; Implemented |
| THREE                | :white_check_mark: &nbsp; Implemented |
| QUORUM               | :white_check_mark: &nbsp; Implemented |
| LOCAL_ONE            | :white_check_mark: &nbsp; Implemented |
| LOCAL_QUORUM         | :white_check_mark: &nbsp; Implemented |
| EACH_QUORUM          | :white_check_mark: &nbsp; Implemented |


### 🧮 Data Types

| Data Type          | Status                                |
|:------------------:|:-------------------------------------:|
| ASCII              | :white_check_mark: &nbsp; Implemented |
| BIGINT             | :white_check_mark: &nbsp; Implemented |
| BLOB               | :white_check_mark: &nbsp; Implemented |
| BOOLEAN            | :white_check_mark: &nbsp; Implemented |
| COUNTER            | :white_check_mark: &nbsp; Implemented |
| DATE               | :white_check_mark: &nbsp; Implemented |
| DECIMAL            | :white_check_mark: &nbsp; Implemented |
| DOUBLE             | :white_check_mark: &nbsp; Implemented |
| FLOAT              | :white_check_mark: &nbsp; Implemented |
| FROZEN             | :white_check_mark: &nbsp; Implemented |
| INET               | :white_check_mark: &nbsp; Implemented |
| INT                | :white_check_mark: &nbsp; Implemented |
| LIST               | :white_check_mark: &nbsp; Implemented |
| MAP                | :white_check_mark: &nbsp; Implemented |
| SET                | :white_check_mark: &nbsp; Implemented |
| SMALLINT           | :white_check_mark: &nbsp; Implemented |
| TEXT               | :white_check_mark: &nbsp; Implemented |
| TIME               | :white_check_mark: &nbsp; Implemented |
| TIMESTAMP          | :white_check_mark: &nbsp; Implemented |
| TIMEUUID           | :white_check_mark: &nbsp; Implemented |
| TINYINT            | :white_check_mark: &nbsp; Implemented |
| TUPLE              | :white_check_mark: &nbsp; Implemented |
| UUID               | :white_check_mark: &nbsp; Implemented |
| VARCHAR            | :white_check_mark: &nbsp; Implemented |
| VARINT             | :white_check_mark: &nbsp; Implemented |

## License

This project is licensed under the [MIT License](LICENSE).

