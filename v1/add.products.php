<?php
	ini_set("display_errors",1);
	require '../vendor/autoload.php';
	use \Firebase\JWT\JWT;
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
	$od = new Product($connect);

	if($_SERVER['REQUEST_METHOD'] === "POST"){
		$data = json_decode(file_get_contents("php://input"));
		// empty($data->name) || empty($data->price) || empty($data->imgPath) || empty($data->description)
		if(!isset($_GET['jwt']) || empty($data->name) || empty($data->price) || empty($data->imgPath) || empty($data->description)) {
			http_response_code(500); // 500 INTERNAL SERVER ERROR
			echo json_encode(array("status" => 500,"message" => "Data FORMAT NOT CORRECT"));
			return;
		}

		$skey = "__OKAY__";
		$jwt_data = '';
		try{
			$jwt_data = JWT::decode($_GET['jwt'],$skey,array('HS256'));
			// echo $jwt_data->data->id->is_admin; // GET THE ID ALL OKAY
			if(!(int)$jwt_data->data->id->is_admin){
				http_response_code(500);
				echo json_encode(array("status" => 500, "message" =>"you're not an admin"));
				return;
			}
			$res = $od->addNewProducts($data->name,$data->price,$data->description,$data->imgPath);
			// echo $res;
			if($res){
				http_response_code(200);
				echo json_encode(array("status" => 200, "message" =>"Order placed Bhai"));
				return;
			}else{
				http_response_code(500);
			//$exp->getMessage() to get status like token expired or not.
				echo json_encode(array("status" => 500, "message" => "Somthing went wrong while inserting"));
				return;
			}
		}catch(Exception $exp){
			http_response_code(500);
			//$exp->getMessage() to get status like token expired or not.
			echo json_encode(array("status" => 500, "message" => $exp->getMessage()));
			return;
		}
		

	}else{
		http_response_code(500); // 500 INTERNAL SERVER ERROR
		echo json_encode(array("status" => 500,"message" => "MUST BE A POST BRO"));
	}

?>