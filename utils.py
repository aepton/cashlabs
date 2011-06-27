#!/usr/bin/env python
# encoding: utf-8
"""
utilities.py

Various useful utilities. Such helpful comments!
"""

import sys
import os
import wsgiref.handlers

from google.appengine.ext import webapp

def read_template(prefix, path):
  """Reads and returns a template file as a string.
  
  Args:
    prefix - string containing path prefix
    path - string containing filename to read
  
  Returns:
    String containing template contents.
  """
  FH = open('%s%s' % (prefix, path), 'r')
  contents = FH.read()
  FH.close()
  
  return contents