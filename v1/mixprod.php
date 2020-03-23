<?php
	if (isset($_SERVER['HTTP_ORIGIN'])) {
	    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
	    //If required
	    header('Access-Control-Allow-Credentials: true');
	    header('Access-Control-Max-Age: 86400');    // cache for 1 day
	}
	if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
	 
	  if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
	        header("Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS");         
	 
	    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
	        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
	 
	    exit(0);
	}

	//database file include
	include_once("../config/database.php");
	include_once("../classes/products.php");	
	//create obj for DB
	$db = new Database();
	$connect = $db->connect();
	$p = new Product($connect);

	if($_SERVER['REQUEST_METHOD'] === "GET"){
		http_response_code(200);
		echo json_encode($p->allMix());
	}else{
		http_response_code(503); // SERVICE UNAVAILABLE 
		echo json_encode(array("status" => 503,"message" => "SERVICE DENIED FOR U MY"));
	}

?>