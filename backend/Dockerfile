FROM node:5.4
COPY package.json /src/package.json
WORKDIR /src
RUN npm install
COPY server.js /src
CMD ["node", "src/server.js"]