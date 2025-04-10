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

    _statement: ($) => choice($.cql_commands),

    _keywords: ($) =>
      choice(
        $._kw_use,
        $._kw_alter,
        $._kw_create,
        $._kw_keyspace,
        $._kw_table,
        $._kw_with,
        $._kw_where,
        $._kw_if,
        $._kw_and,
        $._kw_set,
        $._kw_in,
        $._kw_to,
        $._kw_from,
        $._kw_using,
        $._kw_timestamp,
        $._kw_ttl,
        $._kw_exists,
        $._kw_not,
        $._kw_type,
        $._kw_view,
        $._kw_materialized,
        $._kw_replication,
        $._kw_durable_writes,
        $._kw_batch,
        $._kw_apply,
        $._kw_begin,
        $._kw_unlogged,
        $._kw_logged,
        $._kw_counter,
        $._kw_truncate,
        $._kw_insert,
        $._kw_into,
        $._kw_values,
        $._kw_update,
        $._kw_delete,
        $._kw_role,
        $._kw_password,
        $._kw_user,
        $._kw_superuser,
        $._kw_nosuperuser,
        $._kw_add,
        $._kw_drop,
        $._kw_rename,
        $._kw_compact,
        $._kw_storage,
        $._kw_contains,
        $._kw_key,
        $._kw_login,
        $._kw_options,
        $._kw_or,
        $._kw_replace,
        $._kw_sfunc,
        $._kw_stype,
        $._kw_final_func,
        $._kw_init_cond,
        $._kw_language,
        $._kw_input,
        $._kw_on,
        $._kw_function,
        $._kw_called,
        $._kw_returns,
        $._kw_ascii,
        $._kw_bigint,
        $._kw_blob,
        $._kw_boolean,
        $._kw_date,
        $._kw_decimal,
        $._kw_double,
        $._kw_duration,
        $._kw_float,
        $._kw_frozen,
        $._kw_int,
        $._kw_list,
        $._kw_map,
        $._kw_set,
        $._kw_smallint,
        $._kw_text,
        $._kw_timeuuid,
        $._kw_tinyint,
        $._kw_tuple,
        $._kw_uuid,
        $._kw_varchar,
        $._kw_varint,
        $._kw_filtering,
        $._kw_distinct,
        $._kw_as,
        $._kw_contains_key,
        $._kw_keys,
        $._kw_allow_filtering,
        $._kw_group_by,
        $._kw_having,
        $._kw_per_partition_limit,
        $._kw_json,
        $._kw_null,
        $._kw_token,
        $._kw_writetime,
        $._kw_count,
        $._kw_max,
        $._kw_min,
        $._kw_sum,
        $._kw_avg,
        $._kw_custom,
      ),

    _type_ascii: ($) => choice("ASCII", "ascii"),
    _type_bigint: ($) => choice("BIGINT", "bigint"),
    _type_blob: ($) => choice("BLOB", "blob"),
    _type_boolean: ($) => choice("BOOLEAN", "boolean"),
    _type_counter: ($) => choice("COUNTER", "counter"),
    _type_date: ($) => choice("DATE", "date"),
    _type_decimal: ($) => choice("DECIMAL", "decimal"),
    _type_double: ($) => choice("DOUBLE", "double"),
    _type_float: ($) => choice("FLOAT", "float"),
    _type_frozen: ($) => choice("FROZEN", "frozen"),
    _type_inet: ($) => choice("INET", "inet"),
    _type_int: ($) => choice("INT", "int"),
    _type_list: ($) => choice("LIST", "list"),
    _type_map: ($) => choice("MAP", "map"),
    _type_set: ($) => choice("SET", "set"),
    _type_smallint: ($) => choice("SMALLINT", "smallint"),
    _type_text: ($) => choice("TEXT", "text"),
    _type_time: ($) => choice("TIME", "time"),
    _type_timestamp: ($) => choice("TIMESTAMP", "timestamp"),
    _type_timeuuid: ($) => choice("TIMEUUID", "timeuuid"),
    _type_tinyint: ($) => choice("TINYINT", "tinyint"),
    _type_tuple: ($) => choice("TUPLE", "tuple"),
    _type_uuid: ($) => choice("UUID", "uuid"),
    _type_varchar: ($) => choice("VARCHAR", "varchar"),
    _type_varint: ($) => choice("VARINT", "varint"),

    cql_types: ($) =>
      choice(
        $._type_ascii,
        $._type_bigint,
        $._type_blob,
        $._type_boolean,
        $._type_counter,
        $._type_date,
        $._type_decimal,
        $._type_double,
        $._type_float,
        $._type_frozen,
        $._type_inet,
        $._type_int,
        $._type_list,
        $._type_map,
        $._type_set,
        $._type_smallint,
        $._type_text,
        $._type_time,
        $._type_timestamp,
        $._type_timeuuid,
        $._type_tinyint,
        $._type_tuple,
        $._type_uuid,
        $._type_varchar,
        $._type_varint,
      ),

    cql_types_constructor_list: ($) => seq("list", "<", $.cql_types, ">"),
    cql_types_constructor_tuple: ($) =>
      seq("tuple", "<", $.cql_types, ",", $.cql_types, ">"),
    cql_types_constructor_map: ($) =>
      seq("map", "<", $.cql_types, ",", $.cql_types, ">"),

    cql_types_union: ($) =>
      choice(
        $.cql_types,
        $.cql_types_constructor_list,
        $.cql_types_constructor_tuple,
        $.cql_types_constructor_map,
      ),

    _use: ($) => seq($._kw_use, $.literal, ";"),

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
    _kw_or: ($) => choice("OR", "or"),
    _kw_replace: ($) => choice("REPLACE", "replace"),
    _kw_sfunc: ($) => choice("SFUNC", "sfunc"),
    _kw_stype: ($) => choice("STYPE", "stype"),
    _kw_final_func: ($) => choice("FINALFUNC", "finalfunc"),
    _kw_init_cond: ($) => choice("INITCOND", "initcond"),
    _kw_language: ($) => choice("LANGUAGE", "language"),
    _kw_input: ($) => choice("INPUT", "input"),
    _kw_on: ($) => choice("ON", "on"),
    _kw_function: ($) => choice("FUNCTION", "function"),
    _kw_called: ($) => choice("CALLED", "called"),
    _kw_returns: ($) => choice("RETURNS", "returns"),
    _kw_ascii: ($) => choice("ASCII", "ascii"),
    _kw_bigint: ($) => choice("BIGINT", "bigint"),
    _kw_blob: ($) => choice("BLOB", "blob"),
    _kw_boolean: ($) => choice("BOOLEAN", "boolean"),
    _kw_date: ($) => choice("DATE", "date"),
    _kw_decimal: ($) => choice("DECIMAL", "decimal"),
    _kw_double: ($) => choice("DOUBLE", "double"),
    _kw_duration: ($) => choice("DURATION", "duration"),
    _kw_float: ($) => choice("FLOAT", "float"),
    _kw_frozen: ($) => choice("FROZEN", "frozen"),
    _kw_int: ($) => choice("INT", "int"),
    _kw_list: ($) => choice("LIST", "list"),
    _kw_map: ($) => choice("MAP", "map"),
    _kw_set: ($) => choice("SET", "set"),
    _kw_smallint: ($) => choice("SMALLINT", "smallint"),
    _kw_text: ($) => choice("TEXT", "text"),
    _kw_timeuuid: ($) => choice("TIMEUUID", "timeuuid"),
    _kw_tinyint: ($) => choice("TINYINT", "tinyint"),
    _kw_tuple: ($) => choice("TUPLE", "tuple"),
    _kw_uuid: ($) => choice("UUID", "uuid"),
    _kw_varchar: ($) => choice("VARCHAR", "varchar"),
    _kw_varint: ($) => choice("VARINT", "varint"),
    _kw_filtering: ($) => choice("FILTERING", "filtering"),
    _kw_distinct: ($) => choice("DISTINCT", "distinct"),
    _kw_as: ($) => choice("AS", "as"),
    _kw_contains_key: ($) => choice("CONTAINS KEY", "contains key"),
    _kw_keys: ($) => choice("KEYS", "keys"),
    _kw_allow_filtering: ($) => choice("ALLOW FILTERING", "allow filtering"),
    _kw_group_by: ($) => choice("GROUP BY", "group by"),
    _kw_having: ($) => choice("HAVING", "having"),
    _kw_per_partition_limit: ($) =>
      choice("PER PARTITION LIMIT", "per partition limit"),
    _kw_json: ($) => choice("JSON", "json"),
    _kw_null: ($) => choice("NULL", "null"),
    _kw_token: ($) => choice("TOKEN", "token"),
    _kw_writetime: ($) => choice("WRITETIME", "writetime"),
    _kw_count: ($) => choice("COUNT", "count"),
    _kw_max: ($) => choice("MAX", "max"),
    _kw_min: ($) => choice("MIN", "min"),
    _kw_sum: ($) => choice("SUM", "sum"),
    _kw_avg: ($) => choice("AVG", "avg"),
    _kw_custom: ($) => choice("CUSTOM", "custom"),
    _kw_aggregate: ($) => choice("AGGREGATE", "aggregate"),
    _kw_all: ($) => choice("ALL", "all"),
    _kw_allow: ($) => choice("ALLOW", "allow"),
    _kw_any: ($) => choice("ANY", "any"),
    _kw_asc: ($) => choice("ASC", "asc"),
    _kw_authorize: ($) => choice("AUTHORIZE", "authorize"),
    _kw_by: ($) => choice("BY", "by"),
    _kw_clustering: ($) => choice("CLUSTERING", "clustering"),
    _kw_columnfamily: ($) => choice("COLUMNFAMILY", "columnfamily"),
    _kw_consistency: ($) => choice("CONSISTENCY", "consistency"),
    _kw_desc: ($) => choice("DESC", "desc"),
    _kw_each_quorum: ($) => choice("EACH_QUORUM", "each_quorum"),
    _kw_entries: ($) => choice("ENTRIES", "entries"),
    _kw_full: ($) => choice("FULL", "full"),
    _kw_grant: ($) => choice("GRANT", "grant"),
    _kw_index: ($) => choice("INDEX", "index"),
    _kw_inet: ($) => choice("INET", "inet"),
    _kw_infinity: ($) => choice("INFINITY", "infinity"),
    _kw_keyspaces: ($) => choice("KEYSPACES", "keyspaces"),
    _kw_level: ($) => choice("LEVEL", "level"),
    _kw_limit: ($) => choice("LIMIT", "limit"),
    _kw_local_one: ($) => choice("LOCAL_ONE", "local_one"),
    _kw_local_quorum: ($) => choice("LOCAL_QUORUM", "local_quorum"),
    _kw_modify: ($) => choice("MODIFY", "modify"),
    _kw_nan: ($) => choice("NAN", "nan"),
    _kw_norecursive: ($) => choice("NORECURSIVE", "norecursive"),
    _kw_of: ($) => choice("OF", "of"),
    _kw_one: ($) => choice("ONE", "one"),
    _kw_order: ($) => choice("ORDER", "order"),
    _kw_partition: ($) => choice("PARTITION", "partition"),
    _kw_per: ($) => choice("PER", "per"),
    _kw_permission: ($) => choice("PERMISSION", "permission"),
    _kw_permissions: ($) => choice("PERMISSIONS", "permissions"),
    _kw_primary: ($) => choice("PRIMARY", "primary"),
    _kw_quorum: ($) => choice("QUORUM", "quorum"),
    _kw_revoke: ($) => choice("REVOKE", "revoke"),
    _kw_schema: ($) => choice("SCHEMA", "schema"),
    _kw_select: ($) => choice("SELECT", "select"),
    _kw_static: ($) => choice("STATIC", "static"),
    _kw_three: ($) => choice("THREE", "three"),
    _kw_two: ($) => choice("TWO", "two"),
    _kw_users: ($) => choice("USERS", "users"),
    _kw_commit: ($) => choice("COMMIT", "commit"),
    _kw_search: ($) => choice("SEARCH", "searh"),
    _kw_roles: ($) => choice("ROLES", "roles"),
    _kw_deterministic: ($) => choice("DETERMINISTIC", "deterministic"),
    _kw_monotonic: ($) => choice("MONOTONIC", "monotonic"),
    _kw_java: ($) => choice("JAVA", "java"),
    _kw_java_script: ($) => choice("JAVASCRIPT", "javascript"),
    _kw_is: ($) => choice("IS", "is"),

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
        optional(
          seq($._kw_and, "graph_engine", "=", choice("'Core'", "'Classic'")),
        ),
        ";",
      ),
    _alter_materialized_view: ($) =>
      seq(
        $._kw_alter,
        $._kw_materialized,
        $._kw_view,
        choice($.key_space_name, $.table_label),
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
          choice($.key_space_name, $.table_label, $.identifier),
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
          choice($.key_space_name, $.table_label, $.identifier),
          optional($.alter_type_options),
          ";",
        ),
      ),
    _alter_user: ($) =>
      seq(
        $._kw_alter,
        $._kw_user,
        $.identifier,
        optional(
          choice(
            seq($._kw_with, $._kw_password, $.string_literal),
            seq($._kw_with, "HASHED", $._kw_password, $.string_literal),
          ),
        ),
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
        choice($.key_space_name, $.table_label, $.identifier),
        ";",
      ),
    _update: ($) =>
      seq(
        $._kw_update,
        choice($.key_space_name, $.table_label, $.identifier),
        optional(
          choice(
            seq(
              $._kw_using,
              $._kw_ttl,
              $.number,
              optional(seq($._kw_and, $._kw_timestamp, $.number)),
            ),
            seq(
              $._kw_using,
              $._kw_timestamp,
              $.number,
              optional(seq($._kw_and, $._kw_ttl, $.number)),
            ),
          ),
        ),
        $._kw_set,
        repeat(
          seq(
            choice($.literal, $.collection, $.indexed_name, $.key_space_name),
            $._assignment_operators,
            $.expression,
            optional(","),
          ),
        ),
        $._kw_where,
        seq(
          choice(
            seq(
              choice($.literal, $.collection),
              $._assignment_operators,
              choice($.literal, $.collection),
            ),
            seq(
              choice($.literal, $.collection),
              $._kw_in,
              "(",
              repeat(seq(choice($.literal, $.collection), optional(","))),
              ")",
            ),
          ),
        ),
        repeat(
          seq(
            $._kw_and,
            choice(
              seq(
                choice($.literal, $.collection),
                $._assignment_operators,
                $.expression,
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
        ),
        optional(
          choice(
            $._if_exists,
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
        optional("JSON"),
        $._kw_into,
        choice($.key_space_name, $.table_label, $.identifier),
        optional("("),
        repeat(seq($.identifier, optional(","))),
        optional(")"),
        $._kw_values,
        "(",
        repeat(seq(choice($.literal, $.collection), optional(","))),
        ")",
        optional($._if_not_exists),
        optional($._using_ttl_or_timestamp),
        ";",
      ),
    _delete: ($) =>
      seq(
        $._kw_delete,
        repeat(seq($.literal, optional(","), optional($.batch_delete_terms))),
        $._kw_from,
        choice($.key_space_name, $.table_label, $.identifier),
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
            $._if_exists,
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
    _create_aggregate: ($) =>
      seq(
        $._kw_create,
        optional(seq($._kw_or, $._kw_replace)),
        $._kw_aggregate,
        optional($._if_not_exists),
        choice($.key_space_name, $.table_label, $.identifier),
        "(",
        $.cql_types_union,
        ")",
        $._kw_sfunc,
        $.identifier,
        $._kw_stype,
        $.cql_types_union,
        $._kw_final_func,
        $.identifier,
        $._kw_init_cond,
        optional("("),
        repeat(seq($.identifier, optional(","))),
        optional(")"),
        ";",
      ),
    _create_index: ($) =>
      seq(
        $._kw_create,
        optional($._kw_custom),
        $._kw_index,
        optional($._if_not_exists),
        optional($.identifier),
        $._kw_on,
        choice($.key_space_name, $.table_label, $.identifier),
        optional("("),
        optional($._create_index_on_options),
        "(",
        $.identifier,
        ")",
        optional(")"),
        optional(
          seq(
            $._kw_using,
            $._index_type,
            optional(seq($._kw_with, $._kw_options, "=", $.collection)),
          ),
        ),
        ";",
      ),
    _commit_search_index: ($) =>
      seq(
        $._kw_commit,
        $._kw_search,
        $._kw_index,
        $._kw_on,
        choice($.key_space_name, $.table_label, $.identifier),
        ";",
      ),
    _list_roles: ($) =>
      seq(
        $._kw_list,
        $._kw_roles,
        optional(seq($._kw_of, $.identifier)),
        optional($._kw_norecursive),
        ";",
      ),
    _list_users: ($) => seq($._kw_list, $._kw_users, ";"),
    _revoke_role: ($) =>
      seq($._kw_revoke, $.identifier, $._kw_from, $.identifier, ";"),
    _create_function: ($) =>
      seq(
        $._kw_create,
        optional(seq($._kw_or, $._kw_replace)),
        $._kw_function,
        optional($._if_not_exists),
        $.key_space_name,
        "(",
        repeat(seq($.identifier, $.cql_types_union, optional(","))),
        ")",
        choice($._kw_called, seq($._kw_returns, $._kw_null)),
        $._kw_on,
        $._kw_null,
        $._kw_input,
        $._kw_returns,
        $.cql_types_union,
        optional($._kw_deterministic),
        optional(seq($._kw_monotonic, $._kw_on, $.identifier)),
        $._kw_language,
        choice($._kw_java, $._kw_java_script),
        $._kw_as,
        "$$",
        $.code_block,
        "$$",
        ";",
      ),
    _create_keyspace: ($) =>
      seq(
        $._kw_create,
        $._kw_keyspace,
        optional($._if_not_exists),
        $.identifier,
        $._kw_with,
        $._kw_replication,
        "=",
        $.map,
        optional(seq($._kw_and, $._kw_durable_writes, "=", $.bool_choice)),
        optional(
          seq($._kw_and, "graph_engine", "=", choice("'Core'", "'Classic'")),
        ),
        ";",
      ),
    _createe_materialized_view: ($) =>
      prec.left(
        1,
        seq(
          $._kw_create,
          $._kw_materialized,
          $._kw_view,
          optional($._if_not_exists),
          choice($.key_space_name, $.table_label, $.identifier),
          $._kw_as,
          $._kw_select,
          optional(repeat(seq($.identifier, optional(",")))),
          $._kw_from,
          choice($.key_space_name, $.table_label, $.identifier),
          optional(
            seq($._kw_where, $.identifier, $._kw_is, $._kw_not, $._kw_null),
          ),
          repeat(
            choice(
              seq($._kw_and, $.identifier, $._kw_is, $._kw_not, $._kw_null),
              seq($._kw_and, $.identifier, $.if_conditions, $.expression),
            ),
          ),
          $._kw_primary,
          $._kw_key,
          "(",
          repeat(seq($.identifier, optional(","))),
          ")",
          optional($._o_with),
          optional($._kw_with),
          optional(
            seq(
              optional($._kw_and),
              $._kw_clustering,
              $._kw_order,
              $._kw_by,
              optional("("),
              $.identifier,
              choice($._kw_desc, $._kw_asc),
              optional(")"),
            ),
          ),
          repeat($._mv_relation),
          ";",
        ),
      ),

    _mv_relation: ($) =>
      choice(
        seq($._kw_and, $.identifier, $._kw_is, $._kw_not, $._kw_null),
        seq($._kw_and, $.identifier, $.if_conditions, $.expression),
      ),
    _assignment_operators: ($) => choice("=", "+=", "-=", "*=", "/="),
    _create_index_on_options: ($) =>
      choice($._kw_keys, $._kw_values, $._kw_entries, $._kw_full),
    _index_type: ($) => choice("'SAI'", "'sai'", "'SASI'", "'sasi'"),

    cql_commands: ($) =>
      choice(
        $._alter_keyspace, // Working
        $._alter_materialized_view, // Working
        $._alter_role, // Working
        $._alter_table, // Working
        $._alter_type, // Working
        $._alter_user, // Working
        $._batch, // Working
        $._commit_search_index, // Working
        $._create_aggregate, // Working
        $._create_function, // Working
        $._create_index, // Working
        $._create_keyspace, // Working
        $._createe_materialized_view, // Working
        // _create_role
        // _create_search_index
        // _create_table
        // _create_type
        // _create_user
        $._delete, // Working
        // _drop_aggregate
        // _drop_function
        // _drop_index
        // _drop_keyspace
        // _drop_materialized_view
        // _drop_role
        // _drop_search_index
        // _drop_table
        // _drop_type
        // _drop_user
        // _grant_role
        // _grant_premission
        $._insert, // Working
        // _list_premissions
        $._list_roles, // Working
        $._list_users, // Working
        $._revoke_role, // Working
        // _revoke_premission
        // _select
        $._truncate, // Working
        $._update, // Working
        $._use,
      ),

    _using_ttl_or_timestamp: ($) =>
      choice(
        seq(
          $._kw_using,
          $._kw_ttl,
          $.identifier,
          optional(seq($._kw_and, $._kw_timestamp, $.identifier)),
        ),
        seq(
          $._kw_using,
          $._kw_timestamp,
          $.identifier,
          optional(seq($._kw_and, $._kw_ttl, $.identifier)),
        ),
      ),

    _if_not_exists: ($) => seq($._kw_if, $._kw_not, $._kw_exists),
    _if_exists: ($) => seq($._kw_if, $._kw_exists),

    replication_statement: ($) =>
      seq($.string_literal, ":", $.string_literal, optional(choice(",", "|"))),

    replication_statement_dc: ($) =>
      seq($.string_literal, ":", $.number, optional(choice(",", "|"))),

    table_option_single: ($) =>
      seq($.identifier, "=", choice($.string_literal, $.number)),
    table_option_multi: ($) =>
      seq($.identifier, "=", "{", repeat($.table_statement), "}"),
    table_option_label: ($) =>
      seq(
        choice("VERTEX", "EDGE"),
        "LABEL",
        $.string,
        optional(
          seq(
            "FROM",
            $.identifier,
            "(",
            repeat(seq($.identifier, optional(","))),
            ")",
            "TO",
            $.identifier,
            "(",
            repeat(seq($.identifier, optional(","))),
            ")",
          ),
        ),
      ),
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
        $.construct_types,
        seq("(", $.expression, ")"),
      ),

    uuid_construct: ($) => seq($._kw_uuid, "(", optional($.uuid), ")"),

    construct_types: ($) =>
      choice(
        $.cql_types_constructor_list,
        $.cql_types_constructor_tuple,
        $.cql_types_constructor_map,
        $.uuid_construct,
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

    _o_alter_type: ($) =>
      prec.left(
        2,
        seq($._kw_alter, $.identifier, $._kw_type, $.cql_types_union),
      ),
    _o_add: ($) =>
      seq(
        $._kw_add,
        repeat(seq($.identifier, $.cql_types_union, optional(","))),
      ),
    _o_drop: ($) =>
      seq(
        $._kw_drop,
        choice(
          repeat(seq($.identifier, optional(","))),
          seq($._kw_compact, $._kw_storage),
        ),
      ),
    _o_rename: ($) =>
      choice(
        seq($._kw_rename, $.identifier, $._kw_to, $.identifier),
        seq(
          $._kw_rename,
          choice("VERTEX", "EDGE"),
          "LABEL",
          $._kw_to,
          $.string,
        ),
      ),

    _o_with_non_repeat: ($) =>
      choice($.table_option_single, $.table_option_multi, $.table_option_label),
    _o_with_repeat: ($) =>
      seq(
        $._kw_and,
        choice(
          $.table_option_single,
          $.table_option_multi,
          $.table_option_label,
        ),
      ),

    _o_with: ($) =>
      prec.left(
        2,
        seq($._kw_with, $._o_with_non_repeat, repeat($._o_with_repeat)),
      ),

    _o_without: ($) => seq("WITHOUT", $.table_option_label),

    alter_table_options: ($) =>
      choice(
        $._o_alter_type,
        $._o_add,
        $._o_drop,
        $._o_rename,
        $._o_with,
        $._o_without,
      ),

    alter_type_options: ($) =>
      choice(
        prec.left(
          2,
          seq($._kw_alter, $.identifier, $._kw_type, $.cql_types_union),
        ),
        seq(
          $._kw_add,
          repeat(seq($.identifier, $.cql_types_union, optional(","))),
        ),
        seq(
          $._kw_rename,
          $.identifier,
          $._kw_to,
          $.identifier,
          repeat(seq($._kw_and, $.identifier, $._kw_to, $.identifier)),
        ),
      ),

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

    string: ($) => choice($.string_literal, $.quoted_identifier),

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

    // table."label"
    table_label: ($) => /[a-zA-Z0-9_]+\.\"(?:[^"\\]|\\.)*\"/,

    // keysapce.table
    key_space_name: ($) => /[a-zA-Z0-9_]+\.[a-zA-Z0-9_]+/,

    // name[N]
    indexed_name: ($) => /[a-zA-Z_][a-zA-Z0-9_]*\[\d+\]/,

    uuid: ($) =>
      prec(
        2,
        /[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/,
      ),

    timeuuid: ($) =>
      /[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/,

    code_block: ($) => /[^$]*(?:\$[^$]+)*/,

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
