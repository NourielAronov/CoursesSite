SELECT session_id
FROM sys.dm_exec_sessions
WHERE login_name = 'testlogin';

kill [session_id]
DROP LOGIN [login_name]

 sp_who2 
