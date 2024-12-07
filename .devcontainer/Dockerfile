FROM node:alpine

# Agregar usuario no root
ARG USERNAME=dev
ARG GROUPNAME=dev

# Instalar herramientas extra útiles para desarrollo
RUN apk add --no-cache git bash shadow

RUN echo "root:root123" | chpasswd 

RUN chmod u+s /bin/su

# Crear usuario no root
RUN addgroup $GROUPNAME \
    && adduser -S -G $GROUPNAME -s /bin/bash $USERNAME

WORKDIR /home/dev/visittrackerfiis