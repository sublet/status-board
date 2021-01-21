default:
	npm install

start:
	rm -rf .build
	npm start

lint:
	npm run lint

clean:
	rm -rf node_modules
	npm cache clean --force
	npm install

ngrok:
	ngrok http 8085 -subdomain=speakeasy-react