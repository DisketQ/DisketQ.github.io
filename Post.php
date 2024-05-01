<?php
$fishcount = $_POST["fishcount"];  
$myfile = fopen("balikdata.txt", "w") or die("Unable to open file!");
fwrite($myfile, $fishcount);
fclose($myfile);
?>