-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Gegenereerd op: 22 jul 2017 om 15:26
-- Serverversie: 10.1.21-MariaDB
-- PHP-versie: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kitsune`
--

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `bans`
--

CREATE TABLE `bans` (
  `ID` int(11) NOT NULL,
  `Moderator` char(12) NOT NULL,
  `Player` int(11) UNSIGNED NOT NULL,
  `Comment` text NOT NULL,
  `Expiration` int(8) NOT NULL,
  `Time` int(8) NOT NULL,
  `Type` smallint(3) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `igloos`
--

CREATE TABLE `igloos` (
  `ID` int(10) UNSIGNED NOT NULL,
  `Owner` int(10) UNSIGNED NOT NULL,
  `Type` tinyint(3) UNSIGNED NOT NULL DEFAULT '1',
  `Floor` tinyint(3) UNSIGNED NOT NULL DEFAULT '0',
  `Music` smallint(6) NOT NULL DEFAULT '0',
  `Furniture` text NOT NULL,
  `Locked` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `igloos`
--

INSERT INTO `igloos` (`ID`, `Owner`, `Type`, `Floor`, `Music`, `Furniture`, `Locked`) VALUES
(1, 101, 23, 0, 0, '224|407|277|1|1,225|560|306|1|1,208|264|374|1|1,210|485|371|1|1,207|299|387|1|1,221|367|298|1|1,211|454|342|1|1', 1),
(2, 102, 1, 0, 0, '61|508|298|2|1,61|335|265|8|1,63|224|351|6|1', 1);

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `penguins`
--

CREATE TABLE `penguins` (
  `ID` int(10) UNSIGNED NOT NULL,
  `Username` char(12) NOT NULL,
  `Nickname` char(16) NOT NULL,
  `Password` char(32) NOT NULL,
  `LoginKey` char(32) NOT NULL,
  `Email` char(254) NOT NULL,
  `registrationdate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Moderator` tinyint(1) NOT NULL DEFAULT '0',
  `Inventory` text NOT NULL,
  `Coins` mediumint(7) UNSIGNED NOT NULL DEFAULT '500',
  `Igloo` int(10) UNSIGNED NOT NULL COMMENT 'Current active igloo',
  `Igloos` text NOT NULL COMMENT 'Owned igloo types',
  `Furniture` text NOT NULL COMMENT 'Furniture inventory',
  `Color` tinyint(3) UNSIGNED NOT NULL DEFAULT '1',
  `Head` smallint(5) UNSIGNED NOT NULL DEFAULT '0',
  `Face` smallint(5) UNSIGNED NOT NULL DEFAULT '0',
  `Neck` smallint(5) UNSIGNED NOT NULL DEFAULT '0',
  `Body` smallint(5) UNSIGNED NOT NULL DEFAULT '0',
  `Hand` smallint(5) UNSIGNED NOT NULL DEFAULT '0',
  `Feet` smallint(5) UNSIGNED NOT NULL DEFAULT '0',
  `Photo` smallint(5) UNSIGNED NOT NULL DEFAULT '0',
  `Flag` smallint(5) UNSIGNED NOT NULL DEFAULT '0',
  `Walking` int(10) UNSIGNED NOT NULL DEFAULT '0' COMMENT 'Puffle ID',
  `Banned` varchar(20) NOT NULL DEFAULT '0' COMMENT 'Timestamp of ban',
  `Stamps` text NOT NULL,
  `StampBook` varchar(150) NOT NULL DEFAULT '1%1%-1%1',
  `EPF` varchar(9) NOT NULL DEFAULT '0,0,0',
  `Buddies` text NOT NULL,
  `Ignores` text NOT NULL,
  `MinutesPlayed` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `penguins`
--

INSERT INTO `penguins` (`ID`, `Username`, `Nickname`, `Password`, `LoginKey`, `Email`, `registrationdate`, `Moderator`, `Inventory`, `Coins`, `Igloo`, `Igloos`, `Furniture`, `Color`, `Head`, `Face`, `Neck`, `Body`, `Hand`, `Feet`, `Photo`, `Flag`, `Walking`, `Banned`, `Stamps`, `StampBook`, `EPF`, `Buddies`, `Ignores`, `MinutesPlayed`) VALUES
(101, 'Ben_', 'Ben', '6F1FA0CF454D0804B60E733A188E4416', '', 'solerian.godess@solero.me', '0000-00-00 00:00:00', 1, '%1', 184470, 1, '1,23', '210|1,224|1,208|1,207|1,225|1,221|1,218|1,211|1,200|1', 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, '0', '332,10,13,14,20,', '2%4%6%3%0|10|212|162|0|1%0|14|475|219|0|3%0|20|292|255|0|5%0|13|434|329|0|7', '0,0,0', '103|Nickname1%102|Nickname', '', 1150),
(102, 'Nickname', 'Nickname', '6F1FA0CF454D0804B60E733A188E4416', '', '', '0000-00-00 00:00:00', 0, '%1', 200168, 2, '', '61|2,63|1', 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, '0', '', '1%1%1%1', '0,0,0', '101|Ben_', '', 552),
(103, 'Nickname1', 'Nickname1', '6F1FA0CF454D0804B60E733A188E4416', '', '', '0000-00-00 00:00:00', 0, '%2', 200000, 0, '', '', 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, '0', '', '1%1%1%1', '0,0,0', '101|Ben_', '', 64),
(104, 'Daan', 'Daan', '6F1FA0CF454D0804B60E733A188E4416', '', '', '0000-00-00 00:00:00', 1, '%3', 3, 0, '', '', 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, '0', '', '1%1%-1%1', '0,0,0', '', '', 69),
(184, 'hkkghk', 'hkkghk', '6198E2E9844826A773D468EE512D06A8', '', 'hkhgkhg@live.nl', '0000-00-00 00:00:00', 0, '%1', 500, 1, '1', '', 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, '0', '', '1%1%-1%1', '0,0,0', '', '', 0),
(185, 'gfjjgfjgfjgf', 'gfjjgfjgfjgf', '133EE01BBFE7663FFD76705554927787', '', 'jgfgfjjgf@xd.com', '2017-07-16 16:17:15', 0, '%1', 500, 1, '1', '', 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, '0', '', '1%1%-1%1', '0,0,0', '', '', 0),
(186, 'jgfjjgf', 'jgfjjgf', '04B2585A3F36B24B395D20EC4EAB411A', '', 'gggjjghjgj@xd.com', '2017-07-17 13:34:29', 0, '%1', 500, 1, '1', '', 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, '0', '', '1%1%-1%1', '0,0,0', '', '', 0),
(193, 'Smith', 'Smith', '6EFE5C0481B9B372C051762E66B79F33', '', 'netsparker@example.com', '2017-07-17 13:49:46', 0, '%1', 500, 1, '1', '', 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, '0', '', '1%1%-1%1', '0,0,0', '', '', 0),
(194, 'jgfjgfgfjgf', 'jgfjgfgfjgf', '899C4E359288CB7BF8C1B8C165A697D0', '', 'gjjgfjggkk@live.nl', '2017-07-17 16:09:12', 0, '%1', 500, 1, '1', '', 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, '0', '', '1%1%-1%1', '0,0,0', '', '', 0),
(195, 'jgjgfjgfjgf', 'jgjgfjgfjgf', '8B6A4E9BC747F36F8593399BDE23FC00', '', 'gjgjgjfghjgj@xd.com', '2017-07-17 16:10:31', 0, '%1', 500, 1, '1', '', 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, '0', '', '1%1%-1%1', '0,0,0', '', '', 0),
(196, 'hfdhfhfddhf', 'hfdhfhfddhf', '52102C50A123798E10F8F821656B9165', '', 'gghjhfdhfdgj@xd.com', '2017-07-17 16:11:27', 0, '%1', 500, 1, '1', '', 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, '0', '', '1%1%-1%1', '0,0,0', '', '', 0),
(197, 'hghgjgfjgf', 'hghgjgfjgf', '75B7B5C68CE15081A6CF6774BD73DD4C', '', '?Smith@xd.com', '2017-07-17 16:11:56', 0, '%1', 500, 1, '1', '', 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, '0', '', '1%1%-1%1', '0,0,0', '', '', 0),
(198, '?Smith', '?Smith', 'DBA3566CC8CB9841AFE4F91C5F2632C3', '', '?Smith@xd.com', '2017-07-17 16:15:51', 0, '%1', 500, 1, '1', '', 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, '0', '', '1%1%-1%1', '0,0,0', '', '', 0),
(199, 'jgfjgfjgf', 'jgfjgfjgf', '735DD0853B59F90E7705AEDAE946CD40', '', 'gjjgfjfgkk@live.nl', '2017-07-19 11:39:45', 0, '%1', 500, 1, '1', '', 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, '0', '', '1%1%-1%1', '0,0,0', '', '', 0),
(200, 'fdhfdhhfdjgf', 'fdhfdhhfdjgf', '04B2585A3F36B24B395D20EC4EAB411A', '', 'fhh@lackmail.ru', '2017-07-21 12:03:55', 0, '%1', 500, 1, '1', '', 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, '0', '', '1%1%-1%1', '0,0,0', '', '', 0),
(201, 'gjgjgfjgf', 'gjgjgfjgf', '65F44758115B0FCD172EA707E838BAFD', '', 'sfdg@lackmail.ru', '2017-07-21 12:04:56', 0, '%1', 500, 1, '1', '', 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, '0', '', '1%1%-1%1', '0,0,0', '', '', 0),
(202, 'hffdhfdhdhf', 'hffdhfdhdhf', '2601E3F7A9BF69FBE24FF5109B57C760', '', 'gjjgjggkk@lackmail.ru', '2017-07-21 12:06:29', 0, '%1', 500, 1, '1', '', 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, '0', '', '1%1%-1%1', '0,0,0', '', '', 0);

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `postcards`
--

CREATE TABLE `postcards` (
  `ID` int(10) UNSIGNED NOT NULL,
  `Recipient` int(10) UNSIGNED NOT NULL,
  `SenderName` char(12) NOT NULL,
  `SenderID` int(10) UNSIGNED NOT NULL,
  `Details` varchar(12) NOT NULL,
  `Date` int(8) NOT NULL,
  `Type` smallint(5) UNSIGNED NOT NULL,
  `HasRead` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `postcards`
--

INSERT INTO `postcards` (`ID`, `Recipient`, `SenderName`, `SenderID`, `Details`, `Date`, `Type`, `HasRead`) VALUES
(2, 102, 'Ben_', 101, '', 1453826828, 37, 1),
(4, 102, 'Ben_', 101, '', 1454107091, 217, 1);

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `puffles`
--

CREATE TABLE `puffles` (
  `ID` int(10) UNSIGNED NOT NULL,
  `Owner` int(10) UNSIGNED NOT NULL,
  `Name` char(12) NOT NULL,
  `AdoptionDate` int(8) NOT NULL,
  `Type` tinyint(3) UNSIGNED NOT NULL,
  `Food` tinyint(3) UNSIGNED NOT NULL DEFAULT '100',
  `Play` tinyint(3) UNSIGNED NOT NULL DEFAULT '100',
  `Rest` tinyint(3) UNSIGNED NOT NULL DEFAULT '100',
  `Walking` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `puffles`
--

INSERT INTO `puffles` (`ID`, `Owner`, `Name`, `AdoptionDate`, `Type`, `Food`, `Play`, `Rest`, `Walking`) VALUES
(3, 101, 'Blue', 1453750614, 0, 100, 100, 100, 0),
(4, 101, 'Blue', 1453752421, 0, 100, 100, 100, 0),
(5, 101, 'Red', 1453753127, 5, 100, 100, 100, 1),
(6, 101, 'Yellow', 1453753887, 6, 100, 100, 100, 0),
(7, 101, 'Pink', 1453829330, 1, 100, 100, 100, 0),
(8, 101, 'Purple', 1454159945, 4, 100, 100, 100, 0);

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `username` text,
  `about` text,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `last_login` datetime DEFAULT NULL,
  `status` enum('active','inactive') DEFAULT 'active',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexen voor geëxporteerde tabellen
--

--
-- Indexen voor tabel `bans`
--
ALTER TABLE `bans`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `Time` (`Time`);

--
-- Indexen voor tabel `igloos`
--
ALTER TABLE `igloos`
  ADD PRIMARY KEY (`ID`);

--
-- Indexen voor tabel `penguins`
--
ALTER TABLE `penguins`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `Username` (`Username`);

--
-- Indexen voor tabel `postcards`
--
ALTER TABLE `postcards`
  ADD PRIMARY KEY (`ID`);

--
-- Indexen voor tabel `puffles`
--
ALTER TABLE `puffles`
  ADD PRIMARY KEY (`ID`);

--
-- Indexen voor tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT voor geëxporteerde tabellen
--

--
-- AUTO_INCREMENT voor een tabel `bans`
--
ALTER TABLE `bans`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT voor een tabel `igloos`
--
ALTER TABLE `igloos`
  MODIFY `ID` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT voor een tabel `penguins`
--
ALTER TABLE `penguins`
  MODIFY `ID` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=203;
--
-- AUTO_INCREMENT voor een tabel `postcards`
--
ALTER TABLE `postcards`
  MODIFY `ID` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT voor een tabel `puffles`
--
ALTER TABLE `puffles`
  MODIFY `ID` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT voor een tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
