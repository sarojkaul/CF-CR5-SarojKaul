// JavaScript source code
let data = JSON.parse(dataMovies);
for (i = 0; i < data.length; i++) {
    $(".addImages").append(`
 <div class="card mb-5" style="max-width: 450px;">
<div class="row">
<div class="col-6 col-lg-6 col-xl-6">
<img src="${data[i].image}" alt="moviesposter" class="images">
</div>
<div class="col-6 col-lg-6 col-xl-6">
</div>
<h4>${data[i].name}</h4>
<p class="card-text">${data[i].description}</p>
</div>
<span class="row">
<p class="liketext">Likes</p>
<button type="button class="likes">Likes</button>
<div class="circle">
<p id="${i}" class="likes">${data[i].likes}</p>
</div>
</span>
</div>
</div>`)

};
$(document).ready(function () {
    $(".likes").on("click", function () {

        var index = $(this).parent().attr("id");
        data[index].likes += 1;
       
        $(this).parent().find(".likes").html(data[index].likes);
        
    })
   

