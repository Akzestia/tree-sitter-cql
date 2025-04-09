/**
 * @file Cql grammar for tree-sitter
 * @author アクゼスティア <akzestia@gmail.com>
 * @license MIT
 */

module.exports = grammar({
  name: "cql",

  extras: ($) => [/\s/],

  rules: {
    source_file: ($) => repeat($._statement),

    _statement: ($) => choice($.use_keyspace_statement, $.cql_commands),

    keywords_upper_case: ($) =>
      choice(
        "ADD",
        "AGGREGATE",
        "ALLOW",
        "ALTER",
        "AND",
        "ANY",
        "APPLY",
        "ASC",
        "AUTHORIZE",
        "BATCH",
        "BEGIN",
        "BY",
        "COLUMNFAMILY",
        "CREATE",
        "DELETE",
        "DESC",
        "DROP",
        "EACH_QUORUM",
        "ENTRIES",
        "FULL",
        "GRANT",
        "IF",
        "IN",
        "INDEX",
        "INET",
        "INFINITY",
        "INSERT",
        "INTO",
        "KEYSPACE",
        "KEYSPACES",
        "LIMIT",
        "LOCAL_ONE",
        "LOCAL_QUORUM",
        "MATERIALIZED",
        "MODIFY",
        "NAN",
        "NORECURSIVE",
        "NOT",
        "OF",
        "ON",
        "ONE",
        "ORDER",
        "PARTITION",
        "PASSWORD",
        "PER",
        "PRIMARY",
        "QUORUM",
        "RENAME",
        "REVOKE",
        "SCHEMA",
        "SELECT",
        "SET",
        "TABLE",
        "TIME",
        "THREE",
        "TO",
        "TOKEN",
        "TRUNCATE",
        "TWO",
        "UNLOGGED",
        "UPDATE",
        "USE",
        "USING",
        "VIEW",
        "WHERE",
        "WITH",
      ),

    keywords_lower_case: ($) =>
      choice(
        "add",
        "aggregate",
        "allow",
        "alter",
        "and",
        "any",
        "apply",
        "asc",
        "authorize",
        "batch",
        "begin",
        "by",
        "columnfamily",
        "create",
        "delete",
        "desc",
        "drop",
        "each_quorum",
        "entries",
        "full",
        "grant",
        "if",
        "in",
        "index",
        "inet",
        "infinity",
        "insert",
        "into",
        "keyspace",
        "keyspaces",
        "limit",
        "local_one",
        "local_quorum",
        "materialized",
        "modify",
        "nan",
        "norecursive",
        "not",
        "of",
        "on",
        "one",
        "order",
        "partition",
        "password",
        "per",
        "primary",
        "quorum",
        "rename",
        "revoke",
        "schema",
        "select",
        "set",
        "table",
        "time",
        "three",
        "to",
        "token",
        "truncate",
        "two",
        "unlogged",
        "update",
        "use",
        "using",
        "view",
        "where",
        "with",
      ),

    cql_types: ($) =>
      choice(
        "ascii",
        "bigint",
        "blob",
        "boolean",
        "counter",
        "date",
        "decimal",
        "double",
        "float",
        "frozen",
        "inet",
        "int",
        "list",
        "map",
        "set",
        "smallint",
        "text",
        "time",
        "timestamp",
        "timeuuid",
        "tinyint",
        "tuple",
        "uuid",
        "varchar",
        "varint",
      ),

    cql_types_list: ($) => seq("list", "<", $.cql_types, ">"),

    use_keyspace_statement: ($) => seq($._kw_use, $.literal, ";"),

    _kw_use: ($) => choice("USE", "use"),
    _kw_alter: ($) => choice("ALTER", "alter"),
    _kw_create: ($) => choice("CREATE", "create"),
    _kw_keyspace: ($) => choice("KEYSPACE", "keyspace"),
    _kw_table: ($) => choice("TABLE", "table"),
    _kw_with: ($) => choice("WITH", "with"),
    _kw_where: ($) => choice("WHERE", "where"),
    _kw_if: ($) => choice("IF", "if"),
    _kw_and: ($) => choice("AND", "and"),
    _kw_set: ($) => choice("SET", "set"),
    _kw_in: ($) => choice("IN", "in"),
    _kw_to: ($) => choice("TO", "to"),
    _kw_from: ($) => choice("FROM", "from"),
    _kw_using: ($) => choice("USING", "using"),
    _kw_timestamp: ($) => choice("TIMESTAMP", "timestamp"),
    _kw_ttl: ($) => choice("TTL", "ttl"),
    _kw_exists: ($) => choice("EXISTS", "exists"),
    _kw_not: ($) => choice("NOT", "not"),
    _kw_type: ($) => choice("TYPE", "type"),
    _kw_view: ($) => choice("VIEW", "view"),
    _kw_materialized: ($) => choice("MATERIALIZED", "materialized"),
    _kw_replication: ($) => choice("REPLICATION", "replication"),
    _kw_durable_writes: ($) => choice("DURABLE_WRITES", "durable_writes"),
    _kw_batch: ($) => choice("BATCH", "batch"),
    _kw_apply: ($) => choice("APPLY", "apply"),
    _kw_begin: ($) => choice("BEGIN", "begin"),
    _kw_unlogged: ($) => choice("UNLOGGED", "unlogged"),
    _kw_logged: ($) => choice("LOGGED", "logged"),
    _kw_counter: ($) => choice("COUNTER", "counter"),
    _kw_truncate: ($) => choice("TRUNCATE", "truncate"),
    _kw_insert: ($) => choice("INSERT", "insert"),
    _kw_into: ($) => choice("INTO", "into"),
    _kw_values: ($) => choice("VALUES", "values"),
    _kw_update: ($) => choice("UPDATE", "update"),
    _kw_delete: ($) => choice("DELETE", "delete"),
    _kw_role: ($) => choice("ROLE", "role"),
    _kw_password: ($) => choice("PASSWORD", "password"),
    _kw_user: ($) => choice("USER", "user"),
    _kw_superuser: ($) => choice("SUPERUSER", "superuser"),
    _kw_nosuperuser: ($) => choice("NOSUPERUSER", "nosuperuser"),
    _kw_add: ($) => choice("ADD", "add"),
    _kw_drop: ($) => choice("DROP", "drop"),
    _kw_rename: ($) => choice("RENAME", "rename"),
    _kw_compact: ($) => choice("COMPACT", "compact"),
    _kw_storage: ($) => choice("STORAGE", "storage"),
    _kw_contains: ($) => choice("CONTAINS", "contains"),
    _kw_key: ($) => choice("KEY", "key"),
    _kw_login: ($) => choice("LOGIN", "login"),
    _kw_options: ($) => choice("OPTIONS", "options"),

    _alter_keyspace: ($) =>
      seq(
        $._kw_alter,
        $._kw_keyspace,
        $.identifier,
        $._kw_with,
        $._kw_replication,
        "=",
        "{",
        repeat(choice($.replication_statement, $.replication_statement_dc)),
        "}",
        optional(seq($._kw_and, $._kw_durable_writes, "=", $.bool_choice)),
        ";",
      ),
    _alter_materialized_view: ($) =>
      seq(
        $._kw_alter,
        $._kw_materialized,
        $._kw_view,
        choice($.dotted_identifier, $.identifier),
        optional(
          seq(
            $._kw_with,
            choice($.table_option_single, $.table_option_multi),
            repeat(
              seq(
                $._kw_and,
                choice($.table_option_single, $.table_option_multi),
              ),
            ),
          ),
        ),
        ";",
      ),
    _alter_role: ($) =>
      seq(
        $._kw_alter,
        $._kw_role,
        $.identifier,
        optional(seq($._kw_with, repeat($.alter_role_option_args))),
        ";",
      ),
    _alter_table: ($) =>
      prec.left(
        1,
        seq(
          $._kw_alter,
          $._kw_table,
          choice($.dotted_identifier, $.identifier),
          optional($.alter_table_options),
          ";",
        ),
      ),
    _alter_type: ($) =>
      prec.left(
        1,
        seq(
          $._kw_alter,
          $._kw_type,
          choice($.dotted_identifier, $.identifier),
          optional($.alter_type_options),
          ";",
        ),
      ),
    _alter_user: ($) =>
      seq(
        $._kw_alter,
        $._kw_user,
        $.identifier,
        optional(seq($._kw_with, $._kw_password, $.string_literal)),
        optional(choice($._kw_superuser, $._kw_nosuperuser)),
        ";",
      ),
    _batch: ($) =>
      prec.left(
        1,
        seq(
          $._kw_begin,
          optional(choice($._kw_unlogged, $._kw_logged, $._kw_counter)),
          $._kw_batch,
          optional(seq($._kw_using, $._kw_timestamp, optional($.number))),
          repeat(seq($.dml_statement)),
          $._kw_apply,
          $._kw_batch,
          ";",
        ),
      ),
    _truncate: ($) =>
      seq(
        $._kw_truncate,
        optional($._kw_table),
        choice($.dotted_identifier, $.identifier),
        ";",
      ),
    _update: ($) =>
      seq(
        $._kw_update,
        choice($.dotted_identifier, $.identifier),
        optional(
          choice(
            seq($._kw_using, $._kw_ttl, $.number),
            seq($._kw_using, $._kw_timestamp, $.number),
          ),
        ),
        $._kw_set,
        repeat(
          seq(
            choice($.literal, $.collection),
            "=",
            $.expression,
            optional(","),
          ),
        ),
        $._kw_where,
        seq(
          choice(
            seq(
              choice($.literal, $.collection),
              "=",
              choice($.literal, $.collection),
            ),
            seq(
              choice($.literal, $.collection),
              $._kw_in,
              "(",
              repeat(choice($.literal, $.collection)),
              ")",
            ),
          ),
        ),
        repeat(
          seq(
            $._kw_and,
            choice(
              seq(choice($.literal, $.collection), "=", $.expression),
              seq(
                choice($.literal, $.collection),
                $._kw_in,
                "(",
                repeat(choice($.literal, $.collection)),
                ")",
              ),
            ),
          ),
        ),
        optional(
          choice(
            seq($._kw_if, $._kw_exists),
            seq(
              $._kw_if,
              choice($.literal, $.collection),
              $.if_conditions,
              choice($.literal, $.collection, $.iconditions_blocks),
              repeat(
                seq(
                  $._kw_and,
                  choice($.literal, $.collection),
                  $.if_conditions,
                  choice($.literal, $.collection, $.iconditions_blocks),
                ),
              ),
            ),
          ),
        ),
        ";",
      ),
    _insert: ($) =>
      seq(
        $._kw_insert,
        $._kw_into,
        choice($.dotted_identifier, $.identifier),
        optional("("),
        repeat(seq($.identifier, optional(","))),
        optional(")"),
        $._kw_values,
        "(",
        repeat(seq(choice($.literal, $.collection), optional(","))),
        ")",
        optional(seq($._kw_if, $._kw_not, $._kw_exists)),
        optional($._using_ttl_or_timestamp),
        ";",
      ),
    _delete: ($) =>
      seq(
        $._kw_delete,
        repeat(seq($.literal, optional(","), optional($.batch_delete_terms))),
        $._kw_from,
        choice($.dotted_identifier, $.identifier),
        optional(seq($._kw_using, $._kw_timestamp, $.number)),
        $._kw_where,
        choice($.literal, $.collection),
        $.if_conditions,
        choice($.literal, $.collection, $.iconditions_blocks),
        repeat(
          choice(
            seq(
              $._kw_and,
              $.literal,
              $.if_conditions,
              choice($.literal, $.iconditions_blocks),
            ),
          ),
        ),
        optional(
          choice(
            seq($._kw_if, $._kw_exists),
            seq(
              $._kw_if,
              choice($.literal, $.collection),
              $.if_conditions,
              choice($.literal, $.collection, $.iconditions_blocks),
              repeat(
                seq(
                  $._kw_and,
                  choice($.literal, $.collection),
                  $.if_conditions,
                  choice($.literal, $.collection, $.iconditions_blocks),
                ),
              ),
            ),
          ),
        ),
        ";",
      ),

    _using_ttl_or_timestamp: ($) =>
      choice(
        seq(
          $._kw_using,
          $._kw_ttl,
          $.identifier,
          optional(seq($._kw_and, $._kw_timestamp, $.identifier)),
        ),
        seq($._kw_timestamp, $.identifier),
      ),

    cql_commands: ($) =>
      choice(
        $._alter_keyspace,
        $._alter_materialized_view,
        $._alter_role,
        $._alter_table,
        $._alter_type,
        $._alter_user,
        $._batch,
        $._truncate,
        $._update,
        $._insert,
        $._delete,
      ),

    replication_statement: ($) =>
      seq($.string_literal, ":", $.string_literal, optional(choice(",", "|"))),

    replication_statement_dc: ($) =>
      seq($.string_literal, ":", $.number, optional(choice(",", "|"))),

    table_option_single: ($) =>
      seq($.identifier, "=", choice($.string_literal, $.number)),
    table_option_multi: ($) =>
      seq($.identifier, "=", "{", repeat($.table_statement), "}"),
    table_statement: ($) =>
      seq(
        $.string_literal,
        ":",
        choice($.string_literal, $.number),
        optional(","),
      ),

    _dml_insert: ($) => prec.left(2, $._insert),
    _dml_update: ($) => prec.left(2, $._update),
    _dml_delete: ($) => prec.left(2, $._delete),

    dml_statement: ($) => choice($._dml_insert, $._dml_update, $._dml_delete),

    iconditions_blocks: ($) =>
      choice(seq("(", repeat(seq($.literal, optional(","))), ")")),

    batch_delete_terms: ($) => choice("list", "map"),

    expression: ($) =>
      prec.left(
        1,
        choice(
          $.primary_expression,
          prec.left(
            2,
            seq($.expression, choice("+", "-"), $.primary_expression),
          ),
          prec.left(
            1,
            seq($.expression, choice("*", "/", "%"), $.primary_expression),
          ),
        ),
      ),

    primary_expression: ($) =>
      choice(
        $.literal,
        $.identifier,
        $.collection,
        seq("(", $.expression, ")"),
      ),

    if_conditions: ($) =>
      choice(
        "=",
        ">",
        "<",
        ">=",
        "<=",
        "!=",
        $._kw_in,
        $._kw_contains,
        seq($._kw_contains, $._kw_key),
      ),

    alter_role_option_args: ($) =>
      choice(
        seq($._kw_password, "=", $.string_literal),
        seq($._kw_login, "=", $.bool_choice),
        seq($._kw_superuser, "=", $.bool_choice),
        seq($._kw_options, "=", $.string_literal),
      ),

    alter_table_options: ($) =>
      choice(
        prec.left(
          2,
          seq(
            $._kw_alter,
            $.identifier,
            $._kw_type,
            choice($.cql_types, $.cql_types_list),
          ),
        ),
        seq(
          $._kw_add,
          repeat(
            seq(
              $.identifier,
              choice($.cql_types, $.cql_types_list),
              optional(","),
            ),
          ),
        ),
        seq(
          $._kw_drop,
          choice(
            repeat(seq($.identifier, optional(","))),
            seq($._kw_compact, $._kw_storage),
          ),
        ),
        seq($._kw_rename, $.identifier, $._kw_to, $.identifier),
        seq(
          $._kw_with,
          choice($.table_option_single, $.table_option_multi),
          repeat(
            seq($._kw_and, choice($.table_option_single, $.table_option_multi)),
          ),
        ),
      ),

    alter_type_options: ($) =>
      choice(
        prec.left(
          2,
          seq(
            $._kw_alter,
            $.identifier,
            $._kw_type,
            choice($.cql_types, $.cql_types_list),
          ),
        ),
        seq(
          $._kw_add,
          repeat(
            seq(
              $.identifier,
              choice($.cql_types, $.cql_types_list),
              optional(","),
            ),
          ),
        ),
        seq(
          $._kw_rename,
          $.identifier,
          $._kw_to,
          $.identifier,
          repeat(seq($._kw_and, $.identifier, $._kw_to, $.identifier)),
        ),
      ),

    dotted_identifier: ($) =>
      /[a-zA-Z_][a-zA-Z0-9_]*(\.[a-zA-Z_][a-zA-Z0-9_]*)+/,
    number: ($) => choice($.integer, $.float),
    string_literal: ($) => /'(?:[^'\\]|\\.)*'/,

    literal: ($) =>
      prec(
        2,
        choice(
          $.blob,
          $.bool_choice,
          $.numeric_constant,
          $.identifier,
          $.quoted_identifier,
          $.integer,
          $.string_literal,
          $.uuid,
          $.timeuuid,
          $.list_identifier,
          $.map_identifier,
        ),
      ),

    list_identifier: ($) => /[a-zA-Z0-9\[\]]/,

    map_identifier: ($) => /[\\'a-zA-Z0-9]/,

    collection: ($) => choice($.set, $.list, $.map),

    blob: ($) => /0[xX][0-9a-fA-F]+/,

    bool_choice: ($) => choice("true", "false", "TRUE", "FALSE"),

    numeric_constant: ($) => choice($.integer, $.float, "NaN", "Infinity"),

    integer: ($) => /-?\d+/,

    float: ($) => /-?\d+\.\d+([eE][+-]?\d+)?/,

    identifier: ($) => /[a-zA-Z0-9][a-zA-Z0-9_]*/,

    quoted_identifier: ($) => /"(?:[^"\\]|\\.)*"/,

    uuid: ($) =>
      prec(
        2,
        /[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/,
      ),

    timeuuid: ($) =>
      /[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/,

    set: ($) =>
      prec(
        2,
        seq("{", optional(seq($.literal, repeat(seq(",", $.literal)))), "}"),
      ),

    list: ($) =>
      seq("[", optional(seq($.literal, repeat(seq(",", $.literal)))), "]"),

    map: ($) =>
      seq(
        "{",
        optional(
          seq(
            $.literal,
            ":",
            $.literal,
            repeat(seq(",", $.literal, ":", $.literal)),
          ),
        ),
        "}",
      ),
  },
});
