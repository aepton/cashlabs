#!/usr/bin/env python
# encoding: utf-8
"""
cashlabs.py

Maps requests to URLs.
"""
import wsgiref.handlers
import home

from google.appengine.ext import webapp
from google.appengine.ext import db
from google.appengine.api import users
	
def main():
  application = webapp.WSGIApplication(
      [('/', home.MainPage),],
      debug=False)
  wsgiref.handlers.CGIHandler().run(application)

if __name__ == "__main__":
  main()