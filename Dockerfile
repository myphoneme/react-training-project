FROM ubuntu
MAINTAINER Raghu
RUN apt update 
RUN apt install apache2
CMD service apache2 start
EXPOSE 80:8080
