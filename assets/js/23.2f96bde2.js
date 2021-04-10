(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{429:function(t,a,s){"use strict";s.r(a);var v=s(15),_=Object(v.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("操作符主要讲特殊规则")]),t._v(" "),s("h2",{attrs:{id:"一元操作符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一元操作符"}},[t._v("#")]),t._v(" 一元操作符")]),t._v(" "),s("ul",[s("li",[t._v("递增/递减：会返回递增或递减的值，但前缀相比后缀，变量的值会在语句求值前改变，而后缀在语句求值之后改变")]),t._v(" "),s("li",[t._v("一元加和减：非数值操作时，会使用 Number() 转型函数")])]),t._v(" "),s("h2",{attrs:{id:"位操作符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#位操作符"}},[t._v("#")]),t._v(" 位操作符")]),t._v(" "),s("p",[t._v("这部分很硬核，看看就好，后面再慢慢掌握")]),t._v(" "),s("h3",{attrs:{id:"按位非"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#按位非"}},[t._v("#")]),t._v(" 按位非("),s("code",[t._v("~")]),t._v(")")]),t._v(" "),s("p",[t._v("作用是返回数值的一补数，最终效果是对数值取反并减一，相比正常操作来说，基于底层操作的按位非速度更快")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" num "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v("num"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -7")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h3",{attrs:{id:"按位与"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#按位与"}},[t._v("#")]),t._v(" 按位与("),s("code",[t._v("&")]),t._v(")")]),t._v(" "),s("p",[t._v("作用是将两个数的每一位对齐，然后基于真值表中的规则，对每一位执行响应的与操作。最终效果，两个位都是 1 时返回 1，在任何一位是 0 时返回 0.")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" res "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("25")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 25 => 0000 0000 0000 0000 0000 0000 0001 1001")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3  => 0000 0000 0000 0000 0000 0000 0000 0011")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// AND=> 0000 0000 0000 0000 0000 0000 0000 0001")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("h3",{attrs:{id:"按位或"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#按位或"}},[t._v("#")]),t._v(" 按位或("),s("code",[t._v("|")]),t._v(")")]),t._v(" "),s("p",[t._v("至少一位是 1 时返回 1，两位是 0 时返回 0；")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" res "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("25")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 27")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 25 => 0000 0000 0000 0000 0000 0000 0001 1001")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3  => 0000 0000 0000 0000 0000 0000 0000 0011")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// AND=> 0000 0000 0000 0000 0000 0000 0001 1011")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("h3",{attrs:{id:"按位异或"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#按位异或"}},[t._v("#")]),t._v(" 按位异或("),s("code",[t._v("^")]),t._v(")")]),t._v(" "),s("p",[t._v("只在一位上是 1 的时候返回 1")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" res "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("25")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 26")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 25 => 0000 0000 0000 0000 0000 0000 0001 1001")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3  => 0000 0000 0000 0000 0000 0000 0000 0011")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// AND=> 0000 0000 0000 0000 0000 0000 0001 1010")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("h3",{attrs:{id:"左移"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#左移"}},[t._v("#")]),t._v(" 左移("),s("code",[t._v("<<")]),t._v(")")]),t._v(" "),s("p",[t._v("会按照指定的位数将数值的所有位向左移动")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" num "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 二进制 11")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 96")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1100000 => 96")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("h3",{attrs:{id:"有符号右移"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#有符号右移"}},[t._v("#")]),t._v(" 有符号右移("),s("code",[t._v(">>")]),t._v(")")]),t._v(" "),s("p",[t._v("左移的逆运算：将数值的 32 位向右移动，保留正负符号")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" num "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("96")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 二进制 1100000")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 11 => 96")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("h3",{attrs:{id:"无符号右移"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#无符号右移"}},[t._v("#")]),t._v(" 无符号右移("),s("code",[t._v(">>>")]),t._v(")")]),t._v(" "),s("p",[t._v("与有符号右移不同，无符号右移会给空位补 0，在处理负数时，与有符号右移结果不同")]),t._v(" "),s("div",{staticClass:"language-JavaScript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" num "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("96")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1111 1111 1111 1111 1111 1111 1101 0000")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 134217725")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0000 0111 1111 1111 1111 1111 1111 1101")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("h2",{attrs:{id:"布尔操作符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#布尔操作符"}},[t._v("#")]),t._v(" 布尔操作符")]),t._v(" "),s("p",[t._v("布尔操作符共“与或非”三种")]),t._v(" "),s("h3",{attrs:{id:"逻辑非"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#逻辑非"}},[t._v("#")]),t._v(" 逻辑非("),s("code",[t._v("!")]),t._v(")")]),t._v(" "),s("p",[t._v("会将操作符根据 Boolean() 转换为布尔值，然后取反")]),t._v(" "),s("h3",{attrs:{id:"逻辑与"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#逻辑与"}},[t._v("#")]),t._v(" 逻辑与("),s("code",[t._v("&&")]),t._v(")")]),t._v(" "),s("p",[t._v("逻辑与由两个和号（&&）表示，但返回的不一定是布尔值，有以下规则")]),t._v(" "),s("ul",[s("li",[t._v("两操作数都是布尔值时，全真为真，遇假为假")]),t._v(" "),s("li",[t._v("当第一个操作数为对象就返回第二个操作数")]),t._v(" "),s("li",[t._v("当第二个操作数为对象时，只有第一个操作数求值为 true，才会返回对象")]),t._v(" "),s("li",[t._v("如果有操作数为 null\\NaN\\undefined，则返回该操作数")])]),t._v(" "),s("h3",{attrs:{id:"逻辑或"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#逻辑或"}},[t._v("#")]),t._v(" 逻辑或("),s("code",[t._v("||")]),t._v(")")]),t._v(" "),s("ul",[s("li",[t._v("两操作数都是布尔值时，全假为假，遇真为真")]),t._v(" "),s("li",[t._v("第一个操作数求值为 false，返回第二个操作数")]),t._v(" "),s("li",[t._v("第一个操作数为对象，返回该对象")]),t._v(" "),s("li",[t._v("两个操作数为 null\\NaN\\undefined，返回这些值")])]),t._v(" "),s("h2",{attrs:{id:"乘性操作符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#乘性操作符"}},[t._v("#")]),t._v(" 乘性操作符")]),t._v(" "),s("p",[t._v("乘性操作符共乘法、除法、取模三种操作符，非数值操作数，通过 Number() 转换为数值再计算")]),t._v(" "),s("h3",{attrs:{id:"乘法操作符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#乘法操作符"}},[t._v("#")]),t._v(" 乘法操作符("),s("code",[t._v("*")]),t._v(")")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("被乘数")]),t._v(" "),s("th",[t._v("乘数")]),t._v(" "),s("th",[t._v("返回")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("数值")]),t._v(" "),s("td",[t._v("数值")]),t._v(" "),s("td",[t._v("积或正负 Infinity")])]),t._v(" "),s("tr",[s("td",[t._v("NaN")]),t._v(" "),s("td",[t._v("其他")]),t._v(" "),s("td",[t._v("NaN")])]),t._v(" "),s("tr",[s("td",[t._v("其他")]),t._v(" "),s("td",[t._v("NaN")]),t._v(" "),s("td",[t._v("NaN")])]),t._v(" "),s("tr",[s("td",[t._v("NaN")]),t._v(" "),s("td",[t._v("NaN")]),t._v(" "),s("td",[t._v("NaN")])]),t._v(" "),s("tr",[s("td",[t._v("Infinity")]),t._v(" "),s("td",[t._v("0")]),t._v(" "),s("td",[t._v("NaN")])]),t._v(" "),s("tr",[s("td",[t._v("Infinity")]),t._v(" "),s("td",[t._v("非 0 的有限数值")]),t._v(" "),s("td",[t._v("正负形式的 Infinity")])]),t._v(" "),s("tr",[s("td",[t._v("Infinity")]),t._v(" "),s("td",[t._v("Infinity")]),t._v(" "),s("td",[t._v("Infinity")])])])]),t._v(" "),s("h3",{attrs:{id:"除法操作符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#除法操作符"}},[t._v("#")]),t._v(" 除法操作符("),s("code",[t._v("/")]),t._v(")")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("被除数")]),t._v(" "),s("th",[t._v("除数")]),t._v(" "),s("th",[t._v("返回")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("数值")]),t._v(" "),s("td",[t._v("数值")]),t._v(" "),s("td",[t._v("商或正负 Infinity")])]),t._v(" "),s("tr",[s("td",[t._v("NaN")]),t._v(" "),s("td",[t._v("其他")]),t._v(" "),s("td",[t._v("NaN")])]),t._v(" "),s("tr",[s("td",[t._v("其他")]),t._v(" "),s("td",[t._v("NaN")]),t._v(" "),s("td",[t._v("NaN")])]),t._v(" "),s("tr",[s("td",[t._v("NaN")]),t._v(" "),s("td",[t._v("NaN")]),t._v(" "),s("td",[t._v("NaN")])]),t._v(" "),s("tr",[s("td",[t._v("0")]),t._v(" "),s("td",[t._v("0")]),t._v(" "),s("td",[t._v("0")])]),t._v(" "),s("tr",[s("td",[t._v("非 0 的有限值")]),t._v(" "),s("td",[t._v("0")]),t._v(" "),s("td",[t._v("正负 Infinity")])]),t._v(" "),s("tr",[s("td",[t._v("Infinity")]),t._v(" "),s("td",[t._v("其他")]),t._v(" "),s("td",[t._v("正负 Infinity")])])])]),t._v(" "),s("h3",{attrs:{id:"取模操作符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#取模操作符"}},[t._v("#")]),t._v(" 取模操作符("),s("code",[t._v("%")]),t._v(")")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("被除数")]),t._v(" "),s("th",[t._v("除数")]),t._v(" "),s("th",[t._v("返回")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("数值")]),t._v(" "),s("td",[t._v("数值")]),t._v(" "),s("td",[t._v("余数")])]),t._v(" "),s("tr",[s("td",[t._v("Infinity")]),t._v(" "),s("td",[t._v("有限值")]),t._v(" "),s("td",[t._v("NaN")])]),t._v(" "),s("tr",[s("td",[t._v("有限值")]),t._v(" "),s("td",[t._v("0")]),t._v(" "),s("td",[t._v("NaN")])]),t._v(" "),s("tr",[s("td",[t._v("Infinity")]),t._v(" "),s("td",[t._v("Infinity")]),t._v(" "),s("td",[t._v("NaN")])]),t._v(" "),s("tr",[s("td",[t._v("有限值")]),t._v(" "),s("td",[t._v("Infinity")]),t._v(" "),s("td",[t._v("被除数")])])])]),t._v(" "),s("h2",{attrs:{id:"指数操作符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#指数操作符"}},[t._v("#")]),t._v(" 指数操作符")]),t._v(" "),s("p",[t._v("ES7 新增 "),s("code",[t._v("**")]),t._v(" 操作符替代 Math.pow()")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Math"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 9")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 9")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h2",{attrs:{id:"加性操作符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#加性操作符"}},[t._v("#")]),t._v(" 加性操作符")]),t._v(" "),s("h3",{attrs:{id:"加法操作符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#加法操作符"}},[t._v("#")]),t._v(" 加法操作符("),s("code",[t._v("+")]),t._v(")")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("被加数")]),t._v(" "),s("th",[t._v("加数")]),t._v(" "),s("th",[t._v("返回")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("数值")]),t._v(" "),s("td",[t._v("数值")]),t._v(" "),s("td",[t._v("和")])]),t._v(" "),s("tr",[s("td",[t._v("NaN")]),t._v(" "),s("td",[t._v("其他")]),t._v(" "),s("td",[t._v("NaN")])]),t._v(" "),s("tr",[s("td",[t._v("其他")]),t._v(" "),s("td",[t._v("NaN")]),t._v(" "),s("td",[t._v("NaN")])]),t._v(" "),s("tr",[s("td",[t._v("NaN")]),t._v(" "),s("td",[t._v("NaN")]),t._v(" "),s("td",[t._v("NaN")])]),t._v(" "),s("tr",[s("td",[t._v("Infinity")]),t._v(" "),s("td",[t._v("Infinity")]),t._v(" "),s("td",[t._v("Infinity")])]),t._v(" "),s("tr",[s("td",[t._v("-Infinity")]),t._v(" "),s("td",[t._v("-Infinity")]),t._v(" "),s("td",[t._v("-Infinity")])]),t._v(" "),s("tr",[s("td",[t._v("Infinity")]),t._v(" "),s("td",[t._v("-Infinity")]),t._v(" "),s("td",[t._v("NaN")])]),t._v(" "),s("tr",[s("td",[t._v("+0")]),t._v(" "),s("td",[t._v("+0")]),t._v(" "),s("td",[t._v("+0")])]),t._v(" "),s("tr",[s("td",[t._v("-0")]),t._v(" "),s("td",[t._v("+0")]),t._v(" "),s("td",[t._v("+0")])]),t._v(" "),s("tr",[s("td",[t._v("-0")]),t._v(" "),s("td",[t._v("-0")]),t._v(" "),s("td",[t._v("-0")])])])]),t._v(" "),s("div",{staticClass:"language-! line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("如果有操作数是非 Number 类型，存在规则：\n- 两数为字符串，后者拼接到前者末尾\n- 其一为字符串，将另一操作数转换为字符串，再拼接\n- 其一为对象、数值或布尔值，调用该值的 toString() 方法获取字符串，再计算\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("h3",{attrs:{id:"减性操作符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#减性操作符"}},[t._v("#")]),t._v(" 减性操作符("),s("code",[t._v("-")]),t._v(")")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("被减数")]),t._v(" "),s("th",[t._v("减数")]),t._v(" "),s("th",[t._v("返回")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("数值")]),t._v(" "),s("td",[t._v("数值")]),t._v(" "),s("td",[t._v("差")])]),t._v(" "),s("tr",[s("td",[t._v("NaN")]),t._v(" "),s("td",[t._v("其他")]),t._v(" "),s("td",[t._v("NaN")])]),t._v(" "),s("tr",[s("td",[t._v("其他")]),t._v(" "),s("td",[t._v("NaN")]),t._v(" "),s("td",[t._v("NaN")])]),t._v(" "),s("tr",[s("td",[t._v("NaN")]),t._v(" "),s("td",[t._v("NaN")]),t._v(" "),s("td",[t._v("NaN")])]),t._v(" "),s("tr",[s("td",[t._v("Infinity")]),t._v(" "),s("td",[t._v("Infinity")]),t._v(" "),s("td",[t._v("NaN")])]),t._v(" "),s("tr",[s("td",[t._v("-Infinity")]),t._v(" "),s("td",[t._v("-Infinity")]),t._v(" "),s("td",[t._v("NaN")])]),t._v(" "),s("tr",[s("td",[t._v("Infinity")]),t._v(" "),s("td",[t._v("-Infinity")]),t._v(" "),s("td",[t._v("Infinity")])]),t._v(" "),s("tr",[s("td",[t._v("-Infinity")]),t._v(" "),s("td",[t._v("Infinity")]),t._v(" "),s("td",[t._v("-Infinity")])]),t._v(" "),s("tr",[s("td",[t._v("+0")]),t._v(" "),s("td",[t._v("+0")]),t._v(" "),s("td",[t._v("+0")])]),t._v(" "),s("tr",[s("td",[t._v("+0")]),t._v(" "),s("td",[t._v("-0")]),t._v(" "),s("td",[t._v("-0")])]),t._v(" "),s("tr",[s("td",[t._v("-0")]),t._v(" "),s("td",[t._v("-0")]),t._v(" "),s("td",[t._v("+0")])])])]),t._v(" "),s("div",{staticClass:"language-! line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("如果有操作数是非 Number 类型，存在规则：\n- 其一为字符串、布尔值、null、undefined，先在后台使用 Number() 转换为数值，再计算\n- 其一为对象，先调用 valueOf 转数值，如果没有该方法就调用 toString() 方法，再根据规则计算\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("h2",{attrs:{id:"关系操作符-、-、-、"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关系操作符-、-、-、"}},[t._v("#")]),t._v(" 关系操作符("),s("code",[t._v("<")]),t._v("、"),s("code",[t._v(">")]),t._v("、"),s("code",[t._v("<=")]),t._v("、"),s("code",[t._v(">=")]),t._v(")")]),t._v(" "),s("ul",[s("li",[t._v("操作数都是数值，进行比较")]),t._v(" "),s("li",[t._v("操作数都是字符串，逐个比较字符串中对应字符的编码")]),t._v(" "),s("li",[t._v("操作数有数值，则另一操作数执行 Number() 转化")]),t._v(" "),s("li",[t._v("操作数有对象，则调用对象的 valueOf() 取数值，没有 valueOf() 则调用 toString() 取字符串，再比较")]),t._v(" "),s("li",[t._v("操作数有布尔值，将布尔值转为数值，再比较")])]),t._v(" "),s("h2",{attrs:{id:"相等操作符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#相等操作符"}},[t._v("#")]),t._v(" 相等操作符")]),t._v(" "),s("p",[t._v("该操作符分为等于操作符和全等操作符")]),t._v(" "),s("h3",{attrs:{id:"等于和不等于-、"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#等于和不等于-、"}},[t._v("#")]),t._v(" 等于和不等于("),s("code",[t._v("==")]),t._v("、"),s("code",[t._v("!=")]),t._v(")")]),t._v(" "),s("ul",[s("li",[t._v("操作符其一为布尔值，将其转为数值，再比较")]),t._v(" "),s("li",[t._v("操作符其一为字符串，另一操作符为数值，尝试将字符串转换为数值，再比较")]),t._v(" "),s("li",[t._v("操作符其一为对象，另一个操作符为非对象，调用对象的 valueOf()，如无调用 toString()，再比较")]),t._v(" "),s("li",[s("code",[t._v("null == undefined")])]),t._v(" "),s("li",[t._v("null 和 undefined 不能转换为其他值再进行比较")]),t._v(" "),s("li",[t._v("操作符其一为 NaN，则不相等")]),t._v(" "),s("li",[t._v("操作符皆对象，比较二者是否指向同一个对象")])]),t._v(" "),s("h3",{attrs:{id:"全等和不全等-、"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全等和不全等-、"}},[t._v("#")]),t._v(" 全等和不全等("),s("code",[t._v("===")]),t._v("、"),s("code",[t._v("!==")]),t._v(")")]),t._v(" "),s("p",[t._v("全等操作符比较时不转换操作数，更为推荐使用")]),t._v(" "),s("h2",{attrs:{id:"条件操作符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#条件操作符"}},[t._v("#")]),t._v(" 条件操作符")]),t._v(" "),s("p",[t._v("其实使用的是三元表达式，语法：")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("variable "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" boolean_expression "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" false_value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[s("code",[t._v("boolean_expression")]),t._v(" 为真时，把 "),s("code",[t._v("true-value")]),t._v(" 赋值给 "),s("code",[t._v("variable")]),t._v("，反之 将 "),s("code",[t._v("false-value")]),t._v(" 赋值给 "),s("code",[t._v("false_value")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"赋值操作符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#赋值操作符"}},[t._v("#")]),t._v(" 赋值操作符")]),t._v(" "),s("p",[s("code",[t._v("num = num + 10")]),t._v(" => "),s("code",[t._v("num += 10")]),t._v("，类似很多简写语法")])])}),[],!1,null,null,null);a.default=_.exports}}]);