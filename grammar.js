/**
 * @file Cql grammar for tree-sitter
 * @author アクゼスティア <akzestia@gmail.com>
 * @license MIT
 */

module.exports = grammar({
  name: "cql",

  extras: ($) => [/\s/],

  conflicts: ($) => [[$._conditions_select, $.if_conditions]],

  rules: {
    source_file: ($) => repeat($._statement),

    _statement: ($) => choice($.cql_commands),

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

    cql_types_constructor_list: ($) => seq($._type_list, "<", $.cql_types, ">"),
    cql_types_constructor_set: ($) => seq($._type_set, "<", $.cql_types, ">"),
    cql_types_constructor_tuple: ($) =>
      seq($._type_tuple, "<", $.cql_types, ",", $.cql_types, ">"),
    cql_types_constructor_map: ($) =>
      seq($._type_map, "<", $.cql_types, ",", $.cql_types, ">"),
    cql_types_constructor_frozen: ($) =>
      seq(
        $._type_frozen,
        "<",
        choice(
          $.cql_types,
          $.identifier,
          $.string,
          $.cql_types_constructor_list,
          $.cql_types_constructor_set,
          $.cql_types_constructor_tuple,
          $.cql_types_constructor_map,
        ),
        ">",
      ),

    cql_types_union: ($) =>
      choice(
        $.cql_types,
        $.cql_types_constructor_list,
        $.cql_types_constructor_tuple,
        $.cql_types_constructor_map,
        $.cql_types_constructor_frozen,
        $.cql_types_constructor_set,
        $.string,
      ),

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
    _kw_filtering: ($) => choice("FILTERING", "filtering"),
    _kw_distinct: ($) => choice("DISTINCT", "distinct"),
    _kw_as: ($) => choice("AS", "as"),
    _kw_keys: ($) => choice("KEYS", "keys"),
    _kw_group: ($) => choice("GROUP", "group"),
    _kw_by: ($) => choice("BY", "by"),
    _kw_json: ($) => choice("JSON", "json"),
    _kw_null: ($) => choice("NULL", "null"),
    _kw_count: ($) => choice("COUNT", "count"),
    _kw_custom: ($) => choice("CUSTOM", "custom"),
    _kw_aggregate: ($) => choice("AGGREGATE", "aggregate"),
    _kw_all: ($) => choice("ALL", "all"),
    _kw_allow: ($) => choice("ALLOW", "allow"),
    _kw_asc: ($) => choice("ASC", "asc"),
    _kw_authorize: ($) => choice("AUTHORIZE", "authorize"),
    _kw_by: ($) => choice("BY", "by"),
    _kw_clustering: ($) => choice("CLUSTERING", "clustering"),
    _kw_desc: ($) => choice("DESC", "desc"),
    _kw_describe: ($) => choice("DESCRIBE", "describe"),
    _kw_entries: ($) => choice("ENTRIES", "entries"),
    _kw_full: ($) => choice("FULL", "full"),
    _kw_grant: ($) => choice("GRANT", "grant"),
    _kw_index: ($) => choice("INDEX", "index"),
    _kw_keyspaces: ($) => choice("KEYSPACES", "keyspaces"),
    _kw_limit: ($) => choice("LIMIT", "limit"),
    _kw_modify: ($) => choice("MODIFY", "modify"),
    _kw_norecursive: ($) => choice("NORECURSIVE", "norecursive"),
    _kw_of: ($) => choice("OF", "of"),
    _kw_order: ($) => choice("ORDER", "order"),
    _kw_partition: ($) => choice("PARTITION", "partition"),
    _kw_per: ($) => choice("PER", "per"),
    _kw_permission: ($) => choice("PERMISSION", "permission"),
    _kw_permissions: ($) => choice("PERMISSIONS", "permissions"),
    _kw_primary: ($) => choice("PRIMARY", "primary"),
    _kw_revoke: ($) => choice("REVOKE", "revoke"),
    _kw_select: ($) => choice("SELECT", "select"),
    _kw_users: ($) => choice("USERS", "users"),
    _kw_commit: ($) => choice("COMMIT", "commit"),
    _kw_search: ($) => choice("SEARCH", "searh"),
    _kw_roles: ($) => choice("ROLES", "roles"),
    _kw_deterministic: ($) => choice("DETERMINISTIC", "deterministic"),
    _kw_monotonic: ($) => choice("MONOTONIC", "monotonic"),
    _kw_java: ($) => choice("JAVA", "java"),
    _kw_java_script: ($) => choice("JAVASCRIPT", "javascript"),
    _kw_is: ($) => choice("IS", "is"),
    _kw_hashed: ($) => choice("HASHED", "hashed"),
    _kw_access: ($) => choice("ACCESS", "access"),
    _kw_dcs: ($) => choice("DATACENTERS", "datacenters"),
    _kw_cidrs: ($) => choice("CIDRS", "cidrs"),
    _kw_columns: ($) => choice("COLUMNS", "columns"),
    _kw_profiles: ($) => choice("PROFILES", "profiles"),
    _kw_config: ($) => choice("CONFIG", "config"),
    _kw_rows: ($) => choice("ROWS", "rows"),
    _kw_functions: ($) => choice("FUNCTIONS", "functions"),
    _kw_mbeans: ($) => choice("MBEANS", "mbeans"),
    _kw_mbean: ($) => choice("MBEAN", "mbean"),
    _kw_pattern: ($) => choice("PATTERN", "pattern"),
    _kw_execute: ($) => choice("EXECUTE", "execute"),
    _kw_proxy: ($) => choice("PROXY", "proxy"),
    _kw_id: ($) => choice("ID", "id"),
    _kw_like: ($) => choice("LIKE", "like"),
    _kw_ann: ($) => choice("ANN", "ann"),
    _kw_offset: ($) => choice("OFFSET", "offset"),
    _kw_list: ($) => choice("LIST", "list"),
    // _kw_having: ($) => choice("HAVING", "having"), // X
    // _kw_max: ($) => choice("MAX", "max"), // X
    // _kw_min: ($) => choice("MIN", "min"), // X
    // _kw_sum: ($) => choice("SUM", "sum"), // X
    // _kw_avg: ($) => choice("AVG", "avg"), // X
    // _kw_any: ($) => choice("ANY", "any"), // X
    // _kw_columnfamily: ($) => choice("COLUMNFAMILY", "columnfamily"), // X
    // _kw_consistency: ($) => choice("CONSISTENCY", "consistency"), // X
    // _kw_each_quorum: ($) => choice("EACH_QUORUM", "each_quorum"), // X
    // _kw_infinity: ($) => choice("INFINITY", "infinity"), // X
    // _kw_level: ($) => choice("LEVEL", "level"), // X
    // _kw_local_one: ($) => choice("LOCAL_ONE", "local_one"), // X
    // _kw_local_quorum: ($) => choice("LOCAL_QUORUM", "local_quorum"), // X
    // _kw_nan: ($) => choice("NAN", "nan"), // X
    // _kw_one: ($) => choice("ONE", "one"), // X
    // _kw_quorum: ($) => choice("QUORUM", "quorum"), // X
    // _kw_schema: ($) => choice("SCHEMA", "schema"), // X
    // _kw_static: ($) => choice("STATIC", "static"), // X
    // _kw_three: ($) => choice("THREE", "three"), // X
    // _kw_two: ($) => choice("TWO", "two"), // X
    // _kw_token: ($) => choice("TOKEN", "token"), // X
    // _kw_writetime: ($) => choice("WRITETIME", "writetime"), // X

    _use: ($) => seq($._kw_use, $.literal, $.semi_colon),

    _alter_keyspace: ($) =>
      seq(
        $._kw_alter,
        $._kw_keyspace,
        $.identifier,
        $._kw_with,
        $._kw_replication,
        $.equal_sign,
        "{",
        repeat(choice($.replication_statement, $.replication_statement_dc)),
        "}",
        optional(
          seq($._kw_and, $._kw_durable_writes, $.equal_sign, $.bool_choice),
        ),
        optional(
          seq(
            $._kw_and,
            "graph_engine",
            $.equal_sign,
            choice("'Core'", "'Classic'"),
          ),
        ),
        $.semi_colon,
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
        $.semi_colon,
      ),
    _alter_role: ($) =>
      seq(
        $._kw_alter,
        $._kw_role,
        $.identifier,
        optional(seq($._kw_with, repeat($.alter_role_option_args))),
        $.semi_colon,
      ),
    _alter_table: ($) =>
      prec.left(
        1,
        seq(
          $._kw_alter,
          $._kw_table,
          $.table_keyspace_name,
          optional($.alter_table_options),
          $.semi_colon,
        ),
      ),
    _alter_type: ($) =>
      prec.left(
        1,
        seq(
          $._kw_alter,
          $._kw_type,
          $.table_keyspace_name,
          optional($.alter_type_options),
          $.semi_colon,
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
            seq($._kw_with, $._kw_hashed, $._kw_password, $.string_literal),
          ),
        ),
        optional(choice($._kw_superuser, $._kw_nosuperuser)),
        $.semi_colon,
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
          $.semi_colon,
        ),
      ),
    _truncate: ($) =>
      seq(
        $._kw_truncate,
        optional($._kw_table),
        $.table_keyspace_name,
        $.semi_colon,
      ),
    _update: ($) =>
      seq(
        $._kw_update,
        $.table_keyspace_name,
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
            optional($.comma_separated),
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
              repeat(
                seq(
                  choice($.literal, $.collection),
                  optional($.comma_separated),
                ),
              ),
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
        $.semi_colon,
      ),
    _insert: ($) =>
      seq(
        $._kw_insert,
        optional("JSON"),
        $._kw_into,
        $.table_keyspace_name,
        optional("("),
        repeat(seq($.identifier, optional($.comma_separated))),
        optional(")"),
        $._kw_values,
        "(",
        repeat(
          seq(choice($.literal, $.collection), optional($.comma_separated)),
        ),
        ")",
        optional($._if_not_exists),
        optional($._using_ttl_or_timestamp),
        $.semi_colon,
      ),
    _delete: ($) =>
      seq(
        $._kw_delete,
        repeat(
          seq(
            $.literal,
            optional($.comma_separated),
            optional($.batch_delete_terms),
          ),
        ),
        $._kw_from,
        $.table_keyspace_name,
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
        $.semi_colon,
      ),
    _create_aggregate: ($) =>
      seq(
        $._kw_create,
        optional(seq($._kw_or, $._kw_replace)),
        $._kw_aggregate,
        optional($._if_not_exists),
        $.table_keyspace_name,
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
        repeat(seq($.identifier, optional($.comma_separated))),
        optional(")"),
        $.semi_colon,
      ),
    _create_index: ($) =>
      seq(
        $._kw_create,
        optional($._kw_custom),
        $._kw_index,
        optional($._if_not_exists),
        optional($.identifier),
        $._kw_on,
        $.table_keyspace_name,
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
            optional(
              seq($._kw_with, $._kw_options, $.equal_sign, $.collection),
            ),
          ),
        ),
        $.semi_colon,
      ),
    _commit_search_index: ($) =>
      seq(
        $._kw_commit,
        $._kw_search,
        $._kw_index,
        $._kw_on,
        $.table_keyspace_name,
        $.semi_colon,
      ),
    _list_roles: ($) =>
      seq(
        $._kw_list,
        $._kw_roles,
        optional(seq($._kw_of, $.identifier)),
        optional($._kw_norecursive),
        $.semi_colon,
      ),
    _list_users: ($) => seq($._kw_list, $._kw_users, $.semi_colon),
    _revoke_role: ($) =>
      seq($._kw_revoke, $.identifier, $._kw_from, $.identifier, $.semi_colon),
    _create_function: ($) =>
      seq(
        $._kw_create,
        optional(seq($._kw_or, $._kw_replace)),
        $._kw_function,
        optional($._if_not_exists),
        $.key_space_name,
        "(",
        repeat(
          seq($.identifier, $.cql_types_union, optional($.comma_separated)),
        ),
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
        $.semi_colon,
      ),
    _create_keyspace: ($) =>
      seq(
        $._kw_create,
        $._kw_keyspace,
        optional($._if_not_exists),
        $.identifier,
        $._kw_with,
        $._kw_replication,
        $.equal_sign,
        $.map,
        optional(
          seq($._kw_and, $._kw_durable_writes, $.equal_sign, $.bool_choice),
        ),
        optional(
          seq(
            $._kw_and,
            "graph_engine",
            $.equal_sign,
            choice("'Core'", "'Classic'"),
          ),
        ),
        $.semi_colon,
      ),
    _create_materialized_view: ($) =>
      seq(
        $._kw_create,
        $._kw_materialized,
        $._kw_view,
        optional($._if_not_exists),
        $.table_keyspace_name,
        $._kw_as,
        $._kw_select,
        optional(repeat(seq($.identifier, optional($.comma_separated)))),
        $._kw_from,
        $.table_keyspace_name,
        repeat($._mv_relation),
        $._kw_primary,
        $._kw_key,
        "(",
        repeat(seq($.identifier, optional($.comma_separated))),
        ")",
        optional(
          choice(
            seq($._kw_with, $._o_with_table_option),
            $._with_clustering_order_by,
          ),
        ),
        optional($._and_clustering_order_by),
        repeat(choice(seq($._kw_and, $.table_option))),
        $.semi_colon,
      ),

    _create_role: ($) =>
      seq(
        $._kw_create,
        $._kw_role,
        $._if_not_exists,
        $.identifier,
        repeat($._o_create_role),
        $.semi_colon,
      ),
    _create_search_index: ($) =>
      seq(
        $._kw_create,
        $._kw_search,
        $._kw_index,
        optional($._if_not_exists),
        $._kw_on,
        $.table_keyspace_name,
        repeat($._o_create_search_index),
        $.semi_colon,
      ),
    _create_type: ($) =>
      seq(
        $._kw_create,
        $._kw_type,
        optional($._if_not_exists),
        $.table_keyspace_name,
        optional("("),
        repeat(
          seq($.identifier, $.cql_types_union, optional($.comma_separated)),
        ),
        optional(")"),
        $.semi_colon,
      ),
    _create_user: ($) =>
      seq(
        $._kw_create,
        $._kw_user,
        $.identifier,
        optional($._if_not_exists),
        optional(choice($._with_password, $._with_hashed_password)),
        optional(choice($._kw_superuser, $._kw_nosuperuser)),
        $.semi_colon,
      ),
    _drop_aggregate: ($) =>
      seq(
        $._kw_drop,
        $._kw_aggregate,
        optional($._if_exists),
        repeat(seq($.table_keyspace_name, optional($.comma_separated))),
        $.semi_colon,
      ),
    _drop_function: ($) =>
      seq(
        $._kw_drop,
        $._kw_function,
        optional($._if_exists),
        repeat(seq($.table_keyspace_name, optional($.comma_separated))),
        $.semi_colon,
      ),
    _drop_index: ($) =>
      seq(
        $._kw_drop,
        $._kw_index,
        optional($._if_exists),
        $.table_keyspace_name,
        $.semi_colon,
      ),
    _drop_keyspace: ($) =>
      seq(
        $._kw_drop,
        $._kw_keyspace,
        optional($._if_exists),
        $.table_keyspace_name,
        $.semi_colon,
      ),
    _drop_materialized_view: ($) =>
      seq(
        $._kw_drop,
        $._kw_materialized,
        $._kw_view,
        optional($._if_exists),
        $.table_keyspace_name,
        $.semi_colon,
      ),
    _drop_role: ($) =>
      seq(
        $._kw_drop,
        $._kw_role,
        optional($._if_exists),
        $.identifier,
        $.semi_colon,
      ),
    _drop_search_index: ($) =>
      seq(
        $._kw_drop,
        $._kw_search,
        $._kw_index,
        $._kw_on,
        $.table_keyspace_name,
        optional(
          seq(
            $._kw_with,
            $._kw_options,
            repeat(seq($.collection, optional($.comma_separated))),
          ),
        ),
        $.semi_colon,
      ),
    _drop_table: ($) =>
      seq(
        $._kw_drop,
        $._kw_table,
        optional($._if_exists),
        $.table_keyspace_name,
        $.semi_colon,
      ),
    _drop_type: ($) =>
      seq(
        $._kw_drop,
        $._kw_type,
        optional($._if_exists),
        $.table_keyspace_name,
        $.semi_colon,
      ),
    _drop_user: ($) =>
      seq(
        $._kw_drop,
        $._kw_user,
        optional($._if_exists),
        $.identifier,
        $.semi_colon,
      ),
    _grant_role: ($) =>
      seq($._kw_grant, $.identifier, $._kw_to, $.identifier, $.semi_colon),
    _grant_premission: ($) =>
      seq(
        $._kw_grant,
        $._priviliges,
        $._kw_on,
        $._resources,
        $._kw_to,
        $.identifier,
        $.semi_colon,
      ),
    _list_premissions: ($) =>
      seq(
        $._kw_list,
        $._priviliges,
        optional(seq($._kw_on, $.table_keyspace_name)),
        optional(seq($._kw_of, $.table_keyspace_name)),
        optional($._kw_norecursive),
        $.semi_colon,
      ),
    _revoke_premission: ($) =>
      seq(
        $._kw_revoke,
        $._priviliges,
        $._kw_on,
        $._resources,
        choice($._kw_to, $._kw_from),
        $.identifier,
        $.semi_colon,
      ),
    _create_table: ($) =>
      seq(
        $._kw_create,
        $._kw_table,
        optional($._if_not_exists),
        $.table_keyspace_name,
        "(",
        optional(repeat($._column_definition)),
        optional($._pk_main),
        ")",
        repeat($._create_table_and_options),
        $.semi_colon,
      ),
    _select: ($) =>
      seq(
        $._kw_select,
        optional(choice($._kw_json, $._kw_distinct)),
        repeat1($.selectors),
        $._kw_from,
        $.table_keyspace_name,
        repeat($._conditions_select),
        $.semi_colon,
      ),

    // --END_COMMANDS--

    // Select Conditions

    _conditions_select: ($) =>
      choice(
        seq($._kw_where, $.selector_conditions, $.if_conditions, $.expression),
        seq($._kw_and, $.selector_conditions, $.if_conditions, $.expression),
        seq($._kw_where, $.selector_conditions, $._kw_like, $.expression),
        seq($._kw_and, $.selector_conditions, $._kw_like, $.expression),
        seq($._kw_where, $.selector_conditions, $._kw_in, $.iconditions_blocks),
        seq($._kw_and, $.selector_conditions, $._kw_in, $.iconditions_blocks),
        seq($._kw_allow, $._kw_filtering),
        seq($._kw_per, $._kw_partition, $._kw_limit, $.number),
        seq(
          $._kw_group,
          $._kw_by,
          seq(
            repeat(
              seq(
                $.table_keyspace_name,
                optional(choice($._kw_asc, $._kw_desc)),
              ),
            ),
          ),
        ),
        seq(
          $._kw_order,
          $._kw_by,
          seq(
            repeat(
              seq(
                $.table_keyspace_name,
                optional(choice($._kw_asc, $._kw_desc)),
              ),
            ),
          ),
        ),
        seq(
          $._kw_order,
          $._kw_by,
          seq(
            repeat(
              seq(
                $.table_keyspace_name,
                $._kw_ann,
                $._kw_of,
                "[",
                repeat(seq($.number, optional($.comma_separated))),
                "]",
                optional(seq($._kw_limit, $.number)),
                optional(
                  choice(
                    seq(
                      $._kw_limit,
                      $.number,
                      optional(seq($._kw_offset, $.number)),
                    ),
                    seq($._kw_per, $._kw_partition, $._kw_limit, $.number),
                  ),
                ),
              ),
            ),
          ),
        ),
      ),

    // Table AND options

    _o_with_compact_storage: ($) =>
      seq($._kw_with, $._kw_compact, $._kw_storage),
    _o_and_compact_storage: ($) => seq($._kw_and, $._kw_compact, $._kw_storage),

    _o_compact_storage: ($) =>
      choice($._o_with_compact_storage, $._o_and_compact_storage),

    _o_with_id: ($) => seq($._kw_with, $._kw_id, $.equal_sign, $.string),
    _o_and_id: ($) => seq($._kw_and, $._kw_id, $.equal_sign, $.string),
    _o_id: ($) => choice($._o_with_id, $._o_and_id),

    _create_table_and_options: ($) =>
      choice(
        $.table_option,
        $._o_clustering_order,
        $._o_compact_storage,
        $._o_id,
      ),

    // Table Column definition

    _pk_main: ($) =>
      prec.right(
        1,
        seq(
          optional($.comma_separated),
          $._kw_primary,
          $._kw_key,
          $._pk_options,
        ),
      ),

    _column_definition: ($) =>
      prec.right(
        2,
        seq(
          $.identifier,
          $.cql_types_union,
          optional(seq($._kw_primary, $._kw_key)),
          optional($.comma_separated),
        ),
      ),

    _pk_partion_only: ($) => seq("(", $.identifier, ")"),
    _pk_partion_and_clustering: ($) =>
      seq("(", $.identifier, $.comma_separated, $.identifier, ")"),
    _pk_partion_mult_and_clustering: ($) =>
      seq(
        "(",
        "(",
        repeat(seq($.identifier, optional($.comma_separated))),
        ")",
        $.comma_separated,
        $.identifier,
        ")",
      ),
    _pk_partion_and_clustering_mult: ($) =>
      seq(
        "(",
        $.identifier,
        $.comma_separated,
        "(",
        repeat(seq($.identifier, optional($.comma_separated))),
        ")",
        ")",
      ),
    _pk_partion_mult_and_clustering_mult: ($) =>
      seq(
        "(",
        "(",
        repeat(seq($.identifier, optional($.comma_separated))),
        ")",
        $.comma_separated,
        "(",
        repeat(seq($.identifier, optional($.comma_separated))),
        ")",
        ")",
      ),
    _pk_options: ($) =>
      choice(
        $._pk_partion_only,
        $._pk_partion_and_clustering,
        $._pk_partion_mult_and_clustering,
        $._pk_partion_and_clustering_mult,
        $._pk_partion_mult_and_clustering_mult,
      ),

    // Resource types | Premissions

    _resources: ($) =>
      choice(
        $.table_keyspace_name,
        seq($._kw_all, $._kw_keyspaces),
        seq($._kw_keyspace, $.table_keyspace_name),
        seq($._kw_table, $.table_keyspace_name),
        seq($.collection, $._kw_rows, $._kw_in, $.table_keyspace_name),
        seq($._kw_all, $._kw_functions),
        seq(
          $._kw_all,
          $._kw_functions,
          $._kw_in,
          $._kw_keyspace,
          $.table_keyspace_name,
        ),
        seq(
          $._kw_function,
          $.table_keyspace_name,
          optional("("),
          repeat(seq($.cql_types_union, optional($.comma_separated))),
          optional(")"),
        ),
        seq($._kw_all, $._kw_mbeans),
        seq($._kw_mbean, $.table_keyspace_name),
        seq($._kw_mbeans, $._kw_pattern),
        seq($._kw_all, $._kw_roles),
        seq($._kw_role, $.table_keyspace_name),
      ),
    _priviliges: ($) =>
      choice(
        seq($._kw_all, $._kw_permissions),
        $._kw_alter,
        $._kw_create,
        $._kw_drop,
        $._kw_modify,
        $._kw_select,
        $._kw_execute,
        $._kw_describe,
        $.table_keyspace_name,
        $._kw_authorize,
        seq($._kw_proxy, ".", $._kw_execute),
        seq($._kw_proxy, ".", $._kw_login),
      ),

    // Options
    _o_with_columns: ($) =>
      seq(
        $._kw_with,
        $._kw_columns,
        repeat(
          seq(
            $.table_keyspace_name,
            optional($.collection),
            optional($.comma_separated),
          ),
        ),
      ),
    _o_and_columns: ($) =>
      seq(
        $._kw_and,
        $._kw_columns,
        repeat(
          seq(
            $.table_keyspace_name,
            optional($.collection),
            optional($.comma_separated),
          ),
        ),
      ),
    _o_with_profiles: ($) =>
      seq(
        $._kw_with,
        $._kw_profiles,
        repeat(seq($.table_keyspace_name, optional($.comma_separated))),
      ),
    _o_and_profiles: ($) =>
      seq(
        $._kw_and,
        $._kw_profiles,
        repeat(seq($.table_keyspace_name, optional($.comma_separated))),
      ),
    _o_with_config: ($) =>
      seq(
        $._kw_with,
        $._kw_config,
        repeat(seq($.collection, optional($.comma_separated))),
      ),
    _o_and_config: ($) =>
      seq(
        $._kw_and,
        $._kw_config,
        repeat(seq($.collection, optional($.comma_separated))),
      ),
    _o_with_options: ($) =>
      seq(
        $._kw_with,
        $._kw_options,
        repeat(seq($.collection, optional($.comma_separated))),
      ),
    _o_and_options: ($) =>
      seq(
        $._kw_and,
        $._kw_options,
        repeat(seq($.collection, optional($.comma_separated))),
      ),
    _o_create_search_index: ($) =>
      choice(
        $._o_with_columns,
        $._o_and_columns,
        $._o_with_profiles,
        $._o_and_profiles,
        $._o_with_config,
        $._o_and_config,
        $._o_with_options,
        $._o_and_options,
      ),
    _o_clustering_order: ($) =>
      choice($._with_clustering_order_by, $._and_clustering_order_by),
    _with_clustering_order_by: ($) =>
      seq(
        $._kw_with,
        $._kw_clustering,
        $._kw_order,
        $._kw_by,
        optional("("),
        $.identifier,
        choice($._kw_desc, $._kw_asc),
        optional(")"),
      ),

    _and_clustering_order_by: ($) =>
      seq(
        $._kw_and,
        $._kw_clustering,
        $._kw_order,
        $._kw_by,
        optional("("),
        $.identifier,
        choice($._kw_desc, $._kw_asc),
        optional(")"),
      ),

    _with_password: ($) =>
      seq($._kw_with, $._kw_password, optional($.equal_sign), $.string),
    _with_hashed_password: ($) =>
      seq(
        $._kw_with,
        $._kw_hashed,
        $._kw_password,
        optional($.equal_sign),
        $.string,
      ),
    _and_password: ($) =>
      seq($._kw_and, $._kw_password, optional($.equal_sign), $.string),
    _and_hashed_password: ($) =>
      seq(
        $._kw_and,
        $._kw_hashed,
        $._kw_password,
        optional($.equal_sign),
        $.string,
      ),
    _with_superuser: ($) =>
      seq($._kw_with, $._kw_superuser, $.equal_sign, $.bool_choice),
    _and_superuser: ($) =>
      seq($._kw_and, $._kw_superuser, $.equal_sign, $.bool_choice),
    _with_login: ($) =>
      seq($._kw_with, $._kw_login, $.equal_sign, $.bool_choice),
    _and_login: ($) => seq($._kw_and, $._kw_login, $.equal_sign, $.bool_choice),
    _with_access_to_dc: ($) =>
      seq($._kw_with, $._kw_access, $._kw_to, $._kw_dcs, $.collection),
    _with_access_all_dc: ($) =>
      seq($._kw_with, $._kw_access, $._kw_to, $._kw_all, $._kw_dcs),
    _and_access_to_dc: ($) =>
      seq($._kw_and, $._kw_access, $._kw_to, $._kw_dcs, $.collection),
    _and_access_all_dc: ($) =>
      seq($._kw_and, $._kw_access, $._kw_to, $._kw_all, $._kw_dcs),
    _with_access_from_cidrs: ($) =>
      seq($._kw_with, $._kw_access, $._kw_from, $._kw_cidrs, $.collection),
    _with_access_from_all_cidrs: ($) =>
      seq($._kw_with, $._kw_access, $._kw_from, $._kw_all, $._kw_cidrs),
    _and_access_from_cidrs: ($) =>
      seq($._kw_and, $._kw_access, $._kw_from, $._kw_cidrs, $.collection),
    _and_access_from_all_cidrs: ($) =>
      seq($._kw_and, $._kw_access, $._kw_from, $._kw_all, $._kw_cidrs),
    _with_options: ($) =>
      seq($._kw_with, $._kw_options, $.equal_sign, $.collection),
    _and_options: ($) =>
      seq($._kw_and, $._kw_options, $.equal_sign, $.collection),

    _o_create_role: ($) =>
      choice(
        $._with_password,
        $._and_password,
        $._with_hashed_password,
        $._and_hashed_password,
        $._with_superuser,
        $._and_superuser,
        $._with_login,
        $._and_login,
        $._with_access_to_dc,
        $._and_access_to_dc,
        $._with_access_all_dc,
        $._and_access_all_dc,
        $._with_access_from_cidrs,
        $._and_access_from_cidrs,
        $._with_access_from_all_cidrs,
        $._and_access_from_all_cidrs,
        $._with_options,
        $._and_options,
      ),
    _mv_relation: ($) =>
      choice(
        seq($._kw_where, $.identifier, $._kw_is, $._kw_not, $._kw_null),
        seq($._kw_and, $.identifier, $._kw_is, $._kw_not, $._kw_null),
        seq($._kw_and, $.identifier, $.if_conditions, $.expression),
      ),
    _assignment_operators: ($) => choice($.equal_sign, "+=", "-=", "*=", "/="),
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
        $._create_materialized_view, // Working
        $._create_role, // Working
        $._create_search_index, //Working
        $._create_table, // Working
        $._create_type, // Working
        $._create_user, // Working
        $._delete, // Working
        $._drop_aggregate, // Working
        $._drop_function, // Working
        $._drop_index, // Working
        $._drop_keyspace, // Working
        $._drop_materialized_view, // Working
        $._drop_role, // Working
        $._drop_search_index, // Working
        $._drop_table, // Working
        $._drop_type, // Working
        $._drop_user, // Working
        $._grant_role, // Working
        $._grant_premission, // Working
        $._insert, // Working
        $._list_premissions, // Working
        $._list_roles, // Working
        $._list_users, // Working
        $._revoke_role, // Working
        $._revoke_premission, // Working
        $._select, // Working
        $._truncate, // Working
        $._update, // Working
        $._use, // Working
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

    table_option: ($) =>
      choice($.table_option_single, $.table_option_multi, $.table_option_label),

    table_option_single: ($) =>
      seq($.identifier, $.equal_sign, choice($.string_literal, $.number)),
    table_option_multi: ($) => seq($.identifier, $.equal_sign, $.collection),
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
            repeat(seq($.identifier, optional($.comma_separated))),
            ")",
            "TO",
            $.identifier,
            "(",
            repeat(seq($.identifier, optional($.comma_separated))),
            ")",
          ),
        ),
      ),
    table_statement: ($) =>
      seq(
        $.string_literal,
        ":",
        choice($.string_literal, $.number),
        optional($.comma_separated),
      ),

    _dml_insert: ($) => prec.left(2, $._insert),
    _dml_update: ($) => prec.left(2, $._update),
    _dml_delete: ($) => prec.left(2, $._delete),

    dml_statement: ($) => choice($._dml_insert, $._dml_update, $._dml_delete),

    iconditions_blocks: ($) =>
      choice(
        seq("(", repeat(seq($.literal, optional($.comma_separated))), ")"),
      ),

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

    uuid_construct: ($) => seq($._type_uuid, "(", optional($.uuid), ")"),

    construct_types: ($) =>
      choice(
        $.cql_types_constructor_list,
        $.cql_types_constructor_tuple,
        $.cql_types_constructor_map,
        $.uuid_construct,
      ),

    if_conditions: ($) =>
      choice(
        $.equal_sign,
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
        seq($._kw_password, $.equal_sign, $.string_literal),
        seq($._kw_login, $.equal_sign, $.bool_choice),
        seq($._kw_superuser, $.equal_sign, $.bool_choice),
        seq($._kw_options, $.equal_sign, $.string_literal),
      ),

    _o_alter_type: ($) =>
      prec.left(
        2,
        seq($._kw_alter, $.identifier, $._kw_type, $.cql_types_union),
      ),
    _o_add: ($) =>
      seq(
        $._kw_add,
        repeat(
          seq($.identifier, $.cql_types_union, optional($.comma_separated)),
        ),
      ),
    _o_drop: ($) =>
      seq(
        $._kw_drop,
        choice(
          repeat(seq($.identifier, optional($.comma_separated))),
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

    _o_with_table_option: ($) => $.table_option,
    _o_and_table_option: ($) => seq($._kw_and, $.table_option),

    _o_with: ($) =>
      seq($._kw_with, $._o_with_table_option, repeat($._o_and_table_option)),

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
          repeat(
            seq($.identifier, $.cql_types_union, optional($.comma_separated)),
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

    table_keyspace_name: ($) =>
      choice($.key_space_name, $.table_label, $.identifier, "*"),

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

    comma_separated: ($) => ",",

    semi_colon: ($) => ";",

    equal_sign: ($) => "=",

    selectors: ($) =>
      choice(
        seq(
          $.literal,
          optional(seq($._kw_as, $.literal)),
          optional($.comma_separated),
        ),
        "*",
        seq($.func_definition, optional($.comma_separated)),
      ),

    func_definition: ($) =>
      seq(
        field("function_name", $.identifier),
        "(",
        optional(
          seq(
            field(
              "argument",
              choice(
                $.identifier,
                $.literal,
                $.cql_types_union,
                "*",
                seq($.identifier, "AS", choice($.identifier, $.cql_types)),
              ),
            ),
            repeat(
              seq(
                ",",
                field(
                  "argument",
                  choice(
                    $.identifier,
                    $.literal,
                    $.cql_types_union,
                    "*",
                    seq($.identifier, "AS", choice($.identifier, $.cql_types)),
                  ),
                ),
              ),
            ),
          ),
        ),
        ")",
      ),
    selector_conditions: ($) =>
      choice($.table_keyspace_name, $.func_definition),

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
