BOARD_URL = "https://trello.com/b/U5BRpsu7/mark-bittman-recipes-board"

example:
	@curl --silent --output boards/example.json $(BOARD_URL).json
	@npm install --only=development --quiet --no-progress --no-warnings
	@npm run build
	@npm start
