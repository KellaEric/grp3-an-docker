FROM httpd:latest

COPY node-vhost.conf /usr/local/apache2/conf/extra/node-vhost.conf

RUN echo "Include conf/extra/node-vhost.conf" >> /usr/local/apache2/conf/httpd.conf

CMD ["httpd", "-D", "FOREGROUND"]