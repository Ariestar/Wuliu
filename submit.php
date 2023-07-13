<?php
// 获取表单数据
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];

// 将数据存储到数据库或执行其他操作
// ...

// 重定向到成功页面或其他页面
header('Location: contact.html');
exit();
?>