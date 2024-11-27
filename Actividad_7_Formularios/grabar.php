<?php 
     if ($_SERVER['REQUEST_METHOD'] == 'POST') {
      
        $nombre = $_POST['nombre'];
        $contra = $_POST['contra'];
        $poblacion = $_POST['poblacion'];
    
        echo "<h1>Datos recibidos</h1>";
        echo "<p>Nombre: $nombre</p>";
        echo "<p>Contraseña: $contra</p>";
        echo "<p>Población: $poblacion</p>";
    } else {
        echo "No se enviaron datos.";
    }
?>