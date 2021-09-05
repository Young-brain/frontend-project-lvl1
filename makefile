install:
	npm ci
	
brain:
	node bin/ld-brain-games.js

even:
	node bin/ld-brain-even.js

calc:
	node bin/ld-brain-calc.js

publish:
	npm publish --dry-run

lint:
	npx eslint .
lint-fix:
	npx eslint . --fix