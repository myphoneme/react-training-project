FROM ubuntu
MAINTAINER Raghu
RUN apt update -y
RUN apt install apache2 -y
CMD service apache2 start
EXPOSE 80:8080
