default:
	npm install

start:
	rm -rf .build
	npm start

test:
	npm test

test:
	npm run test

clean:
	rm -rf node_modules
	npm cache clean --force
	npm install

ngrok:
	ngrok http 8085 -subdomain=status-board