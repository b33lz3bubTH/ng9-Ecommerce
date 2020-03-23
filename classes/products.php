<?php
	class Product{
		private $table_name;
		private $conn;

		function __construct($db) {
		    $this->conn = $db;
		    $this->table_name = "products";
		 }

		public function addNewProducts($name,$price,$desc,$imgLink){
			$sql = "INSERT INTO `products` (`name`, `price`, `description`, `imgPath`) VALUES ('".$name."',".$price.",'".$desc."','".$imgLink."')";
			// echo $sql;
			$result = $this->conn->query($sql);
			return $result;
		}

		public function allMix(){
			$sql = "select * from ".$this->table_name." order by RAND() LIMIT 8";
			$result = $this->conn->query($sql);
			$arr = [];
			if ($result->num_rows > 0) {
		    // output data of each row
			    while($row = $result->fetch_assoc()) {
			    	$row["id"] = (int)$row["id"];
			    	$row["price"] = (int)$row["price"];
			        array_push($arr, $row);
			    }
			}
			return $arr;
		}
		public function search($term){
			$sql =  "SELECT * from ".$this->table_name." WHERE name LIKE '%".$term."%'";
			$result = $this->conn->query($sql);
			$arr = [];
			if ($result->num_rows > 0) {
		    // output data of each row
			    while($row = $result->fetch_assoc()) {
			    	$row["id"] = (int)$row["id"];
			    	$row["price"] = (int)$row["price"];
			        array_push($arr, $row);
			    }
			}
			return $arr;
		}
	}
	// TESTING
	// include_once("../config/database.php");

	// //create obj for DB
	// $db = new Database();
	// $connect = $db->connect();
	// $x = new Product($connect);
	// $x->AllMix();
?>