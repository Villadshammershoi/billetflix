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
                $('<div>', { class: "category-box col-sm-8 col-sm-offset-2 ", html: "<h1 class='pull-left'>" + CategoryText(item) + "</h1> <a class='pull-right see-all-link' href='#'>Se alle</a>" })
                    .append($("<div>", { class: "col-sm-12", html: EventText(item.Events, item.Name, item.Id) }))
                    .appendTo($("#CategoryContainer"));
                console.log(item)
            })
        })
    };

    function GetCategoryLinks() {
        $(".category-container").empty();
        $.ajax({
            url: "http://localhost:48359/api/category/"
        })
        .done(function (data) {
            console.log(data);
            $.each(data, function (key, item) {
                console.log(item);
                $('<div>', { class: "col-md-3" })
                    .append($("<a>", {class: "category-btn", href: "#", html: CategoryText(item), "data-id": item.Id  }))
                    .appendTo($(".category-container"));
                console.log(item)
            })
        })
    };
    GetCategoryLinks();


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

    function EventText(item, categoryName) {
        console.log(item);
        var eventContainer = $("<div>", { class: "event-list col-sm-12", "data-id": item.Id });
        $.each(item, function (key, event) {
            console.log(event);
            
            var html = "<div class='col-sm-3 event-container'>\
                            <div class='event-wrapper' data-id='" + event.FK_Category + "'>\
                            <img class='img-responsive' src='" + event.Media[0].Url + "' />\
                            <h4>" + event.Name + "</h4>\
                            <p>" + event.Location.City + "</p>\
                            <hr />\
                            <a href='#'>" + categoryName + "</a>\
                            </div>\
                        </div>";
            eventContainer.append(html);
        })
        return eventContainer;
    }


    //fik jeg ikke til at virke... Kunne kun skjule alle categories, og ikke alle undtagen selected.
    $(".category-btn").on("click", function () {
        var selectedCategory = $(".category-btn").attr('data-id');

        $('.category-box').css('display', 'none')
        var selector = '.category-box';

            selector += 'data-id="'+ selectedCategory + '"';

        $(selector).fadeIn();
    });
});