from flask import Flask, render_template

app = Flask(__name__)

@app.route("/", methods=['GET'])
def home():
    return render_template('index.html')

@app.route("/about", methods=['GET'])
def about():
    return render_template('about.html')

@app.route("/classes", methods=["GET"])
def classes():
    return render_template('classes.html')

@app.route("/schedule", methods=["GET"])
def schedule():
    return render_template('schedule.html')

@app.route("/calendar", methods=['GET'])
def calendar():
    return render_template('calendar.html')

@app.route("/faq", methods=['GET'])
def faq():
    return render_template('faq.html')

@app.route("/register", methods=['GET'])
def register():
    return render_template('register.html')

app.run()