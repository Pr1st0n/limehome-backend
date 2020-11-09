\c limehome_api

CREATE TABLE  property
(
    property_id serial primary key,
    title       varchar(50),
    vicinity    varchar(100),
    lat_lon     geography(point,4326)
);

CREATE TABLE booking
(
    booking_id     serial primary key,
    property_id    integer references property (property_id),
    customer       varchar(30),
    arrival_date   date,
    departure_date date,
    price          money,
    guests         smallserial
);

INSERT INTO property (property_id, title, vicinity, lat_lon)
VALUES (1, 'Dresden Hoyerswerdaerstr. 26', 'Hoyerswerdaer Str. 26, 01099 Dresden', 'SRID=4326;POINT(13.752375 51.061656)');

INSERT INTO property (property_id, title, vicinity, lat_lon)
VALUES (2, 'Garching / Munich Bürgermeister-Amon-Straße', 'Bürgermeister-Amon-Straße, Garching, Munich', 'SRID=4326;POINT(11.652389 48.248966)');

INSERT INTO booking (booking_id, property_id, customer, arrival_date, departure_date, price, guests)
VALUES (1, 1, 'John Doe', '10-10-2020', '10-12-2020', 100, 1);

INSERT INTO booking (booking_id, property_id, customer, arrival_date, departure_date, price, guests)
VALUES (2, 1, 'Jim Doe', '12-10-2020', '12-20-2020', 100, 1);

INSERT INTO booking (booking_id, property_id, customer, arrival_date, departure_date, price, guests)
VALUES (3, 2, 'Jane Doe', '12-10-2020', '12-15-2020', 100, 1);

INSERT INTO booking (booking_id, property_id, customer, arrival_date, departure_date, price, guests)
VALUES (4, 2, 'Joel Doe', '11-10-2020', '11-15-2020', 100, 1);
