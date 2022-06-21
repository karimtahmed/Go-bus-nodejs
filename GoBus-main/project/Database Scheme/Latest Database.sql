-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: go_bus
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `ads`
--

DROP TABLE IF EXISTS `ads`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ads` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Code` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Name` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `PhoneNum` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Email` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Password` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `is_deleted` varchar(45) COLLATE utf8_unicode_ci DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ads`
--

LOCK TABLES `ads` WRITE;
/*!40000 ALTER TABLE `ads` DISABLE KEYS */;
INSERT INTO `ads` VALUES (1,'1','aa','2131','sss','11','2021-09-06 01:59:50','0'),(2,'2','11111','sss','2','$2b$10$w0wtzEPBHaFeHrgpMxqEZ.AFIP/AbqTWqOxnLT9sH.cXbRdN91FLq','2021-09-06 02:11:33','0'),(3,'2','0100','user2','aaaa','$2b$10$D8aO8LwH9oEg/aWouZ58h.BWhKt62NYAKw8waSdM2wv7Ntdg67sNS','2021-09-06 02:36:23','0'),(4,'98','2131','aaddd','sssfff','$2b$10$tSx6IjZKAcvAFAablT7ZjOh47He7rSepdU81JlTNc2Uf74R2qs9ha','2021-09-08 14:31:05','0'),(5,'98','2131','aaddd','sssfff','$2b$10$0OpeQUGvsZQ32dsY1TJcVu/CN4Xm//bTbl5Glo0PsqGKVpNLD7GC.','2021-09-08 15:30:05','0'),(6,'223141','01000','Aahmoudaa','aaaaasdsadasdasdsada','$2b$10$Ya/xzhG2UsSKOYQVsdnkZ.yypeeK1AaDB3KDpu4S82BOONyj9Gc/O','2021-09-08 21:51:01','0'),(7,'113','user1','01005647891','aaaaaaaaaaaa','$2b$10$.Q4TkyzFmKCjlfl5pB35uOqRuOROAPjk1qSXlGO4a0cvcdfZ2kg7W','2021-09-08 22:42:25','0'),(8,'153','user12','01005647891','aaaaaaaaaaaa','$2b$10$2h5BpWFb3W/HK87ko7p6AewbOi6d5r6K0KqFiBu07D/48f96JokrW','2021-09-09 01:08:28','0'),(9,'153','user12','01005647891','aaaaaaaaaaaa','$2b$10$DGC.eqo41EJCi74g1.o2zutTNcMsiVgk4XB5K7K..pvCj/DT/wZW.','2021-09-09 01:08:39','0'),(10,'153','user12','01005647891','aaaaaaaaaaaa','$2b$10$TpmfhGwqyj8QOZ94YvHdZek5/tlcVDDYN6KT07YPSX/mwBbx3.TIC','2021-09-09 01:12:39','0'),(11,'153','user12','01005647891','aaaaaaaaaaaa','$2b$10$RWWzbUxrVLu61J05US88.ekcTbpp8mySZ0/4R8Irn.f1kw0ZQHpFi','2021-09-09 01:12:53','0'),(12,'153','user12','01005647891','aaaaaaaaaaaa','$2b$10$gfes7zK6O96j/4vcoUA4EuhJH4xFy8qC/K37/wrxHqMmkOPEoUPpy','2021-09-09 01:13:13','0'),(13,'153','user12','01005647891','aaaaaaaaaaaa','$2b$10$iMOjQ2sZ3C8GNFEaa2Abou6Y05Bii7UR7acacWKf0Q9fAguCIuLSm','2021-09-09 02:29:15','0'),(14,'153','user12','01005647891','aaaaaaaaaaaa','$2b$10$S79nEatV.EWsxTLjVcKUrOR.VOiiZb3W0LS6Ngx.EBkkY8BmKqNEW','2021-09-09 02:43:58','0'),(15,'153','user12','01005647891','aaaaaaaaaaaa','$2b$10$Rm7dW3Sm1TtdeUeUgCnXIe5CpU.vY03Erix9yPwco92vmdChY6SJy','2021-09-09 03:09:09','0');
/*!40000 ALTER TABLE `ads` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bus`
--

DROP TABLE IF EXISTS `bus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bus` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Code` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `BusClass` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `BookedSeats` int DEFAULT NULL,
  `AvailSeats` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `is_deleted` varchar(45) COLLATE utf8_unicode_ci DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bus`
--

LOCK TABLES `bus` WRITE;
/*!40000 ALTER TABLE `bus` DISABLE KEYS */;
INSERT INTO `bus` VALUES (1,'1','luxuery',20,50,'2021-09-12 19:21:10','0'),(2,'2','luxuery',20,50,'2021-09-10 20:03:13','0'),(3,'3','Deluxe',20,50,'2021-09-12 19:04:29','0'),(4,'4','Classic',10,40,'2021-09-12 19:04:04','0');
/*!40000 ALTER TABLE `bus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `creditcard`
--

DROP TABLE IF EXISTS `creditcard`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `creditcard` (
  `id` int NOT NULL AUTO_INCREMENT,
  `CardNumber` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `CvC` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `ExpireDate` year DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `is_deleted` varchar(45) COLLATE utf8_unicode_ci DEFAULT '0',
  `payment_id` int NOT NULL,
  PRIMARY KEY (`id`,`payment_id`),
  KEY `fk_creditcard_payment1_idx` (`payment_id`),
  CONSTRAINT `fk_creditcard_payment1` FOREIGN KEY (`payment_id`) REFERENCES `payment` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `creditcard`
--

LOCK TABLES `creditcard` WRITE;
/*!40000 ALTER TABLE `creditcard` DISABLE KEYS */;
INSERT INTO `creditcard` VALUES (1,'$2b$10$aOZMTxs7rJw9pulxXrKSYOvFGW.CcXda7N/n4oS/wDAHgCaSZB6ra','1234',2023,'2021-09-12 19:21:20','0',1),(2,'$2b$10$w37c.ynj5QwVwrl8Bk1c7.dwl0v3qhdHsuhKsQLu3VYS7OkTExqHC','$2b$10$VwDoCWMkUIwM6qfJGiwPD.M3DXuiNxzl53I5I/sFO3lvCfTbbvmZW',2023,'2021-09-10 18:37:44','0',2),(3,'$2b$10$durK2h3TsSem9iZ2q30reeHdFxINF/b3G.G/UVXSAqHxiTMWvM7MO','$2b$10$3b/RbMo/b0UgAawltBslEe4BndIZi9vxotczLRQF9i116xTtgkYhq',2025,'2021-09-10 19:52:27','0',1);
/*!40000 ALTER TABLE `creditcard` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `passenger`
--

DROP TABLE IF EXISTS `passenger`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `passenger` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Code` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Name` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `PhoneNum` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Email` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `Password` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `is_deleted` varchar(45) COLLATE utf8_unicode_ci DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `passenger`
--

LOCK TABLES `passenger` WRITE;
/*!40000 ALTER TABLE `passenger` DISABLE KEYS */;
INSERT INTO `passenger` VALUES (1,'1','user1','0100','aaaa','123','2021-09-12 19:20:59','0'),(2,'2','010','aaaaa','aaaaa@yaaa','$2b$10$KI471sM26fX08hag6hTszOsQfbvR8nhbDNi3RNigwWW4agkEr11Km','2021-09-06 02:42:36','0'),(3,'22','01000','mahmoud','aaaa','$2b$10$HQYQ0cMFIfiCnG.jDSD/kOhXvcOIQnlubHqw8y/xPesqnOQkQgfBG','2021-09-08 17:58:25','0'),(4,'22','01000','mahmoud','aaaa','$2b$10$rDm8yEYRKVTfIm.uIHPeNuxmlHLJSks/hTgibhIssDzM.qgEuzuZi','2021-09-08 20:21:42','0'),(5,'22','01000','mahmoud111','aaaa','$2b$10$roufVapcqP5lp583jfxzLOTDLCeMlZVx8rRHRwcUt31QKQ6j5oFEy','2021-09-08 20:21:46','0'),(6,'113','user1','01005647891','aaaaaaaaaaaaa','$2b$10$8kw9OW4s72SvlFg.Y4U7Vebmd3RmAD4ULaPlkLd/KFTs1ClFBP9OW','2021-09-10 20:11:27','0'),(7,'113','user1','01005647891','aaaaaaaaaaaaa','$2b$10$8kw9OW4s72SvlFg.Y4U7Vebmd3RmAD4ULaPlkLd/KFTs1ClFBP9OW','2021-09-10 20:11:27','0'),(8,'113','user1','01005647891','aaaaaaaaaaaaa','$2b$10$8kw9OW4s72SvlFg.Y4U7Vebmd3RmAD4ULaPlkLd/KFTs1ClFBP9OW','2021-09-10 20:11:27','0'),(9,'113','user1','01005647891','aaaaaaaaaaaaa','$2b$10$8kw9OW4s72SvlFg.Y4U7Vebmd3RmAD4ULaPlkLd/KFTs1ClFBP9OW','2021-09-10 20:11:27','0'),(10,'113','user1','01005647891','aaaaaaaaaaaaa','$2b$10$8kw9OW4s72SvlFg.Y4U7Vebmd3RmAD4ULaPlkLd/KFTs1ClFBP9OW','2021-09-10 20:11:27','0'),(11,'113','user1','01005647891','aaaaaaaaaaaaa','$2b$10$8kw9OW4s72SvlFg.Y4U7Vebmd3RmAD4ULaPlkLd/KFTs1ClFBP9OW','2021-09-10 20:11:27','0'),(12,'113','user1','01005647891','aaaaaaaaaaaaa','$2b$10$8kw9OW4s72SvlFg.Y4U7Vebmd3RmAD4ULaPlkLd/KFTs1ClFBP9OW','2021-09-10 20:11:27','0'),(13,'113','user1','01005647891','aaaaaaaaaaaaa','$2b$10$8kw9OW4s72SvlFg.Y4U7Vebmd3RmAD4ULaPlkLd/KFTs1ClFBP9OW','2021-09-10 20:11:27','0'),(14,'113','user1','01005647891','aaaaaaaaaaaaa','$2b$10$8kw9OW4s72SvlFg.Y4U7Vebmd3RmAD4ULaPlkLd/KFTs1ClFBP9OW','2021-09-10 20:11:27','0'),(15,'113','user1','01005647891','aaaaaaaaaaaaa','$2b$10$8kw9OW4s72SvlFg.Y4U7Vebmd3RmAD4ULaPlkLd/KFTs1ClFBP9OW','2021-09-10 20:11:27','0'),(16,'113','user1','01005647891','aaaaaaaaaaaaa','$2b$10$8kw9OW4s72SvlFg.Y4U7Vebmd3RmAD4ULaPlkLd/KFTs1ClFBP9OW','2021-09-10 20:11:27','0'),(17,'113','user1','01005647891','aaaaaaaaaaaaa','$2b$10$8kw9OW4s72SvlFg.Y4U7Vebmd3RmAD4ULaPlkLd/KFTs1ClFBP9OW','2021-09-10 20:11:27','0'),(18,'113','user1','01005647891','aaaaaaaaaaaaa','$2b$10$8kw9OW4s72SvlFg.Y4U7Vebmd3RmAD4ULaPlkLd/KFTs1ClFBP9OW','2021-09-10 20:11:27','0'),(19,'113','user1','01005647891','aaaaaaaaaaaaa','$2b$10$8kw9OW4s72SvlFg.Y4U7Vebmd3RmAD4ULaPlkLd/KFTs1ClFBP9OW','2021-09-10 20:11:27','0'),(20,'113','user1','01005647891','aaaaaaaaaaaaa','$2b$10$8kw9OW4s72SvlFg.Y4U7Vebmd3RmAD4ULaPlkLd/KFTs1ClFBP9OW','2021-09-10 20:11:27','0'),(21,'113','user1','01005647891','aaaaaaaaaaaaa','$2b$10$8kw9OW4s72SvlFg.Y4U7Vebmd3RmAD4ULaPlkLd/KFTs1ClFBP9OW','2021-09-10 20:11:27','0'),(22,'113','user1','01005647891','aaaaaaaaaaaaa','$2b$10$8kw9OW4s72SvlFg.Y4U7Vebmd3RmAD4ULaPlkLd/KFTs1ClFBP9OW','2021-09-10 20:11:27','0');
/*!40000 ALTER TABLE `passenger` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `PaymentType` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `is_deleted` varchar(45) COLLATE utf8_unicode_ci DEFAULT '0',
  `Code` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment`
--

LOCK TABLES `payment` WRITE;
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
INSERT INTO `payment` VALUES (1,'Credit','2021-09-10 18:13:58','0',NULL),(2,'Credit','2021-09-10 18:34:55','0',NULL);
/*!40000 ALTER TABLE `payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ticket`
--

DROP TABLE IF EXISTS `ticket`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ticket` (
  `passenger_id` int NOT NULL,
  `creditcard_id` int NOT NULL,
  `trip_id` int NOT NULL,
  `trip_bus_id` int NOT NULL,
  `Code` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `SeatNumber` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `is_deleted` varchar(45) COLLATE utf8_unicode_ci DEFAULT '0',
  PRIMARY KEY (`passenger_id`,`creditcard_id`,`trip_id`,`trip_bus_id`),
  KEY `fk_ticket_passenger1_idx` (`passenger_id`),
  KEY `fk_ticket_creditcard1_idx` (`creditcard_id`),
  KEY `fk_ticket_trip1_idx` (`trip_id`,`trip_bus_id`),
  CONSTRAINT `fk_ticket_creditcard1` FOREIGN KEY (`creditcard_id`) REFERENCES `creditcard` (`id`),
  CONSTRAINT `fk_ticket_passenger1` FOREIGN KEY (`passenger_id`) REFERENCES `passenger` (`id`),
  CONSTRAINT `fk_ticket_trip1` FOREIGN KEY (`trip_id`, `trip_bus_id`) REFERENCES `trip` (`id`, `bus_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ticket`
--

LOCK TABLES `ticket` WRITE;
/*!40000 ALTER TABLE `ticket` DISABLE KEYS */;
INSERT INTO `ticket` VALUES (1,1,2,1,'1',1,'2021-09-12 19:12:34','0'),(1,1,4,3,'3',2,'2021-09-12 19:12:34','0'),(2,2,5,2,'2',10,'2021-09-12 19:21:38','0');
/*!40000 ALTER TABLE `ticket` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trip`
--

DROP TABLE IF EXISTS `trip`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `trip` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Code` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `DepTime` datetime DEFAULT NULL,
  `ArTime` datetime DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `is_deleted` varchar(45) COLLATE utf8_unicode_ci DEFAULT '0',
  `bus_id` int NOT NULL,
  `From` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `To` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`,`bus_id`),
  KEY `fk_trip_bus1_idx` (`bus_id`),
  CONSTRAINT `fk_trip_bus1` FOREIGN KEY (`bus_id`) REFERENCES `bus` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trip`
--

LOCK TABLES `trip` WRITE;
/*!40000 ALTER TABLE `trip` DISABLE KEYS */;
INSERT INTO `trip` VALUES (2,'1','2021-02-23 13:13:12','2021-02-24 13:13:12','2021-09-12 19:56:00','0',1,'Cairo','Ain-Sokhna'),(3,'2','2021-02-23 13:13:12','2021-02-24 13:13:12','2021-09-12 19:56:00','0',1,'Cairo','Alexaxndria'),(4,'3','2021-02-23 13:13:12','2021-02-24 13:13:12','2021-09-12 19:56:00','0',3,'Alexandria','Cairo'),(5,'3','2021-02-23 13:13:12','2021-02-24 13:13:12','2021-09-12 19:56:00','0',2,'Cairo ','Hurghada'),(6,'4','2021-02-23 13:13:12','2021-02-25 13:13:12','2021-09-12 19:56:01','0',3,'Hurghada','Cairo'),(7,'4','2021-02-23 13:13:12','2021-02-24 13:13:12','2021-09-12 20:32:05','0',1,'Cairo','Alexxx'),(8,'4','2021-02-23 13:13:12','2021-02-24 13:13:12','2021-09-12 20:33:32','0',1,'Cairo','Alexxx');
/*!40000 ALTER TABLE `trip` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-12 23:14:50
