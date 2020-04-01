$(document).ready(function(){
//search on click
	$("#searchbtn").on("click",function(e){
		e.preventDefault();
//search for entered key word
	let searchquery = $("#searchquery").val();
	let url = "http://newsapi.org/v2/top-headlines?q="+searchquery+"&country=us&category=business&apiKey=db6f24957dc748f6a86e70bbd1f9bcac";

	if(searchquery !== ""){

		$.ajax({
			url: url,
			method: "GET",
			dataType: "json",
			success: function(news){
				var output = "";
				var latestNews = news.articles.slice(0, 5);
				var roll = document.getElementsByClassName("roll");
//output html element with search results
				for(var i in latestNews){
					output += `
					<div class="newsResults">
					<img src="${latestNews[i].urlToImage}">
					<h4>${latestNews[i].title}</h4>
					<p>Autor: ${latestNews[i].author}</p>
					<p>${latestNews[i].description}</p>
					<a href="${latestNews[i].url} class="btn">Pročitaj članak</a>
					</div>
					`;
				}
					if(output !== ""){
						$(".boxImgWrap").html(output);
						$(".roll").css("display", "block");
					}else{
						let NewsNotFound = "Nema vijesti o toj temi";
						$(".boxImgWrap").html(NewsNotFound)
					}
				}
		});

	}
	});

});