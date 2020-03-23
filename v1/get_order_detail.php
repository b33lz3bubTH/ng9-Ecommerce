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
	include_once("../classes/order.processing.php");	
	//create obj for DB
	$db = new Database();
	$connect = $db->connect();
	$od = new Order($connect);

	if($_SERVER['REQUEST_METHOD'] === "GET"){
		if(!isset($_GET['jwt'])) {
			http_response_code(500); // 500 INTERNAL SERVER ERROR
			echo json_encode(array("status" => 500,"message" => "Data FORMAT NOT CORRECT"));
			return;
		}

		$skey = "__OKAY__";
		$jwt_data = '';
		try{
			$jwt_data = JWT::decode($_GET['jwt'],$skey,array('HS256'));
			// echo $jwt_data->data->id->id; // GET THE ID ALL OKAY
			$result = $od->getOrderForParticularUser($jwt_data->data->id->id);
			$data_arr = [];
			if ($result->num_rows > 0) {
		    // output data of each row
			    while($row = $result->fetch_assoc()) {
			    	$row['id'] = (int)$row['id'];
			    	$row['product_id'] = (int)$row['product_id'];
			    	$row['price'] = (int)$row['price'];
			    	$row['quantity'] = (int)$row['quantity'];
			    	array_push($data_arr, $row);
			    }
			}
			http_response_code(200);
			echo json_encode(array("status" => 200, "message" =>"Order Retrieved Bhai","data" => $data_arr));

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