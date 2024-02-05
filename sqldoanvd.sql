-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 20, 2023 lúc 08:50 AM
-- Phiên bản máy phục vụ: 10.4.27-MariaDB
-- Phiên bản PHP: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `sqldoanvd`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `lists`
--

CREATE TABLE `lists` (
  `id` int(11) NOT NULL,
  `hdid` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `sdt` varchar(255) DEFAULT NULL,
  `dvid` varchar(255) DEFAULT NULL,
  `listdevice` varchar(255) DEFAULT NULL,
  `error` varchar(255) DEFAULT NULL,
  `phutrach` varchar(255) DEFAULT NULL,
  `ngaynhan` datetime DEFAULT NULL,
  `ngaysua` datetime DEFAULT NULL,
  `ngaybaohanh` datetime DEFAULT NULL,
  `phithanhtoan` int(11) DEFAULT NULL,
  `thanhtoan` varchar(255) DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `lists`
--

INSERT INTO `lists` (`id`, `hdid`, `name`, `sdt`, `dvid`, `listdevice`, `error`, `phutrach`, `ngaynhan`, `ngaysua`, `ngaybaohanh`, `phithanhtoan`, `thanhtoan`, `note`, `createdAt`, `updatedAt`) VALUES
(19, 29, 'Anh tú ', '0900999000  ', 'G9   ', ' Cpu intel ', 'hong  ', '   Tú', '2023-11-20 00:00:00', '2023-12-07 00:00:00', '2023-12-16 00:00:00', 5000000, 'Đã Thanh Toán', '   ', '2023-11-20 07:37:44', '2023-11-20 07:44:41'),
(20, 72, 'Anh Tái ', '09222444777  ', 'A0   ', ' Ram 8gb ', 'gãy  ', '   Tú', '2023-11-20 00:00:00', '2023-12-01 00:00:00', '2024-01-11 00:00:00', 5000000, 'Chưa Thanh Toán', '   ', '2023-11-20 07:38:11', '2023-11-20 07:44:49'),
(21, 8, 'Anh Tài ', '02222444666  ', 'E5   ', ' Nguồn 600W ', 'Cháy  ', ' Tú', '2023-11-20 00:00:00', '2023-11-22 00:00:00', '2024-01-02 00:00:00', 5000000, 'Đã Thanh Toán', ' ', '2023-11-20 07:38:53', '2023-11-20 07:38:53'),
(22, 51, 'Anh Quân ', '0233322299  ', 'O0   ', ' Card nvdia ', 'Vào nước  ', '   Tú', '2023-11-20 00:00:00', '2023-12-20 00:00:00', '2024-02-01 00:00:00', 50000000, 'Chưa Thanh Toán', '   ', '2023-11-20 07:39:20', '2023-11-20 07:45:10'),
(23, 64, 'Anh Tùng ', '0344455888  ', 'O8   ', ' Card thu phát kép 2G HW ', 'cháy  ', ' Tú', '2023-11-20 00:00:00', '2023-12-10 00:00:00', '2023-12-31 00:00:00', 5000000, 'Đã Thanh Toán', ' ', '2023-11-20 07:39:44', '2023-11-20 07:39:44');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `sdt` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `listdevice` varchar(255) DEFAULT NULL,
  `error` varchar(255) DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL,
  `hdid` int(11) DEFAULT NULL,
  `dvid` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `name`, `sdt`, `address`, `listdevice`, `error`, `note`, `hdid`, `dvid`, `createdAt`, `updatedAt`) VALUES
(10, 'Anh tú', '0900999000', 'gia lai ', 'Cpu intel', 'hong', '', 29, 'G9 ', '2023-11-20 07:34:21', '2023-11-20 07:34:21'),
(11, 'Anh Tái', '09222444777', 'Thi xa an khe', 'Ram 8gb', 'gãy', '', 72, 'A0 ', '2023-11-20 07:35:04', '2023-11-20 07:35:04'),
(12, 'Anh Tài', '02222444666', 'Hồ Chí Minh', 'Nguồn 600W', 'Cháy', '', 8, 'E5 ', '2023-11-20 07:35:37', '2023-11-20 07:35:37'),
(13, 'Anh Quân', '0233322299', 'Hà Nội', 'Card nvdia', 'Vào nước', '', 51, 'O0 ', '2023-11-20 07:36:14', '2023-11-20 07:36:14'),
(14, 'Anh Tùng', '0344455888', 'THái Bình', 'Card thu phát kép 2G HW', 'cháy', '', 64, 'O8 ', '2023-11-20 07:36:47', '2023-11-20 07:36:47');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `lists`
--
ALTER TABLE `lists`
  ADD PRIMARY KEY (`id`,`hdid`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `lists`
--
ALTER TABLE `lists`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
