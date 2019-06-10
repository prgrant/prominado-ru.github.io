(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{190:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"события-d7"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#события-d7","aria-hidden":"true"}},[t._v("#")]),t._v(" События D7")]),t._v(" "),s("p",[t._v("В Битриксе у любой сущности ORM есть 9 типов событий:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("Добавление элемента\n\nOnBeforeAdd "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fields"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nOnAdd "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fields"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nOnAfterAdd "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fields, primary"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("Изменение элемента\n\nOnBeforeUpdate "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("primary, fields"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nOnUpdate "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("primary, fields"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nOnAfterUpdate "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("primary, fields"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("Удаление элемента\n\nOnBeforeDelete "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("primary"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nOnDelete "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("primary"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nOnAfterDelete "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("primary"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("Пример события для сущности "),s("code",[t._v("\\Bitrix\\Iblock\\ElementTable")])]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[t._v("\\"),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Bitrix"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Main"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("EventManager")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventHandler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'iblock'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'\\\\Bitrix\\\\Iblock\\\\Element::OnBeforeAdd'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\\"),s("span",{pre:!0,attrs:{class:"token package"}},[t._v("Bitrix"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Main"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Event")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'<pre style=\"color: red;\">'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("print_r")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$e")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getParameters")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean constant"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'</pre>'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Для всех сущностей этого будет достаточно. Постфикс "),s("code",[t._v("Table")]),t._v(" класса сущности указывать не нужно")])])}],!1,null,null,null);a.default=e.exports}}]);