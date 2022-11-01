install: 
	npm ci

brain-even:
	node bin/scripts/brain-even.js

brain-calc:
	node bin/scripts/brain-calc.js

publish:
	npm publish --dry-run

lint:
	npx eslint .