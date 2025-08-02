from flask import Flask, request, jsonify
from flask_cors import CORS
from extractor import extract_mind_map

app = Flask(__name__)
CORS(app)

@app.route('/mindmap', methods=['POST'])
def mindmap():
    data = request.json
    text = data.get("text", "")
    result = extract_mind_map(text)
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
