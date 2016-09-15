$(document).ready(function () {

    function GetEvents(id) {
        $("#CategoryContainer").empty();
        $.ajax({
            url: "http://localhost:48359/api/event/" + id
        })
        .done(function (data) {
            console.log(data);
            $.each(data, function (key, item) {
                console.log("goatboi");
                $('<div>', { class: "col-md-3 event-box", text: CategoryText(item) })
                .appendTo($(".category-box" + id));
            })
        })
    };

    function GetCategories() {
        $("#CategoryContainer").empty();
        $.ajax({
            url: "http://localhost:48359/api/category/"
        })
        .done(function (data) {
            console.log(data);
            $.each(data, function (key, item) {
                console.log(item);
                $('<div>', { class: "category-box col-sm-8 col-sm-offset-2 ", html: "<h1 class='pull-left'>" + CategoryText(item) + "</h1> <a class='pull-right'>Se alle</a>" })
                    .append($("<div>", { class: "col-sm-9", html: EventText(item.Events) }))
                    .appendTo($("#CategoryContainer"));
                console.log(item)
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

    GetCategories();

    function CategoryText(item) {
        return item.Name;
    }

    function EventText(item) {
        console.log(item);
        var eventContainer = $("<div>", { class: "event-list", "data-id": item.Id });
        $.each(item, function (key, item) {
            eventContainer.append($("<div>", { class: "col-sm-3 event-container", html: "<h4>" + item.Name + "</h4>" + "<p>" + item.Location.City + "</p>"})
            .append($("<img>", { class: "img-responsive", src: item.Media[0].Url })))
        })
        return eventContainer;
    }
});