<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: http://localhost:3000"); // Allow requests from your React app
header("Access-Control-Allow-Methods: POST, OPTIONS"); // Allow POST and OPTIONS methods
header("Access-Control-Allow-Headers: Content-Type"); // Allow Content-Type header

// Handle preflight requests (OPTIONS method)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Database connection
$host = "srv1690.hstgr.io";
$user = "u764592832_poly_admin";
$password = "0[Ydlkguavy";
$database = "u764592832_centre_poly";

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["message" => "Erreur interne du serveur"]);
    exit();
}

// Get POST data
$data = json_decode(file_get_contents("php://input"), true);

if (
    empty($data['Nom']) || empty($data['Email']) || empty($data['Adresse']) ||
    empty($data['Numéro de téléphone'])|| empty($data['secondSelect']) || empty($data['courseType'])
) {
    http_response_code(400);
    echo json_encode(["message" => "Tous les champs sont requis !"]);
    exit();
}

$Nom = $conn->real_escape_string($data['Nom']);
$Email = $conn->real_escape_string($data['Email']);
$Adresse = $conn->real_escape_string($data['Adresse']);
$phone = $conn->real_escape_string($data['Numéro de téléphone']);
$secondSelect = $conn->real_escape_string($data['secondSelect']);
$courseType = $conn->real_escape_string($data['courseType']);

// Insert data into the database
$query = "INSERT INTO data_form (Nom, Email, Adresse, `Numéro de téléphone`, secondSelect, courseType) 
          VALUES ('$Nom', '$Email', '$Adresse', '$phone', '$secondSelect', '$courseType')";

error_log("SQL Query: " . $query);

if ($conn->query($query) === TRUE) {
    http_response_code(200);
    echo json_encode(["message" => "Formulaire soumis avec succès !"]);
} else {
  error_log("SQL Error: " . $conn->error);
    http_response_code(500);
    echo json_encode(["message" => "Erreur lors de l'insertion des données: " . $conn->error]);
}

$conn->close();
?>