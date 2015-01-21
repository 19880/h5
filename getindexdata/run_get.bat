@ECHO OFF&PUSHD %~DP0 &TITLE 360指数
set /p xj= 输入线路：
for /l %%i in (1,1,%xj%) do start php php/get.php %%i
&pause