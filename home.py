#!/usr/bin/env python
# encoding: utf-8
"""
home.py

Handles the homepage.
"""

import sys
import os
import wsgiref.handlers

from google.appengine.ext import webapp
import utils

TEMPLATE_PATH = 'templates/'

class MainPage(webapp.RequestHandler):
  def get(self):	
	  self.response.out.write(utils.read_template(TEMPLATE_PATH, 'home.html'))