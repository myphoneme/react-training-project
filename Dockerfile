FROM centos:latest
RUN /bin/sh -c yum install httpd
WORKDIR /var/www/html
CMD ["/usr/sbin/httpd", "-D",  "FOREGROUND"]
EXPOSE 80
