FROM node:8.11.2

COPY . /home/service-node

WORKDIR /home/service-node

EXPOSE 8001

CMD ["node", "run", "start"]