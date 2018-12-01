// const $ = require('jquery');
import $ from 'jquery';
import 'bootstrap';
import 'jquery-tags-input/dist/jquery.tagsinput.min.js';
import '../css/app.scss';

'use strict';

(function(window, $) {
    $(document).ready(function() {
        $('[data-toggle="tooltip"]').tooltip();

        $('.some-element').tagsInput();
    });
})(window, jQuery);
