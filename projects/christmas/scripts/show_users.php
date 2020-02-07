<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Рождественский вечер</title>

    <link href='https://fonts.googleapis.com/css?family=Ubuntu:400,500,700|Montserrat:400,700' rel='stylesheet' type='text/css'>
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/select2.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="css/animate.css">
    <link href="css/style.css" rel="stylesheet">

    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>

<body>
    
    <section id="header">
        <div class="section-table">
            <div class="section-row">
                <div class="section-cell">
                    <div class="section-center">
                        <p class="logo"><img src="img/f1.png" alt="logo" class="logo-img"></p>
                        
                        <h2 class="orange">За кулисами рождества</h2>
                        <p class="orange">Рождественский вечер</p>
                        <h2 class="white">24 Декабря 17:00</h2>
                        <p class="white">Вы зашли как Администратор</p>
                        
                        <div class="section-btnt" >
                            <a href="index.html" class="btn btn-primary"><b>Вернутся обратно</b></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
     <section id="speakers">
        <div class="container">
            
            <div class="row text-center speakers-head wow zoomIn">
                <h2>Всего зарегестрировано: <?php echo $result->num_rows;?></h2>
                <p class="large">Регистрация началась 11.12.2016</p>
                <?php var_dump($row) ?>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>Оповещен</th>
                            <th>Имя, Фамилия</th>
                            <th>Номер</th>
                            <th>Дата регистрации</th>
                        </tr>
                   </thead>
                   <tbody>
                        <?php while ($row = $result->fetch_array(MYSQL_ASSOC)) : ?>
                            <tr class="tr-hov">
                                <td ><?php echo $row['id_person']; ?></td>
                                <td ><?php echo $row['called']; ?></td>
                                <td><?php echo $row['name']; ?></td>
                                <td><?php echo $row['phone']; ?></td>
                                <td><?php echo date("m-d H:i", $row['time_of_add']);  ?></td>
                            </tr>
                        <?php endwhile; ?>
                   </tbody>
                   <tfoot>
                        <tr>
                            <th>Имя, Фамилия</th>
                            <th>Номер</th>
                            <th>Дата регистрации</th>
                        </tr>
                   </tfoot>
                </table>
            </div>
            
        </div>
    </section>
    
    <section id="contacts">
        
    </section>
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/validator.min.js"></script>
    <script src="js/select2.full.min.js"></script>
    <script src="js/wow.min.js"></script>
    <script src="js/scripts.js"></script>
</body>

</html>