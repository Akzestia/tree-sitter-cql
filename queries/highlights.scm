; Uppercase keywords
[
    "ALTER" "alter"
    "USE" "use"
    "WITH" "with"
    "CREATE" "create"
    "KEYSPACE" "keyspace"
    "TABLE" "table"
    "WHERE" "where"
    "IF" "if"
    "AND" "and"
    "SET" "set"
    "IN" "in"
    "TO" "to"
    "FROM" "from"
    "USING" "using"
    "TIMESTAMP" "timestamp"
    "TTL" "ttl"
    "EXISTS" "exists"
    "NOT" "not"
    "TYPE" "type"
    "VIEW" "view"
    "MATERIALIZED" "materialized"
    "REPLICATION" "replication"
    "DURABLE_WRITES" "durable_writes"
    "BATCH" "batch"
    "APPLY" "apply"
    "BEGIN" "begin"
    "UNLOGGED" "unlogged"
    "LOGGED" "logged"
    "COUNTER" "counter"
    "TRUNCATE" "truncate"
    "INSERT" "insert"
    "INTO" "into"
    "VALUES" "values"
    "UPDATE" "update"
    "DELETE" "delete"
    "ROLE" "role"
    "PASSWORD" "password"
    "USER" "user"
    "SUPERUSER" "superuser"
    "NOSUPERUSER" "nosuperuser"
    "ADD" "add"
    "DROP" "drop"
    "RENAME" "rename"
    "COMPACT" "compact"
    "STORAGE" "storage"
    "CONTAINS" "contains"
    "KEY" "key"
    "LOGIN" "login"
    "OPTIONS" "options"
    "OR" "or"
    "REPLACE" "replace"
    "SFUNC" "sfunc"
    "STYPE" "stype"
    "FINALFUNC" "finalfunc"
    "INITCOND" "initcond"
    "LANGUAGE" "language"
    "INPUT" "input"
    "ON" "on"
    "FUNCTION" "function"
    "CALLED" "called"
    "RETURNS" "returns"
    "FILTERING" "filtering"
    "DISTINCT" "distinct"
    "AS" "as"
    "KEYS" "keys"
    "GROUP" "group"
    "BY" "by"
    "JSON" "json"
    "NULL" "null"
    "CUSTOM" "custom"
    "AGGREGATE" "aggregate"
    "ALL" "all"
    "ALLOW" "allow"
    "ASC" "asc"
    "AUTHORIZE" "authorize"
    "CLUSTERING" "clustering"
    "DESC" "desc"
    "DESCRIBE" "describe"
    "ENTRIES" "entries"
    "FULL" "full"
    "GRANT" "grant"
    "INDEX" "index"
    "KEYSPACES" "keyspaces"
    "LIMIT" "limit"
    "MODIFY" "modify"
    "NORECURSIVE" "norecursive"
    "OF" "of"
    "ORDER" "order"
    "PARTITION" "partition"
    "PER" "per"
    "PERMISSIONS" "permissions"
    "PRIMARY" "primary"
    "REVOKE" "revoke"
    "SELECT" "select"
    "USERS" "users"
    "COMMIT" "commit"
    "SEARCH" "search"
    "ROLES" "roles"
    "DETERMINISTIC" "deterministic"
    "MONOTONIC" "monotonic"
    "JAVA" "java"
    "JAVASCRIPT" "javascript"
    "IS" "is"
    "HASHED" "hashed"
    "ACCESS" "access"
    "DATACENTERS" "datacenters"
    "CIDRS" "cidrs"
    "COLUMNS" "columns"
    "PROFILES" "profiles"
    "CONFIG" "config"
    "ROWS" "rows"
    "FUNCTIONS" "functions"
    "MBEANS" "mbeans"
    "MBEAN" "mbean"
    "PATTERN" "pattern"
    "EXECUTE" "execute"
    "PROXY" "proxy"
    "ID" "id"
    "LIKE" "like"
    "ANN" "ann"
    "OFFSET" "offset"
    "LIST" "list"
] @keyword

[
  ","
] @punctuation.delimiter

[
  "("
  ")"
  "["
  "]"
  "{"
  "}"
  "<"
  ">"
] @punctuation.bracket

; Types
(cql_types_union) @type
(uuid_construct) @constructor

; Functions
(func_definition) @function

(func_definition
  (identifier) @function)

(func_definition
  (literal) @variable.special)

; Strings
(string_literal) @string
(quoted_identifier) @string

[
  "$$"
] @string.special
