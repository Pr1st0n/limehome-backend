FROM node:15.1.0-stretch-slim

COPY  /src /app/src
COPY  /.env /app/.env
COPY  /.eslintrc.json /app/.eslintrc.json
COPY  /jest.config.ts /app/jest.config.ts
COPY  /package.json /app/package.json
COPY  /package-lock.json /app/package-lock.json
COPY  /tsconfig.json /app/tsconfig.json

WORKDIR /app

RUN npm i && npm run build

CMD npm run start

EXPOSE 3000
