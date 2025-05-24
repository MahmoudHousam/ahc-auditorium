FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .

# Development mode (with live reload)
CMD ["npm", "run", "dev"]

# Alternative for production:
# RUN npm run build
# CMD ["npm", "run", "preview"]