FROM node:20.8.1-alpine

# ENV NODE_ENV "development"
# ENV PORT 3000

WORKDIR /app
COPY . .
RUN npm ci --silent && npm run build

CMD ["npm", "start"]
