 
<?php 

class Configuration {
        public $host   = "localhost";
        public $user   = "";
        public $pass   = "";
        public $db     = "atoma";
        public $conn;
        function __construct(){
            $this->conn   = mysqli_connect($this->host,$this->user,$this->pass,$this->db);
            if (!$this->conn){
                //die("can't connect to databases");
            }else{
                //die('connected to database');
            }
        }

        function getLikes(){
            $query = "SELECT product.name,COUNT(love.product_id) AS likes FROM love LEFT JOIN product ON love.product_id = product.id GROUP BY name";
            $set = $this->conn->query($query);
                    
                    if ($set->num_rows > 0){
                        while($data = $set->fetch_assoc()){
                            $x+=1;
                            echo "<tr>
                                    <th scope=\"row\">".$x."</th>
                                    <td>".$data['name']."</td>
                                    <td><a href=\"#\"style=\"color:#222;text-decoration:none\">".$data['likes']."&nbsp;<i class=\"fa fa-heart\" aria-hidden=\"true\"></i></a></td>
                                </tr>";
                        }
                        
                    }else{
                        echo "<tr>
                                <td colspan=\"3\">null data</td>
                            </tr>";
                    }
        }
    }
