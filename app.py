from flask import Flask, redirect, render_template, jsonify, request
app = Flask(__name__)
import random


### ROUTES

#TEST ROUTE - DELETEME

@app.route('/test')
def hello_world():
    return 'HEY THAR'


#GET home
@app.route('/')
def landing():
  return render_template('landing.html')

######### AUTH ###########

#GET register
#todo - add post route
@app.route('/auth/register')
def register-view():
  return render_template('auth/register.html')

#GET login
#todo add post route
@app.route('/auth/login')
def login-view():
  return render_template('auth/login.html')

#GET deleteUser
#todo add post route
@app.route('/auth/deleteUser')
def deleteUser-view():
  return render_template('auth/deleteUser.html')

############## PROJECTS ###############

#GET edit <form>
#todo add post route with form entry queries
@app.route('/projects/edit.html')
def edit-project-view():
  return render_template('projects/edit.html')

#GET view
#todo add post route with search query params
@app.route('/projects/view.html')
def view-project():
  return render_template('projects/view.html')