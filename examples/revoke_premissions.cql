REVOKE ALTER ON KEYSPACE cycling FROM coach;

REVOKE ALL PERMISSIONS ON KEYSPACE cycling TO cycling_admin;

REVOKE SELECT ON KEYSPACE cycling FROM coach;
REVOKE MODIFY ON KEYSPACE cycling FROM coach;

REVOKE AUTHORIZE ON KEYSPACE cycling FROM cycling_admin;
