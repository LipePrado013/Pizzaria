<?php

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require './vendor/autoload.php';

$app = new \Slim\App;
$app->get('/', function (Request $request, Response $response, array $args) {

  $response->getBody()->write("API ta ok ");
  return $response;
});

$app->get('/hello/{name}', function (Request $request, Response $response, array $args) {

  $name = $args['name'];

  $response->getBody()->write("Eae , $name");
  return $response;
});

$app->get('/users', 'getUsers');
$app->get('/pizzas', 'getPizzas');
$app->get('/refris', 'getRefris');
$app->get('/PaginaAdm', 'getAdm');
// $app->get('/pizza/{id}', 'getPizza');

function getConn()
{

  return new PDO(
    'mysql:host=localhost:3306;dbname=pizzas',
    'root',
    '',
    array(PDO::MYSQL_ATTR_INIT_COMMAND  => 'SET NAMES utf8')
  );
}

function getUsers(Request $request, Response $response, array $args)
{
  $sql = 'SELECT * FROM tb_usuarios';
  $stmt  = getConn()->query($sql);
  $produtos = $stmt->fetchAll(PDO::FETCH_OBJ);
  $response->getBody()->write(json_encode($produtos));
  return $response;
}
function getPizzas(Request $request, Response $response, array $args)

{
  $sql = 'SELECT * FROM tb_pizzas';
  $stmt  = getConn()->query($sql);
  $produtos = $stmt->fetchAll(PDO::FETCH_OBJ);
  $response->getBody()->write(json_encode($produtos));
  return $response;
}

function getRefris(Request $request, Response $response, array $args)
{
  $sql = 'SELECT * FROM tb_refris';
  $stmt  = getConn()->query($sql);
  $produtos = $stmt->fetchAll(PDO::FETCH_OBJ);
  $response->getBody()->write(json_encode($produtos));
  return $response;
}

function getAdm(Request $request, Response $response, array $args)
{
  $sql = 'SELECT * FROM tb_adm';
  $stmt  = getConn()->query($sql);
  $produtos = $stmt->fetchAll(PDO::FETCH_OBJ);
  $response->getBody()->write(json_encode($produtos));
  return $response;
}

// function getPizza(Request $request, Response $response, array $args)
// {

//     $id = $args['id'];
//     $conn = getConn();
//     $sql = "SELECT * FROM tb_pizzas WHERE ID=:id";
//     $stmt = $conn->prepare($sql);
//     $stmt->bindParam("id", $id);
//     $stmt->execute();
//     $produto = $stmt->fetchObject();

//     $response->getBody()->write(json_encode($produto));
//     return $response;
// }


$app->run();
