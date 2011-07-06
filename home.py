#!/usr/bin/env python
# encoding: utf-8
"""
home.py

Handles the homepage.
"""

import sys
import os
import wsgiref.handlers
import utils

from google.appengine.ext import webapp
from google.appengine.ext.webapp import template

class MainPage(webapp.RequestHandler):
  def get(self):	
    template_values = {}
    template_path = os.path.join(os.path.dirname(__file__), 'templates/home.html')
    self.response.out.write(template.render(template_path, template_values))

class Distribute(webapp.RequestHandler):
  def get(self):
    template_values = {}
    template_path = os.path.join(os.path.dirname(__file__), 'templates/distribute.html')
    self.response.out.write(template.render(template_path, template_values))
	  
class Resize(webapp.RequestHandler):
  def get(self):
    comparisons = [{
        "name": "White House Plan",
        "url": ("http://www.whitehouse.gov/omb/budget/"
                "Analytical_Perspectives")}, {
        "name": "Paul Ryan Plan",
        "url": ""}, {
        "name": "Liberal thinktank",
        "url": ""}, {
        "name": "Conservative thinktank",
        "url": ""}, {
        "name": "Far-left thinktank",
        "url": ""}, {
        "name": "Far-right thinktank",
        "url": ""}]

    priorities = [{
        "background": "#95CBE9",
        "name": "Arbitrary Placeholder 1",
        "comparison_values": [00.00,      # White House plan
                              00.00,      # Paul Ryan plan
                              00.00,      # Liberal thinktank
                              00.00,      # Conservative thinktank
                              00.00,      # Far-left thinktank
                              00.00]}, {  # Far-right thinktank
        "background": "#024769",
        "name": "Arbitrary Placeholder 2",
        "comparison_values": [00.00,      # White House plan
                              00.00,      # Paul Ryan plan
                              00.00,      # Liberal thinktank
                              00.00,      # Conservative thinktank
                              00.00,      # Far-left thinktank
                              00.00]}, {  # Far-right thinktank
        "background": "#AFD775",
        "name": "Arbitrary Placeholder 3",
        "comparison_values": [00.00,      # White House plan
                              00.00,      # Paul Ryan plan
                              00.00,      # Liberal thinktank
                              00.00,      # Conservative thinktank
                              00.00,      # Far-left thinktank
                              00.00]}, {  # Far-right thinktank
        "background": "#2C5700",
        "name": "Arbitrary Placeholder 4",
        "comparison_values": [00.00,      # White House plan
                              00.00,      # Paul Ryan plan
                              00.00,      # Liberal thinktank
                              00.00,      # Conservative thinktank
                              00.00,      # Far-left thinktank
                              00.00]}, {  # Far-right thinktank
        "background": "#EFD279",
        "name": "Arbitrary Placeholder 5",
        "comparison_values": [00.00,      # White House plan
                              00.00,      # Paul Ryan plan
                              00.00,      # Liberal thinktank
                              00.00,      # Conservative thinktank
                              00.00,      # Far-left thinktank
                              00.00]}, {  # Far-right thinktank
        "background": "#DE9D7F",
        "name": "Arbitrary Placeholder 6",
        "comparison_values": [00.00,      # White House plan
                              00.00,      # Paul Ryan plan
                              00.00,      # Liberal thinktank
                              00.00,      # Conservative thinktank
                              00.00,      # Far-left thinktank
                              00.00]},    # Far-right thinktank
                      ]

    template_values = {"comparisons": comparisons,
                       "priorities": priorities,
                      }
    template_path = os.path.join(os.path.dirname(__file__), 'templates/resize.html')
    self.response.out.write(template.render(template_path, template_values))