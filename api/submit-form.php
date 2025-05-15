<?php
header("Access-Control-Allow-Origin: http://localhost:3000"); // Allow requests from your React app
header("Access-Control-Allow-Methods: POST, OPTIONS"); // Allow POST and OPTIONS methods
header("Access-Control-Allow-Headers: Content-Type"); // Allow Content-Type header

ini_set('display_errors',1 );
ini_set('display_startup_errors', 1);
ini_set('error_log', __DIR__.'/php-error.log');
error_reporting();

header("Content-Type: application/json");

// Handle preflight requests (OPTIONS method)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Database connection

// $host = "srv1690.hstgr.io";
// $user = "u764592832_poly_admin";
// $password = "Centrepolydb&23";
// $database = "u764592832_centre_poly";

$host = "localhost";
$user = "root";
$password = "";
$database = "centre_poly";

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["message" => "Erreur interne du serveur"]);
    exit();
}

// Get POST data
$data = json_decode(file_get_contents("php://input"), true);

if (empty($data['form_id'])) {
    http_response_code(400);
    echo json_encode(["message" => "Form ID is missing!", "error_code" => 0]);
    exit();
}

$form_id = $data['form_id'];

if ($form_id === 'select-form') {
    if (
        empty($data['nom']) || empty($data['email']) || empty($data['adresse']) ||
        empty($data['tel']) || empty($data['category']) || empty($data['module']) || empty($data['type'])
    ) {
        http_response_code(400);
        echo json_encode(["message" => "Tous les champs sont requis !", "error_code" => 40]);
        exit();
    }
    
    $nom = $conn->real_escape_string($data['nom']);
    $email = $conn->real_escape_string($data['email']);
    $adresse = $conn->real_escape_string($data['adresse']);
    $tel = $conn->real_escape_string($data['tel']);
    $category = $conn->real_escape_string($data['category']);
    $module = $conn->real_escape_string($data['module']);
    $type = $conn->real_escape_string($data['type']);
    $date = date('Y-m-d H:i:s'); // Automatically set the current date and time
    
    // Insert data into the database
    $query = "INSERT INTO form_select (nom, email, adresse, tel, category, module, type, date) 
              VALUES ('$nom', '$email', '$adresse', '$tel', '$category', '$module', '$type', '$date')";
    
    error_log("SQL Query: " . $query);
    
    if ($conn->query($query) === TRUE) {
        http_response_code(200);
        echo json_encode([
            "message" => "Formulaire soumis avec succès!",
            "error_code" => 30,
        ]);
    } else {
        // Handle any SQL error
        error_log("SQL Error: " . $conn->error);
        http_response_code(500);
        echo json_encode([
            "message" => "Erreur lors de l'insertion des données: " . $conn->error,
            "error_code" => $conn->errno,
        ]);
    }
}

else if ($form_id === 'text-form') {
    if (
        empty($data['nom']) || empty($data['email']) || empty($data['adresse']) ||
        empty($data['tel']) || empty($data['text'])
    ) {
        http_response_code(400);
        echo json_encode(["message" => "Tous les champs sont requis !"]);
        exit();
    }
    
    $nom = $conn->real_escape_string($data['nom']);
    $email = $conn->real_escape_string($data['email']);
    $adresse = $conn->real_escape_string($data['adresse']);
    $tel = $conn->real_escape_string($data['tel']);
    $text = $conn->real_escape_string($data['text']);
    $date = date('Y-m-d H:i:s'); // Automatically set the current date and time
    
    // Insert data into the database
    $query = "INSERT INTO form_text (nom, email, adresse, tel, text, date) 
              VALUES ('$nom', '$email', '$adresse', '$tel', '$text', '$date')";
    
    error_log("SQL Query: " . $query);
    
    if ($conn->query($query) === TRUE) {
        http_response_code(200);
        echo json_encode([
            "message" => "Formulaire soumis avec succès !",
            "error_code" => 20,
        ]);
    } else {
        // Handle any SQL error
        error_log("SQL Error: " . $conn->error);
        http_response_code(500);
        echo json_encode([
            "message" => "Erreur lors de l'insertion des données: " . $conn->error,
            "error_code" => $conn->errno,
        ]);
    }
}
else {
    http_response_code(400);
    echo json_encode(["message" => "Form ID invalide !", "error_code" => 10]);
}

$conn->close();
?>