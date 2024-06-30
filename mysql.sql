create database adonisApi;
create USER 'adonisuser'@'localhost' IDENTIFIED WITH mysql_native_password BY 'adonis1245';
FLUSH PRIVILEGES;
GRANT ALL PRIVILEGES ON adonisapi.* TO 'adonisuser'@'localhost';
