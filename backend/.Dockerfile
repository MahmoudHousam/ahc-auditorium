FROM node:18-alpine
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN if [ -f tsconfig.json ]; then npm run build; fi

EXPOSE 5000
CMD ["npm", "run", "dev"]