
define(function(require) {
  'use strict';

  var View = require('view');

  return View.extend({
    className: 'focus-ring',
    setState: function(state) {
      this.el.setAttribute('data-state', state);
    }
  });
});
