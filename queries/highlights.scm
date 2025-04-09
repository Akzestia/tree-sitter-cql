; Keywords
[
  (keywords_upper_case)
  (keywords_lower_case)
] @keyword

; Types
[
  (cql_types)
] @type

; Variables and properties
(identifier) @variable
(dotted_identifier) @variable

; Constants
[
  (numeric_constant)
  (integer)
  (float)
] @number

(bool_choice) @boolean

[
  (uuid)
  (timeuuid)
] @constant

(blob) @constant.builtin

; Strings
(string_literal) @string
(quoted_identifier) @string.special

; Lists and collections
(list) @constructor
(map) @constructor
(set) @constructor
(collection) @variable

; Conditional
(if_conditions) @conditional

; Special identifiers
(list_identifier) @variable.parameter
(map_identifier) @variable.parameter

; Punctuation
";" @punctuation.delimiter
"," @punctuation.delimiter
":" @punctuation.delimiter
"." @punctuation.delimiter

"(" @punctuation.bracket
")" @punctuation.bracket
"[" @punctuation.bracket
"]" @punctuation.bracket
"{" @punctuation.bracket
"}" @punctuation.bracket

; Operators
[
  "+"
  "-"
  "*"
  "/"
  "%"
  "="
  ">"
  "<"
  ">="
  "<="
  "!="
] @operator

; Special functions and commands
(cql_commands) @function

[
  "_kw_use"
  "_kw_alter"
  "_kw_create"
  "_kw_keyspace"
  "_kw_table"
  "_kw_with"
  "_kw_where"
  "_kw_if"
  "_kw_and"
  "_kw_set"
  "_kw_in"
  "_kw_to"
  "_kw_from"
  "_kw_using"
  "_kw_timestamp"
  "_kw_ttl"
  "_kw_exists"
  "_kw_not"
  "_kw_type"
  "_kw_view"
  "_kw_materialized"
  "_kw_replication"
  "_kw_durable_writes"
  "_kw_batch"
  "_kw_apply"
  "_kw_begin"
  "_kw_unlogged"
  "_kw_logged"
  "_kw_counter"
  "_kw_truncate"
  "_kw_insert"
  "_kw_into"
  "_kw_values"
  "_kw_update"
  "_kw_delete"
  "_kw_role"
  "_kw_password"
  "_kw_user"
  "_kw_superuser"
  "_kw_nosuperuser"
  "_kw_add"
  "_kw_drop"
  "_kw_rename"
  "_kw_compact"
  "_kw_storage"
  "_kw_contains"
  "_kw_key"
  "_kw_login"
  "_kw_options"
] @keyword

; Special options and statements
(replication_statement) @property
(replication_statement_dc) @property
(table_option_single) @property
(table_option_multi) @property

; Errors
(ERROR) @error
