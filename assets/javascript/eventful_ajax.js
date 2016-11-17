$(document).ready(function(){	

	$("#submitData").on("click", function () {
		var query = {
		app_key: 'skPQ5QR4bdjwpz7m',
		location: '',
		date: '',
		c: '',
		page_size: '10'
		};

		var checkmarks = [];

		$("input:checkbox").each(function(){
		    var check = $(this);

		    if(check.is(":checked")){
		        query.c = check.attr("id");
		    }
		});

		console.log(checkmarks);

		query.location = $("#location").val();
		console.log(query.location);
		var startDate = $("#startDate").val().split('-').join('')+'00';
		var endDate= $("#endDate").val().split('-').join('')+'00';
		query.date = startDate+"-"+endDate;
		console.log(query.date);

		var url = 'http://api.eventful.com/jsonp/events/search?'+ $.param(query);

		var request = {
			url: url,
			method: 'GET',
			dataType: 'jsonp'
		};

		console.log(url);
		$.ajax(request).done(function(response) {
			console.log(response);
			for (var i = 0; i < response.events.event.length; i++) {
				var eventInfo = $("<div>");
				if (response.events.event[i].image !== null) {
					eventInfo.append("<img class='resultImg' src='"+response.events.event[i].image.medium.url+"'>");
				} else {
					eventInfo.append("<img class='resultImg' src='http://placehold.it/128x128'>");
				}
				eventInfo.append("<strong>"+response.events.event[i].title+"</strong><br>");
				eventInfo.append(response.events.event[i].venue_name+"<br>");
				eventInfo.append(response.events.event[i].venue_address);
				eventInfo.attr({
					latitude: response.events.event[i].latitude,
					longitude: response.events.event[i].longitude
				});
				$("#response-Data").append(eventInfo);
			}
		}); 
	});
});