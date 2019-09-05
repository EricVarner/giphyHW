
      var gifs = ["Bird", "Cat", "Dog", "Monkey"];




        function renderButtons() 
        {
          $("#buttons-view").empty();
          for (var i = 0; i < gifs.length; i++) {
            var a = $("<button>");
            a.addClass("btn");
            a.attr("data-name", gifs[i]);
            a.text(gifs[i]);
            $("#buttons-view").append(a);
            console.log(a);
          }
        }
        $("#add-gif").on("click", function(event) 
        {
          event.preventDefault();
          alert("You pressed the button")
          var gif = $("#gif-input").val().trim();
          gifs.push(gif);
          renderButtons()
        });

        $(document).on('click', '.btn', function() {

          alert('button pressed');

          var animal = $(this).attr("data-name");

          var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=pKKnOKpj1V4ts8EBV5d39K0S8UIPy9dO&q="+animal+"&limit=10&offset=0&rating=PG-13&lang=en";

          $.ajax({
            url: queryURL,
            method: "GET"
          }).then(function(response) {

            console.log(response);
            var results = response.data


            for (var i = 0; i < results.length; i++) 
            {
              console.log('Inside the for loop')
            var animalDiv = $("<div>");
            var p = $("<p>").text("Rating: " + results[i].rating);
            var animalImage = $("<img>")
            animalImage.attr("src", results[i].images.fixed_height.url)
            animalDiv.append(p)
            animalDiv.append(animalImage)
            $("#gif-view").prepend(animalDiv)
            }
          });
        })
        renderButtons()