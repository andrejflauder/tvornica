$(document).ready(function(){

	$("#searchbtn").on("click",function(e){
		e.preventDefault();

	let searchquery = $("#searchquery").val();
	let url = "http://newsapi.org/v2/top-headlines?q="+searchquery+"&country=us&category=business&apiKey=db6f24957dc748f6a86e70bbd1f9bcac";

	if(searchquery !== ""){

		$.ajax({
			url: url,
			method: "GET",
			dataType: "json",
			success: function(news){
				let output = "";
				let latestNews = news.articles;

				for(var i in latestNews){
					output += `
					<div class="newsResults">
					<h4>${latestNews[i].title}</h4>
					<img src="${latestNews[i].urlToImage}">
					<p>${latestNews[i].description}</p>
					<p>${latestNews[i].content}</p>
					<p>Published on: ${latestNews[i].publishedAt}</p>
					<a href="${latestNews[i].url} class="btn">Read More</a>
					</div>
					`;
				}
					if(output !== ""){

						$(".boxImgWrap").html(output);

					}else{
						let NewsNotFound = "There is no news available";
						$(".boxImgWrap").html(NewsNotFound)
					}
				}
		});

	}
	});

});