# CQL用Tree-Sitter文法

[🇺🇸 English](README.md) | [🇯🇵 日本語](README_jap.md)

-------------------------------------------------------

> [!TIP]
> 参考ドキュメント [DataStax HCD](https://docs.datastax.com/en/cql/hcd/reference/cql-reference-about.html)

## 特徴

✅ &nbsp; CQL 3.4+ 完全サポート  
✅ &nbsp; シンタックスハイライト  
✅ &nbsp; Zed Editor統合  
✅ &nbsp; Neovim統合  

## IDE統合

- ### [Zed](https://zed.dev/)
  - 🔗 [GitHub上のzed-cql](https://github.com/Akzestia/zed-cql)<br/>
  - 🔗 [zed.dev上のzed-cql](https://zed.dev/extensions?query=CQL)
- ### [Neovim](https://neovim.io/)
  - 🔗 [GitHub上のnvim-cql](https://github.com/Akzestia/nvim-cql)

### 📋 CQLコマンド

| コマンド                     | 状態                                    |
|:---------------------------:|:--------------------------------------:|
| ALTER KEYSPACE              | :white_check_mark: &nbsp; 実装済み      |
| ALTER MATERIALIZED VIEW     | :white_check_mark: &nbsp; 実装済み      |
| ALTER ROLE                  | :white_check_mark: &nbsp; 実装済み      |
| ALTER TABLE                 | :white_check_mark: &nbsp; 実装済み      |
| ALTER TYPE                  | :white_check_mark: &nbsp; 実装済み      |
| ALTER USER (非推奨)          | :white_check_mark: &nbsp; 実装済み      |
| BATCH                       | :white_check_mark: &nbsp; 実装済み      |
| COMMIT SEARCH INDEX         | :white_check_mark: &nbsp; 実装済み      |
| CREATE AGGREGATE            | :white_check_mark: &nbsp; 実装済み      |
| CREATE FUNCTION             | :white_check_mark: &nbsp; 実装済み      |
| CREATE INDEX                | :white_check_mark: &nbsp; 実装済み      |
| CREATE KEYSPACE             | :white_check_mark: &nbsp; 実装済み      |
| CREATE MATERIALIZED VIEW    | :white_check_mark: &nbsp; 実装済み      |
| CREATE ROLE                 | :white_check_mark: &nbsp; 実装済み      |
| CREATE SEARCH INDEX         | :white_check_mark: &nbsp; 実装済み      |
| CREATE TABLE                | :white_check_mark: &nbsp; 実装済み      |
| CREATE TYPE                 | :white_check_mark: &nbsp; 実装済み      |
| CREATE USER (非推奨)         | :white_check_mark: &nbsp; 実装済み      |
| DELETE                      | :white_check_mark: &nbsp; 実装済み      |
| DROP AGGREGATE              | :white_check_mark: &nbsp; 実装済み      |
| DROP FUNCTION               | :white_check_mark: &nbsp; 実装済み      |
| DROP INDEX                  | :white_check_mark: &nbsp; 実装済み      |
| DROP KEYSPACE               | :white_check_mark: &nbsp; 実装済み      |
| DROP MATERIALIZED VIEW      | :white_check_mark: &nbsp; 実装済み      |
| DROP ROLE                   | :white_check_mark: &nbsp; 実装済み      |
| DROP SEARCH INDEX           | :white_check_mark: &nbsp; 実装済み      |
| DROP TABLE                  | :white_check_mark: &nbsp; 実装済み      |
| DROP TYPE                   | :white_check_mark: &nbsp; 実装済み      |
| DROP USER (非推奨)           | :white_check_mark: &nbsp; 実装済み      |
| GRANT ROLE                  | :white_check_mark: &nbsp; 実装済み      |
| GRANT PERMISSION            | :white_check_mark: &nbsp; 実装済み      |
| INSERT                      | :white_check_mark: &nbsp; 実装済み      |
| LIST PERMISSIONS            | :white_check_mark: &nbsp; 実装済み      |
| LIST ROLES                  | :white_check_mark: &nbsp; 実装済み      |
| LIST USERS (非推奨)          | :white_check_mark: &nbsp; 実装済み      |
| REVOKE ROLE                 | :white_check_mark: &nbsp; 実装済み      |
| REVOKE PERMISSION           | :white_check_mark: &nbsp; 実装済み      |
| SELECT                      | :white_check_mark: &nbsp; 実装済み      |
| TRUNCATE                    | :white_check_mark: &nbsp; 実装済み      |
| UPDATE                      | :white_check_mark: &nbsp; 実装済み      |
| USE                         | :white_check_mark: &nbsp; 実装済み      |

### 🔑 キーワード

| キーワード           | 状態                                |
|:------------------:|:-----------------------------------:|
| USE                | :white_check_mark: &nbsp; 実装済み   |
| ALTER              | :white_check_mark: &nbsp; 実装済み   |
| CREATE             | :white_check_mark: &nbsp; 実装済み   |
| KEYSPACE           | :white_check_mark: &nbsp; 実装済み   |
| TABLE              | :white_check_mark: &nbsp; 実装済み   |
| WITH               | :white_check_mark: &nbsp; 実装済み   |
| WHERE              | :white_check_mark: &nbsp; 実装済み   |
| IF                 | :white_check_mark: &nbsp; 実装済み   |
| AND                | :white_check_mark: &nbsp; 実装済み   |
| SET                | :white_check_mark: &nbsp; 実装済み   |
| IN                 | :white_check_mark: &nbsp; 実装済み   |
| TO                 | :white_check_mark: &nbsp; 実装済み   |
| FROM               | :white_check_mark: &nbsp; 実装済み   |
| USING              | :white_check_mark: &nbsp; 実装済み   |
| TIMESTAMP          | :white_check_mark: &nbsp; 実装済み   |
| TTL                | :white_check_mark: &nbsp; 実装済み   |
| EXISTS             | :white_check_mark: &nbsp; 実装済み   |
| NOT                | :white_check_mark: &nbsp; 実装済み   |
| TYPE               | :white_check_mark: &nbsp; 実装済み   |
| VIEW               | :white_check_mark: &nbsp; 実装済み   |
| MATERIALIZED       | :white_check_mark: &nbsp; 実装済み   |
| REPLICATION        | :white_check_mark: &nbsp; 実装済み   |  
| DURABLE_WRITES     | :white_check_mark: &nbsp; 実装済み   |
| BATCH              | :white_check_mark: &nbsp; 実装済み   |
| APPLY              | :white_check_mark: &nbsp; 実装済み   |
| BEGIN              | :white_check_mark: &nbsp; 実装済み   |
| UNLOGGED           | :white_check_mark: &nbsp; 実装済み   |
| LOGGED             | :white_check_mark: &nbsp; 実装済み   |
| COUNTER            | :white_check_mark: &nbsp; 実装済み   |
| TRUNCATE           | :white_check_mark: &nbsp; 実装済み   |
| INSERT             | :white_check_mark: &nbsp; 実装済み   |
| INTO               | :white_check_mark: &nbsp; 実装済み   |
| VALUES             | :white_check_mark: &nbsp; 実装済み   |
| UPDATE             | :white_check_mark: &nbsp; 実装済み   |
| DELETE             | :white_check_mark: &nbsp; 実装済み   |
| ROLE               | :white_check_mark: &nbsp; 実装済み   |
| PASSWORD           | :white_check_mark: &nbsp; 実装済み   |
| USER               | :white_check_mark: &nbsp; 実装済み   |
| SUPERUSER          | :white_check_mark: &nbsp; 実装済み   |
| NOSUPERUSER        | :white_check_mark: &nbsp; 実装済み   |
| ADD                | :white_check_mark: &nbsp; 実装済み   |
| DROP               | :white_check_mark: &nbsp; 実装済み   |
| RENAME             | :white_check_mark: &nbsp; 実装済み   |
| COMPACT            | :white_check_mark: &nbsp; 実装済み   |
| STORAGE            | :white_check_mark: &nbsp; 実装済み   |
| CONTAINS           | :white_check_mark: &nbsp; 実装済み   |
| KEY                | :white_check_mark: &nbsp; 実装済み   |
| LOGIN              | :white_check_mark: &nbsp; 実装済み   |
| OPTIONS            | :white_check_mark: &nbsp; 実装済み   |
| OR                 | :white_check_mark: &nbsp; 実装済み   |
| REPLACE            | :white_check_mark: &nbsp; 実装済み   |
| SFUNC              | :white_check_mark: &nbsp; 実装済み   |
| STYPE              | :white_check_mark: &nbsp; 実装済み   |
| FINALFUNC          | :white_check_mark: &nbsp; 実装済み   |
| INITCOND           | :white_check_mark: &nbsp; 実装済み   |
| LANGUAGE           | :white_check_mark: &nbsp; 実装済み   |
| INPUT              | :white_check_mark: &nbsp; 実装済み   |
| ON                 | :white_check_mark: &nbsp; 実装済み   |
| FUNCTION           | :white_check_mark: &nbsp; 実装済み   |
| CALLED             | :white_check_mark: &nbsp; 実装済み   |
| RETURNS            | :white_check_mark: &nbsp; 実装済み   |
| FILTERING          | :white_check_mark: &nbsp; 実装済み   |
| DISTINCT           | :white_check_mark: &nbsp; 実装済み   |
| AS                 | :white_check_mark: &nbsp; 実装済み   |
| KEYS               | :white_check_mark: &nbsp; 実装済み   |
| GROUP              | :white_check_mark: &nbsp; 実装済み   |
| BY                 | :white_check_mark: &nbsp; 実装済み   |
| JSON               | :white_check_mark: &nbsp; 実装済み   |
| NULL               | :white_check_mark: &nbsp; 実装済み   |
| CUSTOM             | :white_check_mark: &nbsp; 実装済み   |
| AGGREGATE          | :white_check_mark: &nbsp; 実装済み   |
| ALL                | :white_check_mark: &nbsp; 実装済み   |
| ALLOW              | :white_check_mark: &nbsp; 実装済み   |
| ASC                | :white_check_mark: &nbsp; 実装済み   |
| AUTHORIZE          | :white_check_mark: &nbsp; 実装済み   |
| CLUSTERING         | :white_check_mark: &nbsp; 実装済み   |
| DESC               | :white_check_mark: &nbsp; 実装済み   |
| DESCRIBE           | :white_check_mark: &nbsp; 実装済み   |
| ENTRIES            | :white_check_mark: &nbsp; 実装済み   |
| FULL               | :white_check_mark: &nbsp; 実装済み   |
| GRANT              | :white_check_mark: &nbsp; 実装済み   |
| INDEX              | :white_check_mark: &nbsp; 実装済み   |
| KEYSPACES          | :white_check_mark: &nbsp; 実装済み   |
| LIMIT              | :white_check_mark: &nbsp; 実装済み   |
| MODIFY             | :white_check_mark: &nbsp; 実装済み   |
| NORECURSIVE        | :white_check_mark: &nbsp; 実装済み   |
| OF                 | :white_check_mark: &nbsp; 実装済み   |
| ORDER              | :white_check_mark: &nbsp; 実装済み   |
| PARTITION          | :white_check_mark: &nbsp; 実装済み   |
| PER                | :white_check_mark: &nbsp; 実装済み   |
| PERMISSIONS        | :white_check_mark: &nbsp; 実装済み   |
| PRIMARY            | :white_check_mark: &nbsp; 実装済み   |
| REVOKE             | :white_check_mark: &nbsp; 実装済み   |
| SELECT             | :white_check_mark: &nbsp; 実装済み   |
| USERS              | :white_check_mark: &nbsp; 実装済み   |
| COMMIT             | :white_check_mark: &nbsp; 実装済み   |
| SEARCH             | :white_check_mark: &nbsp; 実装済み   |
| ROLES              | :white_check_mark: &nbsp; 実装済み   |
| DETERMINISTIC      | :white_check_mark: &nbsp; 実装済み   |
| MONOTONIC          | :white_check_mark: &nbsp; 実装済み   |
| JAVA               | :white_check_mark: &nbsp; 実装済み   |
| JAVASCRIPT         | :white_check_mark: &nbsp; 実装済み   |
| IS                 | :white_check_mark: &nbsp; 実装済み   |
| HASHED             | :white_check_mark: &nbsp; 実装済み   |
| ACCESS             | :white_check_mark: &nbsp; 実装済み   |
| DATACENTERS        | :white_check_mark: &nbsp; 実装済み   |
| CIDRS              | :white_check_mark: &nbsp; 実装済み   |
| COLUMNS            | :white_check_mark: &nbsp; 実装済み   |
| PROFILES           | :white_check_mark: &nbsp; 実装済み   |
| CONFIG             | :white_check_mark: &nbsp; 実装済み   |
| ROWS               | :white_check_mark: &nbsp; 実装済み   |
| FUNCTIONS          | :white_check_mark: &nbsp; 実装済み   |
| MBEANS             | :white_check_mark: &nbsp; 実装済み   |
| MBEAN              | :white_check_mark: &nbsp; 実装済み   |
| PATTERN            | :white_check_mark: &nbsp; 実装済み   |
| EXECUTE            | :white_check_mark: &nbsp; 実装済み   |
| PROXY              | :white_check_mark: &nbsp; 実装済み   |
| ID                 | :white_check_mark: &nbsp; 実装済み   |
| LIKE               | :white_check_mark: &nbsp; 実装済み   |
| ANN                | :white_check_mark: &nbsp; 実装済み   |
| OFFSET             | :white_check_mark: &nbsp; 実装済み   |
| LIST               | :white_check_mark: &nbsp; 実装済み   |
| MAX                | :white_check_mark: &nbsp; 実装済み   |
| MIN                | :white_check_mark: &nbsp; 実装済み   |
| SUM                | :white_check_mark: &nbsp; 実装済み   |
| AVG                | :white_check_mark: &nbsp; 実装済み   |
| TOKEN              | :white_check_mark: &nbsp; 実装済み   |
| WRITETIME          | :white_check_mark: &nbsp; 実装済み   |
| COUNT              | :white_check_mark: &nbsp; 実装済み   |
| INFINITY           | :white_check_mark: &nbsp; 実装済み   |
| NAN                | :white_check_mark: &nbsp; 実装済み   |
| STATIC             | :white_check_mark: &nbsp; 実装済み   |
| ANY                | :white_check_mark: &nbsp; 実装済み   |
| HAVING             | :white_check_mark: &nbsp; 実装済み   |
| CONSISTENCY        | :white_check_mark: &nbsp; 実装済み   |
| LEVEL              | :white_check_mark: &nbsp; 実装済み   |
| ONE                | :white_check_mark: &nbsp; 実装済み   |
| TWO                | :white_check_mark: &nbsp; 実装済み   |
| THREE              | :white_check_mark: &nbsp; 実装済み   |
| QUORUM             | :white_check_mark: &nbsp; 実装済み   |
| LOCAL_ONE          | :white_check_mark: &nbsp; 実装済み   |
| LOCAL_QUORUM       | :white_check_mark: &nbsp; 実装済み   |
| EACH_QUORUM        | :white_check_mark: &nbsp; 実装済み   |

### 🧮 データ型

| データ型          | 状態                                 |
|:----------------:|:-----------------------------------:|
| ASCII            | :white_check_mark: &nbsp; 実装済み   |
| BIGINT           | :white_check_mark: &nbsp; 実装済み   |
| BLOB             | :white_check_mark: &nbsp; 実装済み   |
| BOOLEAN          | :white_check_mark: &nbsp; 実装済み   |
| COUNTER          | :white_check_mark: &nbsp; 実装済み   |
| DATE             | :white_check_mark: &nbsp; 実装済み   |
| DECIMAL          | :white_check_mark: &nbsp; 実装済み   |
| DOUBLE           | :white_check_mark: &nbsp; 実装済み   |
| FLOAT            | :white_check_mark: &nbsp; 実装済み   |
| FROZEN           | :white_check_mark: &nbsp; 実装済み   |
| INET             | :white_check_mark: &nbsp; 実装済み   |
| INT              | :white_check_mark: &nbsp; 実装済み   |
| LIST             | :white_check_mark: &nbsp; 実装済み   |
| MAP              | :white_check_mark: &nbsp; 実装済み   |
| SET              | :white_check_mark: &nbsp; 実装済み   |
| SMALLINT         | :white_check_mark: &nbsp; 実装済み   |
| TEXT             | :white_check_mark: &nbsp; 実装済み   |
| TIME             | :white_check_mark: &nbsp; 実装済み   |
| TIMESTAMP        | :white_check_mark: &nbsp; 実装済み   |
| TIMEUUID         | :white_check_mark: &nbsp; 実装済み   |
| TINYINT          | :white_check_mark: &nbsp; 実装済み   |
| TUPLE            | :white_check_mark: &nbsp; 実装済み   |
| UUID             | :white_check_mark: &nbsp; 実装済み   |
| VARCHAR          | :white_check_mark: &nbsp; 実装済み   |
| VARINT           | :white_check_mark: &nbsp; 実装済み   |

## ライセンス

このプロジェクトは[MITライセンス](LICENSE)の下でライセンスされています。
