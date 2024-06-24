FROM node:alpine3.19
COPY . /app
WORKDIR /app
RUN npm install
ENV NAME project

EXPOSE 8000

CMD ["npm", "start"]

