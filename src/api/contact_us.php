<?php
// $json = file_get_contents('php://input');
// $data = json_decode($json, true);
$data = $_POST;


if(isset($data['firstname']) && isset($data['lastname'])  && isset($data['phone']) && isset($data['email']) && isset($data['message'])){
	$email = $data['email'];

	$body = "<br><br>
	Name : ".$data['firstname']." ".$data['lastname']."<br>
	Phone : ".$data['phone']."<br>
	Email : ".$email."<br>
	message : ".$data['message'];


	$headers = "MIME-Version: 1.0" . "\r\n";
	$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
	$headers .= 'From: Innovatria <no-reply@ariyansdesigns.in>' . "\r\n";
	$headers .= "Reply-To: ".$email;



	$success = mail('sledgecoder@gmail.com','Contact us form',$body,$headers);
    if ($success) {
		echo json_encode(["success" => "OK"]);
        exit();
    } else {
        $errorMessage = error_get_last()['message'];
        echo json_encode(["err" => $errorMessage]);
        exit();
    }
}

echo json_encode(["err" => "FAIL"]);
?>

