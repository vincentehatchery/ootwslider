"""
views.py

URL route handlers

Note that any handler params must match the URL route params.
For example the *say_hello* handler, handling the URL route '/hello/<username>',
  must be passed *username* as the argument.

"""
from google.appengine.api import users
from google.appengine.runtime.apiproxy_errors import CapabilityDisabledError

from flask import request, render_template, flash, url_for, redirect

from flask_cache import Cache

from application import app
from decorators import login_required, admin_required
from forms import ExampleForm
from models import ExampleModel


# Flask-Cache (configured to use App Engine Memcache API)
cache = Cache(app)


def home():
    #return redirect(url_for('ootwslider')) # replaced redirect with direct call to demo page
    return render_template('demo.html')

def demo():
    return render_template('demo.html')


#def say_hello(username):
#    """Contrived example to demonstrate Flask's url routing capabilities"""
#    return 'Hello %s' % username

# @login_required
# def delete_example(example_id):
#     """Delete an example object"""
#     example = ExampleModel.get_by_id(example_id)
#     try:
#         example.key.delete()
#         flash(u'Example %s successfully deleted.' % example_id, 'success')
#         return redirect(url_for('list_examples'))
#     except CapabilityDisabledError:
#         flash(u'App Engine Datastore is currently in read-only mode.', 'info')
#         return redirect(url_for('list_examples'))


@admin_required
def admin_only():
    """This view requires an admin account"""
    return 'Super-seekrit admin page.'


@cache.cached(timeout=60)
def cached_examples():
    """This view should be cached for 60 sec"""
    examples = ExampleModel.query()
    return render_template('list_examples_cached.html', examples=examples)


def warmup():
    """App Engine warmup handler
    See http://code.google.com/appengine/docs/python/config/appconfig.html#Warming_Requests

    """
    return ''

