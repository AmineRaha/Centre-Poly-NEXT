<?php
header("Content-Type: application/json");

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
    empty($data['Numéro de téléphone']) || empty($data['Langue']) || empty($data['courseType'])
) {
    http_response_code(400);
    echo json_encode(["message" => "Tous les champs sont requis !"]);
    exit();
}

$Nom = $conn->real_escape_string($data['Nom']);
$Email = $conn->real_escape_string($data['Email']);
$Adresse = $conn->real_escape_string($data['Adresse']);
$phone = $conn->real_escape_string($data['Numéro de téléphone']);
$Langue = $conn->real_escape_string($data['Langue']);
$courseType = $conn->real_escape_string($data['courseType']);

// Insert data into the database
$query = "INSERT INTO data_form (Nom, Email, Adresse, `Numéro de téléphone`, Langue, courseType) VALUES ('$Nom', '$Email', '$Adresse', '$phone', '$Langue', '$courseType')";

if ($conn->query($query) === TRUE) {
    http_response_code(200);
    echo json_encode(["message" => "Formulaire soumis avec succès !"]);
} else {
    http_response_code(500);
    echo json_encode(["message" => "Erreur interne du serveur"]);
}

$conn->close();
?>