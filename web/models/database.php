<?php

global $db;

$db = new mysqli(
  $_ENV['MYSQL_HOST'],
  $_ENV['MYSQL_USER'],
  $_ENV['MYSQL_PASSWORD'],
  $_ENV['MYSQL_DATABASE']
);

$db->set_charset('utf8mb4');
