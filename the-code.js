$(document).ready(function () {
    // Hide the loader
    setTimeout(function() {
        $("#loader-wrapper").addClass("done");
    }, 2500);

    // Scroll smoothly when navigating with menu
    $("#menu a").click(function(e) {
        e.preventDefault();

        var target = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
    });

    $("#menu a").each(function () {
        var a = $(this);
        var href = a.attr('href');
        var section = $(href);
        var h1 = section.find('h1');
        if (h1.length == 0) {
            section.prepend('<h1 class="subbed">' + href.replace('#', '').replace('-', ' ') + '</h1>');
        }
    });

    // Replace menu with picture for collaborators hover
    var collabId = 0;
    $("#collaborators-list > div").each(function(el) {
        // Assign each collaborator an id
        //$(this).attr("id", "collab-" + (++collabId));

        var imageUrl = $(this).attr("data-hover-photo");

        // On hover of this element, show the picture overlay and make the src
        // the same as this collaborator
        $(this).hover(function() {
            $("#picture-overlay").addClass("show");
            $("#menu ul").hide();
            $("#picture-overlay").css({
                'background-image': 'url(' + imageUrl + ')'
            });
        }, function() {
            $("#picture-overlay").removeClass("show");
            $("#menu ul").show();
        });
    });
});