# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:20-alpine

WORKDIR /app

# Install production dependencies only
COPY package*.json ./

RUN npm ci --omit=dev

# Copy built application from builder stage
COPY --from=builder /app/dist ./dist

# Expose port
EXPOSE 4200

# Start the application
CMD ["npm", "run", "serve:ssr:MontraSoft"]
