FROM node:16-alpine
RUN mkdir -p /app
WORKDIR /app
COPY . .
RUN npm install -g npm@9.8.1
RUN npm install
EXPOSE 3000
CMD ["npm", "run", "dev"]
