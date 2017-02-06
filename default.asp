
<!--#include virtual="/cm/inc/sys_con_open.asp"-->

<!--#include virtual="/cm/inc/sys_function.asp"-->

<%
if Menu_Get_Path(0) <> "#" then
server.execute Menu_Get_Path(0)
end if
%>

<!--#include virtual="/cm/inc/sys_con_close.asp"-->

