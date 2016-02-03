var movies = [
  {key: 1, name: "肖生克的救赎", director: "弗兰克·德拉邦特", country:"美国", type:["剧情","犯罪"] },
  {key: 2, name: "这个杀手不太冷", director: "吕克·贝松", country:"法国", type: ["剧情","犯罪","动作"]}
]
var listElements = movies
  //.filter(function(contact) { return contact.email; })
 .map(function(movie) {
    return (
    React.createElement('li', {key: movie.key},
      React.createElement('h2', {}, movie.name),
      React.createElement('h4', {}, movie.director),
      React.createElement('br', {}, movie.country),
      React.createElement('br', {}, movie.type)
	 )
    ) 
  })
var rootElement =
  React.createElement('div', {}, 
    React.createElement('h1', {}, "豆瓣电影TOP"),


    React.createElement('ul', {}, listElements)

  )
ReactDOM.render(rootElement, document.getElementById('react-app'))
