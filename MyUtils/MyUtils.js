//Author-
//Description-

//---------------------------------------------------------------------------------------
// Validate inputs.
/*
var onValidateInputs = function (args) {
    var app = adsk.core.Application.get();
    ui = app.userInterface;

    var cmd = args.firingEvent.sender;

    //for (inputKey in cmd.commandInputs) {
        var input = cmd.commandInputs.itemById('Password');
        //if (input.id === 'Password') {
            var inputString = input.value;
            var length = inputString.length;

            // Reduce the password to the new length
            accountData.pwd = accountData.pwd.substr(0, length);

            // Track if the password actually changed
            var isChanged = false;

            // Replace the characters which are not an asterisk '*'
            var pwdChars = accountData.pwd.split('');
            var inputChars = inputString.split('');
            for (var i = 0; i < length; i++) {
                if (inputChars[i] !== '*') {
                    pwdChars[i] = inputChars[i];

                    // Turn the input string characters into '*'
                    inputChars[i] = '*';

                    isChanged = true;
                }
            }

            if (isChanged) {
                // Merge the characters back together
                accountData.pwd = pwdChars.join('');

                // Set the input field text to asterisks
                input.value = inputChars.join('');

                ui.messageBox(accountData.pwd);
            }

            //var lastChar = input.value[input.value.length - 1];
            //ui.messageBox(lastChar);

        //}
    //}
};
*/

function run(context) {

    "use strict";
    if (adsk.debug === true) {
        /*jslint debug: true*/
        debugger;
        /*jslint debug: false*/
    }
 
    var ui;
    try {
        var app = adsk.core.Application.get();
        ui = app.userInterface;
 
        ui.messageBox('Hello script');        
    } 
    catch (e) {
        if (ui) {
            ui.messageBox('Failed : ' + (e.description ? e.description : e));
        }
    }

    adsk.terminate(); 
}
