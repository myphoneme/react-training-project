FROM ubuntu
RUN apt update -y
RUN apt install apache2 -y
WORKDIR /var/www/html
RUN rm -rf index.html
EXPOSE 80:8080
CMD ["apachectl", "-D", "FOREGROUND"]
