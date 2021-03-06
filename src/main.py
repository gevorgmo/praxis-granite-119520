# Copyright 2014 Google Inc. All rights reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
#     Unless required by applicable law or agreed to in writing, software
#     distributed under the License is distributed on an "AS IS" BASIS,
#     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#     See the License for the specific language governing permissions and
#     limitations under the License.
"""Main application entry point."""

import base.api_fixer

import webapp2

import base
import base.constants
import handlers



# These should all inherit from base.handlers.BaseHandler
_UNAUTHENTICATED_ROUTES = [('/', handlers.LookbookHandler)]

# These should all inherit from base.handlers.BaseAjaxHandler
_UNAUTHENTICATED_AJAX_ROUTES = [('/', handlers.LookbookHandler)]

# These should all inherit from base.handlers.AuthenticatedHandler
_USER_ROUTES = [('/', handlers.LookbookHandler),
('/start', handlers.LookbookHandler),
('/select_region', handlers.LookbookHandler),
('/channels', handlers.LookbookHandler),
('/beauty_and_fashion', handlers.LookbookHandler),
('/comedy', handlers.LookbookHandler),
('/entertainment_and_pop_culture', handlers.LookbookHandler),
('/parenting_and_family', handlers.LookbookHandler),
('/music', handlers.LookbookHandler),
('/video_gaming', handlers.LookbookHandler),
('/cars_trucks_and_racing', handlers.LookbookHandler),
('/food_and_recipes', handlers.LookbookHandler),
('/news', handlers.LookbookHandler),
('/science_and_education', handlers.LookbookHandler),
('/sports', handlers.LookbookHandler),
('/technology', handlers.LookbookHandler),
('/spanish_language', handlers.LookbookHandler),
('/breakout_videos', handlers.LookbookHandler),
('/end', handlers.LookbookHandler)
]

# These should all inherit from base.handlers.AuthenticatedAjaxHandler
_AJAX_ROUTES = []

# These should all inherit from base.handlers.AdminHandler
_ADMIN_ROUTES = []

# These should all inherit from base.handlers.AdminAjaxHandler
_ADMIN_AJAX_ROUTES = []

# These should all inherit from base.handlers.BaseCronHandler
_CRON_ROUTES = []

# These should all inherit from base.handlers.BaseTaskHandler
_TASK_ROUTES = []

# Place global application configuration settings (e.g. settings for
# 'webapp2_extras.sessions') here.
#
# These values will be accessible from handler methods like this:
# self.app.config.get('foo')
#
# Framework level settings:
#   template: one of base.constants.JINJA2 (default) or base.constants.DJANGO.
#
#   using_angular: True or False (default).  When True, an XSRF-TOKEN cookie
#                  will be set for interception/use by Angular's $http service.
#                  When False, no header will be set (but an XSRF token will
#                  still be available under the _xsrf key for Django/Jinja
#                  templates).  If you set this to True, be especially careful
#                  when mixing Angular and Django/Jinja2 templates:
#                    https://github.com/angular/angular.js/issues/5601
#                  See the summary by IgorMinar for details.
#
#   framing_policy: one of base.constants.DENY (default),
#                   base.constants.SAMEORIGIN, or base.constants.PERMIT
#
#   hsts_policy:    A dictionary with minimally a 'max_age' key, and optionally
#                   a 'includeSubdomains' boolean member.
#                   Default: { 'max_age': 2592000, 'includeSubDomains': True }
#                   implying 30 days of strict HTTPS for all subdomains.
#
#   csp_policy:     A dictionary with keys that correspond to valid CSP
#                   directives, as defined in the W3C CSP 1.1 spec.  Each
#                   key/value pair is transmitted as a distinct
#                   Content-Security-Policy header.
#                   Default: {'default-src': '\'self\''}
#                   which is a very restrictive policy.  An optional
#                   'reportOnly' boolean key substitutes a
#                   'Content-Security-Policy-Report-Only' header
#                   name in lieu of 'Content-Security-Policy' (the default
#                   is base.constants.DEBUG).
#
#  Note that the default values are also configured in app.yaml for files
#  served via the /static/ resources.  You may need to change the settings
#  there as well.

_CONFIG = {
    # Developers are encouraged to build sites that comply with this (or
    # a similarly restrictive) CSP policy.  In particular, adding directives
    # such as unsafe-inline or unsafe-eval is highly discouraged, as these
    # may lead to XSS attacks.
    'csp_policy': {
        # Fallback.
        'default-src': '\'self\'',
        # Disallow Flash, etc.
        'object-src': '\'none\'',
		'connect-src': '\'self\' *.google.com/url',
        # Google Analytics.
        'script-src':  '\'self\' https://www.google-analytics.com/analytics.js',
        # Maps, YouTube provide <iframe> based embedding at these URIs.
        'child-src':   '\'self\' https://youtube.googleapis.com/embed https://drive.google.com https://docs.google.com/a/gluttony.com/vt https://googleads.g.doubleclick.net/pagead/id',
        # Deprecated. Used for supporting browsers that use CSP 1.0 only.
        'frame-src':  '\'self\' https://youtube.googleapis.com/embed https://drive.google.com https://docs.google.com/a/gluttony.com/vt https://googleads.g.doubleclick.net/pagead/id https://docs.google.com/presentation/d/ https://docs.google.com/a/google.com/presentation/d/',
        # In generated code from http://www.google.com/fonts
        'style-src':   '\'self\' \'unsafe-inline\' https://fonts.googleapis.com/css',
        # https://developers.google.com/fonts/docs/technical_considerations
        'font-src':   '\'self\' https://fonts.googleapis.com https://fonts.gstatic.com',
		'img-src':    '\'self\' data: https://www.google-analytics.com/collect https://www.google-analytics.com/r/collect *.appspot.com https://ssl.gstatic.com/docs/documents/share/images/locked_doc-2.svg https://docs.google.com/a/gluttony.com/vt',
        'report-uri': '/csp',
        'reportOnly': base.constants.DEBUG,
    }
}

#################################
# DO NOT MODIFY BELOW THIS LINE #
#################################

app = webapp2.WSGIApplication(
    routes=(_UNAUTHENTICATED_ROUTES + _UNAUTHENTICATED_AJAX_ROUTES +
            _USER_ROUTES + _AJAX_ROUTES + _ADMIN_ROUTES + _ADMIN_AJAX_ROUTES +
            _CRON_ROUTES + _TASK_ROUTES),
    debug=base.constants.DEBUG,
    config=_CONFIG)
