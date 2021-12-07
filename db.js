<ref *1> Database {
  objects: [
    Writable {
      path: 'food',
      schema: 'public',
      name: 'food',
      db: [Circular *1],
      loader: 'tables',
      delimitedName: '"food"',
      delimitedSchema: '"public"',
      delimitedFullName: '"food"',
      columnNames: [Array],
      columns: [Array],
      isMatview: false,
      pk: [Array],
      fks: [],
      insertable: true
    },
    Executable {
      path: 'insert_food',
      schema: 'public',
      name: 'insert_food',
      db: [Circular *1],
      loader: 'scripts',
      delimitedName: '"insert_food"',
      delimitedSchema: '"public"',
      delimitedFullName: '"insert_food"',
      sql: QueryFile {
          file: "/Users/dilloncraw/Desktop/Dev-Mountain-Projects/Week-12/chat-server/chat-server/db/insert_food.sql"
          options: {"minify":true,"debug":false}
          query: "INSERT INTO food ( name, type, price ) VALUES ( $1, $2, $3 );"
      },
      isDatabaseFunction: false,
      arity: 3,
      isVariadic: false,
      isProcedure: false,
      singleRow: undefined,
      singleValue: undefined
    },
    Executable {
      path: 'select_food',
      schema: 'public',
      name: 'select_food',
      db: [Circular *1],
      loader: 'scripts',
      delimitedName: '"select_food"',
      delimitedSchema: '"public"',
      delimitedFullName: '"select_food"',
      sql: QueryFile {
          file: "/Users/dilloncraw/Desktop/Dev-Mountain-Projects/Week-12/chat-server/chat-server/db/select_food.sql"
          options: {"minify":true,"debug":false}
          query: "SELECT * FROM food"
      },
      isDatabaseFunction: false,
      arity: 0,
      isVariadic: false,
      isProcedure: false,
      singleRow: undefined,
      singleValue: undefined
    }
  ],
  entityCache: {},
  loader: {
    blacklist: '',
    whitelist: '',
    functionBlacklist: '',
    functionWhitelist: '',
    exceptions: '',
    allowedSchemas: '',
    scripts: '/Users/dilloncraw/Desktop/Dev-Mountain-Projects/Week-12/chat-server/chat-server/db',
    queryFiles: {
      'document-table.sql': QueryFile {
          file: "/Users/dilloncraw/Desktop/Dev-Mountain-Projects/Week-12/chat-server/node_modules/massive/lib/scripts/document-table.sql"
          options: {"minify":true,"debug":false}
          query: "CREATE TABLE ${schema~}.${table~}( id ${pkType~} PRIMARY KEY ${pkDefault^}, body jsonb NOT NULL, search tsvector, created_at timestamptz DEFAULT now(), updated_at timestamptz ); CREATE INDEX idx_${index^} ON ${schema~}.${table~} USING GIN(body jsonb_path_ops); CREATE INDEX idx_search_${index^} ON ${schema~}.${table~} USING GIN(search); CREATE OR REPLACE FUNCTION massive_document_inserted() RETURNS TRIGGER LANGUAGE plpgsql SECURITY definer AS $$ BEGIN NEW.search = to_tsvector(NEW.body::text); RETURN NEW; END; $$; CREATE OR REPLACE FUNCTION massive_document_updated() RETURNS TRIGGER LANGUAGE plpgsql SECURITY definer AS $$ BEGIN NEW.updated_at = now(); NEW.search = to_tsvector(NEW.body::text); RETURN NEW; END; $$; CREATE TRIGGER ${schema^}_${table^}_inserted BEFORE INSERT ON ${schema~}.${table~} FOR EACH ROW EXECUTE PROCEDURE massive_document_inserted(); CREATE TRIGGER ${schema^}_${table^}_updated BEFORE UPDATE ON ${schema~}.${table~} FOR EACH ROW EXECUTE PROCEDURE massive_document_updated(); COMMENT ON TABLE ${schema~}.${table~} IS 'A document table generated with Massive.js.'; COMMENT ON COLUMN ${schema~}.${table~}.id IS 'The document primary key. Will be added to the body when retrieved using Massive document functions'; COMMENT ON COLUMN ${schema~}.${table~}.body IS 'The document body, stored without primary key.'; COMMENT ON COLUMN ${schema~}.${table~}.search IS 'Search vector for full-text search support.'; COMMENT ON COLUMN ${schema~}.${table~}.created_at IS 'Timestamp for document creation.'; COMMENT ON COLUMN ${schema~}.${table~}.updated_at IS 'Timestamp for the record''s last modification.';"
      },
      'drop_table.sql': QueryFile {
          file: "/Users/dilloncraw/Desktop/Dev-Mountain-Projects/Week-12/chat-server/node_modules/massive/lib/scripts/drop_table.sql"
          options: {"minify":true,"debug":false}
          query: "drop table if exists %s %s;"
      },
      'enums.sql': QueryFile {
          file: "/Users/dilloncraw/Desktop/Dev-Mountain-Projects/Week-12/chat-server/node_modules/massive/lib/scripts/enums.sql"
          options: {"minify":true,"debug":false}
          query: "SELECT t.typname AS name, array_agg(e.enumlabel)::TEXT[] AS enum_value FROM pg_type t JOIN pg_enum e ON t.oid = e.enumtypid JOIN pg_catalog.pg_namespace n ON n.oid = t.typnamespace GROUP BY t.typname;"
      },
      'functions-legacy.sql': QueryFile {
          file: "/Users/dilloncraw/Desktop/Dev-Mountain-Projects/Week-12/chat-server/node_modules/massive/lib/scripts/functions-legacy.sql"
          options: {"minify":true,"debug":false}
          query: "SELECT * FROM ( SELECT DISTINCT n.nspname AS schema, (NOT p.proretset) AS "singleRow", (t.typtype IN ('b', 'd', 'e', 'r')) AS "singleValue", p.proname AS name, p.provariadic AS "isVariadic" FROM pg_proc p JOIN pg_namespace n ON p.pronamespace = n.oid JOIN pg_type t on p.prorettype = t.oid WHERE n.nspname NOT IN ('pg_catalog', 'information_schema') ) fns WHERE CASE WHEN $(functionWhitelist) <> '' THEN replace((fns.schema || '.'|| fns.name), 'public.', '') LIKE ANY(string_to_array(replace($(functionWhitelist), ' ', ''), ',')) WHEN $(allowedSchemas) <> '' OR $(functionBlacklist) <> '' THEN (( $(allowedSchemas) = '' OR schema = ANY(string_to_array(replace($(allowedSchemas), ' ', ''), ',')) ) AND ( $(functionBlacklist) = '' OR replace((schema || '.'|| name), 'public.', '') NOT LIKE ALL(string_to_array(replace($(functionBlacklist), ' ', ''), ',')) )) OR replace((schema || '.'|| name), 'public.', '') LIKE ANY(string_to_array(replace($(exceptions), ' ', ''), ',')) ELSE TRUE END ORDER BY schema, name;"
      },
      'functions.sql': QueryFile {
          file: "/Users/dilloncraw/Desktop/Dev-Mountain-Projects/Week-12/chat-server/node_modules/massive/lib/scripts/functions.sql"
          options: {"minify":true,"debug":false}
          query: "SELECT * FROM ( SELECT DISTINCT n.nspname AS schema, (NOT p.proretset) AS "singleRow", (t.typtype IN ('b', 'd', 'e', 'r')) AS "singleValue", p.proname AS name, p.prokind AS kind, p.provariadic AS "isVariadic" FROM pg_proc p JOIN pg_namespace n ON p.pronamespace = n.oid JOIN pg_type t on p.prorettype = t.oid WHERE n.nspname NOT IN ('pg_catalog', 'information_schema') ) fns WHERE CASE WHEN $(functionWhitelist) <> '' THEN replace((fns.schema || '.'|| fns.name), 'public.', '') LIKE ANY(string_to_array(replace($(functionWhitelist), ' ', ''), ',')) WHEN $(allowedSchemas) <> '' OR $(functionBlacklist) <> '' THEN (( $(allowedSchemas) = '' OR schema = ANY(string_to_array(replace($(allowedSchemas), ' ', ''), ',')) ) AND ( $(functionBlacklist) = '' OR replace((schema || '.'|| name), 'public.', '') NOT LIKE ALL(string_to_array(replace($(functionBlacklist), ' ', ''), ',')) )) OR replace((schema || '.'|| name), 'public.', '') LIKE ANY(string_to_array(replace($(exceptions), ' ', ''), ',')) ELSE TRUE END ORDER BY schema, name;"
      },
      'sequences.sql': QueryFile {
          file: "/Users/dilloncraw/Desktop/Dev-Mountain-Projects/Week-12/chat-server/node_modules/massive/lib/scripts/sequences.sql"
          options: {"minify":true,"debug":false}
          query: "SELECT s.sequence_schema AS schema, s.sequence_name AS name FROM information_schema.sequences AS s WHERE NOT EXISTS ( SELECT 1 FROM pg_class AS c JOIN pg_attribute AS a ON a.attrelid = c.oid JOIN pg_constraint AS pks ON pks.conrelid = c.oid JOIN information_schema._pg_expandarray(pks.conkey) AS ordinals ON ordinals.n = a.attnum JOIN pg_attrdef AS ad ON ad.adrelid = c.oid AND ad.adnum = a.attnum WHERE pg_get_expr(ad.adbin, ad.adrelid) = 'nextval(''' || s.sequence_name || '''::regclass)' OR pg_get_expr(ad.adbin, ad.adrelid) = 'nextval(''"' || s.sequence_name || '"''::regclass)' );"
      },
      'tables.sql': QueryFile {
          file: "/Users/dilloncraw/Desktop/Dev-Mountain-Projects/Week-12/chat-server/node_modules/massive/lib/scripts/tables.sql"
          options: {"minify":true,"debug":false}
          query: "SELECT * FROM ( WITH table_columns AS ( SELECT attrelid, array_agg(DISTINCT attname::text) AS columns FROM pg_catalog.pg_attribute WHERE attnum > 0 AND attisdropped IS FALSE GROUP BY attrelid ), table_primary_keys AS ( SELECT c.conrelid, array_agg(att.attname::text) AS columns FROM pg_catalog.pg_constraint AS c JOIN pg_catalog.pg_attribute AS att ON att.attrelid = c.conrelid AND att.attnum = ANY (c.conkey) WHERE c.contype = 'p' GROUP BY c.conrelid ), foreign_keys AS ( SELECT foreign_keys.conname AS constraint_name, originrel.relname AS origin_name, originns.nspname AS origin_schema, array_agg(DISTINCT originatt.attname::text) AS origin_columns, dependentrel.relname AS dependent_name, dependentns.nspname AS dependent_schema, array_agg(DISTINCT dependentatt.attname::text) AS dependent_columns FROM pg_catalog.pg_constraint AS foreign_keys JOIN pg_catalog.pg_class AS originrel ON originrel.oid = foreign_keys.confrelid JOIN pg_catalog.pg_namespace AS originns ON originns.oid = originrel.relnamespace JOIN pg_catalog.pg_attribute AS originatt ON originatt.attrelid = originrel.oid AND originatt.attnum = ANY(foreign_keys.confkey) JOIN pg_catalog.pg_class AS dependentrel ON dependentrel.oid = foreign_keys.conrelid JOIN pg_catalog.pg_namespace AS dependentns ON dependentns.oid = dependentrel.relnamespace JOIN pg_catalog.pg_attribute AS dependentatt ON dependentatt.attrelid = dependentrel.oid AND dependentatt.attnum = ANY(foreign_keys.conkey) WHERE foreign_keys.contype = 'f' GROUP BY foreign_keys.conname, originrel.relname, originns.nspname, dependentrel.relname, dependentns.nspname ) SELECT t.table_schema AS schema, t.table_name AS name, parent.relname AS parent, pks.columns AS pk, fks.constraint_name AS fk, fks.dependent_columns AS fk_dependent_columns, fks.origin_schema AS fk_origin_schema, fks.origin_name AS fk_origin_name, fks.origin_columns AS fk_origin_columns, c.columns, TRUE AS is_insertable_into FROM information_schema.tables t JOIN pg_catalog.pg_namespace nsp ON nsp.nspname = t.table_schema JOIN pg_catalog.pg_class cls ON cls.relnamespace = nsp.oid AND cls.relname = t.table_name LEFT OUTER JOIN table_primary_keys pks ON pks.conrelid = cls.oid LEFT OUTER JOIN foreign_keys fks ON fks.dependent_schema = t.table_schema AND fks.dependent_name = t.table_name JOIN table_columns AS c ON c.attrelid = cls.oid LEFT OUTER JOIN pg_catalog.pg_inherits inh ON inh.inhrelid = cls.oid LEFT OUTER JOIN pg_catalog.pg_class AS parent ON inh.inhparent = parent.oid LEFT OUTER JOIN pg_catalog.pg_namespace AS parentschema ON parentschema.oid = parent.relnamespace WHERE t.table_schema NOT IN ('information_schema', 'pg_catalog') AND t.table_type NOT IN ('VIEW', 'FOREIGN TABLE') UNION SELECT t.table_schema AS schema, t.table_name AS name, NULL AS parent, NULL AS pk, NULL AS fk, NULL AS fk_dependent_columns, NULL AS fk_origin_schema, NULL AS fk_origin_name, NULL AS fk_origin_columns, array_agg(c.attname::text) AS columns, CASE t.is_insertable_into WHEN 'YES' THEN TRUE ELSE FALSE END AS is_insertable_into FROM information_schema.tables t JOIN pg_catalog.pg_namespace nsp ON nsp.nspname = t.table_schema JOIN pg_catalog.pg_class cls ON cls.relnamespace = nsp.oid AND cls.relname = t.table_name JOIN pg_catalog.pg_attribute c ON c.attrelid = cls.oid AND c.attnum > 0 WHERE t.table_type = 'FOREIGN TABLE' GROUP BY t.table_schema, t.table_name, t.is_insertable_into ) tables WHERE CASE WHEN $(whitelist) <> '' THEN replace((tables.schema || '.'|| tables.name), 'public.', '') LIKE ANY(string_to_array(replace($(whitelist), ' ', ''), ',')) WHEN $(allowedSchemas) <> '' OR $(blacklist) <> '' THEN (( $(allowedSchemas) = '' OR schema = ANY(string_to_array(replace($(allowedSchemas), ' ', ''), ',')) ) AND ( $(blacklist) = '' OR replace((schema || '.'|| name), 'public.', '') NOT LIKE ALL(string_to_array(replace($(blacklist), ' ', ''), ',')) )) OR replace((schema || '.'|| name), 'public.', '') LIKE ANY(string_to_array(replace($(exceptions), ' ', ''), ',')) ELSE TRUE END;"
      },
      'views-legacy.sql': QueryFile {
          file: "/Users/dilloncraw/Desktop/Dev-Mountain-Projects/Week-12/chat-server/node_modules/massive/lib/scripts/views-legacy.sql"
          options: {"minify":true,"debug":false}
          query: "SELECT * FROM ( SELECT v.schemaname AS schema, v.viewname AS name, array_agg(DISTINCT c.attname::text) AS columns, pg_relation_is_updatable(cls.oid::regclass, true) & 8 >= 8 AS is_insertable_into, FALSE AS is_matview FROM pg_views v JOIN pg_catalog.pg_namespace nsp ON nsp.nspname = v.schemaname JOIN pg_catalog.pg_class cls ON cls.relnamespace = nsp.oid AND cls.relname = v.viewname JOIN pg_catalog.pg_attribute c ON c.attrelid = cls.oid AND c.attnum > 0 WHERE schemaname <> 'pg_catalog' AND schemaname <> 'information_schema' GROUP BY v.schemaname, v.viewname, cls.oid ) views WHERE CASE WHEN $(whitelist) <> '' THEN replace((views.schema || '.'|| views.name), 'public.', '') LIKE ANY(string_to_array(replace($(whitelist), ' ', ''), ',')) WHEN $(allowedSchemas) <> '' OR $(blacklist) <> '' THEN (( $(allowedSchemas) = '' OR schema = ANY(string_to_array(replace($(allowedSchemas), ' ', ''), ',')) ) AND ( $(blacklist) = '' OR replace((schema || '.'|| name), 'public.', '') NOT LIKE ALL(string_to_array(replace($(blacklist), ' ', ''), ',')) )) OR replace((schema || '.'|| name), 'public.', '') LIKE ANY(string_to_array(replace($(exceptions), ' ', ''), ',')) ELSE TRUE END;"
      },
      'views.sql': QueryFile {
          file: "/Users/dilloncraw/Desktop/Dev-Mountain-Projects/Week-12/chat-server/node_modules/massive/lib/scripts/views.sql"
          options: {"minify":true,"debug":false}
          query: "SELECT * FROM ( SELECT v.schemaname AS schema, v.viewname AS name, array_agg(DISTINCT c.attname::text) AS columns, pg_relation_is_updatable(cls.oid::regclass, true) & 8 >= 8 AS is_insertable_into, FALSE AS is_matview FROM pg_views v JOIN pg_catalog.pg_namespace nsp ON nsp.nspname = v.schemaname JOIN pg_catalog.pg_class cls ON cls.relnamespace = nsp.oid AND cls.relname = v.viewname JOIN pg_catalog.pg_attribute c ON c.attrelid = cls.oid AND c.attnum > 0 WHERE schemaname <> 'pg_catalog' AND schemaname <> 'information_schema' GROUP BY v.schemaname, v.viewname, cls.oid UNION SELECT schemaname AS schema, matviewname AS name, array_agg(DISTINCT c.attname::text) AS columns, FALSE AS is_insertable_into, TRUE AS is_matview FROM pg_matviews v JOIN pg_catalog.pg_namespace nsp ON nsp.nspname = v.schemaname JOIN pg_catalog.pg_class cls ON cls.relnamespace = nsp.oid AND cls.relname = v.matviewname JOIN pg_catalog.pg_attribute c ON c.attrelid = cls.oid AND c.attnum > 0 GROUP BY v.schemaname, v.matviewname ) views WHERE CASE WHEN $(whitelist) <> '' THEN replace((views.schema || '.'|| views.name), 'public.', '') LIKE ANY(string_to_array(replace($(whitelist), ' ', ''), ',')) WHEN $(allowedSchemas) <> '' OR $(blacklist) <> '' THEN (( $(allowedSchemas) = '' OR schema = ANY(string_to_array(replace($(allowedSchemas), ' ', ''), ',')) ) AND ( $(blacklist) = '' OR replace((schema || '.'|| name), 'public.', '') NOT LIKE ALL(string_to_array(replace($(blacklist), ' ', ''), ',')) )) OR replace((schema || '.'|| name), 'public.', '') LIKE ANY(string_to_array(replace($(exceptions), ' ', ''), ',')) ELSE TRUE END;"
      }
    }
  },
  driverConfig: { promiseLib: undefined, pgNative: false },
  pgp: [Function: inst] {
    as: {
      ctf: [Object],
      text: [Function: text],
      name: [Function: name],
      alias: [Function: alias],
      value: [Function: value],
      buffer: [Function: buffer],
      bool: [Function: bool],
      date: [Function: date],
      number: [Function: number],
      array: [Function: array],
      csv: [Function: csv],
      json: [Function: json],
      func: [Function: func],
      format: [Function: format]
    },
    minify: [Function: minify] {
      SQLParsingError: [class SQLParsingError extends Error],
      parsingErrorCode: [Object]
    },
    queryResult: { one: 1, many: 2, none: 4, any: 6 },
    PromiseAdapter: [class PromiseAdapter],
    ParameterizedQuery: [class ParameterizedQuery extends ServerFormatting],
    PreparedStatement: [class PreparedStatement extends ServerFormatting],
    QueryFile: [class QueryFile extends InnerState] {
      '$query': Symbol(QueryFile.query)
    },
    errors: {
      QueryResultError: [class QueryResultError extends Error],
      queryResultErrorCode: [Object],
      PreparedStatementError: [class PreparedStatementError extends Error],
      ParameterizedQueryError: [class ParameterizedQueryError extends Error],
      QueryFileError: [class QueryFileError extends Error]
    },
    utils: {
      camelize: [Function: camelize],
      camelizeVar: [Function: camelizeVar],
      enumSql: [Function: enumSql],
      taskArgs: [Function: taskArgs]
    },
    txMode: {
      isolationLevel: [Object],
      TransactionMode: [class TransactionMode extends InnerState]
    },
    pg: PG {
      defaults: [Object],
      Client: [Function],
      Query: [class Query extends EventEmitter],
      Pool: [class BoundPool extends Pool],
      _pools: [],
      Connection: [class Connection extends EventEmitter],
      types: [Object],
      DatabaseError: [class DatabaseError extends Error]
    },
    end: [Function (anonymous)],
    helpers: {
      insert: [Function: insert],
      update: [Function: update],
      concat: [Function: concat],
      values: [Function: values],
      sets: [Function: sets],
      TableName: [class TableName],
      ColumnSet: [class ColumnSet extends InnerState],
      Column: [class Column extends InnerState]
    },
    spex: {
      errors: [Object],
      batch: [Function (anonymous)],
      page: [Function (anonymous)],
      sequence: [Function (anonymous)],
      stream: [Object]
    }
  },
  instance: Database {
    connect: [Function (anonymous)],
    query: [Function (anonymous)],
    none: [Function (anonymous)],
    one: [Function (anonymous)],
    many: [Function (anonymous)],
    oneOrNone: [Function (anonymous)],
    manyOrNone: [Function (anonymous)],
    any: [Function (anonymous)],
    result: [Function (anonymous)],
    multiResult: [Function (anonymous)],
    multi: [Function (anonymous)],
    stream: [Function (anonymous)],
    func: [Function (anonymous)],
    proc: [Function (anonymous)],
    map: [Function (anonymous)],
    each: [Function (anonymous)],
    task: [Function (anonymous)],
    taskIf: [Function (anonymous)],
    tx: [Function (anonymous)],
    txIf: [Function (anonymous)]
  },
  '$p': [Function: promise] {
    resolve: [Function: resolve],
    reject: [Function: reject],
    all: [Function: all]
  },
  serverVersion: '13.5 (Ubuntu 13.5-2.pgdg20.04+1)',
  currentSchema: 'public',
  enums: {},
  food: Writable {
    path: 'food',
    schema: 'public',
    name: 'food',
    db: [Circular *1],
    loader: 'tables',
    delimitedName: '"food"',
    delimitedSchema: '"public"',
    delimitedFullName: '"food"',
    columnNames: [ 'id', 'name', 'price', 'type' ],
    columns: [ [Object], [Object], [Object], [Object] ],
    isMatview: false,
    pk: [ 'id' ],
    fks: [],
    insertable: true
  },
  insert_food: [Function: executor] {
    isDatabaseFunction: false,
    executable: Executable {
      path: 'insert_food',
      schema: 'public',
      name: 'insert_food',
      db: [Circular *1],
      loader: 'scripts',
      delimitedName: '"insert_food"',
      delimitedSchema: '"public"',
      delimitedFullName: '"insert_food"',
      sql: QueryFile {
          file: "/Users/dilloncraw/Desktop/Dev-Mountain-Projects/Week-12/chat-server/chat-server/db/insert_food.sql"
          options: {"minify":true,"debug":false}
          query: "INSERT INTO food ( name, type, price ) VALUES ( $1, $2, $3 );"
      },
      isDatabaseFunction: false,
      arity: 3,
      isVariadic: false,
      isProcedure: false,
      singleRow: undefined,
      singleValue: undefined
    }
  },
  select_food: [Function: executor] {
    isDatabaseFunction: false,
    executable: Executable {
      path: 'select_food',
      schema: 'public',
      name: 'select_food',
      db: [Circular *1],
      loader: 'scripts',
      delimitedName: '"select_food"',
      delimitedSchema: '"public"',
      delimitedFullName: '"select_food"',
      sql: QueryFile {
          file: "/Users/dilloncraw/Desktop/Dev-Mountain-Projects/Week-12/chat-server/chat-server/db/select_food.sql"
          options: {"minify":true,"debug":false}
          query: "SELECT * FROM food"
      },
      isDatabaseFunction: false,
      arity: 0,
      isVariadic: false,
      isProcedure: false,
      singleRow: undefined,
      singleValue: undefined
    }
  }
}
db connected
