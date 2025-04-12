; Keywords
[
  "USE" "ALTER" "CREATE" "KEYSPACE" "TABLE" "WITH" "WHERE" "IF" "AND" "SET"
  "IN" "TO" "FROM" "USING" "TIMESTAMP" "TTL" "EXISTS" "NOT" "TYPE" "VIEW"
  "MATERIALIZED" "REPLICATION" "DURABLE_WRITES" "BATCH" "APPLY" "BEGIN"
  "UNLOGGED" "LOGGED" "COUNTER" "TRUNCATE" "INSERT" "INTO" "VALUES" "UPDATE"
  "DELETE" "ROLE" "PASSWORD" "USER" "SUPERUSER" "NOSUPERUSER" "ADD" "DROP"
  "RENAME" "COMPACT" "STORAGE" "CONTAINS" "KEY" "LOGIN" "OPTIONS" "OR" "REPLACE"
  "SFUNC" "STYPE" "FINALFUNC" "INITCOND" "LANGUAGE" "INPUT" "ON" "FUNCTION"
  "CALLED" "RETURNS" "FILTERING" "DISTINCT" "AS" "KEYS" "GROUP" "BY" "HAVING"
  "JSON" "NULL" "TOKEN" "WRITETIME" "COUNT" "MAX" "MIN" "SUM" "AVG" "CUSTOM"
  "AGGREGATE" "ALL" "ALLOW" "ANY" "ASC" "AUTHORIZE" "CLUSTERING" "COLUMNFAMILY"
  "CONSISTENCY" "DESC" "DESCRIBE" "EACH_QUORUM" "ENTRIES" "FULL" "GRANT" "INDEX"
  "INFINITY" "KEYSPACES" "LEVEL" "LIMIT" "LOCAL_ONE" "LOCAL_QUORUM" "MODIFY"
  "NAN" "NORECURSIVE" "OF" "ONE" "ORDER" "PARTITION" "PER" "PERMISSION"
  "PERMISSIONS" "PRIMARY" "QUORUM" "REVOKE" "SCHEMA" "SELECT" "STATIC" "THREE"
  "TWO" "USERS" "COMMIT" "SEARCH" "ROLES" "DETERMINISTIC" "MONOTONIC" "JAVA"
  "JAVASCRIPT" "IS" "HASHED" "ACCESS" "DATACENTERS" "CIDRS" "COLUMNS" "PROFILES"
  "CONFIG" "ROWS" "FUNCTIONS" "MBEANS" "MBEAN" "PATTERN" "EXECUTE" "PROXY" "ID"
  "LIKE" "ANN" "OFFSET" "LIST"
  (cql_types)
  (cql_keywords)
] @keyword

; Types
[
  (cql_types_union)
  (cql_types_constructor_list)
  (cql_types_constructor_set)
  (cql_types_constructor_tuple)
  (cql_types_constructor_map)
  (cql_types_constructor_frozen)
] @type

; Built-in functions
[
  (func_definition)
  "WRITETIME" "TOKEN" "COUNT" "MAX" "MIN" "SUM" "AVG"
] @function.builtin

; Operators
[
  "=" "+=" "-=" "*=" "/=" ">" "<" ">=" "<=" "!=" "IN" "CONTAINS"
  "CONTAINS KEY" "LIKE" "AND" "OR" "NOT"
  (if_conditions)
  (assignment_operators)
] @operator

; Literals
(string_literal) @string
(blob) @string.special
(integer) @number
(float) @float
(bool_choice) @boolean
(uuid) @constant
(timeuuid) @constant
(null) @constant.null

; Identifiers
(identifier) @variable
(quoted_identifier) @variable
(key_space_name) @namespace
(table_label) @type

; Functions
(func_definition (identifier) @function)

; Punctuation
[ "(" ")" "[" "]" "{" "}" ] @punctuation.bracket
[ "," ";" ] @punctuation.delimiter
"." @punctuation.delimiter

; Comments
(comment) @comment

; Special constructs
(primary_expression (construct_types) @type.constructor)
(collection) @constructor

; Special keywords
[
  "PRIMARY KEY" "CLUSTERING ORDER BY" "COMPACT STORAGE"
  "MATERIALIZED VIEW" "PARTITION KEY"
] @keyword

; Select wildcard
(selectors "*") @operator

; JSON keyword
"JSON" @keyword.json

; Time-related functions
[
  "TIMESTAMP" "DATE" "TIME" "TIMEUUID"
] @type.time

; Replication strategies
[
  "SimpleStrategy" "NetworkTopologyStrategy"
] @constant

; Error handling
[
  "IF EXISTS" "IF NOT EXISTS"
] @keyword.exception
