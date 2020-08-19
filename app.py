from flask import Flask, redirect, render_template, jsonify, request, make_response
# from flask_cors import CORS
import random

app = Flask(__name__)
# CORS(app)

### ROUTES

#TEST ROUTES - DELETE ME

@app.route('/test')
def testQuery():
  return render_template("testQuery.html")

@app.route('/test/post', methods=["POST"])
def create_entry():
  req = request.get_json()
  print(req)
  res = make_response(jsonify(req), 200)
  return res


#GET home
@app.route('/')
def landing():
  return render_template('landing.html')

######### USER ###########

#GET and POST register
@app.route('/user/register', methods=["GET", "POST"])
def registerUser():
  return render_template('user/register.html')

#GET and POST login
@app.route('/user/login', methods=["GET", "POST"])
def loginUser():
  return render_template('user/login.html')

#GET and POST deleteUser
@app.route('/user/deleteUser', methods=["GET", "POST"])
def deleteUser():
  return render_template('user/delete.html')

############## PROJECTS ###############

#GET and POST edit project
@app.route('/projects/edit', methods=["GET", "POST"])
def editProject():
  return render_template('projects/edit.html')

#GET and POST view project
@app.route('/projects/view', methods=["GET", "POST"])
def viewProject():
  return render_template('projects/view.html')

#GET and POST add project
@app.route('/projects/add', methods=["GET", "POST"])
def addProject():
  if request.method == 'GET':
    print(request)
    return render_template('projects/add.html')
  print(request)


### Graphiql
@app.route('/goto/graphql')
def gotoGraph():
  return redirect('http://localhost:3000/graphql', code=302)