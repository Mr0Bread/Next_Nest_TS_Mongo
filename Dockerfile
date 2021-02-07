FROM node:14.15.4 as client
WORKDIR /usr/src/app
COPY /src/client/package*.json ./
RUN npm install
COPY /src/client .
EXPOSE 3000
CMD ["npm", "run", "dev"]

FROM node:14.15.4 as admin
WORKDIR /usr/src/app
COPY /src/admin/package*.json ./
RUN npm install
COPY /src/admin .
EXPOSE 3001
CMD ["npm", "run", "dev"]

FROM node:14.15.4 as backend
WORKDIR /usr/src/app
COPY /src/app/package*.json ./
RUN npm install
COPY /src/app .
EXPOSE 5000
CMD ["npm", "run", "start:dev"]
