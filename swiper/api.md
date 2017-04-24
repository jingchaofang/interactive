#Swiper API

##Swiper Full HTML Layout
```html
<!-- Slider main container -->
<div class="swiper-container">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
        ...
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>
    
    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    
    <!-- If we need scrollbar -->
    <div class="swiper-scrollbar"></div>
</div>
```

##Initialize Swiper 初始化

Now, when we have Swiper's HTML, we need to initialize it using the following function:

```
new Swiper(swiperContainer, parameters) - initialize swiper with options

swiperContainer - HTMLElement or string (with CSS Selector) of swiper container HTML element. Required.

必选，HTML元素或者string类型，Swiper容器的css选择器，例如“.swiper-container”。

parameters - object - object with Swiper parameters. Optional.可选。

Method returns initialized Swiper instance 返回初始化后的Swiper实例
```

For example:

```javascript
var mySwiper = new Swiper('.swiper-container', {
    speed: 400,
    spaceBetween: 100
});
```

##Swiper Parameters

Let's look on list of all available parameters:

|Parameter|Type|Default|Description|
|:-------=|:---|:------|:----------|
|initialSlide|number|0|Index number of initial slide.设定初始化时slide的索引|
|direction|string|'horizontal'|Could be 'horizontal' or 'vertical' (for vertical slider).|
|speed|number|300|Duration of transition between slides (in ms)|




