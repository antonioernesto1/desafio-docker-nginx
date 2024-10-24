FROM mysql:latest

COPY create_table.sql /docker-entrypoint-initdb.d/

ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=desafio_docker_db