## Introduction

This project is the backend and frontend of the Movatic Coding Challenge Project which consists of the following:

- A Gatsby/React web application .
- A Flask/Pyhton web server.

## Scenario

A large national bike-share operator wants to be able to view station data from bike-share systems from across the world. They want to do this by reading MDS / GBFS feeds.

- This is an example of a working MDS feed: https://gbfs.bcycle.com/bcycle_madison/gbfs.json
- You can use their station feed for this demo: https://gbfs.bcycle.com/bcycle_madison/station_status.json

The goal is to create a demo web application of this product to get customer buy-in.
Assume that this demo would be used as the foundation for a full implementation so it should be
developed to be easily extendable in the future.

### Install Docker

To run this project, you need to install the latest version of Docker first.

https://docs.docker.com/compose/install/

### Run the Project

Once you install Docker, all you need to do is to run the following command:

    docker-compose up

This will launch the Flask server on port 3000. You should see the list of stations. That confirms that you have set up everything successfully.

Backend -> http://localhost:3000/

And finally, to the see web app running, open up your browser and head over to:

Frontend -> http://localhost:8000/
