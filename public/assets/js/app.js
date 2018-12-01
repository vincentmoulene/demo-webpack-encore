require('assets/css/app.scss');
@import('bootstrap/dist/css/bootstrap.css');
const $ = require('jquery');
require('jquery-tag~s-input/dist/jquery.tagsinput.min.js');

'use strict';

(function(window, $) {
    $(document).ready(function() {
        $('[data-toggle="tooltip"]').tooltip();

        $('.some-element').tagsInput();
    });
})(window, jQuery);
