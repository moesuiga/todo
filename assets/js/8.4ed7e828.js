(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{218:function(t,e,v){"use strict";v.r(e);var _=v(2),r=Object(_.a)({},function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("p",[t._v("首先需要明确的一点是：清除浮动并不是将浮动的样式清除掉，而是闭合浮动，使得添加了清除浮动样式的元素，检测其前面的浮动元素并将浮动闭合起来，让其后的元素不受影响。")]),t._v(" "),v("p",[t._v("很多人对这一样式有误解，一个是因为“清除浮动”这个名字；还有一个原因大概是因为大多数时候，清除浮动的样式是使用父元素的伪元素after（IE8中是伪类）来实现的，看起来就好像是父元素将内部的浮动样式清除了一样。")]),t._v(" "),v("p",[t._v("但事实上并非如此，其原理正如我声明的一样，是父元素的after伪元素（伪类）将内部子元素的浮动样式“闭合”了起来，而非“清除”。")]),t._v(" "),v("p",[v("code",[t._v("clear: left/right/both")]),t._v(" 其含义就是说，让添加了这个样式的左侧或者右侧或者两侧不能有浮动元素出现。")]),t._v(" "),v("p",[t._v("回想一下，浮动元素是不占位置的，按照流式布局，从上到下的排列，如果某个元素浮动了，那么它原本的位置就空了出来，下面的元素就会顺势顶上去。但是如果给紧挨着浮动元素的下一个元素添加了清除浮动呢？它会检测旁边有没有浮动的元素，如果有，就不会向上占据浮动元素的位置，而是继续挨着浮动元素的底部。")]),t._v(" "),v("p",[t._v("以下是个人见解，可能实际情况并非如此，如有错误，请指正。")]),t._v(" "),v("p",[t._v("那么这个清除浮动的样式添加在父元素的after伪元素（伪类）上时，达成的效果就是在父元素的最后将子元素的浮动效果闭合，加上给after伪元素（伪类）添加一系列样式如：\n"),v("code",[t._v("display: block;")]),t._v("、 "),v("code",[t._v("height: 0;")]),t._v("、 "),v("code",[t._v("visibility: none;")]),t._v("等，将其可能造成的布局影响消除掉。如此在容器中的元素浮动之后，原本没设置高度的父元素本应该因为检索不到浮动子元素的高而导致高度为0，但是因为after伪元素（伪类）占据了一个位置，虽然其高度为0，但是其位置能被父元素检索到，于是父元素的高度因为这个after而变得能将浮动的子元素给包进去了。")])])},[],!1,null,null,null);e.default=r.exports}}]);