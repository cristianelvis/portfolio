<?php
    $server ="localhost";
    $user   ="root";
    $pass   ="";
    $db     ="cristianelvis_privacyup";

    $connect=mysqli_connect($server, $user, $pass, $db);
    if (!$connect) {
        die("Erro:".mysqli_connect_error());
    }
?>