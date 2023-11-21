-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 16/11/2023 às 18:44
-- Versão do servidor: 10.4.28-MariaDB
-- Versão do PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `pizzas`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_adm`
--

CREATE TABLE `tb_adm` (
  `id_adm` int(11) NOT NULL,
  `nm_adm` varchar(100) NOT NULL,
  `cd_email` varchar(100) NOT NULL,
  `cd_senha` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_pizzas`
--

CREATE TABLE `tb_pizzas` (
  `id_pizza` int(11) NOT NULL,
  `nm_pizza` varchar(100) NOT NULL,
  `vl_pizza` decimal(11,2) NOT NULL,
  `img_pizza` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `tb_pizzas`
--

INSERT INTO `tb_pizzas` (`id_pizza`, `nm_pizza`, `vl_pizza`, `img_pizza`) VALUES
(1, 'Pizza de queijo\r\n', 25.25, 'pizza2card.png'),
(2, 'Pizza 4 queijos', 20.50, 'pizza1card.png'),
(3, 'Pizza de frango e catupiry', 22.99, 'pizza3card.png'),
(4, 'Pizza de carne e queijo', 20.50, 'pizza4card.png'),
(5, 'Pizza de pepperoni', 30.00, 'pizza5card.png'),
(6, 'pizza de chocolate com morango ', 25.50, 'pizza6card.png'),
(7, 'Pizza de portuguesa', 30.50, 'pizza7card.png'),
(8, 'Pizza de calabresa', 20.00, 'pizza8card.png');

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_refris`
--

CREATE TABLE `tb_refris` (
  `id_refri` int(11) NOT NULL,
  `nm_refri` varchar(100) NOT NULL,
  `vl_refri` decimal(11,2) NOT NULL,
  `img_refri` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `tb_refris`
--

INSERT INTO `tb_refris` (`id_refri`, `nm_refri`, `vl_refri`, `img_refri`) VALUES
(1, 'Coca cola', 15.50, 'refri1.png'),
(2, 'Guaraná', 12.50, 'refri2.png'),
(3, 'Pepsi', 14.50, 'refri3.png'),
(4, 'It guaraná', 10.25, 'refri4.png'),
(5, 'Pepsi Black', 13.35, 'refri5.png'),
(6, 'Coca cola zero', 14.29, 'refri6.png'),
(7, 'Guaraná zero', 11.24, 'refri7.png');

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_usuarios`
--

CREATE TABLE `tb_usuarios` (
  `id_user` int(11) NOT NULL,
  `nm_user` varchar(100) NOT NULL,
  `cd_emailUser` text NOT NULL,
  `cd_senhUser` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `tb_adm`
--
ALTER TABLE `tb_adm`
  ADD PRIMARY KEY (`id_adm`);

--
-- Índices de tabela `tb_pizzas`
--
ALTER TABLE `tb_pizzas`
  ADD PRIMARY KEY (`id_pizza`);

--
-- Índices de tabela `tb_refris`
--
ALTER TABLE `tb_refris`
  ADD PRIMARY KEY (`id_refri`);

--
-- Índices de tabela `tb_usuarios`
--
ALTER TABLE `tb_usuarios`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `tb_adm`
--
ALTER TABLE `tb_adm`
  MODIFY `id_adm` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `tb_pizzas`
--
ALTER TABLE `tb_pizzas`
  MODIFY `id_pizza` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de tabela `tb_refris`
--
ALTER TABLE `tb_refris`
  MODIFY `id_refri` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de tabela `tb_usuarios`
--
ALTER TABLE `tb_usuarios`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
