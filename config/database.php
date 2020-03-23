<?php
class Database{
	private $hostname;
	private $dbname;
	private $username;
	private $password;
	private $conn;

	public function connect() {
		$this->hostname = "localhost";
		$this->dbname = "myntraclone";
		$this->username = "root";
		$this->password = "";
		$this->conn = new mysqli($this->hostname,$this->username,$this->password,$this->dbname);
		if($this->conn->connect_error){
			print_r("Error Connecting");
			return;
		}
		return $this->conn;
	}
}
?>