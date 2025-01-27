FROM ubuntu
RUN apt update -y
RUN apt install vim npm -y
WORKDIR /app
COPY . /app
RUN npm install vite -y
RUN npm run build
#EXPOSE 80 8080
CMD ["npm","run","dev"]
