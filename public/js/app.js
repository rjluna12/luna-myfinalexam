$('#app').html(`
   <div class="progress">
      <div class="indeterminate"></div>
   </div>
 `);

setTimeout(function(){
 x();
},3000);

  function x(){
  	$.ajax({
  	url:"http://www.omdbapi.com/?t=the walking dead"
	}).done(function(res)

  {
      console.log(res);
let html = `
 

   <h1> ${res.Title} </h1>
   <h2> ${res.Released} </h1>
   <h4>${res.Plot} </h4>
   <img src ="${res.Poster}" />
   
  `;
  $('#app').html(html);
  });
}

	

