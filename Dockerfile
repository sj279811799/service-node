FROM node:7.3.0

COPY . /home/service-node

WORKDIR /home/service-node

EXPOSE 8001

CMD ["npm", "run", "start"]