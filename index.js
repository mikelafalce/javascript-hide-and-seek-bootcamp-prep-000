function getFirstSelector(selector) {
  var lis = document.querySelector(selector);
  return lis;
}


function nestedTarget() {
  var nested = document.querySelector('div.target');
  return nested;
}

function increaseRankBy(n){
  //var lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  var rankedLists = document.querySelectorAll('.ranked-list');
  var firstList = rankedLists[0];
  var secondList = rankedLists[1];

  let children = firstList.children
  let start = 1

  for (let i = 0, l = children.length; i < l; i++) {
    children[i].innerHTML = parseInt(start + i + n);
  }

  children = secondList.children
  start = 12

  for (let i = 0, l = children.length; i < l; i++) {
    children[i].innerHTML = parseInt(start - i + 3);
  }

  return children;
}

function deepestChild(){
  var lis = document.getElementById('grand-node').querySelectorAll('div');
  for (var i = 0, l = lis.length; i < l; i++) {
    if (!lis[i].querySelector('div')){
      return lis[i];
    }
  }
}
