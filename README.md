jquery-swipeList
================

MIT license.  
[example](http://konweb.github.io/jquery-swipeList/) Take a look at smart phones

## Installation
```
git clone https://github.com/konweb/jquery-swipeList
```

## How to use
**read the JS and CSS files**
```
<link rel="stylesheet" href="./css/style.css">

<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script src="./js/swipeList.js"></script>
```

**run the plug -in**
```
$(function(){
	$(".js-swipeList").swipeList();
});
```

**Sample HTML**
```
<div class="swipe-list theme-swipe-list">
  <div class="list js-swipeList">
    <div class="list-body js-swipeListTarget">
      <div class="list-contents list-cell">
        <p class="titile">タイトル</p>
        <p class="inner">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque id explicabo distinctio</p>
      </div>
      <div class="list-arrow list-cell"><i class="fa fa-angle-double-left"></i></div>
    </div>
    <div class="list-btn js-swipeListBtn">
      <ul>
        <li><i class="fa fa-star"></i></li>
        <li><i class="fa fa-edit"></i></li>
        <li><i class="fa fa-trash"></i></li>
      </ul>
    </div>
  </div>
  <div class="list js-swipeList">
    <div class="list-body js-swipeListTarget">
      <div class="list-contents list-cell">
        <p class="titile">タイトル</p>
        <p class="inner">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque id explicabo distinctio</p>
      </div>
      <div class="list-arrow list-cell"><i class="fa fa-angle-double-left"></i></div>
    </div>
    <div class="list-btn js-swipeListBtn">
      <ul>
        <li><i class="fa fa-star"></i></li>
        <li><i class="fa fa-edit"></i></li>
        <li><i class="fa fa-trash"></i></li>
      </ul>
    </div>
  </div>
  <div class="list js-swipeList">
    <div class="list-body js-swipeListTarget">
      <div class="list-contents list-cell">
        <p class="titile">タイトル</p>
        <p class="inner">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque id explicabo distinctio</p>
      </div>
      <div class="list-arrow list-cell"><i class="fa fa-angle-double-left"></i></div>
    </div>
    <div class="list-btn js-swipeListBtn">
      <ul>
        <li><i class="fa fa-star"></i></li>
        <li><i class="fa fa-edit"></i></li>
        <li><i class="fa fa-trash"></i></li>
      </ul>
    </div>
  </div>
</div>
```


## Options
| Name | Type | Desc |
|:-----------|:-----------|:------------|
| targetEle | element | [.js-swipeListTarget] Swipe the target element |
| btnEle | element | Parent button element |
| triggerMove | number | Swipe trigger number |
| speed | number | Animation speed |
| easing | string | [ease] Easing |
| direction | string | Swipe direction |
