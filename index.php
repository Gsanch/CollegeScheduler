<?php

require_once('database_container.php');

$db = new Database("127.0.0.1", "php_rest_api_db", "root", "");

if($_SERVER["REQUEST_METHOD"]=="GET")
{
    echo json_encode($db->query("SELECT * FROM tbl_subjects"));
}
else if ($_SERVER["REQUEST_METHOD"]="POST")
{
    echo "this is POST ";
}
else
{
    http_response_code(405);
}

?>