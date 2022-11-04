<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./view/css/index.css">
</head>

<body>
    <div class="container">
        <?php
            require_once("./view/navBar.php");
            require_once("./view/banner.php"); 
            require_once("./view/mainHome.php");
        ?>
    </div>
</body>
<?php
    include_once("./model/js/index.php");
?>

</html>