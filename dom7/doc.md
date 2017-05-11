DOM7 - 自定义的DOM库
==================

[文档](http://framework7.io/docs/dom.html#usage-example)

Framework7不需要任何第三方的库，包括DOM操作。她有自己的DOM7 - 一个集成了大部分常用DOM操作的高性能库。你不需要学习任何新的东西，因为她的用法和大名鼎鼎的jQuery几乎是一样的，包括大部分常用的方法和jquery风格的链式调用。

现在有一个全局的Dom7对象，最好把DOM7存储到一个局部变量中，为了防止和其他库冲突，我们推荐使用```$$```来代替```$```。

Framework7 doesn't use any third party library, even for DOM manipulation. It has its own custom DOM7 - DOM library that utilizes most edge and high-performance methods for DOM manipulation. You don’t need to learn something new, its usage is very simple because it has the same syntax as well known jQuery library with support of the most popular and widely used methods and jQuery-like chaining.

To start use it there is a Dom7 global window function, but we recommend to assign it to some local variable with more handy name, like $$, but not to "$" to prevent confilicts with other libraries like jQuery or Zepto:


```javascript
//Export DOM7 to local variable to make it easy accessable
var $$ = Dom7;
```

用法示例
-------
Usage Example

Just everything you already know:

和你所知道的用法一样：

```javascript
$$('.something').on('click', function (e) {
    $$(this).addClass('hello').attr('title', 'world').insertAfter('.something-else');
});
```

可用的方法
--------

下面这些方法几乎都和 jQuery/Zepto 是一样的：

Available Methods

All these methods works almost in the same way and with the same arguments as in jQuery or Zepto:

```javascript
$$(window).trigger('resize');
```

|Classes||
|:------|:--------|
|.addClass(className)|Add class to elements 给元素增加class

```javascript
//Add "intro" class to all paragraphs
$$('p').addClass('intro');
```
|
|.removeClass(className)|Remove specified class删除指定的class

```javascript
//Add "big" class from all links with "big" class
$$('a.big').removeClass('big');
```
|
|.hasClass(className)|Determine whether any of the matched elements are assigned the given class:元素上是否有指定的class:

```html
<p class="intro">Lorem ipsum...</p>
```
```javascript
$$('p').hasClass('intro'); //-> true
```
|
|.toggleClass(className)|Remove (if class is present) or add (if not) one or more classes from each element in the set of matched elements:有则删除，无则添加:

```html
<!-- Before -->
<h1 class="small">This is first title</h1>
<h2>This is subtitle</h2>
```
```javascript
$$('h1, h2').toggleClass('small');
```
```html
<!-- After -->
<h1>This is first title</h1>
<h2 class="small">This is subtitle</h2>
```
|

|属性||
|:--|:--|
|.prop(propName)|Get property value获取一个属性值:

```javascript
var isChecked = $$('input').prop('checked');
```
|
|.prop(propName, propValue)|设置一个属性值:

```javascript
//Make all checkboxes checked
$$('input[type="checkbox"]').prop('checked', true);
```
|
|.prop(propertiesObject)|Set multiple properties设置多个属性值:

```javascript
$$('input').prop({
  checked: false,
  disabled: true
})
```
|
|.attr(attrName)|Get attribute value获取一个属性值:

```html
<a href="http://google.com">Google</a>
```
```javascript
var link = $$('a').attr('href'); //-> http://google.com
```
|
|.attr(attrName, attrValue)|Set single attribute value设置一个属性值:

```javascript
//Set all links to google
$$('a').attr('href', 'http://google.com');
```
|
|.attr(attributesObject)|Set multiple attributes设置多个属性值:

```javascript
$$('a').attr({
  id: 'new-id',
  title: 'Link to Google',
  href: 'http://google.com'
})
```
|
|.removeAttr(attrName)|Remove specified attribute删除属性值:

```javascript
//Remove "src" attribute from all images
$$('img').removeAttr('src');
```
|
|.val()|Get the current value of the first element in the set of matched elements获取选中的元素中的第一个元素的当前值

```html
<input id="myInput" type="text" value="Lorem ipsum"/>
```
```javascript
var inputVal = $$('#myInput').val(); //-> 'Lorem ipsum'
```
|
|.val(newValue)|Set the value of every matched element给选中的元素的每一个都设置指定的值

```javascript
$$('input#myInput').val('New value here');
```
|


|Data storage||
|:------------|:-----|
|.data(key, value)|Store arbitrary data associated with the matched elements在选中的元素上存储任意数据

```javascript
$$('a').data('user', {
    id: '123',
    name: 'John',
    email: 'john@doe.com'
});
```
|
|.data(key)|Return the value at the named data store for the first element in the collection, as set by data(key, value) or by an HTML5 data-* attribute如果只有一个参数，则读取指定的值，如果有两个参数 data(key, value) 则是设置值，也可以通过 HTML5 data-* 属性来设置。

```javascript
var user = $$('a').data('user');
//-> {id: '123', name: 'John', email: 'john@doe.com'}
```
or

```html
<p data-id="123">Lorem ipsum...</p>
```
```javascript
var id = $$('p').data('id'); //-> 123
```
|
|.removeData(key)|Remove specified data删除指定数据

```javascript
$$('a').removeData('user')
```
|


|Data Set||
|:-------|:-----|
|.dataset()|Returns element's data set (set of data- attributes) as plain Object获取元素的data属性集合，放到一个普通对象中

```html
<div id="my-div" data-loop="true" data-animate-pages="false" data-index="0" data-hello="world">
    ...
</div>
```
```javascript
var dataset = $$('#my-div').dataset();
/*
dataset will contain plain object with camelCase keys and with formatted boolean and number types:
{
    loop: true,
    animatePages: false,
    index: 0,
    hello: 'world'
}
*/
```
|


|CSS transform, transitions||
|:-------------------------|:-------|
|.transform(CSSTransformString)|Adds prefixed CSS transform property:添加带前缀的transform 样式:

```javascript
$$('a').transform('rotate(90deg)')
```
|
|.transition(transitionDuration)|Set CSS transition-duration property to collection设置css transition-duration 属性

```javascript
$$('p').transition(300)
```
|

|Events||
|:-----|:---|
|.on(eventName, handler, useCapture)|Add event handler function to one or more events to the selected elements.
在选中的元素上绑定事件

```javascript
$$('a').on('click', function (e) {
  console.log('clicked');
});
```
```javascript
$$('input[type="text"]').on('keyup keydown change', function (e) {
  console.log('input value changed');
});
```
|
|.on(eventName, delegatedTarget, handler, useCapture)|Live/delegated event handler通过代理绑定事件

```javascript
$$(document).on('click', 'a', function (e) {
  console.log('link clicked');
});
```
|
|.once(eventName, handler, useCapture)|Add event handler function to one or more events to the selected elements that will be executed only once为选中的元素绑定执行一次的事件

```javascript
$$('a').once('click', function (e) {
  console.log('clicked');
});
```
```javascript
$$('input[type="text"]').once('keyup keydown change', function (e) {
  console.log('input value changed');
});
```
|
|.once(eventName, delegatedTarget, handler, useCapture)|Live/delegated event handler that will be executed only once通过代理绑定执行一次的事件

```javascript
$$(document).once('click', 'a', function (e) {
  console.log('link clicked');
});
```
|
|.off(eventName, handler, useCapture)|Remove event handler移除事件绑定

```javascript
function clickHandler(){
    console.log('clicked');
}
// Add event listener
$$('a').on('click', clickHandler);
// Remove event listener
$$('a').off('click', clickHandler);
```
|
|.off(eventName, delegatedTarget, handler, useCapture)|Remove live/delegated event handler移除通过代理绑定的事件

```javascript
function clickHandler(){
    console.log('clicked');
}
// Add event listener
$$(document).on('click', 'a', clickHandler);
// Remove event listener
$$(document).off('click', 'a', clickHandler);
```
|
|.trigger(eventName, eventData)|Execute all handlers added to the matched elements for the specified event触发选中元素上的事件，指定所有的事件回调函数|
|.transitionEnd(callback, permanent)|Adds prefixed transitionEnd event handler to collection:在选中的元素上增加transitionEnd事件回调

```javascript
$$('a').transitionEnd(function(){ /* do something */ })
```
|
|.animationEnd(callback)|Adds prefixed animationEnd event handler to collection:在选中的元素上增加 animationEnd 事件回调

```javascript
$$('a').animationEnd(function(){ /* do something */ })
```
|


|Styles||
|:-----|:----|
|.width()|Get the current computed width for the first element in the set of matched elements获取当前选中元素中的第一个元素的当前计算出来的宽度
var boxWidth = $$('div#box').width();
|
|.outerWidth([includeMargin])|Get the current computed width for the first element in the set of matched elements, including padding and border, and margin (if includeMargin is true)获取当前选中元素中的第一个元素的当前计算出来的宽度，包括 padding ，border 和 margin(如果 includeMargin 设置为 true)

```javascript
var outerWidth = $$('div#box').outerWidth(true);
```
|
|.height()|Get the current computed height for the first element in the set of matched elements获取当前选中元素中的第一个元素的当前计算出来的高度

```javascript
var boxHeight = $$('div#box').height();
```
|
|.outerHeight([includeMargin])|Get the current computed height for the first element in the set of matched elements, including padding and border, and margin (if includeMargin is true)获取当前选中元素中的第一个元素的当前计算出来的高度，包括 padding ，border 和 margin(如果 includeMargin 设置为 true)

```javascript
var outerHeight = $$('div#box').outerHeight(true);
```
|
|.offset()|Get the current coordinates of the first element relative to the document获取当前选中元素的第一个元素相对document的位置偏移

```javascript
var coords = $$('.content').offset(); //-> {top: 100, left: 200}
var top = coords.top; //-> 100
var left = coords.left; //-> 200
```
|
|.hide()|Set "display:none" to the matched elements对选中的元素设置 "display: none"

```javascript
//hide all paragraphs
$$('p').hide();
```
|
|.show()|Set "display:block" to the matched elements对选中的元素设置 "display: block"

```javascript
//show all paragraphs
$$('p').show();
```
|
|.css(property)|Get value of specified CSS property for the first element获取选中元素中第一个元素的CSS属性值

```javascript
$$('.content').css('left'); //-> 200px
```
|
|.css(property, value)|Set specified CSS property to the matched elements:设置全部选中元素中的CSS属性值

```javascript
$$('.content').css('left', '100px');
```
|
|.css(propertiesObject)|Set multiple CSS properties to the matched elements:设置全部选中元素中的多个CSS属性值

```javascript
$$('a').css({
    left: '100px',
    top: '200px',
    color: 'red',
    width: '300px',
    marginLeft: '17px',
    'padding-right': '20px'
});
```
|

|Scroll||
|:---|:---|
|.scrollTop()|Get scrollTop position of element获取选中元素的 scrollTop 值|
|.scrollTop(position, duration, callback)|Set scrollTop "position" with animation during "duration" (in ms). Scroll top position will be set immediately if duration is not specified. If you have specified "callback" function, then it will be executed after scrolling completed在指定时间（duration）内滚动到指定位置（position）。如果时间（duration没有定义），则立刻滚动到指定位置。如果你指定了回调函数，那么他会在滚动完成后执行。
|
|.scrollLeft()|Get scrollLeft position of element获取选中元素的 scrollLeft 值|
|.scrollLeft(position, duration, callback)|Set scrollLeft "position" with animation during "duration" (in ms). Scroll left postion will be set immediately if duration is not specified. If you have specified "callback" function, then it will be executed after scrolling completed在指定的时间（duration 毫秒)内滚动到指定的位置(scrollLeft)。如果没有指定时间则立刻滚动到指定位置。如果你指定了回调函数，那么他会在动画完成后执行。|
|.scrollTo(left, top, duration, callback)|Set scroll left and scroll top with animation during "duration" (in ms). Scroll postion will be set immediately if duration is not specified. If you have specified "callback" function, then it will be executed after scrolling completed在指定的时间（duration 毫秒)内滚动到指定的位置(scrollLeft, scrollTop)。如果没有指定时间则立刻滚动到指定位置。如果你指定了回调函数，那么他会在动画完成后执行。
|


|Dom 操作||
|:------|:----|
|.add(elements)|Create a new Dom7 collection with elements added to the set of matched elements:
创建一个新的Dom7集合放到指定的一个元素里：

```javascript
var links = $$('a');
var divs = $$('div');
links.add('p').addClass('blue');
links.add(divs).addClass('red');
```
|
|.each(callback)|Iterate over collection, executing a callback function for each matched element遍历集合，对其中每一个元素执行回调。|
|.html()|Get the HTML contents of the first element in the set of matched elements获得选中的第一个元素的HTML内容|
|.html(newInnerHTML)|Set the HTML contents of every matched element给全部选中元素设置HTML内容|
|.text()|Get the text contents of the first element in the set of matched elements获得选中的第一个元素的文本内容|
|.text(newTextContent)|Set the text contents of every matched element给全部选中元素设置文本内容|
|.is(CSSSelector)|Check the current matched set of elements against CSS selector选中的元素是否符合指定的CSS选择器|
|.is(HTMLElement)|Check the current matched set of elements against HTML element or Dom7 collection选中的元素是否是给定的 DOM 元素或者 Dom7 集合|
|.index()|Return the position of the first element within the Dom7 collection relative to its sibling elements当前选中的第一个元素在他的所有兄弟节点中的排序|
|.eq(index)|Reduce the set of matched elements to the one at the specified index返回当前选中的元素中的指定序号的元素|
|.append(HTMLString)|Insert content, specified by the parameter, to the end of each element in the set of matched elements在当前选中元素的每一个后面插入指定内容|
|.append(HTMLElement)|Insert specified HTML element to the end of element in the set of matched elements在当前选中元素的每一个后面插入指定元素|
|.appendTo(HTMLElement)|Insert content/elements, to the end of element specified in parameter在当前选中元素的后面插入指定元素|
|.prepend(newHTML)|Insert content, specified by the parameter, to the beginning of each element in the set of matched elements在当前选中元素的每一个前面插入指定内容|
|.prepend(HTMLElement)|Insert specified HTML element to the beginning of element in the set of matched elements在当前选中元素的每一个前面插入指定元素|
|.prependTo(HTMLElement)|Insert content/elements, to the beginning of element specified in parameter在当前选中元的前面插入指定元素|
|.insertBefore(target)|Insert every element in the set of matched elements before the target. Target could be specified as CSS selector or HTML element or Dom7 collection把当前选中的每一个元素插入到指定的目标之前。目标（target）应该是一个CSS选择器或者HTML元素或者Dom7集合|
|.insertAfter(target)|Insert every element in the set of matched elements after the target. Target could be specified as CSS selector or HTML element or Dom7 collection把当前选中的每一个元素插入到指定的目标之后。目标（target）应该是一个 CSS 选择器或者 HTML 元素 或者 Dom7集合|
|.next([selector])|Get the immediately following sibling of each element in the set of matched elements. If a selector is provided, it retrieves the next sibling only if it matches that selector获得当前选中的每一个元素的下一个直接兄弟元素。如果提供了一个选择器（selector），那么会用这个选择器来过滤这些兄弟元素。|
|.nextAll([selector])|Get all following siblings of each element in the set of matched elements, optionally filtered by a selector获得当前选中的每一个元素之后的全部兄弟元素。如果提供了一个选择器（selector），那么会用这个选择器来过滤这些兄弟元素。|
|.prev([selector])|Get the immediately preceding sibling of each element in the set of matched elements, optionally filtered by a selector获得当前选中的每一个元素的上一个直接兄弟元素。如果提供了一个选择器（selector），那么会用这个选择器来过滤这些兄弟元素。|
|.prevAll([selector])|Get all preceding siblings of each element in the set of matched elements, optionally filtered by a selector获得当前选中的每一个元素之前的全部兄弟元素。如果提供了一个选择器（selector），那么会用这个选择器来过滤这些兄弟元素。|
|.siblings([selector])|Get the siblings of each element in the set of matched elements, optionally filtered by a selector|
|.parent([selector])|Get the first parent of each element in the current set of matched elements, optionally filtered by a selector获取选中的每一个元素的父元素。如果提供了一个选择器（selector），那么会用这个选择器来过滤这些父元素。|
|.parents([selector])|Get the ancestors of each element in the current set of matched elements, optionally filtered by a selector获取选中的每一个元素的祖先元素。如果提供了一个选择器（selector），那么会用这个选择器来过滤这些祖先元素。|
|.closest([selector])|For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree|
|.find(selector)|Get the descendants of each element in the current set of matched elements, filtered by a selector在选中的每一个元素的后代中查找指定的元素。|
|.children(selector)|Get the children of each element in the set of matched elements, optionally filtered by a selector在选中的每一个元素的直接孩子中查找指定的元素。|
|.filter(callback)|Filter collection of elements从集合中过滤元素

```javascript
var redLinks = $$('a').filter(function(index, el) {
    return $$(this).hasClass('red');
})
```
|
|.remove()|Remove/detach matched elements from the Dom从DOM中删除选中的元素|


|快捷方式||
|:-----|:-----|
|.click()|Trigger "click" event on collection触发选中元素上的"click"事件|
|.click(handler)|Add "click" event handler to collection为选中的元素绑定"click"事件|
|.blur()|Trigger "blur" event on collection|
|.blur(handler)|Add "blur" event handler to collection|
|.focus()|Trigger "focus" event on collection|
|.focus(handler)| Add "focus" event handler to collection|
|.focusin()|Trigger "focusin" event on collection|
|.focusin(handler)|Add "focusin" event handler to collection|
|.focusout()|Trigger "focusout" event on collection|
|.focusout(handler)|Add "focusout" event handler to collection|
|.keyup()|Trigger "keyup" event on collection|
|.keyup(handler)|Add "keyup" event handler to collection|
|.keydown()|Trigger "keydown" event on collection|
|.keydown(handler)|Add "keydown" event handler to collection|
|.keypress()|Trigger "keypress" event on collection|
|.keypress(handler)|Add "keypress" event handler to collection|
|.submit()|Trigger "submit" event on collection|
|.submit(handler)|Add "submit" event handler to collection|
|.change()|Trigger "change" event on collection|
|.change(handler)|Add "change" event handler to collection|
|.mousedown()|Trigger "mousedown" event on collection|
|.mousedown(handler)|Add "mousedown" event handler to collection|
|.mousemove()|Trigger "mousemove" event on collection|
|.mousemove(handler)|Add "mousemove" event handler to collection|
|.mouseup()|Trigger "mouseup" event on collection|
|.mouseup(handler)|Add "mouseup" event handler to collection|
|.mouseenter()|Trigger "mouseenter" event on collection|
|.mouseenter(handler)|Add "mouseenter" event handler to collection|
|.mouseleave()|Trigger "mouseleave" event on collection|
|.mouseleave(handler)|Add "mouseleave" event handler to collection|
|.mouseout()|Trigger "mouseout" event on collection|
|.mouseout(handler)|Add "mouseout" event handler to collection|
|.mouseover()|Trigger "mouseover" event on collection|
|.mouseover(handler)|Add "mouseover" event handler to collection|
|.touchstart()|Trigger "touchstart" event on collection|
|.touchstart(handler)|Add "touchstart" event handler to collection|
|.touchend()|Trigger "touchend" event on collection|
|.touchend(handler)|Add "touchend" event handler to collection|
|.touchmove()|Trigger "touchmove" event on collection|
|.touchmove(handler)|Add "touchmove" event handler to collection|
|.resize(handler)|Add "resize" event handler to collection|
|.scroll(handler)|Add "scroll" event handler to collection|

Utilities
---------

**Dom7.each**

A generic iterator function, which can be used to seamlessly iterate over both objects and arrays. Arrays and array-like objects with a length property (such as a function's arguments object) are iterated by numeric index, from 0 to length-1. Other objects are iterated via their named properties

```
Dom7.each(object/array, callback) - iterate through object or array

object/array - object or array - to iterate over. Required.
callback - function - callback function that will be executed on every object
property, or on every array element. Required.
```
```javascript
var fruits = ['Apple', 'Orange', 'Pineapple', 'Bannana'];
$$.each(fruits, function (index, value) {
    alert(index + ': ' + element);
});

//This produces 4 alerts:
0: Apple
1: Orange
2: Pineapple
3: Bannana
```

```javascript
var person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
};
$$.each(person, function (key, value) {
    alert(key + ': ' + value);
});

//This produces 3 alerts:
firstName: John
lastName: Doe
age: 25
```

**Dom7.parseUrlQuery**

```
Dom7.parseUrlQuery(url) - parse url query get parameters
url - string - url with GET parameters. Required.
Method returns object with query parameters
```
```javascript
var query = $$.parseUrlQuery('http://google.com/?id=5&foo=bar');
console.log(query); //-> {id: 5, foo: 'bar'}
```

**Dom7.isArray**

```
Dom7.isArray(obj) - Determine whether the argument is an array

obj - object - Object to test whether or not it is an array
returns a Boolean indicating whether the object is a JavaScript array
```
```javascript
var fruits = ['Apple', 'Orange'];
console.log($$.isArray(fruits)); //-> true
```

**Dom7.unique**

```
Dom7.unique(array) - Remove duplicates in passed array

obj - array - Array to remove duplicates
returns a new unique array
```
```javascript
var fruits = ['Apple', 'Orange', 'Apple'];
console.log($$.unique(fruits)); //-> ['Apple', 'Orange'];
```

**Dom7.serializeObject**

```
Dom7.serializeObject(object) - Create a serialized representation of a plain object suitable for use in a URL query string

object - object - Object to serialize
returns a new unique array
```
```javascript
var params = {foo: 'bar', id: 5};
console.log($$.serializeObject(params)); //-> 'foo=bar&id=5'
```

**Dom7.toCamelCase**

```
Dom7.toCamelCase(string) - Convert hypens-case string to camelCase string

string - string - hypens-case string
returns a new camelCase string
```
```javascript
var hypensCaseString = 'hello-my-world';
var camelCaseString = $$.toCamelCase(hypensCaseString);
console.log(camelCaseString); //helloMyWorld
```

**Dom7.dataset**

Dom7.dataset(el) - Get element's data set (set of data- attributes) as plain Object

el - HTMLElement or string (with CSS selector) - element with data- attributes to get dataset from
returns a new plain object with dataset
<div id="my-div" data-loop="true" data-animate-pages="false" data-index="0" data-hello="world">
    ...
</div>
var dataset = $$.dataset('#my-div');
/*
dataset will create plain object with camelCase keys and with formatted boolean and number types:
{
    loop: true,
    animatePages: false,
    index: 0,
    hello: 'world'
}
*/
Dom7.requestAnimationFrame
Dom7.requestAnimationFrame(callback) - Cross-browser implementation on requestAnimationFrame

callback - function - A parameter specifying a function to call when it's time to update your animation for the next repaint
returns animation request id, that uniquely identifies the entry in the callback list
var animId;
function anim() {
  var left = parseInt($$('#anim').css('left'), 10) + 1;
  $$('#anim').css({left: left + 'px'})
  animId = $.requestAnimationFrame(anim);
}
animId = $.requestAnimationFrame(anim);
Dom7.cancelAnimationFrame
Dom7.cancelAnimationFrame(requestID) - Cancels an animation frame request

requestID - number - The ID value returned by the call to $$.requestAnimationFrame() that requested the callback
$.cancelAnimationFrame(animId);
Ajax
$$.ajax(parameters) - Load data from the server

parameters - object - Request parameters
returns plain XHR object
Let's look at the list of available parameters

Parameter   Type    Default Description
async   boolean true    If you need synchronous requests, set this option to false
method  string  'GET'   Request method (e.g. "POST", "GET", "PUT")
cache   boolean true    If set to false, it will force requested pages not to be cached by the browser. Setting cache to false will only work correctly with HEAD and GET requests. It works by appending "_nocache={timestamp}" to the GET parameters
contentType string  'application/x-www-form-urlencoded' Content type. Also could be 'multipart/form-data' and 'text/plain'. For cross-domain requests, setting the content type to anything other than application/x-www-form-urlencoded, multipart/form-data, or text/plain will trigger the browser to send a preflight OPTIONS request to the server
crossDomain boolean undefined   If you wish to force a crossDomain request (such as JSONP) on the same domain, set the value of crossDomain to true. When true additional "X-Requested-With: XMLHttpRequest" header will be added to request
data    Object or String or Array       Data to be sent to the server. It is converted to a query string, if not already a string. It's appended to the url for GET-requests. See processData option to prevent this automatic processing. For POST requests could be FormData type
processData boolean true    By default, data passed in to the data option as an object (technically, anything other than a string) will be processed and transformed into a query string, fitting to the default content-type "application/x-www-form-urlencoded". If you want to send a DOMDocument, or other non-processed data, set this option to false
dataType    string  'text'  The type of data that you're expecting back from the server. Could be 'text' or 'json'
headers object      An object of additional header key/value pairs to send along with requests using the XMLHttpRequest transport
xhrFields   object      An object of fieldName-fieldValue pairs to set on the native XHR object
username    string      A username to be used with XMLHttpRequest in response to an HTTP access authentication request
password    string      A password to be used with XMLHttpRequest in response to an HTTP access authentication request
timeout number  0   Set a timeout (in milliseconds) for the request
Callbacks
beforeSend  function (xhr)      A pre-request callback function that can be used to modify the XHR object before it is sent. Use this to set custom headers, etc
error   function (xhr, status)      A function to be called if the request fails
success function (data, status, xhr)        A function to be called if the request succeeds
complete    function (xhr, status)      A function to be called when the request finishes (after success and error callbacks are executed)
statusCode  object      An object of numeric HTTP codes and functions to be called when the response has the corresponding code. For example, the following will alert when the response status is a 404:
$$.ajax({
  url: 'somepage.html',
  statusCode: {
    404: function (xhr) {
      alert('page not found');
    }
  }
})
Ajax Events
Each Ajax request produces global Ajax events on document, so you can always intercept and handle them:

Event   Target  Description
ajaxStart   document    A pre-request event that can be used to modify the XHR object before it is sent. Use this to set custom headers
ajaxError   document    Event to be triggered if the request fails
ajaxSuccess document    Event to be triggered if the request succeeds
ajaxComplete    document    Event to be triggered when the request finishes (after success and error events are executed)
For example:

$$(document).on('ajaxComplete', function (e) {
  var xhr = e.detail.xhr;
  console.log('request performed');
});
Shorthand Methods
Dom7.get
$$.get(url, data, success) - Load data from the server using a HTTP GET request

url - string - Request url
data - object - A plain object or string that is sent to the server with the request. Optional
success - function (data, status, xhr) - A callback function that is executed if the request succeeds. Optional
returns plain XHR object
$$.get('blog-post.php', {foo:'bar', id:5}, function (data) {
  $$('.articles').html(data);
  console.log('Load was performed');
});
Dom7.post
$$.post(url, data, success) - Load data from the server using a HTTP POST request

url - string - Request url
data - object - A plain object or FormData or string that is sent to the server with the request. Optional
success - function (data, status, xhr) - A callback function that is executed if the request succeeds. Optional
returns plain XHR object
$$.post('auth.php', {username:'foo', password: 'bar'}, function (data) {
  $$('.login').html(data);
  console.log('Load was performed');
});
Dom7.getJSON
$$.getJSON(url, data, success) - Load JSON-encoded data from the server using a GET HTTP request

url - string - Request url
data - object - A plain object or FormData or string that is sent to the server with the request. Optional
success - function (data, status, xhr) - A callback function that is executed if the request succeeds. Optional
returns plain XHR object
$$.getJSON('items.json', function (data) {
  console.log(data);
});
Original Request Parameters
Each of Ajax methods returns plain XHR object, which is also available in callbacks. This default XHR object extended with the following properties:

Properties
xhr.requestParameters   Object with passed XHR request parameters
xhr.requestUrl  String with request URL
