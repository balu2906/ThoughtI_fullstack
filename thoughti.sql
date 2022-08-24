-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 24, 2022 at 01:58 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `thoughti`
--

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

CREATE TABLE `tasks` (
  `taskId` int(11) NOT NULL,
  `Task` varchar(200) DEFAULT NULL,
  `Expiry_date` date DEFAULT NULL,
  `userId` int(11) NOT NULL,
  `Important` tinyint(1) NOT NULL DEFAULT 1,
  `Created_on` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tasks`
--

INSERT INTO `tasks` (`taskId`, `Task`, `Expiry_date`, `userId`, `Important`, `Created_on`) VALUES
(1, 'Sample Task1 ', '2022-08-24', 1, 1, '2022-08-24 15:22:08'),
(3, 'Sample Task3', '2022-08-31', 3, 1, '2022-08-24 15:22:45'),
(4, 'Sample Task4', '2022-08-25', 1, 0, '2022-08-24 16:55:16'),
(8, 'asfsf', '2022-08-25', 2, 0, '2022-08-24 17:05:45'),
(9, 'asfsf', '2022-08-25', 2, 0, '2022-08-24 17:05:49'),
(10, 'daff', '2022-08-25', 1, 1, '2022-08-24 17:06:52'),
(11, 'fsdf', '2022-08-25', 3, 0, '2022-08-24 17:08:46'),
(12, 'assfdaf', '2022-08-26', 2, 1, '2022-08-24 17:09:38'),
(13, 'Sample Task8', '2022-08-26', 3, 0, '2022-08-24 17:21:23'),
(14, 'Sample Task8', '2022-08-26', 3, 0, '2022-08-24 17:22:50');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userId` int(11) NOT NULL,
  `userName` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userId`, `userName`, `created_at`) VALUES
(1, 'User-1', '2022-08-24 15:12:18'),
(2, 'User-2', '2022-08-24 15:12:18'),
(3, 'User-3', '2022-08-24 15:12:31');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`taskId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tasks`
--
ALTER TABLE `tasks`
  MODIFY `taskId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
