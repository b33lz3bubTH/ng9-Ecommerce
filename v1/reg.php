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
	include_once("../classes/users.register.php");

	//create obj for DB
	$db = new Database();
	$connect = $db->connect();

	// obj for UserRegistration
	$u = new UserRegistration($connect);


	if($_SERVER['REQUEST_METHOD'] === "POST"){
		$data = json_decode(file_get_contents("php://input"));

		if(empty($data->name) || empty($data->email) || empty($data->password) || empty($data->address) || empty($data->phone)){
			http_response_code(500); // 500 INTERNAL SERVER ERROR
			echo json_encode(array("status" => 500,"message" => "Data FORMAT NOT CORRECT"));
			return;
		}

		//check email exsist or not then nikal law peheli firsat mein

		if($u->checkEmailExists($data->email)){
			http_response_code(500); // 500 INTERNAL SERVER ERROR
			echo json_encode(array("status" => 500,"message" => "Nikal, Pehli ursat mein Nikal, Email Already Registerd"));
			return;
		}

		$u->name = $data->name;
		$u->email = $data->email;
		$u->password = md5($data->password); //ENCRYPT THE MSG
		$u->address = $data->address;
		$u->phone = $data->phone;

		// print_r($data);die;

		if($u->createData()){ //THIS MUST RUN
			http_response_code(200); // 200 OKAY
			echo json_encode(array("status" => 200,"message" => "created successfully"));
			return;
		}else{
			http_response_code(500); // 500 INTERNAL SERVER ERROR
			echo json_encode(array("status" => 500,"message" => "FAILED successfully"));
			return;
		}
	}else{
		http_response_code(503); // SERVICE UNAVAILABLE 
		echo json_encode(array("status" => 503,"message" => "SERVICE DENIED FOR U MY"));
	}
?>