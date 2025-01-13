# Gunakan image Node.js sebagai base image
FROM node:16

# Set working directory di dalam container
WORKDIR /app

# Salin package.json dan package-lock.json ke dalam container
COPY package*.json ./

# Install dependencies
RUN npm install

# Salin seluruh isi proyek ke dalam container
COPY . .

# Expose port aplikasi
EXPOSE 5050

# Jalankan aplikasi
CMD ["npm", "start"]
