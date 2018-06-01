$('.btn').click(function() {
    $('.text').text('hold yer doggos');
    $.ajax({
      type: "GET",
      url: "https://www.reddit.com/r/aww/search.json?q=puppy&restrict_sr=true",
      success: function(data) {
        $('.text').html(''); //clear old stuff to make room for new content
        for (let i=0; i < data.data.children.length; i++) {
          let cutething = data.data.children[i].data.thumbnail
          $('.text').append("<img src='" + cutething + "'/>");
        }
      }
    });
  })