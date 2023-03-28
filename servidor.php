<?php
    /**
     * Mostrar inserts Con Metodo Get
     */
    // if (isset($_GET['nombre'])) {
    //     $usuario=$_GET['nombre'];
    //     echo strtoupper($usuario);
        
    // }

    /**
     * Mostara inserts desde un formulario
     */
    if (isset($_POST['nombre']) && isset($_POST['apellido'])) {
         $nombre = $_POST['nombre'];
         $apellido = $_POST['apellido'];
        
        echo "Usuario " . $nombre . " " . $apellido . " Fue registrado";
    }


?>