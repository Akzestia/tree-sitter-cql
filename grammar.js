/**
 * @file Cql grammar for tree-sitter
 * @author アクゼスティア <akzestia@gmail.com>
 * @license MIT
 */

module.exports = grammar({
  name: "cql",

  extras: ($) => [/\s|\\\r?\n/, $.comment],

  conflicts: ($) => [[$.conditionsselect, $.if_conditions]],

  word: ($) => $.identifier,

  rules: {
    source_file: ($) => repeat(choice($.statement, $.comment)),

    statement: ($) => choice($.cql_commands),

    comment: ($) => choice($.line_comment, $.block_comment),

    outline_identifier: ($) => /\@[A-Za-z_][\w-]*/,

    line_comment: ($) => token(seq(choice("--", "//"), /.*/)),

    block_comment: ($) => token(seq("/*", /[^*]*\*+([^/*][^*]*\*+)*/, "/")),

    type_ascii: ($) => choice("ASCII", "ascii"),
    type_bigint: ($) => choice("BIGINT", "bigint"),
    type_blob: ($) => choice("BLOB", "blob"),
    type_boolean: ($) => choice("BOOLEAN", "boolean"),
    type_counter: ($) => choice("COUNTER", "counter"),
    type_date: ($) => choice("DATE", "date"),
    type_decimal: ($) => choice("DECIMAL", "decimal"),
    type_double: ($) => choice("DOUBLE", "double"),
    type_float: ($) => choice("FLOAT", "float"),
    type_frozen: ($) => choice("FROZEN", "frozen"),
    type_inet: ($) => choice("INET", "inet"),
    type_int: ($) => choice("INT", "int"),
    type_list: ($) => choice("LIST", "list"),
    type_map: ($) => choice("MAP", "map"),
    type_set: ($) => choice("SET", "set"),
    type_smallint: ($) => choice("SMALLINT", "smallint"),
    type_text: ($) => choice("TEXT", "text"),
    type_time: ($) => choice("TIME", "time"),
    type_timestamp: ($) => choice("TIMESTAMP", "timestamp"),
    type_timeuuid: ($) => choice("TIMEUUID", "timeuuid"),
    type_tinyint: ($) => choice("TINYINT", "tinyint"),
    type_tuple: ($) => choice("TUPLE", "tuple"),
    type_uuid: ($) => choice("UUID", "uuid"),
    type_varchar: ($) => choice("VARCHAR", "varchar"),
    type_varint: ($) => choice("VARINT", "varint"),

    cql_types: ($) =>
      prec.left(
        1,
        choice(
          $.type_ascii,
          $.type_bigint,
          $.type_blob,
          $.type_boolean,
          $.type_counter,
          $.type_date,
          $.type_decimal,
          $.type_double,
          $.type_float,
          $.type_frozen,
          $.type_inet,
          $.type_int,
          $.type_list,
          $.type_map,
          $.type_set,
          $.type_smallint,
          $.type_text,
          $.type_time,
          $.type_timestamp,
          $.type_timeuuid,
          $.type_tinyint,
          $.type_tuple,
          $.type_uuid,
          $.type_varchar,
          $.type_varint,
        ),
      ),

    cql_types_constructor_list: ($) =>
      seq($.type_list, $.cql_types_constructor_void),
    cql_types_constructor_set: ($) =>
      seq($.type_set, $.cql_types_constructor_void),
    cql_types_constructor_tuple: ($) =>
      seq($.type_tuple, "<", $.cql_types, ",", $.cql_types, ">"),
    cql_types_constructor_map: ($) =>
      seq($.type_map, "<", $.cql_types, ",", $.cql_types, ">"),
    cql_types_constructor_frozen: ($) =>
      prec.left(
        0,
        seq(
          $.type_frozen,
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
      ),

    cql_types_constructor_void: ($) => seq("<", $.cql_types, ">"),

    cql_types_union: ($) =>
      choice(
        $.cql_types,
        $.cql_types_constructor_list,
        $.cql_types_constructor_tuple,
        $.cql_types_constructor_map,
        $.cql_types_constructor_frozen,
        $.cql_types_constructor_set,
        $.string,
        $.cql_types_constructor_void,
      ),

    kw_use: ($) => choice("USE", "use"),
    kw_alter: ($) => token(choice("ALTER", "alter")),
    kw_create: ($) => choice("CREATE", "create"),
    kw_keyspace: ($) => choice("KEYSPACE", "keyspace"),
    kw_table: ($) => choice("TABLE", "table"),
    kw_with: ($) => choice("WITH", "with"),
    kw_where: ($) => choice("WHERE", "where"),
    kw_if: ($) => choice("IF", "if"),
    kw_and: ($) => choice("AND", "and"),
    kw_set: ($) => choice("SET", "set"),
    kw_in: ($) => choice("IN", "in"),
    kw_to: ($) => choice("TO", "to"),
    kw_vertex: ($) => choice("VERTEX", "vertex"),
    kw_edge: ($) => choice("EDGE", "edge"),
    kw_label: ($) => choice("LABEL", "label"),
    kw_from: ($) => choice("FROM", "from"),
    kw_using: ($) => choice("USING", "using"),
    kw_timestamp: ($) => choice("TIMESTAMP", "timestamp"),
    kw_ttl: ($) => choice("TTL", "ttl"),
    kw_exists: ($) => choice("EXISTS", "exists"),
    kw_not: ($) => choice("NOT", "not"),
    kw_type: ($) => choice("TYPE", "type"),
    kw_view: ($) => choice("VIEW", "view"),
    kw_materialized: ($) => choice("MATERIALIZED", "materialized"),
    kw_replication: ($) => choice("REPLICATION", "replication"),
    kw_durable_writes: ($) => choice("DURABLE_WRITES", "durable_writes"),
    kw_batch: ($) => choice("BATCH", "batch"),
    kw_apply: ($) => choice("APPLY", "apply"),
    kw_begin: ($) => choice("BEGIN", "begin"),
    kw_unlogged: ($) => choice("UNLOGGED", "unlogged"),
    kw_logged: ($) => choice("LOGGED", "logged"),
    kw_counter: ($) => choice("COUNTER", "counter"),
    kw_truncate: ($) => choice("TRUNCATE", "truncate"),
    kw_insert: ($) => choice("INSERT", "insert"),
    kw_into: ($) => choice("INTO", "into"),
    kw_values: ($) => choice("VALUES", "values"),
    kw_update: ($) => choice("UPDATE", "update"),
    kw_delete: ($) => choice("DELETE", "delete"),
    kw_role: ($) => choice("ROLE", "role"),
    kw_password: ($) => choice("PASSWORD", "password"),
    kw_user: ($) => choice("USER", "user"),
    kw_superuser: ($) => choice("SUPERUSER", "superuser"),
    kw_nosuperuser: ($) => choice("NOSUPERUSER", "nosuperuser"),
    kw_add: ($) => choice("ADD", "add"),
    kw_drop: ($) => choice("DROP", "drop"),
    kw_rename: ($) => choice("RENAME", "rename"),
    kw_compact: ($) => choice("COMPACT", "compact"),
    kw_storage: ($) => choice("STORAGE", "storage"),
    kw_contains: ($) => choice("CONTAINS", "contains"),
    kw_key: ($) => choice("KEY", "key"),
    kw_login: ($) => choice("LOGIN", "login"),
    kw_options: ($) => choice("OPTIONS", "options"),
    kw_or: ($) => choice("OR", "or"),
    kw_replace: ($) => choice("REPLACE", "replace"),
    kw_sfunc: ($) => choice("SFUNC", "sfunc"),
    kw_stype: ($) => choice("STYPE", "stype"),
    kw_final_func: ($) => choice("FINALFUNC", "finalfunc"),
    kw_init_cond: ($) => choice("INITCOND", "initcond"),
    kw_language: ($) => choice("LANGUAGE", "language"),
    kw_input: ($) => choice("INPUT", "input"),
    kw_on: ($) => choice("ON", "on"),
    kw_function: ($) => choice("FUNCTION", "function"),
    kw_called: ($) => choice("CALLED", "called"),
    kw_returns: ($) => choice("RETURNS", "returns"),
    kw_filtering: ($) => choice("FILTERING", "filtering"),
    kw_distinct: ($) => choice("DISTINCT", "distinct"),
    kw_as: ($) => choice("AS", "as"),
    kw_keys: ($) => choice("KEYS", "keys"),
    kw_group: ($) => choice("GROUP", "group"),
    kw_by: ($) => choice("BY", "by"),
    kw_json: ($) => choice("JSON", "json"),
    kw_null: ($) => choice("NULL", "null"),
    kw_custom: ($) => choice("CUSTOM", "custom"),
    kw_aggregate: ($) => choice("AGGREGATE", "aggregate"),
    kw_all: ($) => choice("ALL", "all"),
    kw_allow: ($) => choice("ALLOW", "allow"),
    kw_asc: ($) => choice("ASC", "asc"),
    kw_authorize: ($) => choice("AUTHORIZE", "authorize"),
    kw_by: ($) => choice("BY", "by"),
    kw_clustering: ($) => choice("CLUSTERING", "clustering"),
    kw_desc: ($) => choice("DESC", "desc"),
    kw_describe: ($) => choice("DESCRIBE", "describe"),
    kw_entries: ($) => choice("ENTRIES", "entries"),
    kw_full: ($) => choice("FULL", "full"),
    kw_grant: ($) => choice("GRANT", "grant"),
    kw_index: ($) => choice("INDEX", "index"),
    kw_keyspaces: ($) => choice("KEYSPACES", "keyspaces"),
    kw_limit: ($) => choice("LIMIT", "limit"),
    kw_modify: ($) => choice("MODIFY", "modify"),
    kw_norecursive: ($) => choice("NORECURSIVE", "norecursive"),
    kw_of: ($) => choice("OF", "of"),
    kw_order: ($) => choice("ORDER", "order"),
    kw_partition: ($) => choice("PARTITION", "partition"),
    kw_per: ($) => choice("PER", "per"),
    kw_permissions: ($) => choice("PERMISSIONS", "permissions"),
    kw_primary: ($) => choice("PRIMARY", "primary"),
    kw_revoke: ($) => choice("REVOKE", "revoke"),
    kw_select: ($) => choice("SELECT", "select"),
    kw_users: ($) => choice("USERS", "users"),
    kw_commit: ($) => choice("COMMIT", "commit"),
    kw_search: ($) => choice("SEARCH", "search"),
    kw_roles: ($) => choice("ROLES", "roles"),
    kw_deterministic: ($) => choice("DETERMINISTIC", "deterministic"),
    kw_monotonic: ($) => choice("MONOTONIC", "monotonic"),
    kw_java: ($) => choice("JAVA", "java"),
    kw_java_script: ($) => choice("JAVASCRIPT", "javascript"),
    kw_is: ($) => choice("IS", "is"),
    kw_hashed: ($) => choice("HASHED", "hashed"),
    kw_access: ($) => choice("ACCESS", "access"),
    kw_dcs: ($) => choice("DATACENTERS", "datacenters"),
    kw_cidrs: ($) => choice("CIDRS", "cidrs"),
    kw_columns: ($) => choice("COLUMNS", "columns"),
    kw_profiles: ($) => choice("PROFILES", "profiles"),
    kw_config: ($) => choice("CONFIG", "config"),
    kw_rows: ($) => choice("ROWS", "rows"),
    kw_functions: ($) => choice("FUNCTIONS", "functions"),
    kw_mbeans: ($) => choice("MBEANS", "mbeans"),
    kw_mbean: ($) => choice("MBEAN", "mbean"),
    kw_pattern: ($) => choice("PATTERN", "pattern"),
    kw_execute: ($) => choice("EXECUTE", "execute"),
    kw_proxy: ($) => choice("PROXY", "proxy"),
    kw_id: ($) => choice("ID", "id"),
    kw_like: ($) => choice("LIKE", "like"),
    kw_ann: ($) => choice("ANN", "ann"),
    kw_offset: ($) => choice("OFFSET", "offset"),
    kw_list: ($) => choice("LIST", "list"),
    kw_max: ($) => choice("MAX", "max"),
    kw_min: ($) => choice("MIN", "min"),
    kw_sum: ($) => choice("SUM", "sum"),
    kw_avg: ($) => choice("AVG", "avg"),
    kw_token: ($) => choice("TOKEN", "token"),
    kw_writetime: ($) => choice("WRITETIME", "writetime"),
    kw_count: ($) => choice("COUNT", "count"),
    kw_infinity: ($) => choice("INFINITY", "infinity"),
    kw_nan: ($) => choice("NAN", "nan"),
    kw_static: ($) => choice("STATIC", "static"),
    kw_any: ($) => choice("ANY", "any"),
    kw_having: ($) => choice("HAVING", "having"),
    kw_consistency: ($) => choice("CONSISTENCY", "consistency"),
    kw_level: ($) => choice("LEVEL", "level"),
    kw_one: ($) => choice("ONE", "one"),
    kw_two: ($) => choice("TWO", "two"),
    kw_three: ($) => choice("THREE", "three"),
    kw_quorum: ($) => choice("QUORUM", "quorum"),
    kw_local_one: ($) => choice("LOCAL_ONE", "local_one"),
    kw_local_quorum: ($) => choice("LOCAL_QUORUM", "local_quorum"),
    kw_each_quorum: ($) => choice("EACH_QUORUM", "each_quorum"),

    // ---------[NOT SUPPORTED] | [DEPRECATED]-----------

    // kw_schema: ($) => choice("SCHEMA", "schema"), // Not supported
    // kw_columnfamily: ($) => choice("COLUMNFAMILY", "columnfamily"), // Not supported

    consistency_lvls: ($) =>
      choice(
        $.kw_one,
        $.kw_two,
        $.kw_three,
        $.kw_quorum,
        $.kw_local_one,
        $.kw_local_quorum,
        $.kw_each_quorum,
      ),

    usingconsistency_level: ($) =>
      seq(
        $.kw_using,
        $.kw_consistency,
        optional($.kw_level),
        $.consistency_lvls,
      ),

    consistency_level: ($) =>
      seq(
        $.kw_consistency,
        optional($.kw_level),
        $.consistency_lvls,
        $.semi_colon,
      ),

    cqlkweyword: ($) =>
      choice(
        $.kw_use,
        $.kw_alter,
        $.kw_create,
        $.kw_keyspace,
        $.kw_table,
        $.kw_with,
        $.kw_where,
        $.kw_if,
        $.kw_and,
        $.kw_set,
        $.kw_in,
        $.kw_to,
        $.kw_from,
        $.kw_using,
        $.kw_timestamp,
        $.kw_ttl,
        $.kw_exists,
        $.kw_not,
        $.kw_type,
        $.kw_view,
        $.kw_materialized,
        $.kw_replication,
        $.kw_durable_writes,
        $.kw_batch,
        $.kw_apply,
        $.kw_begin,
        $.kw_unlogged,
        $.kw_logged,
        $.kw_counter,
        $.kw_truncate,
        $.kw_insert,
        $.kw_into,
        $.kw_values,
        $.kw_update,
        $.kw_delete,
        $.kw_role,
        $.kw_password,
        $.kw_user,
        $.kw_superuser,
        $.kw_nosuperuser,
        $.kw_add,
        $.kw_drop,
        $.kw_rename,
        $.kw_compact,
        $.kw_storage,
        $.kw_contains,
        $.kw_key,
        $.kw_login,
        $.kw_options,
        $.kw_or,
        $.kw_replace,
        $.kw_sfunc,
        $.kw_stype,
        $.kw_final_func,
        $.kw_init_cond,
        $.kw_language,
        $.kw_input,
        $.kw_on,
        $.kw_function,
        $.kw_called,
        $.kw_returns,
        $.kw_filtering,
        $.kw_distinct,
        $.kw_as,
        $.kw_keys,
        $.kw_group,
        $.kw_by,
        $.kw_json,
        $.kw_null,
        $.kw_custom,
        $.kw_aggregate,
        $.kw_all,
        $.kw_allow,
        $.kw_asc,
        $.kw_authorize,
        $.kw_clustering,
        $.kw_desc,
        $.kw_describe,
        $.kw_entries,
        $.kw_full,
        $.kw_grant,
        $.kw_index,
        $.kw_keyspaces,
        $.kw_limit,
        $.kw_modify,
        $.kw_norecursive,
        $.kw_of,
        $.kw_order,
        $.kw_partition,
        $.kw_per,
        $.kw_permissions,
        $.kw_primary,
        $.kw_revoke,
        $.kw_select,
        $.kw_users,
        $.kw_commit,
        $.kw_search,
        $.kw_roles,
        $.kw_deterministic,
        $.kw_monotonic,
        $.kw_java,
        $.kw_java_script,
        $.kw_is,
        $.kw_hashed,
        $.kw_access,
        $.kw_dcs,
        $.kw_cidrs,
        $.kw_columns,
        $.kw_profiles,
        $.kw_config,
        $.kw_rows,
        $.kw_functions,
        $.kw_mbeans,
        $.kw_mbean,
        $.kw_pattern,
        $.kw_execute,
        $.kw_proxy,
        $.kw_id,
        $.kw_like,
        $.kw_ann,
        $.kw_offset,
        $.kw_list,
        $.kw_token,
        $.kw_writetime,
        $.kw_count,
        $.kw_max,
        $.kw_min,
        $.kw_sum,
        $.kw_avg,
        $.kw_any,
        $.kw_nan,
        $.kw_infinity,
        $.kw_static,
        $.kw_consistency,
        $.kw_level,
        $.kw_local_one,
        $.kw_local_quorum,
        $.kw_quorum,
        $.kw_each_quorum,
        $.kw_one,
        $.kw_two,
        $.kw_three,
        $.kw_having,
        $.kw_vertex,
        $.kw_edge,
        $.kw_label,
      ),

    //-----------[HELPER TYPES]-----------------
    graph_engine: ($) => "graph_engine",
    graph_engine_type: ($) => choice("'Core'", "'Classic'"),

    //-----------[OUTLINE IDENTIFIRES]----------
    // outline_identifier: ($) => /@[a-zA-Z_][a-zA-Z0-9_]*/,

    /*
      field("command_family"
      field("command_type_modifier"
      field("command_type"
      field("name
    */

    use: ($) =>
      seq(
        field("command_family", $.kw_use),
        field("name", $.literal),
        $.semi_colon,
      ),

    alter_keyspace: ($) =>
      seq(
        field("command_family", $.kw_alter),
        field("command_type", $.kw_keyspace),
        field("name", $.identifier),
        $.kw_with,
        $.kw_replication,
        $.equal_sign,
        "{",
        repeat(choice($.replication_statement, $.replication_statement_dc)),
        "}",
        optional(
          seq($.kw_and, $.kw_durable_writes, $.equal_sign, $.bool_choice),
        ),
        optional(
          seq($.kw_and, $.graph_engine, $.equal_sign, $.graph_engine_type),
        ),
        $.semi_colon,
      ),
    alter_materialized_view: ($) =>
      seq(
        field("command_family", $.kw_alter),
        field("command_type_modifier", $.kw_materialized),
        field("command_type", $.kw_view),
        field("name", choice($.key_space_name, $.table_label)),
        optional(
          seq(
            $.kw_with,
            choice($.table_option_single, $.table_option_multi),
            repeat(
              seq(
                $.kw_and,
                choice($.table_option_single, $.table_option_multi),
              ),
            ),
          ),
        ),
        $.semi_colon,
      ),
    alter_role: ($) =>
      seq(
        field("command_family", $.kw_alter),
        field("command_type", $.kw_role),
        field("name", $.identifier),
        optional(seq($.kw_with, repeat($.alter_role_option_args))),
        $.semi_colon,
      ),
    alter_table: ($) =>
      prec.left(
        1,
        seq(
          field("command_family", $.kw_alter),
          field("command_type", $.kw_table),
          field("name", $.tablekweyspace_name),
          optional($.alter_table_options),
          $.semi_colon,
        ),
      ),
    alter_type: ($) =>
      prec.left(
        1,
        seq(
          field("command_family", $.kw_alter),
          field("command_type", $.kw_type),
          $.tablekweyspace_name,
          optional($.alter_type_options),
          $.semi_colon,
        ),
      ),
    alter_user: ($) =>
      seq(
        $.kw_alter,
        $.kw_user,
        $.identifier,
        optional(
          choice(
            seq($.kw_with, $.kw_password, $.string_literal),
            seq($.kw_with, $.kw_hashed, $.kw_password, $.string_literal),
          ),
        ),
        optional(choice($.kw_superuser, $.kw_nosuperuser)),
        $.semi_colon,
      ),
    batch: ($) =>
      prec.left(
        1,
        seq(
          $.kw_begin,
          optional(choice($.kw_unlogged, $.kw_logged, $.kw_counter)),
          $.kw_batch,
          optional(seq($.kw_using, $.kw_timestamp, optional($.number))),
          repeat(seq($.dml_statement)),
          $.kw_apply,
          $.kw_batch,
          optional($.usingconsistency_level),
          $.semi_colon,
        ),
      ),
    truncate: ($) =>
      seq(
        $.kw_truncate,
        optional($.kw_table),
        $.tablekweyspace_name,
        $.semi_colon,
      ),
    update: ($) =>
      seq(
        $.kw_update,
        $.tablekweyspace_name,
        optional(
          choice(
            seq(
              $.kw_using,
              $.kw_ttl,
              $.number,
              optional(seq($.kw_and, $.kw_timestamp, $.number)),
            ),
            seq(
              $.kw_using,
              $.kw_timestamp,
              $.number,
              optional(seq($.kw_and, $.kw_ttl, $.number)),
            ),
          ),
        ),
        $.kw_set,
        repeat(
          seq(
            choice($.literal, $.collection, $.indexed_name, $.key_space_name),
            $.assignment_operators,
            $.expression,
            optional($.comma_separated),
          ),
        ),
        $.kw_where,
        seq(
          choice(
            seq(
              choice($.literal, $.collection),
              $.assignment_operators,
              choice($.literal, $.collection),
            ),
            seq(
              choice($.literal, $.collection),
              $.kw_in,
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
            $.kw_and,
            choice(
              seq(
                choice($.literal, $.collection),
                $.assignment_operators,
                $.expression,
              ),
              seq(
                choice($.literal, $.collection),
                $.kw_in,
                "(",
                repeat(choice($.literal, $.collection)),
                ")",
              ),
            ),
          ),
        ),
        optional(
          choice(
            $.if_exists,
            seq(
              $.kw_if,
              choice($.literal, $.collection),
              $.if_conditions,
              choice($.literal, $.collection, $.iconditions_blocks),
              repeat(
                seq(
                  $.kw_and,
                  choice($.literal, $.collection),
                  $.if_conditions,
                  choice($.literal, $.collection, $.iconditions_blocks),
                ),
              ),
            ),
          ),
        ),
        optional($.usingconsistency_level),
        $.semi_colon,
      ),
    insert: ($) =>
      seq(
        $.kw_insert,
        optional("JSON"),
        $.kw_into,
        $.tablekweyspace_name,
        optional("("),
        repeat(seq($.identifier, optional($.comma_separated))),
        optional(")"),
        $.kw_values,
        "(",
        repeat(
          seq(choice($.literal, $.collection), optional($.comma_separated)),
        ),
        ")",
        optional($.if_not_exists),
        optional($.using_ttl_or_timestamp),
        optional($.usingconsistency_level),
        $.semi_colon,
      ),
    delete: ($) =>
      seq(
        $.kw_delete,
        repeat(
          seq(
            $.literal,
            optional($.comma_separated),
            optional($.batch_delete_terms),
          ),
        ),
        $.kw_from,
        $.tablekweyspace_name,
        optional(seq($.kw_using, $.kw_timestamp, $.number)),
        $.kw_where,
        choice($.literal, $.collection),
        $.if_conditions,
        choice($.literal, $.collection, $.iconditions_blocks),
        repeat(
          choice(
            seq(
              $.kw_and,
              $.literal,
              $.if_conditions,
              choice($.literal, $.iconditions_blocks),
            ),
          ),
        ),
        optional(
          choice(
            $.if_exists,
            seq(
              $.kw_if,
              choice($.literal, $.collection),
              $.if_conditions,
              choice($.literal, $.collection, $.iconditions_blocks),
              repeat(
                seq(
                  $.kw_and,
                  choice($.literal, $.collection),
                  $.if_conditions,
                  choice($.literal, $.collection, $.iconditions_blocks),
                ),
              ),
            ),
          ),
        ),
        optional($.usingconsistency_level),
        $.semi_colon,
      ),
    create_aggregate: ($) =>
      seq(
        $.kw_create,
        optional(seq($.kw_or, $.kw_replace)),
        $.kw_aggregate,
        optional($.if_not_exists),
        $.tablekweyspace_name,
        "(",
        $.cql_types_union,
        ")",
        $.kw_sfunc,
        $.identifier,
        $.kw_stype,
        $.cql_types_union,
        $.kw_final_func,
        $.identifier,
        $.kw_init_cond,
        optional("("),
        repeat(seq($.identifier, optional($.comma_separated))),
        optional(")"),
        $.semi_colon,
      ),
    create_index: ($) =>
      seq(
        $.kw_create,
        optional($.kw_custom),
        $.kw_index,
        optional($.if_not_exists),
        optional($.identifier),
        $.kw_on,
        $.tablekweyspace_name,
        optional("("),
        optional($.create_index_on_options),
        "(",
        $.identifier,
        ")",
        optional(")"),
        optional(
          seq(
            $.kw_using,
            $.index_type,
            optional(seq($.kw_with, $.kw_options, $.equal_sign, $.collection)),
          ),
        ),
        $.semi_colon,
      ),
    commit_search_index: ($) =>
      seq(
        $.kw_commit,
        $.kw_search,
        $.kw_index,
        $.kw_on,
        $.tablekweyspace_name,
        $.semi_colon,
      ),
    list_roles: ($) =>
      seq(
        $.kw_list,
        $.kw_roles,
        optional(seq($.kw_of, $.identifier)),
        optional($.kw_norecursive),
        $.semi_colon,
      ),
    list_users: ($) => seq($.kw_list, $.kw_users, $.semi_colon),
    revoke_role: ($) =>
      seq($.kw_revoke, $.identifier, $.kw_from, $.identifier, $.semi_colon),
    create_function: ($) =>
      seq(
        $.kw_create,
        optional(seq($.kw_or, $.kw_replace)),
        $.kw_function,
        optional($.if_not_exists),
        $.key_space_name,
        "(",
        repeat(
          seq($.identifier, $.cql_types_union, optional($.comma_separated)),
        ),
        ")",
        choice($.kw_called, seq($.kw_returns, $.kw_null)),
        $.kw_on,
        $.kw_null,
        $.kw_input,
        $.kw_returns,
        $.cql_types_union,
        optional($.kw_deterministic),
        optional(seq($.kw_monotonic, $.kw_on, $.identifier)),
        $.kw_language,
        choice($.kw_java, $.kw_java_script),
        $.kw_as,
        "$$",
        $.code_block,
        "$$",
        $.semi_colon,
      ),
    createkweyspace: ($) =>
      seq(
        $.kw_create,
        $.kw_keyspace,
        optional($.if_not_exists),
        $.identifier,
        $.kw_with,
        $.kw_replication,
        $.equal_sign,
        $.map,
        optional(
          seq($.kw_and, $.kw_durable_writes, $.equal_sign, $.bool_choice),
        ),
        optional(
          seq($.kw_and, $.graph_engine, $.equal_sign, $.graph_engine_type),
        ),
        $.semi_colon,
      ),
    create_materialized_view: ($) =>
      seq(
        $.kw_create,
        $.kw_materialized,
        $.kw_view,
        optional($.if_not_exists),
        $.tablekweyspace_name,
        $.kw_as,
        $.kw_select,
        optional(choice($.kw_json, $.kw_distinct)),
        repeat1($.selectors),
        $.kw_from,
        $.tablekweyspace_name,
        repeat($.mv_relation),
        $.kw_primary,
        $.kw_key,
        "(",
        repeat(seq($.identifier, optional($.comma_separated))),
        ")",
        optional(
          choice(
            seq($.kw_with, $.o_with_table_option),
            $.with_clustering_order_by,
          ),
        ),
        optional($.and_clustering_order_by),
        repeat(choice(seq($.kw_and, $.table_option))),
        $.semi_colon,
      ),

    create_role: ($) =>
      seq(
        $.kw_create,
        $.kw_role,
        optional($.if_not_exists),
        $.identifier,
        repeat($.o_create_role),
        $.semi_colon,
      ),
    create_search_index: ($) =>
      seq(
        $.kw_create,
        $.kw_search,
        $.kw_index,
        optional($.if_not_exists),
        $.kw_on,
        $.tablekweyspace_name,
        repeat($.o_create_search_index),
        $.semi_colon,
      ),
    create_type: ($) =>
      seq(
        $.kw_create,
        $.kw_type,
        optional($.if_not_exists),
        $.tablekweyspace_name,
        optional("("),
        repeat(
          seq($.identifier, $.cql_types_union, optional($.comma_separated)),
        ),
        optional(")"),
        $.semi_colon,
      ),
    create_user: ($) =>
      seq(
        $.kw_create,
        $.kw_user,
        $.create_user_if_not_exist_choice,
        optional(choice($.with_password, $.with_hashed_password)),
        optional(choice($.kw_superuser, $.kw_nosuperuser)),
        $.semi_colon,
      ),
    drop_aggregate: ($) =>
      seq(
        $.kw_drop,
        $.kw_aggregate,
        optional($.if_exists),
        repeat(seq($.tablekweyspace_name, optional($.comma_separated))),
        $.semi_colon,
      ),
    drop_function: ($) =>
      seq(
        $.kw_drop,
        $.kw_function,
        optional($.if_exists),
        repeat(seq($.tablekweyspace_name, optional($.comma_separated))),
        $.semi_colon,
      ),
    drop_index: ($) =>
      seq(
        $.kw_drop,
        $.kw_index,
        optional($.if_exists),
        $.tablekweyspace_name,
        $.semi_colon,
      ),
    dropkweyspace: ($) =>
      seq(
        $.kw_drop,
        $.kw_keyspace,
        optional($.if_exists),
        $.tablekweyspace_name,
        $.semi_colon,
      ),
    drop_materialized_view: ($) =>
      seq(
        $.kw_drop,
        $.kw_materialized,
        $.kw_view,
        optional($.if_exists),
        $.tablekweyspace_name,
        $.semi_colon,
      ),
    drop_role: ($) =>
      seq(
        $.kw_drop,
        $.kw_role,
        optional($.if_exists),
        $.identifier,
        $.semi_colon,
      ),
    drop_search_index: ($) =>
      seq(
        $.kw_drop,
        $.kw_search,
        $.kw_index,
        $.kw_on,
        $.tablekweyspace_name,
        optional(
          seq(
            $.kw_with,
            $.kw_options,
            repeat(seq($.collection, optional($.comma_separated))),
          ),
        ),
        $.semi_colon,
      ),
    drop_table: ($) =>
      seq(
        $.kw_drop,
        $.kw_table,
        optional($.if_exists),
        $.tablekweyspace_name,
        $.semi_colon,
      ),
    drop_type: ($) =>
      seq(
        $.kw_drop,
        $.kw_type,
        optional($.if_exists),
        $.tablekweyspace_name,
        $.semi_colon,
      ),
    drop_user: ($) =>
      seq(
        $.kw_drop,
        $.kw_user,
        optional($.if_exists),
        $.identifier,
        $.semi_colon,
      ),
    drop: ($) => seq($.kw_drop, $.identifier, $.semi_colon),
    grant_role: ($) =>
      seq($.kw_grant, $.identifier, $.kw_to, $.identifier, $.semi_colon),
    grant_permission: ($) =>
      seq(
        $.kw_grant,
        $.priviliges,
        $.kw_on,
        $.resources,
        $.kw_to,
        $.identifier,
        $.semi_colon,
      ),
    list_permissions: ($) =>
      seq(
        $.kw_list,
        $.priviliges,
        optional(seq($.kw_on, $.tablekweyspace_name)),
        optional(seq($.kw_of, $.tablekweyspace_name)),
        optional($.kw_norecursive),
        $.semi_colon,
      ),
    revoke_permission: ($) =>
      seq(
        $.kw_revoke,
        $.priviliges,
        $.kw_on,
        $.resources,
        choice($.kw_to, $.kw_from),
        $.identifier,
        $.semi_colon,
      ),
    create_table: ($) =>
      seq(
        $.kw_create,
        $.kw_table,
        optional($.if_not_exists),
        $.tablekweyspace_name,
        "(",
        optional(repeat($.column_definition)),
        optional(choice($.pk_main, $.kw_static)),
        ")",
        repeat($.create_tableand_options),
        $.semi_colon,
      ),
    select: ($) =>
      seq(
        $.kw_select,
        optional(choice($.kw_json, $.kw_distinct)),
        repeat1($.selectors),
        $.kw_from,
        $.tablekweyspace_name,
        repeat($.conditionsselect),
        optional($.usingconsistency_level),
        $.semi_colon,
      ),

    // --END_COMMANDS--

    // Create USER shenanigans

    create_user_if_not_exist_choice: ($) =>
      choice(
        seq(optional($.if_not_exists), $.identifier),
        seq($.identifier, optional($.if_not_exists)),
      ),

    // Select Conditions

    conditionsselect: ($) =>
      choice(
        seq($.kw_where, $.selector_conditions, $.if_conditions, $.expression),
        seq($.kw_and, $.selector_conditions, $.if_conditions, $.expression),
        seq($.kw_where, $.selector_conditions, $.kw_like, $.expression),
        seq($.kw_and, $.selector_conditions, $.kw_like, $.expression),
        seq($.kw_where, $.selector_conditions, $.kw_in, $.iconditions_blocks),
        seq($.kw_and, $.selector_conditions, $.kw_in, $.iconditions_blocks),
        seq($.kw_allow, $.kw_filtering),
        seq($.kw_per, $.kw_partition, $.kw_limit, $.number),
        seq(
          $.kw_group,
          $.kw_by,
          seq(
            repeat(
              seq($.tablekweyspace_name, optional(choice($.kw_asc, $.kw_desc))),
            ),
          ),
          optional(
            seq($.kw_having, $.expression, $.if_conditions, $.expression),
          ),
        ),
        seq(
          $.kw_order,
          $.kw_by,
          seq(
            repeat(
              seq($.tablekweyspace_name, optional(choice($.kw_asc, $.kw_desc))),
            ),
          ),
        ),
        seq(
          $.kw_order,
          $.kw_by,
          seq(
            repeat(
              seq(
                $.tablekweyspace_name,
                $.kw_ann,
                $.kw_of,
                "[",
                repeat(seq($.number, optional($.comma_separated))),
                "]",
                optional(seq($.kw_limit, $.number)),
                optional(
                  choice(
                    seq(
                      $.kw_limit,
                      $.number,
                      optional(seq($.kw_offset, $.number)),
                    ),
                    seq($.kw_per, $.kw_partition, $.kw_limit, $.number),
                  ),
                ),
              ),
            ),
          ),
        ),
      ),

    // Table AND options

    o_with_compact_storage: ($) => seq($.kw_with, $.kw_compact, $.kw_storage),
    o_and_compact_storage: ($) => seq($.kw_and, $.kw_compact, $.kw_storage),

    o_compact_storage: ($) =>
      choice($.o_with_compact_storage, $.o_and_compact_storage),

    o_with_id: ($) => seq($.kw_with, $.kw_id, $.equal_sign, $.string),
    o_and_id: ($) => seq($.kw_and, $.kw_id, $.equal_sign, $.string),
    o_id: ($) => choice($.o_with_id, $.o_and_id),

    create_tableand_options: ($) =>
      choice($.table_option, $.o_clustering_order, $.o_compact_storage, $.o_id),

    // Table Column definition

    pk_main: ($) =>
      prec.right(
        1,
        seq(optional($.comma_separated), $.kw_primary, $.kw_key, $.pk_options),
      ),

    column_definition: ($) =>
      prec.right(
        2,
        seq(
          $.identifier,
          $.cql_types_union,
          optional(seq($.kw_primary, $.kw_key)),
          optional($.comma_separated),
        ),
      ),

    pk_partion_only: ($) => seq("(", $.identifier, ")"),
    pk_partion_explicit: ($) =>
      prec.left(2, seq("(", "(", $.identifier, ")", ")")),
    pk_partion_and_clustering_single: ($) =>
      seq("(", $.identifier, $.comma_separated, $.identifier, ")"),
    pk_partion_and_clustering: ($) =>
      seq("(", "(", $.identifier, ")", $.comma_separated, $.identifier, ")"),
    pk_partion_mult_and_clustering: ($) =>
      seq(
        "(",
        "(",
        repeat(seq($.identifier, optional($.comma_separated))),
        ")",
        $.comma_separated,
        $.identifier,
        ")",
      ),
    pk_partion_and_clustering_mult: ($) =>
      seq(
        "(",
        $.identifier,
        $.comma_separated,
        "(",
        repeat(seq($.identifier, optional($.comma_separated))),
        ")",
        ")",
      ),
    pk_partion_mult_and_clustering_mult: ($) =>
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
    pk_options: ($) =>
      choice(
        $.pk_partion_only,
        $.pk_partion_explicit,
        $.pk_partion_and_clustering,
        $.pk_partion_and_clustering_single,
        $.pk_partion_mult_and_clustering,
        $.pk_partion_and_clustering_mult,
        $.pk_partion_mult_and_clustering_mult,
      ),

    // Resource types | Premissions

    resources: ($) =>
      choice(
        $.tablekweyspace_name,
        seq($.kw_all, $.kw_keyspaces),
        seq($.kw_keyspace, $.tablekweyspace_name),
        seq($.kw_table, $.tablekweyspace_name),
        seq($.collection, $.kw_rows, $.kw_in, $.tablekweyspace_name),
        seq($.kw_all, $.kw_functions),
        seq(
          $.kw_all,
          $.kw_functions,
          $.kw_in,
          $.kw_keyspace,
          $.tablekweyspace_name,
        ),
        seq(
          $.kw_function,
          $.tablekweyspace_name,
          optional("("),
          repeat(seq($.cql_types_union, optional($.comma_separated))),
          optional(")"),
        ),
        seq($.kw_all, $.kw_mbeans),
        seq($.kw_mbean, $.tablekweyspace_name),
        seq($.kw_mbeans, $.kw_pattern),
        seq($.kw_all, $.kw_roles),
        seq($.kw_role, $.tablekweyspace_name),
      ),
    priviliges: ($) =>
      choice(
        seq($.kw_all, $.kw_permissions),
        $.kw_alter,
        $.kw_create,
        $.kw_drop,
        $.kw_modify,
        $.kw_select,
        $.kw_execute,
        $.kw_describe,
        $.tablekweyspace_name,
        $.kw_authorize,
        seq($.kw_proxy, ".", $.kw_execute),
        seq($.kw_proxy, ".", $.kw_login),
      ),

    // Options
    o_with_columns: ($) =>
      seq(
        $.kw_with,
        $.kw_columns,
        repeat(
          seq(
            $.tablekweyspace_name,
            optional($.collection),
            optional($.comma_separated),
          ),
        ),
      ),
    o_and_columns: ($) =>
      seq(
        $.kw_and,
        $.kw_columns,
        repeat(
          seq(
            $.tablekweyspace_name,
            optional($.collection),
            optional($.comma_separated),
          ),
        ),
      ),
    o_with_profiles: ($) =>
      seq(
        $.kw_with,
        $.kw_profiles,
        repeat(seq($.tablekweyspace_name, optional($.comma_separated))),
      ),
    o_and_profiles: ($) =>
      seq(
        $.kw_and,
        $.kw_profiles,
        repeat(seq($.tablekweyspace_name, optional($.comma_separated))),
      ),
    o_with_config: ($) =>
      seq(
        $.kw_with,
        $.kw_config,
        repeat(seq($.collection, optional($.comma_separated))),
      ),
    o_and_config: ($) =>
      seq(
        $.kw_and,
        $.kw_config,
        repeat(seq($.collection, optional($.comma_separated))),
      ),
    owith_options: ($) =>
      seq(
        $.kw_with,
        $.kw_options,
        repeat(seq($.collection, optional($.comma_separated))),
      ),
    oand_options: ($) =>
      seq(
        $.kw_and,
        $.kw_options,
        repeat(seq($.collection, optional($.comma_separated))),
      ),
    o_create_search_index: ($) =>
      choice(
        $.o_with_columns,
        $.o_and_columns,
        $.o_with_profiles,
        $.o_and_profiles,
        $.o_with_config,
        $.o_and_config,
        $.owith_options,
        $.oand_options,
      ),
    o_clustering_order: ($) =>
      choice($.with_clustering_order_by, $.and_clustering_order_by),
    with_clustering_order_by: ($) =>
      seq(
        $.kw_with,
        $.kw_clustering,
        $.kw_order,
        $.kw_by,
        optional("("),
        $.identifier,
        choice($.kw_desc, $.kw_asc),
        optional(")"),
      ),

    and_clustering_order_by: ($) =>
      seq(
        $.kw_and,
        $.kw_clustering,
        $.kw_order,
        $.kw_by,
        optional("("),
        $.identifier,
        choice($.kw_desc, $.kw_asc),
        optional(")"),
      ),

    with_password: ($) =>
      seq($.kw_with, $.kw_password, optional($.equal_sign), $.string),
    with_hashed_password: ($) =>
      seq(
        $.kw_with,
        $.kw_hashed,
        $.kw_password,
        optional($.equal_sign),
        $.string,
      ),
    and_password: ($) =>
      seq($.kw_and, $.kw_password, optional($.equal_sign), $.string),
    and_hashed_password: ($) =>
      seq(
        $.kw_and,
        $.kw_hashed,
        $.kw_password,
        optional($.equal_sign),
        $.string,
      ),
    with_superuser: ($) =>
      seq($.kw_with, $.kw_superuser, $.equal_sign, $.bool_choice),
    and_superuser: ($) =>
      seq($.kw_and, $.kw_superuser, $.equal_sign, $.bool_choice),
    with_login: ($) => seq($.kw_with, $.kw_login, $.equal_sign, $.bool_choice),
    and_login: ($) => seq($.kw_and, $.kw_login, $.equal_sign, $.bool_choice),
    with_access_to_dc: ($) =>
      seq($.kw_with, $.kw_access, $.kw_to, $.kw_dcs, $.collection),
    with_access_all_dc: ($) =>
      seq($.kw_with, $.kw_access, $.kw_to, $.kw_all, $.kw_dcs),
    and_access_to_dc: ($) =>
      seq($.kw_and, $.kw_access, $.kw_to, $.kw_dcs, $.collection),
    and_access_all_dc: ($) =>
      seq($.kw_and, $.kw_access, $.kw_to, $.kw_all, $.kw_dcs),
    with_access_from_cidrs: ($) =>
      seq($.kw_with, $.kw_access, $.kw_from, $.kw_cidrs, $.collection),
    with_access_from_all_cidrs: ($) =>
      seq($.kw_with, $.kw_access, $.kw_from, $.kw_all, $.kw_cidrs),
    and_access_from_cidrs: ($) =>
      seq($.kw_and, $.kw_access, $.kw_from, $.kw_cidrs, $.collection),
    and_access_from_all_cidrs: ($) =>
      seq($.kw_and, $.kw_access, $.kw_from, $.kw_all, $.kw_cidrs),
    with_options: ($) =>
      seq($.kw_with, $.kw_options, $.equal_sign, $.collection),
    and_options: ($) => seq($.kw_and, $.kw_options, $.equal_sign, $.collection),

    o_create_role: ($) =>
      choice(
        $.with_password,
        $.and_password,
        $.with_hashed_password,
        $.and_hashed_password,
        $.with_superuser,
        $.and_superuser,
        $.with_login,
        $.and_login,
        $.with_access_to_dc,
        $.and_access_to_dc,
        $.with_access_all_dc,
        $.and_access_all_dc,
        $.with_access_from_cidrs,
        $.and_access_from_cidrs,
        $.with_access_from_all_cidrs,
        $.and_access_from_all_cidrs,
        $.with_options,
        $.and_options,
      ),
    mv_relation: ($) =>
      choice(
        seq($.kw_where, $.identifier, $.kw_is, $.kw_not, $.kw_null),
        seq($.kw_and, $.identifier, $.kw_is, $.kw_not, $.kw_null),
        seq($.kw_and, $.identifier, $.if_conditions, $.expression),
      ),
    assignment_operators: ($) => choice($.equal_sign, "+=", "-=", "*=", "/="),
    create_index_on_options: ($) =>
      choice($.kw_keys, $.kw_values, $.kw_entries, $.kw_full),
    index_type: ($) => choice("'SAI'", "'sai'", "'SASI'", "'sasi'"),

    cql_commands: ($) =>
      choice(
        field("alter_role", $.alter_role),
        field("alter_table", $.alter_table),
        field("alter_type", $.alter_type),
        field("alter_user", $.alter_user),
        field("alter_materialized_view", $.alter_materialized_view),
        field("alterkweyspace", $.alter_keyspace),

        field("batch", $.batch),
        field("commit_search_index", $.commit_search_index),

        field("create_aggregate", $.create_aggregate),
        field("create_function", $.create_function),
        field("create_index", $.create_index),
        field("createkweyspace", $.createkweyspace),
        field("create_materialized_view", $.create_materialized_view),
        field("create_role", $.create_role),
        field("create_search_index", $.create_search_index), // fixed typo
        field("create_table", $.create_table),
        field("create_type", $.create_type),
        field("create_user", $.create_user),

        field("delete", $.delete),

        field("drop_aggregate", $.drop_aggregate),
        field("drop_function", $.drop_function),
        field("drop_index", $.drop_index),
        field("dropkweyspace", $.dropkweyspace),
        field("drop_materialized_view", $.drop_materialized_view),
        field("drop_role", $.drop_role),
        field("drop_search_index", $.drop_search_index),
        field("drop_table", $.drop_table),
        field("drop_type", $.drop_type),
        field("drop_user", $.drop_user),
        field("drop", $.drop),

        field("grant_role", $.grant_role),
        field("grant_permission", $.grant_permission), // fixed spelling

        field("insert", $.insert),

        field("list_permissions", $.list_permissions), // fixed spelling
        field("list_roles", $.list_roles),
        field("list_users", $.list_users),

        field("revoke_role", $.revoke_role),
        field("revoke_permission", $.revoke_permission), // fixed spelling

        field("select", $.select),
        field("truncate", $.truncate),
        field("update", $.update),
        field("use", $.use),

        field("consistency_level", $.consistency_level),
      ),

    using_ttl_or_timestamp: ($) =>
      choice(
        seq(
          $.kw_using,
          $.kw_ttl,
          $.identifier,
          optional(seq($.kw_and, $.kw_timestamp, $.identifier)),
        ),
        seq(
          $.kw_using,
          $.kw_timestamp,
          $.identifier,
          optional(seq($.kw_and, $.kw_ttl, $.identifier)),
        ),
      ),

    if_not_exists: ($) => seq($.kw_if, $.kw_not, $.kw_exists),
    if_exists: ($) => seq($.kw_if, $.kw_exists),

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
        choice($.kw_vertex, $.kw_edge),
        $.kw_label,
        $.string,
        optional(
          seq(
            $.kw_from,
            $.identifier,
            "(",
            repeat(seq($.identifier, optional($.comma_separated))),
            ")",
            $.kw_to,
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

    dml_insert: ($) => prec.left(2, $.insert),
    dml_update: ($) => prec.left(2, $.update),
    dml_delete: ($) => prec.left(2, $.delete),

    dml_statement: ($) => choice($.dml_insert, $.dml_update, $.dml_delete),

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
            seq(
              $.expression,
              choice($.operator_multiplication, "/", "%"),
              $.primary_expression,
            ),
          ),
        ),
      ),

    primary_expression: ($) =>
      choice(
        $.literal,
        $.identifier,
        $.collection,
        $.construct_types,
        $.func_definition,
        seq("(", $.expression, ")"),
      ),

    uuid_construct: ($) => seq($.type_uuid, "(", optional($.uuid), ")"),

    construct_types: ($) =>
      choice(
        $.cql_types_constructor_list,
        $.cql_types_constructor_tuple,
        $.cql_types_constructor_map,
        $.uuid_construct,
      ),

    operator_multiplication: ($) => "*",

    if_conditions: ($) =>
      choice(
        $.equal_sign,
        ">",
        "<",
        ">=",
        "<=",
        "!=",
        $.kw_in,
        $.kw_contains,
        seq($.kw_contains, $.kw_key),
        seq($.kw_contains, $.kw_any),
      ),

    alter_role_option_args: ($) =>
      choice(
        seq($.kw_password, $.equal_sign, $.string_literal),
        seq($.kw_login, $.equal_sign, $.bool_choice),
        seq($.kw_superuser, $.equal_sign, $.bool_choice),
        seq($.kw_options, $.equal_sign, $.string_literal),
      ),

    o_alter_type: ($) =>
      prec.left(2, seq($.kw_alter, $.identifier, $.kw_type, $.cql_types_union)),
    o_add: ($) =>
      seq(
        $.kw_add,
        repeat(
          seq($.identifier, $.cql_types_union, optional($.comma_separated)),
        ),
      ),
    o_drop: ($) =>
      seq(
        $.kw_drop,
        choice(
          repeat(seq($.identifier, optional($.comma_separated))),
          seq($.kw_compact, $.kw_storage),
        ),
      ),
    o_rename: ($) =>
      choice(
        seq($.kw_rename, $.identifier, $.kw_to, $.identifier),
        seq(
          $.kw_rename,
          choice($.kw_vertex, $.kw_edge),
          $.kw_label,
          $.kw_to,
          $.string,
        ),
      ),

    o_with_table_option: ($) => $.table_option,
    o_and_table_option: ($) => seq($.kw_and, $.table_option),

    o_with: ($) =>
      seq($.kw_with, $.o_with_table_option, repeat($.o_and_table_option)),

    o_without: ($) => seq("WITHOUT", $.table_option_label),

    alter_table_options: ($) =>
      choice(
        $.o_alter_type,
        $.o_add,
        $.o_drop,
        $.o_rename,
        $.o_with,
        $.o_without,
      ),

    alter_type_options: ($) =>
      choice(
        prec.left(
          2,
          seq($.kw_alter, $.identifier, $.kw_type, $.cql_types_union),
        ),
        seq(
          $.kw_add,
          repeat(
            seq($.identifier, $.cql_types_union, optional($.comma_separated)),
          ),
        ),
        seq(
          $.kw_rename,
          $.identifier,
          $.kw_to,
          $.identifier,
          repeat(seq($.kw_and, $.identifier, $.kw_to, $.identifier)),
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
          $.float,
          $.string_literal,
          $.uuid,
          $.timeuuid,
          $.list_identifier,
          $.map_identifier,
        ),
      ),

    tablekweyspace_name: ($) =>
      choice($.key_space_name, $.table_label, $.identifier, $.wild_card),

    string: ($) => choice($.string_literal, $.quoted_identifier),

    list_identifier: ($) => /[a-zA-Z0-9\[\]]/,

    map_identifier: ($) => /[\\'a-zA-Z0-9]/,

    collection: ($) => choice($.set, $.list, $.map),

    blob: ($) => /0[xX][0-9a-fA-F]+/,

    bool_choice: ($) => choice("true", "false", "TRUE", "FALSE"),

    numeric_constant: ($) =>
      choice($.integer, $.float, $.kw_nan, $.kw_infinity),

    integer: ($) => /-?\d+/,

    float: ($) => /-?\d+\.\d+([eE][+-]?\d+)?/,

    identifier: ($) => /[a-zA-Z0-9][a-zA-Z0-9_]*/,

    quoted_identifier: ($) => /"(?:[^"\\]|\\.)*"/,

    // table."label" /[a-zA-Z0-9_]+\.\"(?:[^"\\]|\\.)*\"/

    table_label_part: ($) => /\"(?:[^"\\]|\\.)*\"/,

    table_label: ($) => seq($.identifier, ".", $.table_label_part),

    // keysapce.table /[a-zA-Z0-9_]+\.[a-zA-Z0-9_]+/,
    key_space_name: ($) => seq($.identifier, ".", $.identifier),

    // name[N]
    indexed_name: ($) => /[a-zA-Z_][a-zA-Z0-9_]*\[\d+\]/,

    comma_separated: ($) => ",",

    semi_colon: ($) => ";",

    equal_sign: ($) => "=",

    wild_card: ($) => "*",

    selectors_type_extensions: ($) => $.cql_types_constructor_void,

    selectors: ($) =>
      choice(
        field("selector_normal", seq($.literal, optional($.comma_separated))),
        field(
          "selector_normal_as_modified",
          seq($.literal, seq($.kw_as, $.literal), optional($.comma_separated)),
        ),
        field("selector_wildcard", $.wild_card),
        field(
          "selector_func",
          seq($.func_definition, optional($.comma_separated)),
        ),
        field(
          "selector_func_as_modified",
          seq(
            $.func_definition,
            seq($.kw_as, $.literal),
            optional($.comma_separated),
          ),
        ),
        field(
          "selector_type_extensions",
          seq($.selectors_type_extensions, optional($.comma_separated)),
        ),
      ),

    func_definition: ($) =>
      seq(
        field(
          "function_name",
          choice(
            $.identifier,
            $.kw_count,
            $.kw_max,
            $.kw_min,
            $.kw_sum,
            $.kw_avg,
            $.kw_writetime,
            $.kw_token,
          ),
        ),
        "(",
        optional(
          seq(
            field(
              "argument",
              choice(
                $.literal,
                $.cql_types_union,
                $.wild_card,
                seq($.literal, $.kw_as, choice($.identifier, $.cql_types)),
              ),
            ),
            repeat(
              seq(
                ",",
                field(
                  "argument",
                  choice(
                    $.literal,
                    $.cql_types_union,
                    $.wild_card,

                    seq($.literal, $.kw_as, choice($.identifier, $.cql_types)),
                  ),
                ),
              ),
            ),
          ),
        ),
        ")",
      ),
    selector_conditions: ($) =>
      choice($.tablekweyspace_name, $.func_definition),

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
