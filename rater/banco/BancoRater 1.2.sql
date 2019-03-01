-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: 01-Mar-2019 às 17:32
-- Versão do servidor: 5.7.21
-- PHP Version: 5.6.35

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rater`
--
CREATE DATABASE IF NOT EXISTS `rater` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `rater`;

-- --------------------------------------------------------

--
-- Estrutura da tabela `candidato`
--

DROP TABLE IF EXISTS `candidato`;
CREATE TABLE IF NOT EXISTS `candidato` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `EMAIL` varchar(30) DEFAULT NULL,
  `NOME` varchar(30) DEFAULT NULL,
  `TELEFONE1` varchar(25) DEFAULT NULL,
  `TELEFONE2` varchar(25) DEFAULT NULL,
  `CPF` varchar(15) DEFAULT NULL,
  `FOTO` varchar(100) DEFAULT NULL,
  `ETNIA` varchar(15) DEFAULT NULL,
  `IDADE` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `cargo`
--

DROP TABLE IF EXISTS `cargo`;
CREATE TABLE IF NOT EXISTS `cargo` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `NOME` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `criterio`
--

DROP TABLE IF EXISTS `criterio`;
CREATE TABLE IF NOT EXISTS `criterio` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ID_ENTREVISTADOR` int(11) DEFAULT NULL,
  `NOME` varchar(20) DEFAULT NULL,
  `DEFINICAO` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `ID_ENTREVISTADOR` (`ID_ENTREVISTADOR`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `criterio_entrevista`
--

DROP TABLE IF EXISTS `criterio_entrevista`;
CREATE TABLE IF NOT EXISTS `criterio_entrevista` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ID_ENTREVISTA` int(11) DEFAULT NULL,
  `ID_CRITERIO` int(11) DEFAULT NULL,
  `APROVACAO` tinyint(1) DEFAULT NULL,
  `COMENTARIO` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `ID_ENTREVISTA` (`ID_ENTREVISTA`),
  KEY `ID_CRITERIO` (`ID_CRITERIO`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `empresa`
--

DROP TABLE IF EXISTS `empresa`;
CREATE TABLE IF NOT EXISTS `empresa` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `EMAIL` varchar(30) NOT NULL,
  `SENHA` varchar(30) DEFAULT NULL,
  `NOME` varchar(30) DEFAULT NULL,
  `FOTO` varchar(50) DEFAULT NULL,
  `CNPJ` varchar(18) NOT NULL,
  `EMAIL_VALIDO` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `EMAIL` (`EMAIL`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `empresa`
--

INSERT INTO `empresa` (`ID`, `EMAIL`, `SENHA`, `NOME`, `FOTO`, `CNPJ`, `EMAIL_VALIDO`) VALUES
(1, 'allansilvapereira10@gmail.com', 'allan2525', 'Allan', '252525', '', 0);

-- --------------------------------------------------------

--
-- Estrutura da tabela `entrevista`
--

DROP TABLE IF EXISTS `entrevista`;
CREATE TABLE IF NOT EXISTS `entrevista` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ID_ENTREVISTADOR` int(11) DEFAULT NULL,
  `ID_CANDIDATO` int(11) DEFAULT NULL,
  `ID_CARGO` int(11) DEFAULT NULL,
  `DATA_ENTREVISTA` date DEFAULT NULL,
  `RESULTADO` tinyint(1) DEFAULT NULL,
  `FEEDBACK` varchar(50) DEFAULT NULL,
  `RELATORIO` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `ID_ENTREVISTADOR` (`ID_ENTREVISTADOR`),
  KEY `ID_CANDIDATO` (`ID_CANDIDATO`),
  KEY `ID_CARGO` (`ID_CARGO`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `entrevistador`
--

DROP TABLE IF EXISTS `entrevistador`;
CREATE TABLE IF NOT EXISTS `entrevistador` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ID_EMPRESA` int(11) DEFAULT NULL,
  `EMAIL` varchar(30) DEFAULT NULL,
  `SENHA` varchar(30) DEFAULT NULL,
  `NOME` varchar(30) DEFAULT NULL,
  `RG` varchar(9) NOT NULL,
  `ENTREVISTAS_REALIZADAS` int(11) DEFAULT NULL,
  `ADMISSÕES` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `ID_EMPRESA` (`ID_EMPRESA`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
