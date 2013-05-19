(function($) {
    prettifyPlus = function() {
        function parseCode(prettifyEl) {
            var
                codeString = '',
                textareaEl = prettifyEl.siblings('textarea');
            if (!textareaEl.val() || textareaEl.val() === "") {
                prettifyEl.find('li').each(function() {
                    codeString += '\n' + $(this).text();
                });
                textareaEl.val($.trim(codeString));
            }
        }
        $("pre.prettyprint").each(function() {
            var
                prettifyEl = $(this),
                prettifyPlusEl = $("<div class='prettifyPlus'></div>");
            prettifyPlusEl.css({'margin-top' : prettifyEl.css('margin-top'), 'margin-bottom' : prettifyEl.css('margin-bottom')});
            prettifyEl
                .css({'margin' : '0px'})
                .wrap(prettifyPlusEl)
                .after("<div class='pp-menu'><a class='pp-viewRawCode' href='#'>View as Text</a><a class='pp-copyRawCode'  href='#'>Copy</a></div>")
                .before("<textarea readonly></textarea>");
            parseCode(prettifyEl);
        });
        $("a.pp-viewRawCode").on({
            click: function(e) {
                var
                    menuEl = $(this).parent("div"),
                    textareaEl = menuEl.siblings('textarea'),
                    prettifyEl = menuEl.siblings('pre.prettyprint');
                e.preventDefault();
                parseCode(prettifyEl);
                textareaEl
                    .fadeToggle(400)
                    .focus();
            }
        });
        $("a.pp-copyRawCode").on({
            click: function(e) {
                var
                    menuEl = $(this).parent("div.pp-menu"),
                    textareaEl = menuEl.siblings('textarea');
                e.preventDefault();
                window.prompt("To copy to clipboard, press Ctrl+C, Enter", textareaEl.val());
            }
        });
    };
}(jQuery));