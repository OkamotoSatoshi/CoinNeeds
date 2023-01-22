# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.28)
# Database: stone_plan
# Generation Time: 2023-01-18 17:28:41 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table nav_site
# ------------------------------------------------------------

DROP TABLE IF EXISTS `nav_site`;

CREATE TABLE `nav_site` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) CHARACTER SET utf8 DEFAULT NULL COMMENT '路由名称，并非名字',
  `c_1` varchar(255) DEFAULT NULL,
  `c_2` int(1) DEFAULT NULL,
  `sort` int(10) DEFAULT NULL COMMENT '排序数字越大显示越靠前',
  `draft` int(1) DEFAULT NULL COMMENT '1为草稿，2为新，0为public',
  `title` varchar(20) DEFAULT NULL COMMENT '标题',
  `thumbnail` varchar(255) DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `tags` varchar(255) DEFAULT NULL COMMENT 'Jsong格式标签',
  `website` varchar(255) DEFAULT NULL COMMENT '官网',
  `twitter` varchar(255) DEFAULT NULL,
  `github` varchar(255) DEFAULT NULL,
  `telegram` varchar(255) DEFAULT NULL,
  `discord` varchar(255) DEFAULT NULL,
  `descrip` varchar(255) DEFAULT NULL COMMENT '简介',
  `content` longtext COMMENT 'html code',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

LOCK TABLES `nav_site` WRITE;
/*!40000 ALTER TABLE `nav_site` DISABLE KEYS */;

INSERT INTO `nav_site` (`id`, `name`, `c_1`, `c_2`, `sort`, `draft`, `title`, `thumbnail`, `logo`, `tags`, `website`, `twitter`, `github`, `telegram`, `discord`, `descrip`, `content`)
VALUES
	(60,NULL,'1',0,60,1,'币安交易所','02c7bf05a620656c0336f9501.png','02c7bf05a620656c0336f9500.png','[{\"name\":\"简介\",\"score\":\"4.5\"},{\"name\":\"技术文档\",\"score\":\"4.5\"},{\"name\":\"中文社区\",\"score\":\"4.8\"}]','https://www.binance.com/zh-CN','https://twitter.com/binance','https://github.com/binance','https://t.me/BinanceChinese','https://discord.gg/binanceofficial','币安的货币交易服务开始于2017年，每秒可以处理约140万个订单，提供700多种加密货币的交易，包括受欢迎的加密货币如比特币，以太坊，莱特币以及它自己的BNB代币。','<blockquote style=\"text-align: start;\"><strong>币安</strong>（英语：Binance），是一家全球性的<a href=\"https://zh.wikipedia.org/wiki/%E5%8A%A0%E5%AF%86%E8%B2%A8%E5%B9%A3%E4%BA%A4%E6%98%93%E6%89%80\" target=\"\">加密货币交易所</a>，为超过100种加密货币提供交易平台。2018年初以来，币安在交易量方面被认为是全世界上最大的加密货币交易所。<sup>[1]</sup></blockquote><p style=\"text-align: start;\">币安英文“ Binance”的名字基于单字binary和finance的组合。币安的货币交易服务开始于2017年，每秒可以处理约140万个订单，提供700多种加密货币的交易，包括受欢迎的加密货币如比特币，以太坊，莱特币以及它自己的BNB代币。<sup>[2]</sup></p><p style=\"text-align: start;\">2022年6月，<a href=\"https://zh.wikipedia.org/wiki/%E5%BD%AD%E5%8D%9A%E7%A4%BE\" target=\"\">彭博社</a>报导，<a href=\"https://zh.wikipedia.org/wiki/%E7%BE%8E%E5%9C%8B%E8%AD%89%E5%88%B8%E4%BA%A4%E6%98%93%E5%A7%94%E5%93%A1%E6%9C%83\" target=\"\">美国证券交易委员会</a>调查币安在2017的<strong>首次代币发行</strong>（ICO）是否涉及违反证券法。<sup>[3][4]</sup></p><p style=\"text-align: start;\"><br></p><h5 style=\"text-align: start;\">创始人介绍</h5><blockquote style=\"text-align: start;\">币安的创办人为<a href=\"https://zh.wikipedia.org/wiki/%E8%B5%B5%E9%95%BF%E9%B9%8F\" target=\"\">赵长鹏</a>。2005年，赵长鹏在上海创立了富讯公司，专门为<a href=\"https://zh.wikipedia.org/wiki/%E8%A8%BC%E5%88%B8\" target=\"\">证券</a>商创建<a href=\"https://zh.wikipedia.org/wiki/%E9%AB%98%E9%A0%BB%E4%BA%A4%E6%98%93\" target=\"\">高频交易</a>系统。2013年，赵长鹏加入了<a href=\"https://zh.wikipedia.org/wiki/Blockchain.info\" target=\"\">Blockchain.info</a>的<a href=\"https://zh.wikipedia.org/wiki/%E5%8A%A0%E5%AF%86%E8%B2%A8%E5%B9%A3%E9%8C%A2%E5%8C%85\" target=\"\">加密货币钱包</a>团队，成为团体的第三位成员。赵长鹏曾任电子交易平台<a href=\"https://zh.wikipedia.org/w/index.php?title=OKCoin&amp;action=edit&amp;redlink=1\" target=\"\">OKCoin</a>的首席技术官，任期少于一年。<sup>[5]</sup></blockquote><p style=\"text-align: start;\"><br></p><ul><li style=\"text-align: start;\">币安创立于中国，但2017年9月起，中国政府下令禁止加密货币交易，币安便将服务器及总部迁移至日本。<sup>[6]</sup></li><li style=\"text-align: start;\">2018年，币安于台湾设立了办事处。<sup>[5]</sup></li><li style=\"text-align: start;\">截至2018年1月，币安为全球最大的<a href=\"https://zh.wikipedia.org/wiki/%E5%8A%A0%E5%AF%86%E8%B2%A8%E5%B9%A3\" target=\"\">加密货币</a>交易所，其<a href=\"https://zh.wikipedia.org/wiki/%E5%8A%A0%E5%AF%86%E8%B2%A8%E5%B9%A3\" target=\"\">加密货币</a>BNB市值13亿美元。<sup>[1]</sup></li><li style=\"text-align: start;\">2018年3月，基于中国与日本对<a href=\"https://zh.wikipedia.org/wiki/%E5%8A%A0%E5%AF%86%E8%B2%A8%E5%B9%A3\" target=\"\">加密货币</a>的监管非常严格，币安宣布将于<a href=\"https://zh.wikipedia.org/wiki/%E9%A6%AC%E8%80%B3%E4%BB%96\" target=\"\">马耳他</a>成立新办事处。<sup>[7]</sup></li><li style=\"text-align: start;\">2018年4月，币安与百慕大政府签署了一份<a href=\"https://zh.wikipedia.org/wiki/%E8%AB%92%E8%A7%A3%E5%82%99%E5%BF%98%E9%8C%84\" target=\"\">谅解备忘录</a><sup>[8]</sup>。几个月后，币安也与马耳他证券交易所签署了类似的备忘录，以开发一个加密货币的交易平台<sup>[9]</sup>。此外，为拓展其在欧洲的影响力，币安计划迁移至<a href=\"https://zh.wikipedia.org/wiki/%E6%B3%BD%E8%A5%BF\" target=\"\">泽西</a>并获取当地的<a href=\"https://zh.wikipedia.org/wiki/%E4%BA%A4%E6%98%93%E6%89%80\" target=\"\">交易所</a>牌照，增加包括<a href=\"https://zh.wikipedia.org/wiki/%E6%AD%90%E7%BE%85\" target=\"\">欧罗</a>及<a href=\"https://zh.wikipedia.org/wiki/%E8%8B%B1%E7%A3%85\" target=\"\">英磅</a>的交易对。<sup>[10]</sup></li><li style=\"text-align: start;\">2018年8月，币安与其他三家大型交易所共同募集了3200万美元用于<a href=\"https://zh.wikipedia.org/wiki/%E7%A8%B3%E5%AE%9A%E5%B8%81\" target=\"\">稳定币</a>项目。稳定币的理念是提供一种不受<a href=\"https://zh.wikipedia.org/wiki/%E6%AF%94%E7%89%B9%E5%B9%A3%E6%AD%B7%E5%8F%B2\" target=\"\">比特币</a>和其他<a href=\"https://zh.wikipedia.org/wiki/%E6%95%B0%E5%AD%97%E8%B5%84%E4%BA%A7\" target=\"\">数字资产</a>显著波动性影响的<a href=\"https://zh.wikipedia.org/wiki/%E5%AF%86%E7%A2%BC%E8%B2%A8%E5%B9%A3\" target=\"\">密码货币</a>。<sup>[11][12]</sup></li><li style=\"text-align: start;\">2018年9月，纽约司法部办事处的一份报告指出，在13间虚拟货币交易所当中，4间交易所拒绝向司法部提供以针对安全性、防黑客措施与事业务实践为由所要求的文件。币安被指为其中一间。纽约司法部办事处长达42页的报告指出，币安对<a href=\"https://zh.wikipedia.org/wiki/%E5%8A%A0%E5%AF%86%E8%B2%A8%E5%B9%A3\" target=\"\">加密货币</a>在其平台上市所收的费用以及可能存在的非公开不平等交易有机会对交易者造成负面影响。此外，报告指已证实与13间交易所进成业务的包括<a href=\"https://zh.wikipedia.org/wiki/%E7%BA%BD%E7%BA%A6%E5%B7%9E\" target=\"\">纽约</a>公民。基于这项调查，纽约司法部办事处向纽约财务部提出币安有机会违反了纽约的虚拟货币监管条例。<sup>[13]</sup></li><li style=\"text-align: start;\">2018年12月5日，赵长鹏宣布其去中心化交易所（Binance DEX）会创建在Binance Chain公链上。<sup>[14][15]</sup> 赵长鹏在访问中表示其去中心化交易所的“即时”交易将成为<a href=\"https://zh.wikipedia.org/wiki/%E4%BB%A5%E5%A4%AA%E5%9D%8A\" target=\"\">以太坊</a>，<a href=\"https://eos.io/\" target=\"\">EOS</a> （<a href=\"https://web.archive.org/web/20200229071809/https://eos.io/\" target=\"\">页面存档备份</a>，存于<a href=\"https://zh.wikipedia.org/wiki/%E4%BA%92%E8%81%94%E7%BD%91%E6%A1%A3%E6%A1%88%E9%A6%86\" target=\"\">互联网档案馆</a>） ，<a href=\"https://tron.network/\" target=\"\">TRON</a> （<a href=\"https://web.archive.org/web/20190121202224/https://tron.network/\" target=\"\">页面存档备份</a>，存于<a href=\"https://zh.wikipedia.org/wiki/%E4%BA%92%E8%81%94%E7%BD%91%E6%A1%A3%E6%A1%88%E9%A6%86\" target=\"\">互联网档案馆</a>） 及<a href=\"https://www.stellar.org/\" target=\"\">Stella</a> （<a href=\"https://web.archive.org/web/20190121212944/https://www.stellar.org/\" target=\"\">页面存档备份</a>，存于<a href=\"https://zh.wikipedia.org/wiki/%E4%BA%92%E8%81%94%E7%BD%91%E6%A1%A3%E6%A1%88%E9%A6%86\" target=\"\">互联网档案馆</a>） 的竞争对手<sup>[16]</sup>。</li><li style=\"text-align: start;\">2021年6月26日，英国金融行为监管局宣布币安在英国不得开展与受监管金融活动有关的业务<sup>[17]</sup>。截至目前，中国、美国和土耳其用户无法交易股票代币。</li></ul><p><br></p><p>######</p><h4><strong>官方</strong></h4><p>量化交易 API &nbsp;<a href=\"https://binance-docs.github.io/apidocs/spot/cn/#185368440e\" target=\"_blank\">https://binance-docs.github.io/</a></p><p><br></p><p><br></p><p>######</p><h4><strong>官方</strong></h4><p>交流电报群 &nbsp; <a href=\"https://t.me/BinanceChinese\" target=\"_blank\">https://t.me/BinanceChinese</a> </p><p>公告电报群 &nbsp; <a href=\"https://t.me/binance_announcements\" target=\"_blank\">https://t.me/binance_announcements</a> </p><p>NFT电报群 &nbsp; <a href=\"https://t.me/BinanceNFTs\" target=\"_blank\">https://t.me/BinanceNFTs</a> </p><p>学院电报群 <a href=\"https://t.me/BinanceAcademyChat\" target=\"_blank\">https://t.me/BinanceAcademyChat</a> </p><p>推特 &nbsp;<a href=\"https://twitter.com/binance\" target=\"_blank\">https://twitter.com/binance</a> </p><p><br></p><p><br></p>'),
	(61,NULL,'3',NULL,61,0,'批量转币工具','02c7bf05a620656c0336f9505.png','02c7bf05a620656c0336f9504.png','[{\"name\":\"简介\",\"score\":\"4.3\"},{\"name\":\"社区\",\"score\":\"4.6\"},{\"name\":\"教程\",\"score\":\"4.8\"},{\"name\":\"捐赠\",\"score\":\"4.2\"}]','http://localhost:3006/transfer/index.html','https://twitter.com/OkamotoSatosh1','https://github.com/OkamotoSatoshi/web3-study','https://t.me/stone_web3',NULL,'平台创始人研发的批量转主币和ERC20 Token的非盈利工具，该工具能一次性批量执行250～350次转币，可节省约80%的Gas费用','<p><br></p><p>######</p><p><br></p><p>######</p><p><br></p><p>######</p><p><br></p>'),
	(67,NULL,'3',NULL,67,0,'批量生成钱包','02c7bf05a620656c0336f9507.png','02c7bf05a620656c0336f9506.png','[{\"name\":\"教程\",\"score\":\"4.3\"},{\"name\":\"安全\",\"score\":\"4.8\"}]','/createERC20/index.html','https://twitter.com/OkamotoSatosh1','https://twitter.com/OkamotoSatosh1','https://t.me/stone_web3',NULL,'官方自研的免费公开批量成功工具，安全可靠！每秒可生成上千个钱包地址。ETH,BSC,FTM所有基于以太坊技术的都通用。','<p><br></p><h4><strong>第一步：断开网络连接</strong></h4><p><br></p><h4>第二步：选择要生成的数量</h4><p><img src=\"/uploads/02c7bf05a620656c0336f950a.png\" alt=\"\" data-href=\"\" style=\"width: 100%;\"/></p><h4>第三步：复制或者下载</h4><p><img src=\"/uploads/02c7bf05a620656c0336f9509.png\" alt=\"\" data-href=\"\" style=\"\"/></p><p><br></p><p><span style=\"color: rgb(225, 60, 57);\"><strong>注意事项：如果下载后无法使用，是excel表格的格式问题，将所有复制到txt文件中即可使用。</strong></span></p><p><br></p><p>######</p><p>平台本身不会记录任何用户生成的技术。但盗币的手段和场景非常的负责。因此给大家做了个视频介绍如何确保私钥的安全性。</p><p><br></p><div data-w-e-type=\"video\" data-w-e-is-void>\n<iframe width=\"600\" height=\"420\" src=\"https://www.youtube.com/embed/Oy5S97q0RTQ\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen=\"\"></iframe>\n</div><p style=\"text-align: center;\"><br></p>'),
	(68,NULL,'3',NULL,68,0,'去中心化内容付费','02c7bf05a620656c0336f950c.png','02c7bf05a620656c0336f950b.png','[{\"name\":\"技术教程\",\"score\":\"5.0\"},{\"name\":\"功能\",\"score\":\"4.5\"},{\"name\":\"使用教程\",\"score\":\"4.6\"}]','/createERC20/index.html','https://twitter.com/OkamotoSatosh1','https://github.com/OkamotoSatoshi/web3-study','https://t.me/stone_web3',NULL,'这是首个去中心化知识内容付费的系统，类似于微信公众文章打赏和腾讯课堂。用BNB进行结算，同时支持二级分享，设置佣金等功能，所有的规则都写到了合约中。','<p><br></p><p><br></p><p>######</p><p><br></p><p>######</p><p><br></p><p><br></p>'),
	(70,NULL,'1',1,NULL,0,'test','2bcf475af8e320a55da305c06.jpeg','2bcf475af8e320a55da305c05.png','[]','djfksjdfkjkdfjk','https://twitter.com/C_EldenRing','https://github.com/efun-tech/efun-token','https://t.me/CryptoEldenRing_official','https://t.me/Dragonverse_Ann',NULL,'<p><img src=\"/uploads/2bcf475af8e320a55da305c04.jpeg\" alt=\"\" data-href=\"\" style=\"\"/></p>');

/*!40000 ALTER TABLE `nav_site` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table telegram_group
# ------------------------------------------------------------

DROP TABLE IF EXISTS `telegram_group`;

CREATE TABLE `telegram_group` (
  `id` varchar(50) NOT NULL DEFAULT '',
  `type` varchar(20) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL COMMENT '名称',
  `tags` varchar(255) DEFAULT NULL COMMENT '群的属性',
  `status` int(11) DEFAULT NULL COMMENT '0表示不能对话,1表示可以对话',
  `join_time` varchar(20) DEFAULT NULL COMMENT '入群时间',
  `administrators` varchar(255) DEFAULT NULL COMMENT '群管理员数组(id&username)',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `telegram_group` WRITE;
/*!40000 ALTER TABLE `telegram_group` DISABLE KEYS */;

INSERT INTO `telegram_group` (`id`, `type`, `name`, `tags`, `status`, `join_time`, `administrators`)
VALUES
	('-1001511556254','supergroup','机器人测试群',NULL,1,'1673884146319',NULL),
	('-1001555841326','supergroup','新项目监听',NULL,NULL,'1673890361',NULL),
	('-1001761275902','supergroup','Web3 交流群',NULL,NULL,'1673889962',NULL);

/*!40000 ALTER TABLE `telegram_group` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
