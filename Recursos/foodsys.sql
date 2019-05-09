-- phpMyAdmin SQL Dump
-- version 4.8.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-05-2019 a las 12:06:15
-- Versión del servidor: 10.1.31-MariaDB
-- Versión de PHP: 7.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `foodsys`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `inventario`
--

CREATE TABLE `inventario` (
  `InvID` int(11) NOT NULL,
  `InvProducto` varchar(600) COLLATE utf8_spanish_ci NOT NULL,
  `InvCantidad` varchar(600) COLLATE utf8_spanish_ci NOT NULL,
  `InvStatus` varchar(600) COLLATE utf8_spanish_ci NOT NULL,
  `InvDescripcion` varchar(600) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `inventario`
--

INSERT INTO `inventario` (`InvID`, `InvProducto`, `InvCantidad`, `InvStatus`, `InvDescripcion`) VALUES
(2, 'Sweater Sportime', '1', 'HABILITADO', 'Franela de cuello verdoso diseñada para un estilo ideal loren ipsum datos de la franela Franela de cuello verdoso diseñada para un estilo ideal loren ipsum datos de la franela Franela de cuello verdoso diseñada para un estilo ideal loren ipsum datos de la franela Franela de cuello verdoso diseñada para un estilo ideal loren ipsum datos de la franela '),
(3, 'Pantalon Sweet Playera', '0', 'INHABILITADO', 'Franela de cuello verdoso diseñada para un estilo ideal loren ipsum datos de la franela Franela de cuello verdoso diseñada para un estilo ideal loren ipsum datos de la franela Franela de cuello verdoso diseñada para un estilo ideal loren ipsum datos de la franela Franela de cuello verdoso diseñada para un estilo ideal loren ipsum datos de la franela Franela de cuello verdoso diseñada para un estilo ideal loren ipsum datos de la franela '),
(4, 'Blusa estampada', '6', 'HABILITADO', 'Franela de cuello verdoso diseñada para un estilo ideal loren ipsum datos de la franela Franela de cuello verdoso diseñada para un estilo ideal loren ipsum datos de la franela Franela de cuello verdoso diseñada para un estilo ideal loren ipsum datos de la franela Franela de cuello verdoso diseñada para un estilo ideal loren ipsum datos de la franela'),
(5, 'Zapatillas Adidas XL', '5', 'HABILITADO', 'Franela de cuello verdoso diseñada para un estilo ideal loren ipsum datos de la franela Franela de cuello verdoso diseñada para un estilo ideal loren ipsum datos de la franela Franela de cuello verdoso diseñada para un estilo ideal loren ipsum datos de la franela Franela de cuello verdoso diseñada para un estilo ideal loren ipsum datos de la franela'),
(6, 'Este es el que debe aparecer', '6', 'HABILITADO', 'Franela de cuello verdoso diseñada para un estilo ideal loren ipsum datos de la franela Franela de cuello verdoso diseñada para un estilo ideal loren ipsum datos de la franela Franela de cuello verdoso diseñada para un estilo ideal loren ipsum datos de la franela Franela de cuello verdoso diseñada para un estilo ideal loren ipsum datos de la franela');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ordenes`
--

CREATE TABLE `ordenes` (
  `PedidoID` int(11) NOT NULL,
  `PedidoClienteNombre` varchar(600) COLLATE utf8_spanish_ci NOT NULL,
  `PedidoClienteIDCard` varchar(600) COLLATE utf8_spanish_ci NOT NULL,
  `PedidoCantidad` varchar(600) COLLATE utf8_spanish_ci NOT NULL,
  `PedidoProducto` int(255) NOT NULL,
  `PedidoDireccion` varchar(600) COLLATE utf8_spanish_ci NOT NULL,
  `PedidoClienteTelefono` varchar(600) COLLATE utf8_spanish_ci NOT NULL,
  `PedidoClienteEmail` varchar(600) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `ordenes`
--

INSERT INTO `ordenes` (`PedidoID`, `PedidoClienteNombre`, `PedidoClienteIDCard`, `PedidoCantidad`, `PedidoProducto`, `PedidoDireccion`, `PedidoClienteTelefono`, `PedidoClienteEmail`) VALUES
(7, 'Anna Viera Quintana', 'V-9837616', '2', 6, 'Valencia edo Carabobo Venezuela', '+584121717805', 'gerald@gmail.com');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `inventario`
--
ALTER TABLE `inventario`
  ADD PRIMARY KEY (`InvID`);

--
-- Indices de la tabla `ordenes`
--
ALTER TABLE `ordenes`
  ADD PRIMARY KEY (`PedidoID`),
  ADD KEY `ordenes_ibfk_1` (`PedidoProducto`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `inventario`
--
ALTER TABLE `inventario`
  MODIFY `InvID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `ordenes`
--
ALTER TABLE `ordenes`
  MODIFY `PedidoID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `ordenes`
--
ALTER TABLE `ordenes`
  ADD CONSTRAINT `ordenes_ibfk_1` FOREIGN KEY (`PedidoProducto`) REFERENCES `inventario` (`InvID`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
