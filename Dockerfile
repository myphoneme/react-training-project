FROM ubuntu
RUN apt update -y
RUN apt install apache2 -y
EXPOSE 80:8080
CMD ["apachectl", "-D", "FOREGROUND"]
