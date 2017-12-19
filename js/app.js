(()=> {
    const loadPage = ()=> {
		getData();
		accordion();
    };
	const getData = ()=> {
		$.getJSON('http://www.etnassoft.com/api/v1/get/?get_categories=all&callback=?', (data)=> {
			//console.log(data);
			const categories = $("#categories");
			for (let i = 0; i < data.length; i++) {
				const category = data[i].nicename;
				const item = $(`<li class='item'>
				<div class="collapsible-header">
					<a> ${data[i].name} </a>
				</div>
				<div class="collapsible-body">
				 <ol id=${i}></ol>
				</div>
				</li>`);
				categories.append(item)
				console.log('hola',data[i].name);
			}

		})
		 getDataBooksP();
		getDataBooksMB();
		getDataBooksBD();
	}


    const getDataBooksP= ()=> {
        $.getJSON('http://www.etnassoft.com/api/v1/get/?category=programacion&callback=?', (listBook)=> {
            const list = listBook.length
			const bookList = $('#book-list-P');
            for (let i = 0; i < list; i++) {
                const item = $("<li class='item'>");
                const h5 = $("<h5/>");
                const p = $("<p/>");
                const link = $("<a>")
                link.attr('href', i);
                h5.append(`Titulo: ${listBook[i].title}`);
                p.append(`Autor: ${listBook[i].author}`);
                link.append(h5);
                link.append(p);
                item.append(link);
                bookList.append(item);
            };
        });
    };
	const getDataBooksBD= ()=> {
		$.getJSON('http://www.etnassoft.com/api/v1/get/?category=bases_de_datos&callback=?', (listBook)=> {
		//	console.log('aqui',listBook)
			const list = listBook.length
			const bookList = $('#book-list-BD');
			for (let i = 0; i < list; i++) {
				const item = $("<li class='item'>");
				const h5 = $("<h5/>");
				const p = $("<p/>");
				const link = $("<a>")
				link.attr('href', i);
				h5.append(`Titulo: ${listBook[i].title}`);
				p.append(`Autor: ${listBook[i].author}`);
				link.append(h5);
				link.append(p);
				item.append(link);
				bookList.append(item);
			};
		});
	};
	const getDataBooksMB= ()=> {
		$.getJSON('http://www.etnassoft.com/api/v1/get/?categories=marketing_y_business&callback=?', (listBook)=> {
			const list = listBook.length
			const bookList = $('#book-list-MB');
			for (let i = 0; i < list; i++) {
				const item = $("<li class='item'>");
				const h5 = $("<h5/>");
				const p = $("<p/>");
				const link = $("<a>")
				link.attr('href', i);
				h5.append(`Titulo: ${listBook[i].title}`);
				p.append(`Autor: ${listBook[i].author}`);
				link.append(h5);
				link.append(p);
				item.append(link);
				bookList.append(item);
			};
		});
	}
	const accordion= ()=> {
	   $('.collapsible').collapsible();
   };

    $(document).ready(loadPage);
})();
