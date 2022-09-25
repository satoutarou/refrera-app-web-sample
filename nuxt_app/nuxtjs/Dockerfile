FROM node:12.0.0-alpine

# ROOTユーザ実行を回避
COPY --chown=node:node . .
USER node

WORKDIR /nuxtjs

COPY package*.json ./

RUN npm install
# 本番用にコードを作成している場合
# RUN npm install --only=production

# アプリケーションのソースをバンドルする
COPY . .

EXPOSE 8080
CMD [ "npm", "run", "dev" ]