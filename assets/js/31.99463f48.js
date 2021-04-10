(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{448:function(v,_,a){"use strict";a.r(_);var t=a(15),r=Object(t.a)({},(function(){var v=this,_=v.$createElement,a=v._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[v._v("#")]),v._v(" 前言")]),v._v(" "),a("p",[v._v("JS 的变量存放在堆栈中，在这些变量使用完毕并且没有被引用情况下，会成为垃圾，被系统回收。本文以 V8 引擎为例，讲解内存回收")]),v._v(" "),a("h2",{attrs:{id:"栈内存回收"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#栈内存回收"}},[v._v("#")]),v._v(" 栈内存回收")]),v._v(" "),a("p",[v._v("栈中存放执行上下文和基本数据类型变量，在执行上下文对应的可执行代码执行结束后，会发生出栈，执行上下文及使用到的变量会被自动回收")]),v._v(" "),a("h2",{attrs:{id:"堆内存回收"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#堆内存回收"}},[v._v("#")]),v._v(" 堆内存回收")]),v._v(" "),a("p",[v._v("JS 的闭包引用变量和引用类型变量存放在堆中。因为 V8 引擎分配到的内存受限（64位下1.4G），因此 V8 引擎限制了堆内存的大小，将堆内存中的对象进行了分代处理，形成新生代和老生代：")]),v._v(" "),a("ul",[a("li",[v._v("新生代：是临时分配的内存，存活时间短，用于存放临时变量和字符串等")]),v._v(" "),a("li",[v._v("老生代：是常驻的内存，存活时间长，用于存放主控制器、服务器对象等")])]),v._v(" "),a("h3",{attrs:{id:"新生代内存回收"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新生代内存回收"}},[v._v("#")]),v._v(" 新生代内存回收")]),v._v(" "),a("p",[v._v("新生代内存很小（64位下32M），好在主要存放的变量存活时间短。其内部也分为两部分：")]),v._v(" "),a("ul",[a("li",[v._v("From：表示正在使用的内存")]),v._v(" "),a("li",[v._v("To：表示闲置的内存")])]),v._v(" "),a("p",[v._v("新生代内存通过 Scavenge 算法实现新生代内存回收的")]),v._v(" "),a("h4",{attrs:{id:"scavenge算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scavenge算法"}},[v._v("#")]),v._v(" Scavenge算法")]),v._v(" "),a("p",[v._v("Scavenge 算法通过轮换 From-To 两个分区实现新生代内存回收，步骤如下：")]),v._v(" "),a("ul",[a("li",[v._v("先检测 From 区的对象全部检查")]),v._v(" "),a("li",[v._v("将 From 区中的存活对象复制到 To 区，非存活对象回收")]),v._v(" "),a("li",[v._v("复制到 To 区的内存按照顺序从头排放")]),v._v(" "),a("li",[v._v("当 From 区的内存全部操作完毕后，From 和 To 对调")]),v._v(" "),a("li",[v._v("继续循环")])]),v._v(" "),a("h4",{attrs:{id:"内存碎片"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内存碎片"}},[v._v("#")]),v._v(" 内存碎片")]),v._v(" "),a("p",[v._v("Scavenge 算法中将复制到 To 区的内存顺序排放，其目的是解决内存碎片的问题。内存碎片是因为堆内存中空闲的内存块会找到自己的适合块，新城零零散散的小区域，形成内存碎片。又因为堆是通过链表维护的，内部空间是连续分配的，导致后来的大内存块会因为内存碎片占据过大空间而无法合理安置。而按照顺序从头防止就能有效解决内存碎片的问题，保证 From 区的存活对象内存合理复制到 To 区。")]),v._v(" "),a("h3",{attrs:{id:"老生代内存回收"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#老生代内存回收"}},[v._v("#")]),v._v(" 老生代内存回收")]),v._v(" "),a("p",[v._v("首先老生代是从新生代“老了的模样”，这个老去的过程在 V8 中称为 “晋升”")]),v._v(" "),a("h4",{attrs:{id:"晋升"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#晋升"}},[v._v("#")]),v._v(" 晋升")]),v._v(" "),a("p",[v._v("新生代内存会通过晋升变为老生代内存，有两种方式：")]),v._v(" "),a("ul",[a("li",[v._v("已经经历过一次 Scavenge 算法")]),v._v(" "),a("li",[v._v("To 内存剩余空间不足 25%")])]),v._v(" "),a("p",[v._v("这种晋升能够很好的维持新生代内存回收的机制，通过晋升的新生代变成了存活时间久的老生代，同时较大的老生代内存空间更适合这些晋升的内存。")]),v._v(" "),a("h4",{attrs:{id:"标记清除"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#标记清除"}},[v._v("#")]),v._v(" 标记清除")]),v._v(" "),a("p",[v._v("老生代内存都是些存活时间久的，要区分哪些是存活的还是挺麻烦的。V8 采用标记清除的办法解决这个问题：")]),v._v(" "),a("ul",[a("li",[v._v("遍历老生代内存中的所有对象，将其做上标记")]),v._v(" "),a("li",[v._v("标记完成后，对其中被执行环境所使用的变量和"),a("strong",[v._v("被强引用")]),v._v("的变量"),a("strong",[v._v("取消标记")])]),v._v(" "),a("li",[v._v("这些依然标记的变量就成为垃圾被回收")]),v._v(" "),a("li",[v._v("最后整理阶段，存活下来的未标记变量全局往一端靠拢，防止内存碎片")])]),v._v(" "),a("h4",{attrs:{id:"增量标记"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#增量标记"}},[v._v("#")]),v._v(" 增量标记")]),v._v(" "),a("p",[v._v("标记清除确实不错，但由于 JS 的单线程机制，不可避免地阻塞了业务逻辑的执行，当标记清除的任务繁重时，会严重影响应用的性能。为了解决这个问题，V8 于 2018 年推出增量标记的方案：")]),v._v(" "),a("p",[v._v("这个方案将标记清除中的标记任务分为一个个小任务来执行，每执行一个小任务，将会暂停全部任务，此时 JS 业务逻辑得以执行一会儿，接着暂停 JS 业务逻辑，继续执行小任务，这样循环，直到所有的清除任务完成。")]),v._v(" "),a("p",[v._v("这样的方案能够将原来的阻塞业务时间减少到原来的 1/6，是很成功的改进。")])])}),[],!1,null,null,null);_.default=r.exports}}]);