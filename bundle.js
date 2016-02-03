/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

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

/***/ }
/******/ ]);
