install: 
	npm ci

brain-even:
	node bin/scripts/brain-even.js

brain-calc:
	node bin/scripts/brain-calc.js

brain-gcd:
	node bin/scripts/brain-gcd.js

brain-progression:
	node bin/scripts/brain-progression.js

publish:
	npm publish --dry-run

lint:
	npx eslint .