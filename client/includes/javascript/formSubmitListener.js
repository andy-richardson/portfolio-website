const $ = require('jquery');

// Bootstrap form warning functions
$.fn.addWarning = function(){
    $(this).addClass('form-control-warning');
    $(this).parent().addClass('has-warning');
}

$.fn.removeWarning = function(){
    $(this).removeClass('form-control-warning');
    $(this).parent().removeClass('has-warning');
}

$.fn.unhide = function(){
    $(this).removeClass('hidden-xs-up');
}

$.fn.hide = function(){
    $(this).addClass('hidden-xs-up');
}

// Document load
$(document).ready(function() {
    // All input elements
    $("form input").focus(function(event) {
        $(this).removeWarning();
    });

    // Text area != input element
    $("form textarea").focus(function(event) {
        $(this).removeWarning();
    });

    // Upon submission
    $("#submitBut").click(function(e){
        e.preventDefault(e);
        var error = false;

        // Check message is inputted
        if($("form textarea").val() == ""){
            error = true;
            $("form textarea").addWarning();
        }

        // Check all other inputs
        for(var i = 0; i < 5; i++){
            var current = $($("form input")[i]);
            if(i != 3 && current.val() == ""){
                error = true;
                current.addWarning();
            }
        }

        if($("#emailInput").val().indexOf('@') == -1){
          error = true;
          $("#emailInput").addWarning();
        }

        if(!error){
            // Hide existing
            $("#formWarning").hide();
            $("#formFailure").hide();
            $("#formSuccess").hide();

            $.ajax({
                url: 'api/mail',
                type: 'POST',
					 timeout: 10000,
                dataType: 'json',
                data: {
                  first_name: $("#firstInput").val(),
                  last_name: $("#lastInput").val(),
                  email: $("#emailInput").val(),
                  number: $("#numberInput").val(),
                  subject: $("#subjectInput").val(),
                  message: $("#messageInput").val()
                }
            })
            .done(function(data) {
                $("#formSuccess").unhide();
                $("#firstInput").val('');
                $("#lastInput").val('');
                $("#emailInput").val('');
                $("#numberInput").val('');
                $("#subjectInput").val('');
                $("#messageInput").val('');
            })
            .fail(function() {
                $("#formFailure").unhide();
            })
        }else{
            // Hide existing
            $("#formSuccess").hide();
            $("#formFailure").hide();

            // Show warning
            $("#formWarning").unhide();
        }
    });
});
