# 1. Use official Node image
FROM node:20

# 2. Set working directory
WORKDIR /app

# 3. Copy package.json and package-lock.json
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy the rest of the app
COPY . .

# 6. Expose port (Vite uses 5173 by default)
EXPOSE 5173

# 7. Start the development server
CMD ["npm", "run", "dev", "--", "--host"]
