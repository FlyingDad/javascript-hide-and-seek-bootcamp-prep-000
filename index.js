function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  const nested = document.querySelector('#nested');
  const target = nested.querySelector('.target');
  return target;
}

function increaseRankBy(n){
	const rankedLi = document.querySelectorAll('.ranked-list li');
	//console.log(rankedLi);
	for (let i = 0; i < rankedLi.length; i++) {
		var num = parseInt(rankedLi[i].innerHTML);
		rankedLi[i].innerHTML =  num + n;//(i + 1).toString();
	}
}