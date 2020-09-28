#
# MongoDB Dockerfile
#
# Pull base image.
FROM dockerfile/ubuntu


# Install MongoDB.
RUN \
  apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10 && \
  echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' > /etc/apt/sources.list.d/mongodb.list && \
  apt-get update && \
  apt-get install -y mongodb-org && \
  rm -rf /var/lib/apt/lists/*

# Define mountable directories.
VOLUME ["/data/db"]

# Define working directory.
WORKDIR /data

# Define default command.
CMD ["mongod"]

# Expose ports.
#   - 27017: process
#   - 28017: http
EXPOSE 27017
EXPOSE 28017

# docker run  -p 27017:27017 -v /home/andiroid/data:/data/db --name mongoDB mongo
#


# docker run  -p 3306:3306 -v /home/andiroid/mysql:/var/lib/mysql --name mySQL -e MYSQL_ROOT_PASSWORD=123 mysql
# docker exec -it mySQL /bin/bash
# mysql -uroot -p123
