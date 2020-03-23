<?php 

	class Order{
		private $table_name;
		private $conn;

		function __construct($db) {
		    $this->conn = $db;
		    $this->table_name = "orders";
		 }
		function changeOrderStatus($orderId, $updateStatus){
			$sql = "UPDATE orders SET status='".$updateStatus."' WHERE id=".$orderId;
			$result = $this->conn->query($sql);
			return $result;
		}
		function placeOrders($userId,$prodId,$quantity){
			$sql = "INSERT INTO `orders` (ordered_by,product_id,quantity) VALUES(".$userId.",".$prodId.",".$quantity.")";
			$result = $this->conn->query($sql);
			return $result;
		}
		function getEverything(){
			$sql = "select orders.id,orders.status,orders.quantity,
  			products.id AS \"product_id\", products.name, products.price,products.imgPath,
  			users.id AS \"uid\", users.name AS \"uname\", users.email, users.address, users.phone  
 			FROM orders  
 			INNER JOIN products ON orders.product_id=products.id 
 			INNER JOIN users ON orders.ordered_by=users.id ORDER BY orders.created_on";
			$result = $this->conn->query($sql);
			// echo $res;
			$data_arr = [];
		      if($result->num_rows > 0){
		        while($row = $result->fetch_assoc()){
		          // echo $row["uname"]."\n";
		          $arr = array("id" => (int)$row['id'], "status" => $row['status'], "quantity" => (int)$row['quantity'], "product" => array("id" => (int)$row['product_id'], "name" => $row['name'], "price" => (int)$row['price'], "imgPath" => $row['imgPath']), "cus" => array("id" => (int)$row['uid'],"name" => $row['uname'], "email" => $row['email'], "address" => $row['address'], "phone" => $row['phone']));
		          // echo json_encode($arr);
		          array_push($data_arr, $arr);
		        }
		    }
			return $data_arr;
		}
		function getOrderForParticularUser($userId){
			$sql = "select orders.id, orders.status, products.id AS 'product_id', products.name, products.price, products.imgPath, products.description, orders.quantity from orders  INNER JOIN products ON orders.product_id=products.id where orders.ordered_by=".$userId;
			$result = $this->conn->query($sql);
			return $result;

		}
	}
?>