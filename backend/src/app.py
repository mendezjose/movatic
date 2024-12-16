from flask import Flask, jsonify, request
import requests
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Routes
@app.route("/", methods=["GET"])
def stations():
    res = requests.get('https://gbfs.bcycle.com/bcycle_madison/station_status.json')
    response = json.loads(res.text)
    return jsonify(response["data"]["stations"])

@app.route("/station", methods=["POST"])
def station():
    res = requests.get('https://gbfs.bcycle.com/bcycle_madison/station_status.json')
    response = json.loads(res.text)
    id = request.json["station_id"]
    allstations = response["data"]["stations"]
    station = next((item for item in allstations if item["station_id"] == id), {})
    return station

# Start the Server
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3000, debug=True)
