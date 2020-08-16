#Requires -RunAsAdministrator

$MY_PATH=Split-Path $MyInvocation.MyCommand.Path -Parent

$NAME="Aigor Host"
$DESCRIPTION="Aigor REST API"
$PATH=Resolve-Path "$MY_PATH\.."
$EXE="$PATH\AigorSays.Host.exe"


New-Service -Name $NAME -BinaryPathName "$EXE" -Description $DESCRIPTION -DisplayName $NAME -StartupType Automatic