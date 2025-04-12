; Keywords
[
  (cql_keywords)
] @keyword

; Types
[
  (cql_types_union)
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

; Special options and statements
(replication_statement) @property
(replication_statement_dc) @property
(table_option_single) @property
(table_option_multi) @property

; Errors
(ERROR) @error
