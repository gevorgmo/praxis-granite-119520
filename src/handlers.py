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
from google.appengine.api import memcache  # For XsrfHandler.  Remove if unused.
from google.appengine.api import users

from base import constants
from base import handlers


class LookbookHandler(handlers.BaseHandler):
  def get(self):
    user = users.get_current_user()
    acc='alex.denholm@gluttony.com,william.elfast@roundheadinteractive.com,gevorg.manukyan@roundheadinteractive.com,gevorgmo@gmail.com,alex.robete@gluttony.com,honor@personafilms.com,ahonor@gmail.com,nick.rhodes@gluttony.com,will.elfast@gluttony.com'
    if user:
      email=user.email()
      if acc.find(email)>-1 :
        template = {'email': email, 'url': users.create_logout_url('/')}
        self.render('lookbook.tpl', template)
      else:
          if email.find('@google.com')>-1:
            template = {'email': email, 'url': users.create_logout_url('/')}
            self.render('lookbook.tpl', template)
          else:
            template = {'email': email}
            self.render('noaccess.tpl', template)
    else:
      self.render('noaccess.tpl')
  def post(self):
    self.get()