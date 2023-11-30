<?php

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require './vendor/autoload.php';

$app = new \Slim\App;

$app->add(function (Request $request, Response $response, $next) {
  $response = $next($request, $response);

  return $response
    ->withHeader('Access-Control-Allow-Origin', 'http://localhost:8080')
    ->withHeader('Access-Control-Allow-Headers', 'Content-Type')
    ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
});


function getConn()
{

  return new PDO(
    'mysql:host=localhost:3306;dbname=pizzas',
    'root',
    '',
    [PDO::MYSQL_ATTR_INIT_COMMAND  => 'SET NAMES utf8']
  );
}

$app->get('/', function (Request $request, Response $response, array $args) {
  $response->getBody()->write("API pizza ta ok");
  return $response;
});

$app->get('/users', function (Request $request, Response $response, array $args) {
  $sql = 'SELECT * FROM tb_usuarios';
  $stmt = getConn()->query($sql);
  $users = $stmt->fetchAll(PDO::FETCH_OBJ);
  return $response->withJson($users);
});

$app->get('/refris', function (Request $request, Response $response, array $args) {
  $sql = 'SELECT * FROM tb_refris';
  $stmt = getConn()->query($sql);
  $users = $stmt->fetchAll(PDO::FETCH_OBJ);
  return $response->withJson($users);
});

$app->get('/pizzas', function (Request $request, Response $response, array $args) {
  $sql = 'SELECT * FROM tb_pizzas';
  $stmt = getConn()->query($sql);
  $users = $stmt->fetchAll(PDO::FETCH_OBJ);
  return $response->withJson($users);
});

$app->post('/cadastrarPedido', function ($request, $response, $args) {
  $data = $request->getParsedBody();

  // Valide os dados recebidos, evitando injeção de SQL e outras vulnerabilidades

  // Insira os dados no banco de dados
  $sql = 'INSERT INTO pedidos (cliente, pizzas, refri, descricao, total) VALUES (:cliente, :pizzas, :refri, :descricao, :total)';
  $stmt = getConn()->query($sql);
  $stmt->bindParam(':cliente', $data['cliente']);
  $stmt->bindParam(':pizzas', json_encode($data['pizzas']));
  $stmt->bindParam(':refri', $data['refri']);
  $stmt->bindParam(':descricao', $data['descricao']);
  $stmt->bindParam(':total', $data['total']);

  if ($stmt->execute()) {
      return $response->withJson(['message' => 'Pedido cadastrado com sucesso']);
  } else {
      return $response->withJson(['error' => 'Erro ao cadastrar pedido'], 500);
  }
});

$app->get('/PaginaAdm', function (Request $request, Response $response, array $args) {
  $sql = 'SELECT * FROM tb_adm';
  $stmt = getConn()->query($sql);
  $users = $stmt->fetchAll(PDO::FETCH_OBJ);
  return $response->withJson($users);
});

$app->post('/cadastarUsers', function (Request $request, Response $response, array $args) {
  $data = $request->getParsedBody();

  // Verificar se o email já existe
  $existingEmail = checkExistingEmail($data['emailUser']);

  if ($existingEmail) {
    // Email já existe, retornar uma resposta indicando o conflito
    $responseData = ['error' => 'Email já está em uso'];
    return $response->withJson($responseData, 409); // 409 indica um conflito
  }

  // O email não existe, prosseguir com a inserção no banco de dados
  $sql = "INSERT INTO  tb_usuarios (nome, emailUser, senhaUser, csenhaUser,cep, bairro,rua,numero,cidade , estado) VALUES (:nome, :emailUser, :senhaUser, :csenhaUser, :cep, :bairro,:rua,:numero, :cidade , :estado)";
  $conn = getConn();
  $stmt = $conn->prepare($sql);
  $stmt->execute($data);

  $data['id'] = $conn->lastInsertId();
  return $response->withJson($data);
});
$app->post('/cadastarPizza', function (Request $request, Response $response, array $args) {
  $data = $request->getParsedBody();

  // Verificar se o email já existe
  $existingEmail = checkExistingEmail($data['nm_pizza']);

  if ($existingEmail) {
    // Email já existe, retornar uma resposta indicando o conflito
    $responseData = ['error' => 'Pizza já está existe'];
    return $response->withJson($responseData, 409); // 409 indica um conflito
  }

  // O email não existe, prosseguir com a inserção no banco de dados
  $sql = "INSERT INTO tb_pizzas (nm_pizza, vl_pizza, img_pizza) VALUES (:nm_pizza, :vl_pizza, :senhaUser, :img_pizza)";
  $conn = getConn();
  $stmt = $conn->prepare($sql);
  $stmt->execute($data);

  $data['id'] = $conn->lastInsertId();
  return $response->withJson($data);
});

function checkExistingEmail($email)
{
  // Verificar se o email já existe no banco de dados
  $sql = "SELECT COUNT(*) as count FROM tb_usuarios WHERE emailUser = :email";
  $conn = getConn();
  $stmt = $conn->prepare($sql);
  $stmt->bindParam(':email', $email);
  $stmt->execute();
  $result = $stmt->fetch(PDO::FETCH_ASSOC);

  // Se o contador for maior que zero, o email já existe
  return $result['count'] > 0;
}

$app->post('/login', function (Request $request, Response $response, array $args) {
  $loginData = $request->getParsedBody();

  // Lógica para verificar se o usuário existe no banco
  $conn = getConn();
  $sql = "SELECT * FROM tb_usuarios WHERE emailUser = :email AND senhaUser = :senha";
  $stmt = $conn->prepare($sql);
  $stmt->bindParam("email", $loginData['email']);
  $stmt->bindParam("senha", $loginData['senha']);
  $stmt->execute();
  $user = $stmt->fetch(PDO::FETCH_ASSOC);

  if ($user) {
    // Usuário existe, você pode retornar algum dado ou apenas um código de sucesso
    return $response->withJson(['message' => 'Login bem-sucedido']);
  } else {
    // Usuário não encontrado
    return $response->withStatus(401)->withJson(['error' => 'Credenciais inválidas']);
  }
});


$app->run();
