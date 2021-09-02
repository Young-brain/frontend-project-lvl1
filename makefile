install:
	npm ci
	
brain:
	node bin/ld-brain-games.js

even:
	node bin/ld-brain-even.js

publish:
	npm publish --dry-run

lint:
	npx eslint .