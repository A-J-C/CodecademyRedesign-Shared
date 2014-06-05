//Title: getNotices
//Description: Extension file for codeacademy new UI fixes.
//License: See Parent Documentation
//Author of File: Louis Milotte DBA Rva-TheTECH
//Author Contact: http://www.rvathetech.com or louis.milotte@rvathetech.com
$('document').ready(function () {
    //Run script on document load.
    var title = $('title').html(); // Grab the original page title.
    function getNotices() {
        switch ($('.unread-notification-count').html()) { 
        //Base the future potential title on the contents of the notification element span.unread-notification-count
            case '0':
            //if the count is 0; which is the default for codeacademy; the original title is set.
                $('title').html(title);
                break;
            default:
            //If the contents of the notification element is anything other than 0; the script changes the title element
            //and appends the title. Ex: (1) - PageTitle
                $('title').html('(' + $('.unread-notification-count').html() + ')-' + title);
                break;
        }
        setTimeout(getNotices, 30000); // re-run the function every thirty seconds.
    }
    getNotices(); // run the function itself when the document loads.
});
