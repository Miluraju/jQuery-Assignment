$(document).ready(function() {
var progressElem = $('#progressCounter');
var URL = "https://api.github.com/users/mralexgray/repos";
$("#loading").hide();
var obj=$.ajax({
    type: 'GET',
    dataType: 'json',
    url: URL,
    cache: false,
    beforeSend: function () {
        $("#table").hide();
        $('#loading').show();
        $("#followerstable").hide();
        $("#loadingfollowers").hide();
        $("#hide").hide();

    },
    complete: function () {
        $("#loading").hide();
        $("#table").show();
    },
    success: function (json) {

        for (var i = json.length - 1; i >= 0; i--) {
        
        $("#table").append("<tr><th>" + json[i].name + "</th><th>" + json[i].full_name + "</th><th>" + json[i].size +
         "</th><th>" + json[i].created_at + "</th><th>" + json[i].language + "</th><th>" + json[i].has_issues + "</th><th>" 
         + json[i].has_downloads + "</th><th>" + json[i].watchers + "</th></tr>");
        }

        $('.followersButton').click(function() {
            var URL = "https://api.github.com/users/mralexgray/followers";
            $("#loading").hide();
            var obj=$.ajax({
                type: 'GET',
                dataType: 'json',
                url: URL,
                cache: false,
                beforeSend: function () {
                    $("#followerstable").hide();
                    $('#loadingfollowers').show();
                    $("#hide").hide();
                },
                complete: function () {
                    $("#loadingfollowers").hide();
                    $("#followerstable").show();
                    $("#hide").show();
                },
                success: function (json) {
                    $("#followerstable").append("<tr><th>Name</th><th>ID</th></tr>");
                    for (var i = json.length - 1; i >= 0; i--) {
                       $("#followerstable").append("<tr><th>" + json[i].login + "</th><th>" + json[i].id + "</th></tr>");
                    }; 
                }
            });
        });
        $("#hide").click(function()
        {   alert("hide");
            $("#followerstable").empty();
            $("#hide").hide();
        });   
    }
});

});

 


