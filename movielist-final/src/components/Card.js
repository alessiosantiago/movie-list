import React from 'react';

function handleFavorites(movie){
	console.log(movie.id);
	let curr = "http://localhost:3000/recommendations";//current JSON url
	let url = "http://localhost:3000/mylist";//target JSON url
	let val = { //store title and img src of current movie card
		title: movie.title,
		img: movie.img
	};
	fetch(new Request(`${curr}/${movie.id}`,{ method: 'DELETE'}));//delete card from recs
	let req = new Request(url,{ method: 'POST',//post current card to movie list 
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify(val)
        });
	return new Promise(resolve => {
		fetch(req)
		.then(res => { return res.json(); })
        .then(data => { resolve(data); });
		window.location.reload(true);//reload page to show changes to database
        })

}

const Card = ({movie}) => {
 	return (
 		<div className='image-container d-flex justify-content-start m-3'>
  		<img src ={movie.img}/>
  		<div onClick={() => handleFavorites(movie)}className='overlay d-flex align-items-center justify-content-center'>
  			Add to List
  		</div>
  		<h3>{movie.title}</h3>
  		</div>
  	);
  };

export default Card;
