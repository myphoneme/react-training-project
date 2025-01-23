FROM ubuntu
MAINTAINER Raghu
RUN apt update 
WORKDIR /var/www/html
CMD service apache2 start
EXPOSE 80:8080
