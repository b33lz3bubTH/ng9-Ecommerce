<?php 

	class UserRegistration{
		public $name;
		public $email;
		public $password;
		public $address;
		public $phone;

		private $conn;
		private $table_name;

		public function __construct($db){
			$this->conn = $db;
			$this->table_name = "users";
		}

		public function createData(){
			//SQL to insert DATA.
			$sql = "INSERT INTO users (name, email, password, address, phone)
    				VALUES ('".$this->name."','".$this->email."','".$this->password."','".$this->address."','".$this->phone."')";
    				

    		// print_r($sql);die;
    		if ($this->conn->query($sql)){
    			return true;
    		}else{
    			return false;
    		}
		}
		public function checkEmailPassMatch(){
			$sql = "select * from users where email='".$this->email."' AND password='".$this->password."'";
			$result = $this->conn->query($sql);
			if($result->num_rows > 0){
				$row = $result->fetch_assoc();
				return array("id" => $row['id'],"is_admin" => $row['is_admin'],"email" => $row['email'],"status"=>true,"name"=>$row["name"]);
			}
			return false;
		}
		public function checkEmailExists($email){
			$sql = "select * from users where email='".$email."'";
			$result = $this->conn->query($sql);
			return $result->num_rows;
		}
	}


?>