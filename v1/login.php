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
	include_once("../classes/users.register.php");
	$db = new Database();
	$connect = $db->connect();

	// obj for UserRegistration
	$u = new UserRegistration($connect);
	if($_SERVER['REQUEST_METHOD'] === "POST"){
		$data = json_decode(file_get_contents("php://input"));

		if(empty($data->email) || empty($data->password)){
			http_response_code(500); // 500 INTERNAL SERVER ERROR
			echo json_encode(array("status" => 500,"message" => "Data FORMAT NOT CORRECT"));
			return;
		}
		$u->email = $data->email;
		$u->password = md5($data->password);
		$id = $u->checkEmailPassMatch();
		if($id["status"]){ //THIS MUST RUN
			$skey = "__OKAY__";
			$expTime = time()+(30*60);
			// $expTime = time()+300;
			$payload_info = array(
				"iss" => "localhost",
				"iat" => time(),
				"nbf" => time()+3,
				"exp" => $expTime,
				"aud" => "ignouproj",
				"data" => array(
							"id" => $id,
							"email" => $u->email
						)
			);
			$jtk = JWT::encode($payload_info,$skey);
			http_response_code(200); // 200 OKAY
			echo json_encode(array("status" => 200,"message" => "YES IT MATCHES", "id" => $id["id"],"webToken" => $jtk,"email" => $id["email"], "is_admin" => $id["is_admin"],"_expiry_token_date" => $expTime,"name"=>$id["name"]));
		}else{
			http_response_code(500); // 500 INTERNAL SERVER ERROR
			echo json_encode(array("status" => 500,"message" => "FAILED successfully"));
		}
	}else{
			http_response_code(500); // 500 INTERNAL SERVER ERROR
			echo json_encode(array("status" => 500,"message" => "MUST BE A POST BRO"));
		}
?>