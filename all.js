var RoF=function(n){var r={};function i(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,i),e.l=!0,e.exports}return i.m=n,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=8)}([function(t,e){var n="https:"===window.location.protocol;t.exports={name:"likely",prefix:"likely__",secure:n,protocol:n?"https:":"http:",storageKey:"likelyServices",breakpoint:680}},function(t,e,n){var r=n(0),i=document.createElement("div"),a=0,o=t.exports={wrapSVG:function(t){return'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M'+t+'z"/></svg>'},createNode:function(t){return i.innerHTML=t,i.children[0]},getScript:function(t){var e=document.createElement("script"),n=document.head;e.type="text/javascript",e.src=t,n.appendChild(e),n.removeChild(e)},getJSON:function(t,e){var n=encodeURIComponent("random_fun_"+ ++a);t=t.replace(/callback=(\?)/,"callback="+n),window[n]=e,o.getScript(t)},find:function(t,e){return(e||document).querySelector(t)},findAll:function(t,e){return(e||document).querySelectorAll(t)},isMobile:function(){return!window.matchMedia("(min-width: "+r.breakpoint+"px)").matches},openPopup:function(t,e,n,r){var i=Math.round(screen.width/2-n/2),a=0;screen.height>r&&(a=Math.round(screen.height/3-r/2));var o="left="+i+",top="+a+",width="+n+",height="+r+",personalbar=0,toolbar=0,scrollbars=1,resizable=1";return window.open(t,e,o)}}},function(t,e){var a={yes:!0,no:!1},o={each:function(t,e){for(var n in t)t.hasOwnProperty(n)&&e(t[n],n)},toArray:function(t){return Array.prototype.slice.call(t)},merge:function(){for(var t={},e=0;e<arguments.length;e++){var n=arguments[e];if(n)for(var r in n)t[r]=n[r]}return t},extend:function(t,e){for(var n in e)t[n]=e[n]},flexboxSupport:function(t,e){var n,r="flex",i="-webkit-"+r,a=document.createElement("b");try{a.style.display=i,a.style.display=r,n=a.style.display==r||a.style.display==i?r:"no-"+r}catch(a){n="no-"+r}t.className+=" "+e+"--"+n},getDataset:function(t){if("object"==typeof t.dataset)return t.dataset;var e,n,r={},i=t.attributes,a=function(t){return t.charAt(1).toUpperCase()};for(e=i.length-1;0<=e;e--)(n=i[e])&&n.name&&/^data-\w[\w\-]*$/.test(n.name)&&(r[n.name.substr(5).replace(/-./g,a)]=n.value);return r},bools:function(t){var e={},n=o.getDataset(t);for(var r in n){var i=n[r];e[r]=a[i]||i}return e},template:function(t,n){return t?t.replace(/\{([^\}]+)\}/g,function(t,e){return e in n?n[e]:t}):""},makeUrl:function(t,e){for(var n in e)e[n]=encodeURIComponent(e[n]);return o.template(t,e)},query:function(t){var e=encodeURIComponent,n=[];for(var r in t)"object"!=typeof t[r]&&n.push(e(r)+"="+e(t[r]));return n.join("&")},set:function(n,t,e){var r=t.split("."),i=null;r.forEach(function(t,e){void 0===n[t]&&(n[t]={}),e!==r.length-1&&(n=n[t]),i=t}),n[i]=e}};t.exports=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.sendPageView=e.sendEvent=void 0;var r,i=n(5),a=(r=i)&&r.__esModule?r:{default:r};e.sendEvent=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"Click",n=a.default.analyticsCategory+" — "+t+" — "+e;void 0!==window.dataLayer&&a.default.analyticsCategory&&window.dataLayer.push({event:"data_event",data_description:n})},e.sendPageView=function(){void 0!==window.dataLayer&&window.dataLayer.push({event:"Page — View",post_details:{},section:"special",tags:[],title:document.title,url:window.location.pathname})}},function(t,e,n){var r=n(18),i=n(2),a=n(19),o={odnoklassniki:n(20),vkontakte:n(21),facebook:n(22),twitter:n(23),gplus:n(24),pocket:n(25),telegram:n(26),whatsapp:n(27),viber:n(28),email:n(29),more:n(30)};i.each(o,function(t,e){r(t),t.svgi=a[e],t.name=e}),t.exports=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"RoF",analyticsCategory:"Real or Fake",sendPageView:!1,listenedEvents:["click"]}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.makeElement=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[],n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:[];t=t.toLowerCase();var r=document.createElement(t);for(var i in e&&("object"===(void 0===e?"undefined":s(e))?e.forEach(function(t){r.classList.add(t)}):"string"==typeof e&&r.classList.add(e)),n)if("data"===i){var a=n[i];for(var o in a)r.dataset[o]=a[o]}else r[i]=n[i];return r},e.cacheElements=function(t){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"view",r={},e=document.querySelectorAll("[data-"+n+"]");Array.prototype.forEach.call(e,function(t){var e=t.dataset[n];r[e]=t}),Object.assign(t,r)},e.getSiblings=function(t){for(var e=[],n=t.parentNode.firstChild;n;n=n.nextSibling)1===n.nodeType&&n!==t&&e.push(n);return e},e.removeChildren=function(t){for(;t.firstChild;)t.removeChild(t.firstChild)},e.removeElement=function(t){t&&t.parentNode.removeChild(t)},e.htmlStringToNode=function(t){var e=document.createElement("div");return e.innerHTML=t,e.firstChild},e.prepend=function(t,e){t.insertBefore(e,t.firstChild)},e.isElementInDom=function(t){return t.parentNode}},function(t,e){var n=function(){try{return window.localStorage.setItem("isStorageAvailable",1),window.localStorage.removeItem("isStorageAvailable"),!0}catch(t){return!1}},r={getItem:function(t){if(n()){var e=window.localStorage.getItem(t);try{JSON.parse(e)}catch(t){return e}return JSON.parse(e)}},setItem:function(t,e){e="string"==typeof e?e:JSON.stringify(e),n()&&window.localStorage.setItem(t,e)},removeItem:function(t){n()&&window.localStorage.removeItem(t)}};t.exports=r},function(t,e,n){"use strict";var r,i=n(9),a=(r=i)&&r.__esModule?r:{default:r};t.exports.Special=a.default},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}}();n(10);var a=d(n(11)),o=d(n(12)),s=d(n(13)),c=n(6),l=r(n(3)),u=r(n(14));function r(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function d(t){return t&&t.__esModule?t:{default:t}}var p="rof",h={},f=function(t){function r(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r);var e=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(r.__proto__||Object.getPrototypeOf(r)).call(this));return Object.assign(e.params,t),e.saveParams(),o.default&&t.data&&Object.assign(o.default,t.data),e.params.css?e.loadStyles(e.params.css).then(function(){return e.init()}):e.init(),e}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(r,a.default),i(r,[{key:"createElements",value:function(){h.main=(0,c.makeElement)("div",p),h.mBg=(0,c.makeElement)("div",p+"__bg"),h.mInner=(0,c.makeElement)("div",p+"__inner"),h.main.appendChild(h.mBg),h.main.appendChild(h.mInner),h.enter=(0,c.makeElement)("div",p+"-enter"),o.default.images.forEach(function(t,e){var n=(0,c.makeElement)("img",[p+"-enter__img",p+"-enter__img--"+(e+1)],{src:t});h.enter.appendChild(n)}),h.eInner=(0,c.makeElement)("div",p+"-enter__inner"),h.eHeadline=(0,c.makeElement)("div",p+"-enter__headline",{textContent:"тест"}),this.params.isFeed?h.eTitle=(0,c.makeElement)("a",p+"-enter__title",{href:"/"+this.params.articleId,textContent:o.default.title}):h.eTitle=(0,c.makeElement)("div",p+"-enter__title",{textContent:o.default.title}),h.eText=(0,c.makeElement)("div",p+"-enter__text",{innerHTML:o.default.text}),h.eBtn=(0,c.makeElement)("button",p+"-enter__btn",{data:{click:"start",caption:"Обманите меня",hoverCaption:"Обнимите меня"}}),h.eInner.appendChild(h.eHeadline),h.eInner.appendChild(h.eTitle),h.eInner.appendChild(h.eText),h.eInner.appendChild(h.eBtn),h.enter.appendChild(h.eInner),h.test=(0,c.makeElement)("div",p+"-test"),h.tHeader=(0,c.makeElement)("div",p+"-test__header"),h.tPages=(0,c.makeElement)("div",p+"-test__pages"),h.tTitle=(0,c.makeElement)("div",p+"-test__title",{textContent:"Фейк или правда?"}),h.tHeader.appendChild(h.tPages),h.tHeader.appendChild(h.tTitle),h.tBody=(0,c.makeElement)("div",p+"-test__body"),h.tQuestion=(0,c.makeElement)("div",p+"-test__question"),h.tOptions=(0,c.makeElement)("div",p+"-test__options"),h.tBody.appendChild(h.tQuestion),h.tBody.appendChild(h.tOptions),h.tAnswer=(0,c.makeElement)("div",p+"-test__answer"),h.tAnswerText=(0,c.makeElement)("div",p+"-test__answer-text"),h.tBtn=(0,c.makeElement)("button",p+"-test__btn",{textContent:"Далее",data:{click:"continue"}}),h.tAnswer.appendChild(h.tAnswerText),h.tAnswer.appendChild(h.tBtn),h.test.appendChild(h.tHeader),h.test.appendChild(h.tBody),h.result=(0,c.makeElement)("div",p+"-result"),h.rImg=(0,c.makeElement)("img",p+"-result__img"),h.rInner=(0,c.makeElement)("div",p+"-result__inner"),h.rResult=(0,c.makeElement)("div",p+"-result__result"),h.rTitle=(0,c.makeElement)("div",p+"-result__title"),h.rShare=(0,c.makeElement)("div",p+"-result__share"),h.rRestart=(0,c.makeElement)("div",p+"-result__restart",{innerHTML:"<span>Пройти еще раз</span>"+s.default.refresh,data:{click:"restart"}}),h.rInner.appendChild(h.rResult),h.rInner.appendChild(h.rTitle),h.rInner.appendChild(h.rShare),h.rInner.appendChild(h.rRestart),h.result.appendChild(h.rImg),h.result.appendChild(h.rInner),h.mInner.appendChild(h.enter)}},{key:"start",value:function(){l.sendEvent("Start"),h.mInner.replaceChild(h.test,h.enter),this.makeNextQuestion()}},{key:"makeNextQuestion",value:function(){var t=o.default.questions[this.activeIndex];h.tPages.textContent=this.activeIndex+1+"/"+o.default.questions.length,h.tQuestion.innerHTML=t.text,r.makeOptions(t.options)}},{key:"answer",value:function(e){if(!this.isAnswered){this.isAnswered=!0,l.sendEvent("Question "+(this.activeIndex+1)+" - Option");var t=e.dataset.index,n=o.default.questions[this.activeIndex];[].slice.call(h.tOptions.childNodes).forEach(function(t){e!==t&&h.tOptions.removeChild(t)}),n.options[t].isCorrect?(this.correctAnswers+=1,h.tAnswerText.innerHTML=n.answer.correct,e.classList.add("is-correct")):(h.tAnswerText.innerHTML=n.answer.incorrect,e.classList.add("is-incorrect")),this.activeIndex===o.default.questions.length-1&&(h.tBtn.textContent="Результат",h.tBtn.dataset.click="result"),h.tBody.appendChild(h.tAnswer)}}},{key:"continue",value:function(){this.isAnswered=!1,l.sendEvent("Question "+(this.activeIndex+1)+" - Continue"),this.activeIndex+=1,h.tBody.removeChild(h.tAnswer),this.makeNextQuestion()}},{key:"result",value:function(){this.isAnswered=!1,l.sendEvent("Result"),h.tBody.removeChild(h.tAnswer);var t=r.getResult(this.correctAnswers),e=t.result,n=t.index;h.mInner.replaceChild(h.result,h.test),h.rImg.src=e.img,h.rImg.srcset=e.img2x+" 2x",h.rImg.className="",h.rImg.classList.add(p+"-result__img"),h.rImg.classList.add(p+"-result__img--"+(n+1)),h.rResult.textContent=this.correctAnswers+" из "+o.default.questions.length+" правильных ответов",h.rTitle.innerHTML=e.title,(0,c.removeChildren)(h.rShare),u.make(h.rShare,{url:this.params.share.url+"/"+this.correctAnswers,title:this.params.share.title,twitter:this.params.share.title})}},{key:"restart",value:function(){l.sendEvent("Restart"),this.setInitialParams(),h.tBtn.textContent="Далее",h.tBtn.dataset.click="continue",h.mInner.replaceChild(h.test,h.result),this.makeNextQuestion()}},{key:"setInitialParams",value:function(){this.activeIndex=0,this.correctAnswers=0}},{key:"init",value:function(){this.setInitialParams(),this.createElements(),this.container.appendChild(h.main),this.params.isFeed&&h.main.classList.add("is-feed"),l.sendEvent("First screen","Show")}}],[{key:"getResult",value:function(n){var r="",i=0;return o.default.results.some(function(t,e){return t.range[0]<=n&&t.range[1]>=n&&(r=t,i=e,!0)}),{result:r,index:i}}},{key:"makeOptions",value:function(t){(0,c.removeChildren)(h.tOptions),t.forEach(function(t,e){var n=(0,c.makeElement)("div",p+"-test__option",{textContent:t.text,data:{index:e,click:"answer"}});h.tOptions.appendChild(n)})}}]),r}();e.default=f},function(t,e,n){},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,i=function(){function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}}(),a=n(5),o=(r=a)&&r.__esModule?r:{default:r},s=function(t){{if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}}(n(3));var c=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.keyCodes={enter:13},this.params={container:document.body},o.default.sendPageView&&s.sendPageView()}return i(t,[{key:"saveParams",value:function(){Object.assign(this.params,o.default),this.container=this.params.container,this.addEventListeners()}},{key:"loadStyles",value:function(r){return new Promise(function(t,e){var n=document.createElement("link");n.rel="stylesheet",n.href=r,n.onload=function(){return t()},n.onerror=function(){return e()},document.body.appendChild(n)})}},{key:"addEventListeners",value:function(){var n=this;this.params.listenedEvents.forEach(function(e){n.container.addEventListener(e,function(t){return n.defaultEventHandler(t,e)})})}},{key:"defaultEventHandler",value:function(t,e){for(var n=t.target,r=void 0;n.parentNode&&n!==t.currentTarget&&(r=n.dataset[e],"click"===e&&"a"===n.tagName.toLowerCase()&&s.sendEvent(n.href),!r);)n=n.parentNode;(r=n.dataset[e])&&this[r]&&this[r](t.target,t)}}]),t}();e.default=c},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={title:"Реальная новость или фейк. Сможете отличить?",text:"<p>В 2018 году стало ещё сложнее понять, кому доверять, а кому — нет.</p><p>Пока СМИ и блогеры соревнуются, кто быстрей, проверка информации всё чаще перекладывается на плечи читателя. Давайте узнаем, насколько сложно вас обмануть.</p>",images:["https://leonardo.osnova.io/c0b15f74-9fd1-60ae-ed83-a9af6e9c0d91/","https://leonardo.osnova.io/c1771779-70ec-1eac-26db-759c1371d25c/","https://leonardo.osnova.io/351b77b9-bccb-5411-6a22-4ee684616422/"],questions:[{text:'<span data-fz="48">Начнём с простого.</span><br><span data-fz="32">Что из этого было <span data-color="white" data-bg="main">по-настоящему?</span></span>',answer:{correct:"Всё верно, Путин действительно это пообещал: «Мы, жертвы агрессии, как мученики попадём в рай, а они [агрессоры] просто сдохнут».",incorrect:"Увы, это фейк. А президент пообещал напрямую: «Мы, жертвы агрессии, как мученики попадём в рай, а они просто сдохнут»."},options:[{text:"Роскомнадзор приостановил показ нового «Простоквашино» из-за нацистского прошлого Печкина"},{text:"Павел Дуров пообещал привязать криптовалюту Gram к швейцарскому франку ради безопасности пользователей"},{text:"Facebook начал штрафовать за цитирование книг Николая Старикова"},{text:"Путин заявил, что в случае ядерной войны россияне попадут в рай",isCorrect:!0}]},{text:'<span data-fz="40">Повысим сложность.<br>Где тут <span data-color="white" data-bg="main">правда?</span></span>',answer:{correct:"Да, было дело. Правда, в IT-отрасли посоветовали этими прокси не пользоваться.",incorrect:"Упс!  Сомневайтесь, даже если новость очень похожа на правду. В реальности были только прокси от Mail.Ru Group."},options:[{text:"Илон Маск назвал бортовую систему Falcon 9 в честь певицы Граймс"},{text:"Стажёр YouTube нашёл в штаб-квартире дартс с лицом PewDiePie"},{text:"Mail.Ru Group поделилась бесплатными прокси для Telegram",isCorrect:!0},{text:"Сборная России по футболу посетила церковь перед матчем с Испанией"}]},{text:'<span data-fz="28">Три заголовка про российские госорганы — правда. Какой из них — это <span data-color="white" data-bg="main">фейк?</span></span>',answer:{correct:"Вы правы, это фейк. Чтобы всегда быть уверенным, проверяйте первоисточник.",incorrect:"Так и было, честное слово! Чтобы быть уверенным, проверяйте первоисточник."},options:[{text:"МВД наказало офицера, который доказывал теорему во время дежурства",isCorrect:!0},{text:"Жительница Кировской области не пошла к приставам, потому что земля «поднялась и перегородила ей дорогу»"},{text:"Прокуратура Екатеринбурга изъяла детские рисунки с выставки «Толерантный мир»"},{text:"Глава СК попытался обвинить Telegram в терактах, но перепутал его с Инстаграмом"}]},{text:'Кликбейт — одна из форм обмана читателя,<br>и в него <a href="https://habr.com/post/345190/" target="_blank">умеют</a> даже нейросети. Что из этого <span data-color="white" data-bg="main">написал живой человек?</span>',answer:{correct:"Да, этот заголовок написал живой редактор «Ленты.ру». Речь шла о несостоявшемся действе на конференции в Лас-Вегасе.",incorrect:"Увы, это текст, сгенерированный пользователем «Хабра» с помощью нейросетей на основе материалов «Ленты.ру». А вот про оргию написал настоящий сотрудник издания."},options:[{text:"Иркутск оставили без воздуха"},{text:"«Cамая массовая оргия» провалилась",isCorrect:!0},{text:"ЦБ выделит деньги на починку каменного пениса тролля"},{text:"США потребовали дать в морду Жиркову"}]},{text:'Новости на TJ порой кажутся невозможными.<br><span data-fz="40">Что из этого <span data-color="white" data-bg="main">не было на TJ?</span></span>',answer:{correct:"Вы правы, это полный фейк. Нечто похожее Якубович говорил про «Поле Чудес», но Первый канал обвинил журналистов в вырывании слов из контекста.",incorrect:"Увы, так всё и было. Вариант про Диброва — фейк. Нечто похожее Якубович говорил про «Поле Чудес», но Первый канал обвинил журналистов в вырывании из контекста. "},options:[{text:"РЕН ТВ проник в больницу, где лечат Скрипаля, но прервал репортаж из-за надписи «Осторожно, скользкий пол»"},{text:"В Бангладеш разошлось фото целующейся пары. Фотографа уволили и избили за «неприличный» снимок"},{text:"Дмитрий Дибров назвал программу «Кто хочет стать миллионером» бестолковой, а участников — глупыми",isCorrect:!0},{text:"Глава ЦИК сделала пресс-секретарю Путина замечание за агитацию в его пользу"}]},{text:'Давайте разберёмся.<br>Чьи заголовки хотя бы<br><span data-color="white" data-bg="main">иногда оказываются правдой?</span>',answer:{correct:"Да, ФАН — это официально зарегистрированное СМИ. Но его связывают с «фабрикой троллей», которая могла повлиять на выборы в США.",incorrect:"Нет, все материалы в этом издании — фейк. Регистрация СМИ есть только у ФАН, но это издание считается связанным с «фабрикой троллей»."},options:[{text:"«Федеральное агентство новостей»",isCorrect:!0},{text:"Агентство «Панорама»"},{text:"Агентство «Интерсакс»"},{text:"Издание The Onion"}]},{text:'Дмитрий Киселёв в эфире «России 1»<br><span data-color="white" data-bg="main">зачитал рэп</span> на стихи русского поэта.<br>Что именно?',answer:{correct:'Раунд! Вы правы, таким специфичным образом телеведущий <a href="https://www.youtube.com/watch?v=JGiDXl6i7as" target="_blank">поддержал</a> рэпера Хаски.',incorrect:'Не лучший ваш раунд. Киселёв <a href="https://www.youtube.com/watch?v=JGiDXl6i7as" target="_blank">зачитал</a> стихи Маяковского, чтобы поддержать Хаски.'},options:[{text:"«Чиновник и поэт» Александра Пушкина"},{text:"«Хорошо» Владимира Маяковского",isCorrect:!0},{text:"«Ни страны, ни погоста» Иосифа Бродского"},{text:"«Не везёт тебе, Алёша» Максима Горького"}]},{text:'Все эти люди живы и здоровы. Но <span data-color="white" data-bg="main">только один из них не стал</span> жертвой фейковой новости о смерти. Кто это?',answer:{correct:"Вы правы, речь о Дебенедетти — авторе фейковых новостей о смертях известных персон. Так он проверяет, насколько журналисты доверчивы.",incorrect:"Увы, в соцсетях ходили ложные слухи о смерти этой знаменитости. А речь всё-таки о Дебенедетти — авторе многих подобных фейковых новостей."},options:[{text:"Певица Алла Пугачёва"},{text:"Актёр Сильвестр Сталлоне"},{text:"Журналист Томасо Дебенедетти",isCorrect:!0},{text:"Режиссёр Жан-Люк Годар"}]},{text:'СМИ часто пишут, как кто-то оправдывается.<br>В каком случае <span data-color="white" data-bg="main">уместно написать</span>, что человек «опроверг» некие сведения?',answer:{correct:"Слово «опроверг» здесь уместно, потому что предоставлены доказательства. Иначе лучше было бы написать «отверг» или «отрицает». Жаль, что такой ситуации никогда не было. ",incorrect:"Нет, слово «опроверг» подходит, если предоставлены доказательства точки зрения. На самом деле Песков «отрицал» или «отвергал» сведения, просто называя их вымыслом. "},options:[{text:"Песков опроверг причастность России к отравлению Скрипалей"},{text:"Песков опроверг расследование Навального о друзьях Путина, предоставив документы в пользу версии Кремля",isCorrect:!0},{text:"Песков опроверг сообщения о строительстве «Роснефтью» резиденции для Путина"},{text:"Песков опроверг существование «приватного фонда» Путина"}]}],results:[{range:[0,2],title:"Не результат,<br>а&nbsp;радиоактивный<br>пепел",img:"https://leonardo.osnova.io/45f054c6-ac2c-033d-6105-5cf2c190c093/",img2x:"https://leonardo.osnova.io/78c0c60c-6c08-89ae-192a-90a808f1048d/"},{range:[3,5],title:"Результат<br>реальнее<br>робота Бориса",img:"https://leonardo.osnova.io/a7deb526-b927-22d2-d851-48d7930c9da6/",img2x:"https://leonardo.osnova.io/6912edb2-942f-2fa9-acff-3cee1b71a108/"},{range:[6,6],title:"Пользователь сети<br>интернет прошёл тест.<br>Что? Да!",img:"https://leonardo.osnova.io/47250f65-d8aa-a410-63ea-eda111bdf8a4/",img2x:"https://leonardo.osnova.io/f5ea76b0-5d00-5cff-2034-a0c8c8a6c140/"},{range:[7,9],title:"Шок! Такого вы ещё не<br>видели! Я прошёл тест и<br>доказал, что знаю правду!",img:"https://leonardo.osnova.io/55078780-38cf-cebc-ce42-dcbcdefe0025/",img2x:"https://leonardo.osnova.io/6062e636-165c-096d-c1b6-2e37b2df2c08/"}]}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={refresh:'<svg width="15" height="15"><path d="M14.62.674c-.268-.11-.495-.065-.684.136l-1.27 1.26A7.58 7.58 0 0 0 10.278.542 7.357 7.357 0 0 0 7.5 0a7.298 7.298 0 0 0-2.91.596 7.565 7.565 0 0 0-2.393 1.601A7.567 7.567 0 0 0 .596 4.59 7.298 7.298 0 0 0 0 7.5c0 1.015.199 1.986.596 2.91a7.567 7.567 0 0 0 1.601 2.393 7.57 7.57 0 0 0 2.393 1.601A7.298 7.298 0 0 0 7.5 15c1.12 0 2.185-.236 3.194-.708a7.333 7.333 0 0 0 2.578-1.997.32.32 0 0 0 .073-.22.27.27 0 0 0-.093-.2l-1.338-1.348a.376.376 0 0 0-.244-.087c-.104.013-.179.052-.224.117a4.904 4.904 0 0 1-1.748 1.436A4.925 4.925 0 0 1 7.5 12.5a4.87 4.87 0 0 1-1.938-.395 5.034 5.034 0 0 1-1.597-1.07A5.038 5.038 0 0 1 2.896 9.44 4.87 4.87 0 0 1 2.5 7.5c0-.677.132-1.323.396-1.938a5.036 5.036 0 0 1 1.07-1.597c.449-.45.98-.806 1.596-1.07A4.87 4.87 0 0 1 7.5 2.5c1.309 0 2.445.446 3.409 1.338L9.56 5.186c-.202.195-.248.42-.137.674.11.26.303.39.576.39h4.375a.6.6 0 0 0 .44-.185.6.6 0 0 0 .185-.44V1.25a.584.584 0 0 0-.38-.576z"/></svg>'}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.make=e.init=void 0;var r,i=n(15),a=(r=i)&&r.__esModule?r:{default:r},o=n(6),s=function(t){{if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}}(n(3));var c="likely",l="likely--custom",u=e.init=function(){a.default.initate()};e.make=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=(0,o.makeElement)("div",[c,l]);["facebook","vkontakte","twitter"].forEach(function(t){var e=(0,o.makeElement)("div",t);"facebook"===t&&(e.innerHTML="Поделиться"),e.addEventListener("click",function(){s.sendEvent("Share "+t)}),n.appendChild(e)}),t.appendChild(n),e.url&&(n.dataset.url=e.url),e.twitter&&(n.dataset.twitter=e.twitter),e.title&&(n.dataset.title=e.title),u()}},function(t,e,n){var r=n(16),i=n(0),a=n(2),o=n(1),s=function(t,e){e=e||{};var n=t[i.name];return n?n.update(e):t[i.name]=new r(t,a.merge({},s.defaults,e,a.bools(t))),n};s.initiate=s.initate=function(){var t=o.findAll("."+i.name);a.toArray(t).forEach(s)},s.defaults={counters:!0,timeout:1e3,zeroes:!1,title:document.title,wait:500,url:window.location.href.replace(window.location.hash,"")},t.exports=s},function(t,e,n){var r=n(17),i=(n(4),n(0)),a=n(2),o=n(1),s=n(7);function c(t,e){this.isSmartOrder=void 0!==t.dataset.smart,this.container=t,this.options=e,this.countersLeft=0,this.buttons=[],this.number=0,this.init()}c.prototype={reorder:function(t){var e=s.getItem(i.storageKey);e&&(e.reverse(),e.forEach(function(t){var e=o.find("."+t);e&&e.parentNode.insertBefore(e,e.parentNode.firstChild)}))},init:function(){var t=a.toArray(this.container.children);o.isMobile()&&this.isSmartOrder&&this.reorder(t),t.forEach(this.addButton.bind(this)),this.options.counters?(this.timer=setTimeout(this.appear.bind(this),this.options.wait),this.timeout=setTimeout(this.ready.bind(this),this.options.timeout)):this.appear(),a.flexboxSupport(this.container,i.name)},addButton:function(t){var e=new r(t,this,this.options);this.buttons.push(e),e.options.counterUrl&&this.countersLeft++},update:function(e){(e.forceUpdate||e.url!==this.options.url)&&(this.countersLeft=this.buttons.length,this.number=0,this.buttons.forEach(function(t){t.update(e)}))},updateCounter:function(t,e){e&&(this.number+=e),this.countersLeft--,0===this.countersLeft&&(this.appear(),this.ready())},appear:function(){this.container.classList.add(i.name+"--visible")},ready:function(){this.timeout&&(clearTimeout(this.timeout),this.container.classList.add(i.name+"--ready"))}},t.exports=c},function(t,e,n){var i=n(4),a=n(0),r=n(31),o=n(2),s=n(1),c=n(7),l='<span class="{className}">{content}</span>';function u(t,e,n){this.widget=t,this.likely=e,this.options=o.merge(n),this.init()}u.prototype={init:function(){this.detectService(),this.detectParams(),this.service&&(this.initHtml(),setTimeout(this.initCounter.bind(this),0))},update:function(t){var e="."+a.prefix+"counter",n=s.findAll(e,this.widget);o.extend(this.options,o.merge({forceUpdate:!1},t)),o.toArray(n).forEach(function(t){t.parentNode.removeChild(t)}),this.initCounter()},detectService:function(){var t=this.widget,e=o.getDataset(t).service;if(!e){for(var n=t.className.split(" "),r=0;r<n.length&&!(n[r]in i);r++);e=n[r]}e&&(this.service=e,o.extend(this.options,i[e]))},detectParams:function(){var t=this.options,e=o.getDataset(this.widget);if(e.counter){var n=parseInt(e.counter,10);isNaN(n)?t.counterUrl=e.counter:t.counterNumber=n}t.title=e.title||t.title,t.url=e.url||t.url},initHtml:function(){var t=this.options,e=this.widget,n=e.innerHTML;e.addEventListener("click",this.click.bind(this)),e.classList.remove(this.service),e.className+=" "+this.className("widget");var r=o.template(l,{className:this.className("button"),content:n}),i=o.template(l,{className:this.className("icon"),content:s.wrapSVG(t.svgi)});e.innerHTML=i+r},initCounter:function(){var t=this.options;t.counters&&t.counterNumber?this.updateCounter(t.counterNumber):t.counterUrl&&r(this.service,t.url,t)(this.updateCounter.bind(this))},className:function(t){var e=a.prefix+t;return e+" "+e+"--"+this.service},updateCounter:function(t){t=parseInt(t,10)||0;var e=s.find("."+a.name+"__counter",this.widget);e&&e.parentNode.removeChild(e);var n={className:this.className("counter"),content:t};t||this.options.zeroes||(n.className+=" "+a.prefix+"counter--empty",n.content=""),this.widget.appendChild(s.createNode(o.template(l,n))),this.likely.updateCounter(this.service,t)},click:function(){var t=this.options;if("more"==this.service)this.widget.classList.toggle("active"),this.widget.parentElement.classList.toggle(this.options.className);else if("email"==this.service){var e=o.makeUrl(t.popupUrl,{url:t.url,title:t.title});window.location=e,this.rememberClicked(this.service)}else if(t.click.call(this)){var n=this.likely.container.dataset.twitter,r=this.likely.container.dataset.twitterUrl,i=o.makeUrl(t.popupUrl,{url:"twitter"===this.service&&""!==r&&void 0!==r?r:t.url,title:"twitter"===this.service&&""!==n&&void 0!==n?n:t.title});s.openPopup(this.addAdditionalParamsToUrl(i),a.prefix+this.service,t.popupWidth,t.popupHeight),this.rememberClicked(this.service)}return!1},addAdditionalParamsToUrl:function(t){var e=o.query(o.merge(this.widget.dataset,this.options.data)),n=-1===t.indexOf("?")?"?":"&";return""===e?t:t+n+e},rememberClicked:function(t){var e=c.getItem(a.storageKey)||[],n=e.indexOf(t);-1!==n&&e.splice(n,1),e.splice(0,0,t),c.setItem(a.storageKey,e)}},t.exports=u},function(t,e,n){var r=n(1),i=function(t,e){var n=this;r.getJSON(t,function(t){try{"function"==typeof n.convertNumber&&(t=n.convertNumber(t)),e(t)}catch(t){}})};t.exports=function(t){t.counter=t.counter||i,t.click=t.click||function(){return!0}}},function(t){t.exports={facebook:"5.9 16h3.3V8h2.2l.3-2.8H9.2V3.8c0-.7.1-1.1 1.1-1.1h1.4V0H9.5C6.9 0 5.9 1.3 5.9 3.6v1.7H4.3V8H6v8",twitter:"15.96 3.42c-.04.153-.144.31-.237.414l-.118.058v.118l-.59.532-.237.295c-.05.036-.398.21-.413.237V6.49h-.06v.473h-.058v.294h-.058v.296h-.06v.235h-.06v.237h-.058c-.1.355-.197.71-.295 1.064h-.06v.116h-.06c-.02.1-.04.197-.058.296h-.06c-.04.118-.08.237-.118.355h-.06c-.038.118-.078.236-.117.353l-.118.06-.06.235-.117.06v.116l-.118.06v.12h-.06c-.02.057-.038.117-.058.175l-.118.06v.117c-.06.04-.118.08-.177.118v.118l-.237.177v.118l-.59.53-.532.592h-.117c-.06.078-.118.156-.177.236l-.177.06-.06.117h-.118l-.06.118-.176.06v.058h-.118l-.06.118-.353.12-.06.117c-.078.02-.156.04-.235.058v.06c-.118.038-.236.078-.354.118v.058H8.76v.06h-.12v.06h-.176v.058h-.118v.06H8.17v.058H7.99v.06l-.413.058v.06h-.237c-.667.22-1.455.293-2.36.293h-.886v-.058h-.53v-.06H3.27v-.06h-.295v-.06H2.68v-.057h-.177v-.06h-.236v-.058H2.09v-.06h-.177v-.058h-.177v-.06H1.56v-.058h-.12v-.06l-.294-.06v-.057c-.118-.04-.236-.08-.355-.118v-.06H.674v-.058H.555v-.06H.437v-.058H.32l-.06-.12H.142v-.058c-.13-.08-.083.026-.177-.118H1.56v-.06c.294-.04.59-.077.884-.117v-.06h.177v-.058h.237v-.06h.118v-.06h.177v-.057h.118v-.06h.177v-.058l.236-.06v-.058l.236-.06c.02-.038.04-.078.058-.117l.237-.06c.02-.04.04-.077.058-.117h.118l.06-.118h.118c.036-.025.047-.078.118-.118V12.1c-1.02-.08-1.84-.54-2.303-1.183-.08-.058-.157-.118-.236-.176v-.117l-.118-.06v-.117c-.115-.202-.268-.355-.296-.65.453.004.987.008 1.354-.06v-.06c-.254-.008-.47-.08-.65-.175v-.058H2.32v-.06c-.08-.02-.157-.04-.236-.058l-.06-.118h-.117l-.118-.178h-.12c-.077-.098-.156-.196-.235-.294l-.118-.06v-.117l-.177-.12c-.35-.502-.6-1.15-.59-2.006h.06c.204.234.948.377 1.357.415v-.06c-.257-.118-.676-.54-.827-.768V5.9l-.118-.06c-.04-.117-.08-.236-.118-.354h-.06v-.118H.787c-.04-.196-.08-.394-.118-.59-.06-.19-.206-.697-.118-1.005h.06V3.36h.058v-.177h.06v-.177h.057V2.83h.06c.04-.118.078-.236.117-.355h.118v.06c.12.097.237.196.355.295v.118l.118.058c.08.098.157.197.236.295l.176.06.354.413h.118l.177.236h.118l.06.117h.117c.04.06.08.118.118.177h.118l.06.118.235.06.06.117.356.12.06.117.53.176v.06h.118v.058l.236.06v.06c.118.02.236.04.355.058v.06h.177v.058h.177v.06h.176v.058h.236v.06l.472.057v.06l1.417.18v-.237c-.1-.112-.058-.442-.057-.65 0-.573.15-.99.354-1.358v-.117l.118-.06.06-.235.176-.118v-.118c.14-.118.276-.236.414-.355l.06-.117h.117l.12-.177.235-.06.06-.117h.117v-.058H9.7v-.058h.177v-.06h.177v-.058h.177v-.06h.296v-.058h1.063v.058h.294v.06h.177v.058h.178v.06h.177v.058h.118v.06h.118l.06.117c.08.018.158.038.236.058.04.06.08.118.118.177h.118l.06.117c.142.133.193.163.472.178.136-.12.283-.05.472-.118v-.06h.177v-.058h.177v-.06l.236-.058v-.06h.177l.59-.352v.176h-.058l-.06.295h-.058v.117h-.06v.118l-.117.06v.118l-.177.118v.117l-.118.06-.354.412h-.117l-.177.236h.06c.13-.112.402-.053.59-.117l1.063-.353",vkontakte:"15.4 12.8h-1.8c-.7 0-.9-.5-2.1-1.7-1-1-1.5-1.1-1.7-1.1-.4 0-.5.1-.5.6v1.6c0 .4-.1.7-1.3.7-1.9 0-3.9-1.1-5.3-3.2C.6 6.5 0 4.2 0 3.7c0-.3.1-.5.6-.5h1.8c.4 0 .6.2.8.7C4 6.4 5.4 8.6 6 8.6c.2 0 .3-.1.3-.7V5.4c0-1.2-.6-1.3-.6-1.7 0-.2.2-.4.4-.4h2.8c.4 0 .5.2.5.6v3.5c0 .4.2.5.3.5.2 0 .4-.1.8-.5 1.3-1.4 2.2-3.6 2.2-3.6.1-.3.3-.5.8-.5h1.8c.5 0 .6.3.5.6-.2 1-2.4 4-2.4 4-.2.3-.3.4 0 .8.2.3.8.8 1.2 1.3.8.8 1.3 1.6 1.5 2.1 0 .4-.2.7-.7.7",gplus:"8,6.5v3h4.291c-0.526,2.01-2.093,3.476-4.315,3.476C5.228,12.976,3,10.748,3,8c0-2.748,2.228-4.976,4.976-4.976c1.442,0,2.606,0.623,3.397,1.603L13.52,2.48C12.192,0.955,10.276,0,8,0C3.582,0,0,3.582,0,8s3.582,8,8,8s7.5-3.582,7.5-8V6.5H8",odnoklassniki:"8 2.6c.9 0 1.7.7 1.7 1.7C9.7 5.2 9 6 8 6c-.9 0-1.7-.7-1.7-1.7S7.1 2.6 8 2.6zm0 5.7c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm1.6 3.2c.8-.2 1.6-.5 2.3-1 .5-.3.7-1.1.4-1.6-.3-.6-1.1-.7-1.6-.4-1.6 1-3.8 1-5.4 0-.6-.3-1.3-.1-1.6.4-.4.6-.2 1.3.3 1.7.7.5 1.5.8 2.3 1l-2.2 2.2c-.5.5-.5 1.2 0 1.7.2.2.5.3.8.3.3 0 .6-.1.8-.3L8 13.2l2.2 2.2c.5.5 1.2.5 1.7 0s.5-1.2 0-1.7l-2.3-2.2",pocket:"12.533 6.864L8.77 10.4c-.213.2-.486.3-.76.3-.273 0-.547-.1-.76-.3L3.488 6.865c-.437-.41-.45-1.09-.032-1.52.42-.428 1.114-.443 1.55-.032l3.006 2.823 3.004-2.823c.438-.41 1.132-.396 1.55.032.42.43.406 1.11-.03 1.52zm3.388-4.928c-.207-.56-.755-.936-1.363-.936H1.45C.854 1 .31 1.368.096 1.917.032 2.08 0 2.25 0 2.422v4.73l.055.94c.232 2.14 1.366 4.01 3.12 5.314.03.024.063.047.094.07l.02.013c.94.673 1.992 1.13 3.128 1.353.524.104 1.06.157 1.592.157.492 0 .986-.045 1.472-.133.058-.01.116-.022.175-.034.016-.003.033-.01.05-.018 1.088-.233 2.098-.677 3.003-1.326l.02-.015c.032-.022.064-.045.096-.07 1.753-1.303 2.887-3.173 3.12-5.312l.054-.94v-4.73c0-.165-.02-.327-.08-.487",telegram:"12.4 4.2L6.6 9.6c-.2.2-.3.4-.4.7L6 11.8c0 .2-.3.2-.3 0l-.8-2.6c-.1-.4.1-.7.3-.8l7-4.3c.2-.2.4 0 .2.1zm2.9-3L.5 6.9c-.4.1-.4.7 0 .8L4.1 9l1.4 4.5c.1.3.4.4.7.2l2-1.6c.2-.2.5-.2.7 0l3.6 2.6c.3.2.6 0 .7-.3l2.6-12.8c.1-.2-.2-.5-.5-.4",whatsapp:"15.8 7.8c0 4.2-3.4 7.6-7.6 7.6-1.3 0-2.6-.3-3.7-.9L.3 15.8l1.4-4.1C1 10.6.6 9.2.6 7.8.6 3.6 4 .2 8.2.2c4.2 0 7.6 3.4 7.6 7.6M8.1 1.4c-3.5 0-6.4 2.9-6.4 6.4 0 1.4.5 2.7 1.2 3.7l-.8 2.4 2.5-.8c1 .7 2.2 1.1 3.5 1.1 3.5 0 6.4-2.9 6.4-6.4.1-3.5-2.8-6.4-6.4-6.4M12 9.5c0-.1-.2-.1-.4-.2s-1.1-.5-1.3-.6c-.2-.1-.3-.1-.4.1-.1.2-.4.6-.6.7-.1.1-.2.1-.4 0-.1 0-.8-.2-1.5-.8-.6-.5-.9-1.1-1-1.3-.1-.2 0-.3.1-.4l.3-.3c.1-.1.1-.2.2-.3 0-.2 0-.3-.1-.4 0-.1-.4-1-.6-1.4-.1-.3-.3-.2-.4-.2h-.4c-.1 0-.3 0-.5.2-.1.2-.6.6-.6 1.5s.7 1.8.8 1.9c.1.1 1.3 2.1 3.2 2.8 1.9.7 1.9.5 2.2.5.3 0 1.1-.4 1.3-.9.1-.4.1-.8.1-.9",viber:"13.7 6.7c0 .3.1.7-.3.8-.6.1-.5-.4-.5-.8-.4-2.3-1.2-3.2-3.5-3.7-.4-.1-.9 0-.8-.5.1-.5.5-.4.9-.3 2.3.3 4.2 2.3 4.2 4.5zM8.8 1.2c3.7.6 5.5 2.4 5.9 6.1 0 .3-.1.9.4.9s.4-.5.4-.9c0-3.6-3.1-6.8-6.7-7-.2.1-.8-.1-.8.5 0 .4.4.3.8.4zm5.7 10.2c-.5-.4-1-.7-1.5-1.1-1-.7-1.9-.7-2.6.4-.4.6-1 .6-1.6.4-1.7-.8-2.9-1.9-3.7-3.6-.3-.7-.3-1.4.5-1.9.4-.3.8-.6.8-1.2 0-.8-2-3.5-2.7-3.7-.3-.1-.6-.1-1 0C.9 1.2.2 2.7.9 4.4c2.1 5.2 5.8 8.8 11 11 .3.1.6.2.8.2 1.2 0 2.5-1.1 2.9-2.2.3-1-.5-1.5-1.1-2zM9.7 4c-.2 0-.5 0-.6.3-.1.4.2.5.5.5.9.2 1.4.7 1.5 1.7 0 .3.2.5.4.4.3 0 .4-.3.4-.6 0-1.1-1.2-2.3-2.2-2.3",email:"12.7 1c1 .5 1.8 1.2 2.3 2.2.5.9.8 1.9.8 3.1 0 .9-.1 1.8-.5 2.7-.3.9-.8 1.6-1.4 2.2-.6.6-1.4.9-2.3.9-.6 0-1.1-.2-1.5-.5-.4-.3-.6-.7-.7-1.2-.6 1.1-1.5 1.6-2.5 1.6-.8 0-1.5-.3-1.9-.8-.5-.6-.7-1.3-.7-2.2 0-.8.1-1.6.4-2.5S5.5 5 6.1 4.4c.7-.6 1.5-.8 2.6-.8.5 0 1 .1 1.4.2.5.1.9.3 1.3.6l-.7 4.9v.3c0 .2 0 .4.1.5.1.1.3.2.5.2.4 0 .8-.2 1.1-.7.3-.4.5-1 .7-1.6.1-.7.2-1.3.2-1.9 0-1.3-.4-2.3-1.1-3-.8-.7-1.9-1-3.4-1s-2.7.4-3.7 1.1c-.9.7-1.6 1.6-2 2.6S2.6 7.9 2.6 9c0 .9.2 1.8.6 2.5.4.7 1 1.3 1.7 1.7.7.4 1.7.6 2.7.6.5 0 1-.1 1.6-.2.6-.1 1.1-.3 1.5-.4l.4 1.9c-.6.2-1.2.4-1.8.5-.7.1-1.3.2-1.9.2-1.4 0-2.7-.3-3.8-.9s-1.9-1.4-2.5-2.4S.2 10.3.2 9c0-1.3.3-2.7 1-4 .6-1.4 1.6-2.5 3-3.4C5.5.7 7.2.2 9.2.2c1.3 0 2.5.3 3.5.8zm-4 8.4l.6-3.9c-.3-.1-.5-.2-.7-.2-.7 0-1.2.4-1.5 1.2-.3.8-.5 1.7-.5 2.6 0 .8.3 1.2.8 1.2s.9-.3 1.3-.9",more:"14.725 6.667H9.333V1.275C9.333.57 8.738 0 8 0S6.667.57 6.667 1.275v5.392H1.275C.57 6.667 0 7.262 0 8s.57 1.334 1.275 1.334h5.392v5.393C6.667 15.43 7.262 16 8 16s1.333-.57 1.333-1.273V9.334h5.392C15.43 9.334 16 8.738 16 8s-.57-1.333-1.275-1.333"}},function(t,e,n){var r=n(0),i=n(2),a=n(1),o={counterUrl:r.secure?void 0:"http://connect.ok.ru/dk?st.cmd=extLike&ref={url}&uid={index}",counter:function(t,e){this.promises.push(e),a.getScript(i.makeUrl(t,{index:this.promises.length-1}))},promises:[],popupUrl:"http://connect.ok.ru/dk?st.cmd=WidgetSharePreview&service=odnoklassniki&st.shareUrl={url}",popupWidth:640,popupHeight:400};i.set(window,"ODKL.updateCount",function(t,e){o.promises[t](e)}),t.exports=o},function(t,e,n){var r=n(0),i=n(2),a=n(1),o={counterUrl:"https://vk.com/share.php?act=count&url={url}&index={index}",counter:function(t,e){this.promises.push(e),a.getScript(i.makeUrl(t,{index:this.promises.length-1}))},promises:[],popupUrl:r.protocol+"//vk.com/share.php?url={url}&title={title}",popupWidth:550,popupHeight:330};i.set(window,"VK.Share.count",function(t,e){o.promises[t](e)}),t.exports=o},function(t,e){t.exports={counterUrl:"https://graph.facebook.com/?fields=share,og_object{likes.limit(0).summary(true),comments.limit(0).summary(true)}&id={url}&callback=?",convertNumber:function(t){return t.share.share_count},popupUrl:"https://www.facebook.com/sharer/sharer.php?u={url}",popupWidth:600,popupHeight:500}},function(t,e,n){var r={popupUrl:n(0).protocol+"//twitter.com/intent/tweet?url={url}&text={title}",popupWidth:600,popupHeight:450,click:function(){return/[\.\?:\-–—]\s*$/.test(this.options.title)||(this.options.title+=":"),!0}};t.exports=r},function(t,e,n){n(0),n(2),n(1);t.exports={gid:0,promises:{},popupUrl:"https://plus.google.com/share?url={url}",popupWidth:700,popupHeight:500}},function(t,e,n){var r={popupUrl:n(0).protocol+"//getpocket.com/save?url={url}&format=json&callback=?",popupWidth:600,popupHeight:300};t.exports=r},function(t,e){t.exports={popupUrl:"tg://msg?text={title}%0A{url}",popupWidth:600,popupHeight:450}},function(t,e){t.exports={popupUrl:"whatsapp://send?text={title}%0A{url}",popupWidth:600,popupHeight:450}},function(t,e){t.exports={popupUrl:"viber://forward?text={title}%0A{url}",popupWidth:600,popupHeight:450}},function(t,e,n){n(0);t.exports={popupUrl:"mailto:?subject={title}&body={url}",popupWidth:0,popupHeight:0}},function(t,e,n){var r=n(0);t.exports={parent:r.name,className:r.name+"--expanded"}},function(t,e,n){var o=n(4),s=n(32),c=n(2),l=(n(1),{});t.exports=function(t,e,n){l[t]||(l[t]={});var r=l[t],i=r[e];if(!n.forceUpdate&&i)return i;i=s();var a=c.makeUrl(n.counterUrl,{url:e});return o[t].counter(a,i,e),r[e]=i,r[e]}},function(t,e){t.exports=function(n){var r=[];return function(e){var t=typeof e;if("undefined"==t)return n;"function"==t?r.push(e):(n=e,r.forEach(function(t){t(e)}))}}}]);
//# sourceMappingURL=all.js.map