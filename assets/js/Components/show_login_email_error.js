const $ = require('jquery');

'use strict';

export default function ($emailInput){
    if ($emailInput.val().length >= 30) {
        const $warning = $('<div class="login-long-email-warning">This is a really long email - are you sure that is right?</div>');
        $emailInput.before($warning);
    }
}