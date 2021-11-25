FROM node:14

WORKDIR /UniAlugue-API/

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 4000

CMD [ "npm", "start" ]