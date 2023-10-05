FROM "node"
WORKDIR /opt/products
COPY package*.json .
RUN npm i
COPY . ./
EXPOSE "3000"
CMD ["sleep", "infinity"]