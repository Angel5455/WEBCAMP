

<?php include_once "includes/templates/header.php"; ?>



<section class="seccion contenedor">
    <h2>Calendario de Eventos</h2>
    <?php
      try {
        require_once('includes/funciones/app.php');
        $sql = "SELECT evento_id, nombre_evento, fecha_evento, hora_evento, cat_evento, icono, nombre_invitado, apellido_invitado ";
        $sql .= " FROM eventos ";
        $sql .= " INNER JOIN categoria_evento ";
        $sql .= " ON eventos.id_cat_evento = categoria_evento.id_categoria ";
        $sql .= " INNER JOIN invitados ";
        $sql .= " ON eventos.id_invitado = invitados.invitado_id ";
        $sql .= " ORDER BY evento_id";



        $resultado = $conn->query($sql);


      } catch (\Exception $e) {
        echo $e->getMessage();
      }


    ?>
    <div class="calendario">
      <?php

        $calendario = array();

        while ($eventos = $resultado->fetch_assoc()){


          //obtiene la fecha del evento
          $fecha = $eventos['fecha_evento'];

          $evento = array(
            'titulo'=>  $eventos['nombre_evento'],
            'fecha'=> $eventos['fecha_evento'],
            'hora'=>  $eventos['hora_evento'],
            'categoria'=> $eventos['cat_evento'],
            'icono'=> $eventos['icono'],
            'invitado'=> $eventos['nombre_invitado'] . " " . $eventos['apellido_invitado']

          );

          $calendario[$fecha][] = $evento;


          } // fin del while

          //Imprimir todos los eventos
          foreach($calendario as $dia=>$lista_evento): ?>

            <h3><i class="fa fa-calendar"></i>


            <?php
            setlocale(LC_TIME, 'spanish');
            echo strftime("%A, %d de %B del %Y", strtotime($dia)) ?>
            </h3>

            <?php foreach($lista_evento as $evento): ?>
                <div class="dia">
                  <p class="titulo"><?php echo $evento["titulo"]?></p>
                  <p class="hora" >
                    <i class="fa fa-clock" aria-hidden="true"></i>
                    <?php echo $evento["fecha"] . " " . $evento["hora"]?>
                  </p>
                  <p>
                  <i class="fa <?php echo $evento['icono'] ?>" aria-hidden="true"></i>
                    <?php echo $evento["categoria"]?>
                  </p>
                  <p>
                    <i class="fa fa-user"></i>
                    <?php echo $evento["invitado"]?>
                  </p>
                </div>


              <?php endforeach; //fin del foreach de evento?>

          <?php endforeach; // fin del foreach de dias?>

    </div>
      <?php
        $conn->close();
      ?>

</section>
<!-- Fin cuenta regresiva  -->
<?php include "includes/templates/footer.php" ?>

