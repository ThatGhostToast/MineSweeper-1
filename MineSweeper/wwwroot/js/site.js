﻿$(function () {
    console.log("Page is ready");

    $(document).bind("contextmenu", function (e) {
        e.preventDefault();
        console.log("Right click. Prevent context menu from showing.")
    });

    $(document).on("mousedown", ".game-button", function (event) {
        switch (event.which) {
            case 1:
                break;
            case 2:
                break;
            case 3:
                event.preventDefault();
                var buttonNumber = $(this).val();
                console.log("Button number " + buttonNumber + " was right clicked");
                doButtonUpdate(buttonNumber, "/GameBoard/RightClickShowButton");
                break;
            default:
                alert('Nothing');
        }
    });

    function doButtonUpdate(buttonNumber, urlString) {
        $.ajax({
            datatype: "json",
            method: 'POST',
            url: urlString,
            data: {
                "buttonNumber": buttonNumber
            },
            success: function (data) {
                console.log(data);
                $("#" + buttonNumber).html(data);
            }
        });
    }
});