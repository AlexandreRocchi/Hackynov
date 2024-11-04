FROM debian:latest


RUN apt-get update && apt-get install -y \
    apache2 \
    openssh-server \
    sudo \
    php \
    netcat-traditional \
    python3 \
    zip \
    unzip \
    php-fpm 


RUN a2enmod rewrite
RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf


RUN rm /var/www/html/index.html

COPY image1.png image2.png image3.png index.php /var/www/html/


RUN mkdir /var/www/html/users && chown www-data:www-data /var/www/html/users


COPY login_dev.txt /var/www/html/users/
RUN chmod 000 /var/www/html/users/login_dev.txt


RUN usermod -aG sudo www-data && echo "www-data ALL=(ALL) NOPASSWD: /usr/bin/find" >> /etc/sudoers

RUN useradd -m dev && echo 'dev:rceezggwp65' | chpasswd


RUN mkdir /home/dev/Pre_Prod_Games


COPY battleship_minimalist.zip /home/dev/Pre_Prod_Games/


RUN mkdir /var/run/sshd
RUN sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin no/' /etc/ssh/sshd_config
RUN sed -i 's/#Port 22/Port 5582/' /etc/ssh/sshd_config
RUN echo 'root:ewsxdrcftvgybhujnsexdrcftgvybhjnwsexdrcftvgybhuwsexdrtfgy' | chpasswd
RUN passwd -l root
RUN chown dev:dev /home/dev && chmod 700 /home/dev
RUN chown -R dev:dev /home/dev/Pre_Prod_Games


EXPOSE 5580 5582


CMD service ssh start && apachectl -D FOREGROUND