.PHONY: all install run

all: install run

install:
	docker-compose run --rm app yarn install

run:
	docker-compose run --service-ports --rm app yarn start