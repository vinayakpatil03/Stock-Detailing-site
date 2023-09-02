<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $category = $_POST["category"];
    $product = $_POST["product"];
    $quantity = $_POST["quantity"];
    $totalAmount = $_POST["totalAmount"];
    $name = $_POST["name"];
    $phone = $_POST["phone"];
    $address = $_POST["address"];

    // TODO: Process the form data, perform necessary calculations, and save the order information

    // Example: Display the retrieved data
    // echo "Category: " . $category . "<br>";
    // echo "Product: " . $product . "<br>";
    // echo "Quantity: " . $quantity . "<br>";
    // echo "Total Amount: " . $totalAmount . "<br>";
    // echo "Name: " . $name . "<br>";
    // echo "Phone: " . $phone . "<br>";
    // echo "Address: " . $address . "<br>";

    // Connect to the database
    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "mydatabase";

    $conn = new mysqli($servername, $username, $password, $database);
    if ($conn->connect_error) {
        die("Connection Failed: " . $conn->connect_error);
    }

    // Prepare and execute the SQL statement
    $stmt = $conn->prepare("INSERT INTO myorders(category, product, quantity, totalAmount, name, phone, address) VALUES (?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssiisis", $category, $product, $quantity, $totalAmount, $name, $phone, $address);

    if ($stmt->execute()) {
        echo "Order placed successfully!";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close the statement and connection
    $stmt->close();
    $conn->close();
}
?>
