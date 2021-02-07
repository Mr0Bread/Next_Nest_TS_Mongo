up:
	docker-compose -f docker-compose.yml up -d
down:
	docker-compose -f docker-compose.yml down --remove-orphans
full-rebuild:
	docker-compose -f docker-compose.yml build --pull --no-cache
