# Cassandra Query Language (CQL) Command Reference

## Table of Contents

- [Keyspace Operations](#keyspace-operations)
  - [ALTER KEYSPACE](#alter-keyspace)
  - [CREATE KEYSPACE](#create-keyspace)
  - [DROP KEYSPACE](#drop-keyspace)
  - [USE](#use)

- [Table Operations](#table-operations)
  - [ALTER TABLE](#alter-table)
  - [CREATE TABLE](#create-table)
  - [DROP TABLE](#drop-table)
  - [TRUNCATE](#truncate)

- [Materialized View Operations](#materialized-view-operations)
  - [ALTER MATERIALIZED VIEW](#alter-materialized-view)
  - [CREATE MATERIALIZED VIEW](#create-materialized-view)
  - [DROP MATERIALIZED VIEW](#drop-materialized-view)

- [Index Operations](#index-operations)
  - [CREATE INDEX](#create-index)
  - [DROP INDEX](#drop-index)
  - [CREATE SEARCH INDEX](#create-search-index)
  - [DROP SEARCH INDEX](#drop-search-index)
  - [COMMIT SEARCH INDEX](#commit-search-index)

- [Type Operations](#type-operations)
  - [ALTER TYPE](#alter-type)
  - [CREATE TYPE](#create-type)
  - [DROP TYPE](#drop-type)

- [Function & Aggregate Operations](#function--aggregate-operations)
  - [CREATE FUNCTION](#create-function)
  - [DROP FUNCTION](#drop-function)
  - [CREATE AGGREGATE](#create-aggregate)
  - [DROP AGGREGATE](#drop-aggregate)

- [Data Manipulation](#data-manipulation)
  - [INSERT](#insert)
  - [UPDATE](#update)
  - [DELETE](#delete)
  - [SELECT](#select)
  - [BATCH](#batch)

- [Role & Permission Management](#role--permission-management)
  - [ALTER ROLE](#alter-role)
  - [CREATE ROLE](#create-role)
  - [DROP ROLE](#drop-role)
  - [GRANT ROLE](#grant-role)
  - [REVOKE ROLE](#revoke-role)
  - [GRANT PERMISSION](#grant-permission)
  - [REVOKE PERMISSION](#revoke-permission)
  - [LIST PERMISSIONS](#list-permissions)
  - [LIST ROLES](#list-roles)

- [User Management](#user-management)
  - [ALTER USER](#alter-user)
  - [CREATE USER](#create-user)
  - [DROP USER](#drop-user)
  - [LIST USERS](#list-users)


## ALTER KEYSPACE

```cql
ALTER KEYSPACE <keyspace_name>
  WITH REPLICATION = { <replication_map> }
  [ AND DURABLE_WRITES = ( true | false ) ]
  [ AND graph_engine =  'Core' ];
```

## ALTER MATERIALIZED VIEW

```cql
ALTER MATERIALIZED VIEW [<keyspace_name>.]<view_name>
  WITH <table_options> [ AND <table_options> ... ] ;
```

## ALTER ROLE

```cql
ALTER ROLE <role_name>
  ( WITH PASSWORD = '<role_password>'
  ifdef::dse69,dse68,cass50[]
  | WITH HASHED PASSWORD = '<hashed_role_password>'
  endif::dse69,dse68,cass50[]
  [ [ WITH | AND ] LOGIN = ( true | false ) ]
  [ [ WITH | AND ] SUPERUSER = ( true | false ) ]
    ifdef::cass50[]
  [ ( WITH | AND ) ACCESS TO DATACENTERS { 'dc_name' } | ( WITH | AND ) ACCESS TO ALL DATACENTERS
  | ( WITH | AND ) ACCESS FROM CIDRS { 'region1' } | ( WITH | AND ) ACCESS FROM ALL CIDRS']
  endif::cass50[]
  [ [ WITH | AND ] OPTIONS = { <custom_options_map> } ] ] ;
```

## ALTER TABLE

```cql
ALTER TABLE [<keyspace_name>.]<table_name>
  [ ADD ( <column_definition> | <column_definition_list> ) [ , ... ] ]
  [ DROP <column_name> [ , ... ] ]
  [ [ RENAME <column_name> TO <column_name> ] |
    [ RENAME ( VERTEX LABEL | EDGE LABEL ) TO <new_name> ] ]
  [ WITH <table_properties> [ , ... ] ]
  [ WITH ( VERTEX LABEL | EDGE LABEL ) <current_name> ]
  [ WITHOUT ( VERTEX LABEL | EDGE LABEL ) <current_name> ];
```

## ALTER TYPE

```cql
ALTER TYPE <field_name>
  ( ADD <field_name> <cql_datatype>
  | RENAME <field_name> TO <<<new_field_name> [ AND <field_name> TO <new_field_name> ...] ) ;
```

## ALTER USER

```cql
ALTER USER <user_name>
  ( WITH PASSWORD '<user_password>' |
  WITH HASHED PASSWORD '<hashed_user_password>' )
  [ ( SUPERUSER | NOSUPERUSER ) ] ;
```

## BATCH

```cql
BEGIN [ ( UNLOGGED | LOGGED ) ] BATCH
  [ USING TIMESTAMP [ <epoch_microseconds> ] ]
  <dml_statement> [ USING TIMESTAMP [ <epoch_microseconds> ] ] ;
  [ <dml_statement> [ USING TIMESTAMP [ <epoch_microseconds> ] ] [ ; ... ] ] ;
  APPLY BATCH ;
```

## COMMIT SEARCH INDEX

```cql
COMMIT SEARCH INDEX ON [<keyspace_name>.]<table_name> ;
```


## CREATE AGGREGATE

```cql
CREATE [ OR REPLACE ] AGGREGATE [ IF NOT EXISTS ]
  [<keyspace_name>.]<aggregate_name> (<cql_type>)
  SFUNC <udf_name>
  STYPE <cql_type>
  FINALFUNC <udf_name>
  INITCOND <init_value>
  [ DETERMINISTIC ] ;
```


## CREATE FUNCTION

```cql
CREATE [ OR REPLACE ] FUNCTION [ IF NOT EXISTS ] [<keyspace_name>]<function_name> (<argument_list> [ , ... ])
  ( CALLED | RETURNS NULL ) ON NULL INPUT RETURNS <type>
  [ DETERMINISTIC ]
  [ MONOTONIC [ ON <argument_name> ] ]
  LANGUAGE ( java | javascript ) AS $$ <code_block> $$ ;
```

## CREATE INDEX

```cql
CREATE [CUSTOM] INDEX [ IF NOT EXISTS ] [ <index_name> ]
  ON [<keyspace_name>.]<table_name>
  ([ KEYS | VALUES | ENTRIES | FULL] <column_name>)
    USING <index_type>
  [ WITH OPTIONS = { <option_map> } ] ;
```

## CREATE KEYSPACE

```cql
CREATE KEYSPACE [ IF NOT EXISTS ] <keyspace_name>
  WITH REPLICATION = { <replication_map> }
  [ AND DURABLE_WRITES = ( true | false ) ]
  [ AND graph_engine = 'Core' ] ;
```

## CREATE MATERIALIZED VIEW

```cql
CREATE MATERIALIZED VIEW [ IF NOT EXISTS ] [<keyspace_name>.]<view_name>
  AS SELECT [ (<column_list>) ]
  FROM [<keyspace_name>.]<table_name>
  [ WHERE <column_name> IS NOT NULL
  [ AND <column_name> IS NOT NULL ... ] ]
  [ AND <relation> [ AND ... ] ]
  PRIMARY KEY ( <column_list> )
  [ WITH [ table_properties ]
  [ [ AND ] CLUSTERING ORDER BY (<cluster_column_name> DESC | ASC) ] ] ;
```


## CREATE ROLE

```cql
CREATE ROLE [ IF NOT EXISTS ] <role_name>
  ( WITH PASSWORD = '<role_password>'
  ifdef::dse69,dse68,cass50[]
  | WITH HASHED PASSWORD = '<hashed_role_password>'
  endif::dse69,dse68,cass50[]
  )
  [ ( WITH | AND ) [ SUPERUSER = ( true | false ) ]
  [ ( WITH | AND ) LOGIN = ( true | false ) ]
  ifdef::cass50[]
  [ ( WITH | AND ) ACCESS TO DATACENTERS { 'dc_name' } | ( WITH | AND ) ACCESS TO ALL DATACENTERS
  | ( WITH | AND ) ACCESS FROM CIDRS { 'region1' } | ( WITH | AND ) ACCESS FROM ALL CIDRS']
  endif::cass50[]
  [ [ WITH | AND ] OPTIONS = { <custom_options_map> } ] ] ;
```

## CREATE SEARCH INDEX

```cql
CREATE SEARCH INDEX [ IF NOT EXISTS ] ON [<keyspace_name>.]<table_name>
  [ WITH [ COLUMNS <column_list> { <option> : <value> } [ , ... ] ]
  [ [ AND ] PROFILES <profile_name> [ , ... ] ]
  [ [ AND ] CONFIG { <option:value> } [ , ... ] ]
  [ [ AND ] OPTIONS { <option:value> } [ , ... ] ] ] ;
```

## CREATE TABLE

```cql
CREATE TABLE [ IF NOT EXISTS ] [<keyspace_name>.]<table_name>
  ( <column_definition> [ , ... ] | [ PRIMARY KEY (partition_key_column_name, clustering_column_name) ] )
  [ WITH COMPACT STORAGE ]
  [ AND <table_options> ]
  [ CLUSTERING ORDER BY [ <clustering_column_name> [ ASC | DESC ] ][ , ... ] ]
  ifdef::dse68[]
  [ AND ( VERTEX LABEL <vl_name> | EDGE LABEL ) <el_name> FROM <vl_name> TO <vl_name>]
  endif::dse68[]
  [ [ AND ] ID = '<table_hash_tag>' ] ] ;
```

## CREATE TYPE

```cql
CREATE TYPE [ IF NOT EXISTS ] [<keyspace_name>].<type_name>
  (<field_name> <cql_datatype> [ , <field_name> <cql_datatype> ... ]) ;
```

## CREATE USER

```cql
CREATE USER [ IF NOT EXISTS ] <user_name>
  ( WITH PASSWORD '<user_password>' |
  WITH HASHED PASSWORD '<hashed_user_password>' )
  [ ( SUPERUSER | NOSUPERUSER ) ] ;
```

## DELETE

```cql
DELETE [ <column_name> [ <term> ] [ , ... ] ]
  FROM [<keyspace_name>.]<table_name>
  [ USING TIMESTAMP <timestamp_value> ]
  WHERE <PK_column_conditions>
  [ ( IF EXISTS | IF <static_column_conditions> ) ] ;
```

## DROP AGGREGATE

```cql
DROP AGGREGATE [ IF EXISTS ] [<keyspace_name>.]<aggregate_name> [ (<argument_name> [ , ... ]) ] ;
```

## DROP FUNCTION

```cql
DROP FUNCTION [ IF EXISTS ] [<keyspace_name>.]<function_name> [ (<argument_name> [ , ... ]) ] ;
```

## DROP INDEX

```cql
DROP INDEX [ IF EXISTS ] [<keyspace_name>.]<index_name> ;
```

## DROP KEYSPACE

```cql
DROP KEYSPACE [ IF EXISTS ] <keyspace_name> ;
```

## DROP MATERIALIZED VIEW

```cql
DROP MATERIALIZED VIEW [ IF EXISTS ] [<keyspace_name>.]<view_name> ;
```

## DROP ROLE

```cql
DROP ROLE [ IF EXISTS ] <role_name> ;
```

## DROP SEARCH INDEX

```cql
DROP SEARCH INDEX ON [<keyspace_name>.]<table_name>
  OPTIONS { <option> : <value> } [ , { <option> : <value> } ... ] ;
```

## DROP TABLE

```cql
DROP TABLE [ IF EXISTS ] [<keyspace_name>.]<table_name> ;
```

## DROP TYPE

```cql
DROP TYPE [ IF EXISTS ] [<keyspace_name>.]<type_name> ;
```

## DROP USER

```cql
DROP USER [ IF EXISTS ] user_name ;
```

## GRANT ROLE

```cql
GRANT <role_name> TO <role_name> ;
```

## GRANT PERMISSION

```cql
GRANT <permission> ON <resource> TO <role_name> ;
```

## INSERT

```cql
INSERT [ JSON ] INTO [<keyspace_name>.]<table_name>
  [ <column_list> VALUES <column_values> ]
  [ IF NOT EXISTS ]
  [ USING [ TTL <seconds> ] [ [ AND ] TIMESTAMP <epoch_in_microseconds> ] ] ;
```

## LIST

```cql
LIST ( ALL PERMISSIONS | <permission_list> )[ ON <resource_name> ]
  [ OF <role_name> ][ NORECURSIVE ] ;
```

## LIST

```cql
LIST ROLES [ OF <role_name> ] [ NORECURSIVE ] ;
```

## LIST

```cql
LIST USERS ;
```

## REVOKE ROLE

```cql
REVOKE <role_name> FROM <role_name> ;
```

## REVOKE PREMISSION

```cql
REVOKE <permission> ON <resource_name> FROM <role_name> ;
```

## SELECT

```cql
SELECT [ JSON | DISTINCT ] <selectors>
  FROM [<keyspace_name>.]<table_name>
  [ WHERE [ <primary_key_conditions> | <non_primary_key_conditions> IN (<column_name> [, ...]) ALLOW FILTERING ] [ AND ] [ <index_conditions> ]
  [ GROUP BY <column_name> [ , ... ] ]
  [ ORDER BY <column_name> ( ASC | DESC ) [ , ... ] ] |
  [ ORDER BY <vector_column_name> ANN OF [n,n,n,...] [ LIMIT N ] ]
  [ ( LIMIT <N> [ OFFSET <N> ]  | PER PARTITION LIMIT <N> ) ]
  [ ALLOW FILTERING ] ;
```

## TRUNCATE

```cql
TRUNCATE [ TABLE ] [<keyspace_name>.]<table_name> ;
```

## UPDATE

```cql
UPDATE [<keyspace_name>.]<table_name>
  [ USING TTL <time_value> ]
  [ [ AND ] USING TIMESTAMP <timestamp_value> ]
  SET <assignment> [ , <assignment> ... ]
  WHERE <row_specification>
  [ IF EXISTS | IF <condition> [ AND <condition> ] ] ;
```

## USE

```cql
USE <keyspace_name> ;
```
