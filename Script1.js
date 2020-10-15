// JavaScript source code
let data = JSON.parse(dataMovies);
for (i = 0; i < data.length; i++) {
    $(".addImages").append(`
 <div class="card mb-5 mr-5 ml-5" style="max-width: 450px;">
 <div class="row">
<div class="col-5 col-lg-6 col-xl-6">
<img src="${data[i].image}" alt="moviesposter" class="images">
</div>
<div class="col-7 col-lg-6 col-xl-6 textmovie" id="pa">
<h4>${data[i].name}</h4>
<p class="card-text">${data[i].description}</p>
</div>
<span class ="row sidetext">
<p class = "liketext">Likes</p>
<button class="fa fa-thumbs-up btn"></button>
<p id="${i}" class="likes1">${data[i].likes}</p>

</span>
</div>
</div>
</div>`)

};
$(document).ready(function() {
    $(".btn").on("click", function() {

        let index = $(this).parent().find(".likes1").attr("id");
        data[index].likes++;

        $(this).parent().find(".likes1").html(data[index].likes);

    })
})