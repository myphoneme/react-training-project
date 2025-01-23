FROM centos:latest
MAINTAINER eddysaxena123@gmail.com
RUN yum install -y httpd zip unzip nmp
RUN cp /opt/Node-Js/* /var/www/html/
WORKDIR /var/www/html
CMD ["/usr/sbin/httpd", "-D",  "FOREGROUND"]
EXPOSE 80
