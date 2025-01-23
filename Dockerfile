FROM ubuntu
MAINTAINER Raghu
RUN apt update 
CMD service apache2 start
EXPOSE 80:8080
