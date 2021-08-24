# pull official base image
FROM node

WORKDIR /app

COPY package*.json ./
RUN npm ci
COPY . ./

EXPOSE 3000

CMD ["npm", "start"]
