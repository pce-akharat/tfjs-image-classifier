# Flask utils
from flask import Flask, url_for, render_template
import os
import numpy as np

app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True)