install-sdk:
	yalc add @sentry-internal/feedback

watch-sdk:
	(trap 'kill 0' SIGINT; make watch-sdk-types & make watch-sdk-core & make watch-sdk-feedback)

watch-sdk-types:
	cd ~/code/sentry-javascript/packages/types && \
		yarn nodemon --exec "yarn clean && yarn build:types" --watch src -e ts

watch-sdk-core:
	cd ~/code/sentry-javascript/packages/core && \
		yarn nodemon --exec "rm -rf ./build/* && yarn build:dev && yarn yalc:publish" --watch src -e ts

watch-sdk-feedback:
	cd ~/code/sentry-javascript/packages/feedback && \
		yarn nodemon --exec "rm -rf ./build/* && yarn build:dev && yarn yalc:publish" --watch src -e ts,tsx
