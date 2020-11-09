## Property API

This repository implements an API application allowing to access property data and create bookings for these properties.

Usage of PostGis as a database allows storing property coordinates and performing operations such as selecting properties around provided coordinates directly in application.

|Endpoint                    |Description                         |
|----------------------------|------------------------------------|
|/api/properties?at=LAT,LONG |Returns the property around Lat/Lon*|
|/api/bookings               |Creates a booking for a property    |
|/api/properties/:id/bookings|Returns the bookings for a property |
|/api-docs                   |API documentation                   |

**Default area radius is 500km around given point*

Make sure to authorize request to API using *x-api-key* header with the value of *$SECRET* defined in *./.env*

## Requirements

- Docker and Docker Compose installed;

## Configuration

### Infrastructure

Copy *./infrastructure/.env.default* to *./infrastructure/.env* and provide *POSTGRES_PASSWORD* variable with the password to secure user *postgres*.

Environmental variables defined in *./infrastructure/.env* are used to in configure docker-compose infrastructure.

|Variable         |Default     |Description      |
|-----------------|------------|-----------------|
|POSTGRES_DB      |limehome_api|Database name    |
|POSTGRES_USER    |postgres    |Database user    |
|POSTGRES_PASSWORD|            |Database password|

### API

Copy *./.env.default* to *./.env* and update *POSTGRES_PASSWORD* variable with the password you've entered in *./infrastructure/.env*

Environmental variables defined in *./.env* are used to in configure API.

|Variable         |Default          |Description                    |
|-----------------|-----------------|-------------------------------|
|PORT             |3000             |API port                       |
|SECRET           |dummyauth        |API token to authorize requests|
|POSTGRES_HOST    |limehoem-database|Database host                  |
|POSTGRES_PORT    |5432             |Database port                  |
|POSTGRES_DB      |limehome_api     |Database name                  |
|POSTGRES_USER    |postgres         |Database user                  |
|POSTGRES_PASSWORD|                 |Database password              |

## Startup

To run app locally use next commands from the *./infrastructure* directory

- `docker-compose up` - to build and start both app and database containers. 
- `docker-compose start` - to start existing (stopped) compose stack
- `docker-compose stop` - to stop existing (running) compose stack
- `docker-compose down` - to remove complete compose stack (does not affect images)

## // TODO

- Extend property and booking with complete CRUD functionality
- Response with property coordinates in format *(lat,lon)* instead of internal *geography* type data
- Extend test coverage
- Extend API documentation
- Move hardcoded values to config file