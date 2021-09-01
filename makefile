install:
	npm ci
	
brain:
	node bin/ld-brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .