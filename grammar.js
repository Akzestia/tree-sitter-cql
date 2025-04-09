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

    use_keyspace_statement: ($) => seq(choice("USE", "use"), $.literal, ";"),

    cql_commands: ($) =>
      choice(
        seq(
          choice("ALTER", "alter"),
          choice("KEYSPACE", "keyspace"),
          $.identifier,
          choice("WITH", "with"),
          choice("REPLICATION", "replication"),
          "=",
          "{",
          repeat(choice($.replication_statement, $.replication_statement_dc)),
          "}",
          optional(
            seq(
              choice("AND", "and"),
              choice("DURABLE_WRITES", "durable_writes"),
              "=",
              $.bool_choice,
            ),
          ),
          ";",
        ),
        seq(
          choice("ALTER", "alter"),
          choice("MATERIALIZED", "materialized"),
          choice("VIEW", "view"),
          choice($.dotted_identifier, $.identifier),
          optional(
            seq(
              choice("WITH", "with"),
              choice($.table_option_single, $.table_option_multi),
              repeat(
                seq(
                  choice("AND", "and"),
                  choice($.table_option_single, $.table_option_multi),
                ),
              ),
            ),
          ),
          ";",
        ),
        seq(
          choice("ALTER", "alter"),
          choice("ROLE", "role"),
          $.identifier,
          optional(
            seq(choice("WITH", "with"), repeat($.alter_role_option_args)),
          ),
          ";",
        ),
        prec.left(
          1,
          seq(
            choice("ALTER", "alter"),
            choice("TABLE", "table"),
            choice($.dotted_identifier, $.identifier),
            optional($.alter_table_options),
            ";",
          ),
        ),
        prec.left(
          1,
          seq(
            choice("ALTER", "alter"),
            choice("TYPE", "type"),
            choice($.dotted_identifier, $.identifier),
            optional($.alter_type_options),
            ";",
          ),
        ),
        seq(
          choice("ALTER", "alter"),
          choice("USER", "user"),
          $.identifier,
          optional(
            seq(
              choice("WITH", "with"),
              choice("PASSWORD", "password"),
              $.string_literal,
            ),
          ),
          optional(
            choice(
              choice("SUPERUSER", "superuser"),
              choice("NOSUPERUSER", "nosuperuser"),
            ),
          ),
          ";",
        ),
        prec.left(
          1,
          seq(
            choice("BEGIN", "begin"),
            optional(
              choice(
                choice("UNLOGGED", "unlogged"),
                choice("LOGGED", "logged"),
                choice("COUNTER", "counter"),
              ),
            ),
            choice("BATCH", "batch"),
            optional(
              seq(
                choice("USING", "using"),
                choice("TIMESTAMP", "timestamp"),
                optional($.number),
              ),
            ),
            repeat(seq($.dml_statement)),
            choice("APPLY", "apply"),
            choice("BATCH", "batch"),
            ";",
          ),
        ),
        seq(
          choice("TRUNCATE", "truncate"),
          optional(choice("TABLE", "table")),
          choice($.dotted_identifier, $.identifier),
          ";",
        ),
        seq(
          choice("UPDATE", "update"),
          choice($.dotted_identifier, $.identifier),
          optional(
            choice(
              seq(choice("USING", "using"), choice("TTL", "ttl"), $.number),
              seq(
                choice("USING", "using"),
                choice("TIMESTAMP", "timestamp"),
                $.number,
              ),
            ),
          ),
          choice("SET", "set"),
          repeat(
            seq(
              choice($.literal, $.collection),
              "=",
              $.expression,
              optional(","),
            ),
          ),
          choice("WHERE", "where"),
          seq(
            choice(
              seq(
                choice($.literal, $.collection),
                "=",
                choice($.literal, $.collection),
              ),
              seq(
                choice($.literal, $.collection),
                choice("IN", "in"),
                "(",
                repeat(choice($.literal, $.collection)),
                ")",
              ),
            ),
          ),
          repeat(
            seq(
              choice("AND", "and"),
              choice(
                seq(choice($.literal, $.collection), "=", $.expression),
                seq(
                  choice($.literal, $.collection),
                  choice("IN", "in"),
                  "(",
                  repeat(choice($.literal, $.collection)),
                  ")",
                ),
              ),
            ),
          ),
          optional(
            choice(
              seq(choice("IF", "if"), choice("EXISTS", "exists")),
              seq(
                choice("IF", "if"),
                choice($.literal, $.collection),
                $.if_conditions,
                choice($.literal, $.collection, $.iconditions_blocks),
                repeat(
                  seq(
                    choice("AND", "and"),
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
        seq(
          choice("INSERT", "insert"),
          choice("INTO", "into"),
          choice($.dotted_identifier, $.identifier),
          optional("("),
          repeat(seq($.identifier, optional(","))),
          optional(")"),
          choice("VALUES", "values"),
          "(",
          repeat(seq(choice($.literal, $.collection), optional(","))),
          ")",
          optional(
            seq(
              choice("IF", "if"),
              choice("NOT", "not"),
              choice("EXISTS", "exists"),
            ),
          ),
          optional(
            choice(
              seq(choice("USING", "using"), choice("TTL", "ttl"), $.number),
              seq(choice("TIMESTAMP", "timestamp"), $.number),
            ),
          ),
          ";",
        ),
        seq(
          choice("DELETE", "delete"),
          repeat(seq($.literal, optional(","), optional($.batch_delete_terms))),
          choice("FROM", "from"),
          choice($.dotted_identifier, $.identifier),
          optional(
            seq(
              choice("USING", "using"),
              choice("TIMESTAMP", "timestamp"),
              $.number,
            ),
          ),
          choice("WHERE", "where"),
          choice($.literal, $.collection),
          $.if_conditions,
          choice($.literal, $.collection, $.iconditions_blocks),
          repeat(
            choice(
              seq(
                choice("AND", "and"),
                $.literal,
                $.if_conditions,
                choice($.literal, $.iconditions_blocks),
              ),
            ),
          ),
          optional(
            choice(
              seq(choice("IF", "if"), choice("EXISTS", "exists")),
              seq(
                choice("IF", "if"),
                choice($.literal, $.collection),
                $.if_conditions,
                choice($.literal, $.collection, $.iconditions_blocks),
                repeat(
                  seq(
                    choice("AND", "and"),
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
    dml_statement: ($) =>
      choice(
        prec.left(
          2,
          seq(
            choice("INSERT", "insert"),
            choice("INTO", "into"),
            choice($.dotted_identifier, $.identifier),
            optional("("),
            repeat(seq($.identifier, optional(","))),
            optional(")"),
            choice("VALUES", "values"),
            "(",
            repeat(seq(choice($.literal, $.collection), optional(","))),
            ")",
            optional(
              seq(
                choice("IF", "if"),
                choice("NOT", "not"),
                choice("EXISTS", "exists"),
              ),
            ),
            optional(
              choice(
                seq(choice("USING", "using"), choice("TTL", "ttl"), $.number),
                seq(choice("TIMESTAMP", "timestamp"), $.number),
              ),
            ),
            ";",
          ),
        ),
        prec.left(
          2,
          seq(
            choice("UPDATE", "update"),
            choice($.dotted_identifier, $.identifier),
            optional(
              choice(
                seq(choice("USING", "using"), choice("TTL", "ttl"), $.number),
                seq(
                  choice("USING", "using"),
                  choice("TIMESTAMP", "timestamp"),
                  $.number,
                ),
              ),
            ),
            choice("SET", "set"),
            repeat(
              seq(
                choice($.literal, $.collection),
                "=",
                $.expression,
                optional(","),
              ),
            ),
            choice("WHERE", "where"),
            seq(
              choice(
                seq(choice($.literal, $.collection), "=", $.expression),
                seq(
                  choice($.literal, $.collection),
                  choice("IN", "in"),
                  "(",
                  repeat(choice($.literal, $.collection)),
                  ")",
                ),
              ),
            ),
            repeat(
              seq(
                choice("AND", "and"),
                choice(
                  seq(choice($.literal, $.collection), "=", $.expression),
                  seq(
                    choice($.literal, $.collection),
                    choice("IN", "in"),
                    "(",
                    repeat(choice($.literal, $.collection)),
                    ")",
                  ),
                ),
              ),
            ),
            optional(
              choice(
                seq(choice("IF", "if"), choice("EXISTS", "exists")),
                seq(
                  choice("IF", "if"),
                  choice($.literal, $.collection),
                  $.if_conditions,
                  choice($.literal, $.collection, $.iconditions_blocks),
                  repeat(
                    seq(
                      choice("AND", "and"),
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
        ),
        prec.left(
          2,
          seq(
            choice("DELETE", "delete"),
            repeat(seq($.literal, $.batch_delete_terms)),
            choice("FROM", "from"),
            choice($.dotted_identifier, $.identifier),
            optional(
              seq(
                choice("USING", "using"),
                choice("TIMESTAMP", "timestamp"),
                $.number,
              ),
            ),
            choice("WHERE", "where"),
            choice($.literal, $.collection),
            $.if_conditions,
            choice($.literal, $.collection, $.iconditions_blocks),
            repeat(
              choice(
                seq(
                  choice("AND", "and"),
                  $.literal,
                  $.if_conditions,
                  choice($.literal, $.iconditions_blocks),
                ),
              ),
            ),
            optional(
              choice(
                seq(choice("IF", "if"), choice("EXISTS", "exists")),
                seq(
                  choice("IF", "if"),
                  choice($.literal, $.collection),
                  $.if_conditions,
                  choice($.literal, $.collection, $.iconditions_blocks),
                  repeat(
                    seq(
                      choice("AND", "and"),
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
        ),
      ),

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
        choice("IN", "in"),
        choice("CONTAINS", "contains"),
        seq(choice("CONTAINS", "contains"), choice("KEY", "key")),
      ),

    alter_role_option_args: ($) =>
      choice(
        seq(choice("PASSWORD", "password"), "=", $.string_literal),
        seq(choice("LOGIN", "login"), "=", $.bool_choice),
        seq(choice("SUPERUSER", "superuser"), "=", $.bool_choice),
        seq(choice("OPTIONS", "options"), "=", $.string_literal),
      ),

    alter_table_options: ($) =>
      choice(
        prec.left(
          2,
          seq(
            choice("ALTER", "alter"),
            $.identifier,
            choice("TYPE", "type"),
            choice($.cql_types, $.cql_types_list),
          ),
        ),
        seq(
          choice("ADD", "add"),
          repeat(
            seq(
              $.identifier,
              choice($.cql_types, $.cql_types_list),
              optional(","),
            ),
          ),
        ),
        seq(
          choice("DROP", "drop"),
          choice(
            repeat(seq($.identifier, optional(","))),
            seq(choice("COMPACT", "compact"), choice("STORAGE", "storage")),
          ),
        ),
        seq(
          choice("RENAME", "rename"),
          $.identifier,
          choice("TO", "to"),
          $.identifier,
        ),
        seq(
          choice("WITH", "with"),
          choice($.table_option_single, $.table_option_multi),
          repeat(
            seq(
              choice("AND", "and"),
              choice($.table_option_single, $.table_option_multi),
            ),
          ),
        ),
      ),

    alter_type_options: ($) =>
      choice(
        prec.left(
          2,
          seq(
            choice("ALTER", "alter"),
            $.identifier,
            choice("TYPE", "type"),
            choice($.cql_types, $.cql_types_list),
          ),
        ),
        seq(
          choice("ADD", "add"),
          repeat(
            seq(
              $.identifier,
              choice($.cql_types, $.cql_types_list),
              optional(","),
            ),
          ),
        ),
        seq(
          choice("RENAME", "rename"),
          $.identifier,
          choice("TO", "to"),
          $.identifier,
          repeat(
            seq(
              choice("AND", "and"),
              $.identifier,
              choice("TO", "to"),
              $.identifier,
            ),
          ),
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
