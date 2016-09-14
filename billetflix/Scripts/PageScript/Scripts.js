$(document).ready(function () {

    function GetEvents() {
        $("#EventContainer").empty();
        $.ajax({
            url: "api/event"
        })
        .done(function (data) {
            console.log(data);
            $.each(data, function (key, item) {
                console.log(item);
                $('<div>', { class: "col-sm-3 event-box" })
                .appendTo($("#EventContainer"));
            })
        })
    };

    function GetCategories() {
        $("#CategoryContainer").empty();
        $.ajax({
            url: "api/category"
        })
        .done(function (data) {
            console.log(data);
            $.each(data, function (key, item) {
                console.log(item);
                $('<div>', { class: "col-sm-3 event-box" })
                .appendTo($("#EventContainer"));
            })
        })
    };

    $("#BtnCreateEvent").on("click", function () {
        var data = $("#CreateEventForm").serialize();
        console.log(data);
        $.ajax({
            url: "http://localhost:48359/api/event",
            method: "POST",
            data: data,
        }).done(function (data) {
        });
    });


    $("#BtnCreateCategory").on("click", function () {
        var data = $("#CreateCategoryForm").serialize();
        console.log(data);
        $.ajax({
            url: "http://localhost:48359/api/category",
            method: "POST",
            data: data
        }).done(function (data) {
            
        });
    })



});