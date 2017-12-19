(()=> {
    const loadPage = ()=> {
		getData();
		accordion();
    };
	const getData = ()=> {
		$.getJSON('http://www.etnassoft.com/api/v1/get/?get_categories=all&callback=?', (data)=> {
			const allCategories = [];
			let item;
			const categories = $("#categories");
			for (let i = 0; i < data.length; i++) {
				const category = data[i].nicename;
				allCategories.push(category);
				 item = $(`<li class='item'id=item${i}>
				<div class="collapsible-header">
					<a> ${data[i].name} </a>
				</div>
				<div class="collapsible-body">
				 <ol id=${i}></ol>
				</div>
				</li>`);
				categories.append(item)
			}
			
			getDataBooksCategory(allCategories)
		})
		
		
		getDataBooksP();
		getDataBooksMB();
		getDataBooksBD();
	}
	
		$("collapsible").on("click",".item", ()=>{
				console.log(this)
		})

	const getDataBooksCategory = (allCategories)=> {
		const urlBooksSpecific=[];
		for (let i = 0; i < allCategories.length; i++) {
			let urlBookSpecific = `http://www.etnassoft.com/api/v1/get/?category=${allCategories[i]}&callback=?`;
			urlBooksSpecific.push(urlBookSpecific);
		}
		getDataBooksP(urlBooksSpecific) ;
	}



    const getDataBooksP= (urlBooksSpecific)=> {
    	jQuery.map( urlBooksSpecific, function( urlBookSpecific, i ) {
			$.getJSON(urlBookSpecific, (listBook)=> {
				jQuery.map(listBook, (book)=> {
					//console.log(book.title, i)
				})
            

           
        });

				});
        
    };

//const list = listBook.length;
     // for (let i = 0; i < list; i++) {
     //            const item = $("<li class='item'>");
     //            const h5 = $("<h5/>");
     //            const p = $("<p/>");
     //            const link = $("<a>")
     //            link.attr('href', i);
     //            h5.append(`Titulo: ${listBook[i].title}`);
     //            p.append(`Autor: ${listBook[i].author}`);
     //            link.append(h5);
     //            link.append(p);
     //            item.append(link);
 
     //        };
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
