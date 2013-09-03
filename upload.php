<?php
$str="";

if(isset($_SERVER['REQUEST_METHOD']))
{
if ($_FILES["file"]["error"] > 0)
	{
		echo "Error: " . $_FILES["file"]["error"] . "<br>";
		}
	else
	{
		$file=$_FILES["file"]["name"];
		$str="Uploaded File:".$file." !!!";
		}   
	echo $str;
	}
else
	echo "Error in receiving file!";
?>
