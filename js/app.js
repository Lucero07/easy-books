(function() {
	var bookList = $('#book-list');
	function loadPage() {
		getDataBooks();
	};

	function getDataBooks() {
		$.getJSON( 'http://www.etnassoft.com/api/v1/get/?category=programacion&callback=?', function ( listBook ) {
			var list = listBook;
			for(var i=0; i< list.length; i++){
				var item = $("<li class='item'>");
				var h5 = $("<h5/>");
				var p = $("<p/>");
				var link = $("<a>")
				link.attr('href',i);
				h5.append('Titulo: ' + list[i].title);
				p.append('Autor: ' + list[i].author);
				link.append(h5);
				link.append(p);
				item.append(link);
				bookList.append(item);
			};
		} );
	};
	$(document).ready(loadPage);
})();