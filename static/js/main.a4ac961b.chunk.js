(this.webpackJsonpend=this.webpackJsonpend||[]).push([[0],{53:function(e,t,c){},60:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c(2),i=c.n(s),n=c(27),r=c.n(n),o=c(12),l=(c(53),c(10)),d=c(30),j=c(19),b=c(40),m=c(6),u=[{title:"Home",path:"/"},{title:"Brands",path:"/brands"},{title:"Latest",path:"/latest"},{title:"Clothing",path:"/clothing"},{title:"Footwear",path:"/footwear"},{title:"Sale",path:"/sale"}],_=c(0),h=c.p+"static/media/Logo.387e9e8b.svg",O=c(7),p=(c.p,c(34)),x=function(e){var t=e.title,c=e.image_one,s=e.color,i=e.size,n=e.price,r=e.count,l=e.id,d=Object(o.b)();return Object(a.jsxs)("div",{className:"cart-item",children:[Object(a.jsx)("div",{className:"cart-item__image",children:Object(a.jsx)("img",{src:c,alt:""})}),Object(a.jsxs)("div",{className:"cart-item__content",children:[Object(a.jsxs)("div",{className:"cart-item__content-header",children:[Object(a.jsx)("span",{className:"cart-item__content-title",children:t}),Object(a.jsx)("button",{className:"cart-item__content-btn",children:Object(a.jsx)(p.a,{})})]}),Object(a.jsx)("p",{className:"cart-item__color",children:s}),Object(a.jsx)("p",{className:"cart-item__size",children:i}),Object(a.jsxs)("div",{className:"cart-item__bottom cart-bottom",children:[Object(a.jsx)("span",{className:"cart-bottom__qty",children:"QTY"}),Object(a.jsx)("button",{onClick:function(){d({type:"DEC_PRODUCT_CART",payload:{id:l,size:i}})},children:"-"}),Object(a.jsx)("span",{children:r}),Object(a.jsx)("button",{onClick:function(){d({type:"INC_PRODUCT_CART",payload:{id:l,size:i}})},children:"+"}),Object(a.jsxs)("span",{className:"cart-bottom__price",children:[n," $"]})]})]})]})},N=function(e){var t=e.onClick;return Object(a.jsx)("div",{className:"overlay",onClick:t})},f=function(e){var t=e.active,c=Object(o.c)((function(e){return e.cart})),s=c.items,n=c.totalPrice,r=i.a.useState(!1),d=Object(l.a)(r,2),j=d[0],b=d[1];return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:t?"cart-sidebar active":"cart-sidebar",children:[Object(a.jsx)("div",{className:"cart-sidebar__header",children:Object(a.jsx)("h3",{className:"cart-sidebar__title",children:"your cart"})}),Object(a.jsx)("div",{className:"cart-items",children:s.map((function(e,t){return Object(a.jsx)(x,Object(O.a)({},e),"".concat(e.id,"_").concat(t))}))}),Object(a.jsxs)("div",{className:"cart-total",children:[Object(a.jsxs)("div",{className:"cart-total__subtotal",children:[Object(a.jsx)("span",{children:"Subtotal:"}),Object(a.jsx)("span",{children:"500$"})]}),Object(a.jsxs)("div",{className:"cart-total__shipping",children:[Object(a.jsx)("span",{children:"Shippingl:"}),Object(a.jsx)("span",{children:"0$"})]}),Object(a.jsxs)("div",{className:"cart-total__total",children:[Object(a.jsx)("span",{children:"Total:"}),Object(a.jsxs)("span",{children:[n,"$"]})]})]}),Object(a.jsxs)("div",{className:j?"cart-promo active":"cart-promo",children:[Object(a.jsx)("p",{onClick:function(){return b(!j)},children:"GIFTCARD / PROMOCODE"}),Object(a.jsxs)("div",{className:"cart-promo__input",children:[Object(a.jsx)("input",{type:"text",placeholder:"Enter Code"}),Object(a.jsx)("button",{children:"APPLY"})]})]}),Object(a.jsx)("div",{className:"checkout",children:Object(a.jsx)(m.b,{to:"/checkout",className:"checkout-btn",children:"GO TO CHECKOUT"})})]})})};var g=function(){var e=Object(s.useState)(!1),t=Object(l.a)(e,2),c=t[0],i=t[1],n=Object(s.useState)(!1),r=Object(l.a)(n,2),O=r[0],p=r[1],x=Object(s.useState)(!1),g=Object(l.a)(x,2),v=g[0],S=g[1],C=Object(o.c)((function(e){return e.cart.items})),w=function(){return i(!c)};return Object(a.jsxs)("header",{className:"header",children:[Object(a.jsx)("div",{className:"header__news",children:"New In: BURBERRY | DR\xd4LE DE MONSIEUR | HERON PRESTON"}),O&&Object(a.jsx)("div",{className:"login",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h2",{children:"Login or register"}),Object(a.jsx)("p",{children:"Please enter your email addres to continue"}),Object(a.jsx)("label",{htmlFor:"uname",children:Object(a.jsx)("b",{children:"Username"})}),Object(a.jsx)("input",{type:"text",placeholder:"Enter Username",name:"uname",required:!0}),Object(a.jsx)("label",{htmlFor:"psw",children:Object(a.jsx)("b",{children:"Password"})}),Object(a.jsx)("input",{type:"password",placeholder:"Enter Password",name:"psw",required:!0}),Object(a.jsx)("button",{type:"submit",children:"Login"})]})}),c||O||v?Object(a.jsx)(N,{onClick:function(){i(!1),p(!1),S(!1)}}):"",Object(a.jsxs)(_.b.Provider,{value:{color:"#000",size:"20px"},children:[Object(a.jsxs)("div",{className:"container header__container",children:[Object(a.jsx)(m.b,{to:"#",className:"menu-bars",children:Object(a.jsx)(d.a,{onClick:w})}),Object(a.jsx)(m.b,{to:"/",className:"logo header__logo",children:Object(a.jsx)("img",{src:h,alt:"logo"})}),Object(a.jsx)("nav",{className:"navbar__navigation nav header__nav",children:Object(a.jsx)("ul",{className:"nav__list",children:u.map((function(e,t){return Object(a.jsx)("li",{className:"nav__item",children:Object(a.jsx)(m.b,{to:e.path,className:"nav__link","aria-label":"logo",children:e.title})},e.title)}))})}),Object(a.jsxs)("ul",{className:"user-nav header__user-nav",children:[Object(a.jsx)("li",{className:"user-nav__item",children:Object(a.jsx)("button",{className:"user-nav__btn",children:Object(a.jsx)(b.a,{})})}),Object(a.jsx)("li",{className:"user-nav__item",children:Object(a.jsxs)("button",{className:"user-nav__btn",onClick:function(){return S(!v)},children:[Object(a.jsx)(j.a,{}),Object(a.jsx)("span",{className:"user-nav__btn--items",children:C.length?C.length:""})]})}),Object(a.jsx)("li",{className:"user-nav__item",children:Object(a.jsx)("button",{className:"user-nav__btn",onClick:function(){return p(!O)},children:Object(a.jsx)(d.b,{})})})]})]}),Object(a.jsx)("nav",{className:c?"side-nav active":"side-nav",children:Object(a.jsx)("ul",{className:"side-nav__items",onClick:w,children:u.map((function(e,t){return Object(a.jsx)("li",{className:"side-nav__text",children:Object(a.jsx)(m.b,{className:"side-nav__link",to:e.path,children:Object(a.jsx)("span",{children:e.title})})},t)}))})})]}),Object(a.jsx)(f,{active:v})]})},v=c(11),S=c.p+"static/media/jacket.3d64058e.webp",C=c.p+"static/media/slide2.41199237.jpg",w=function(){return Object(a.jsx)("section",{className:"hero",children:Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"hero__container",children:[Object(a.jsxs)("div",{className:"hero__item",children:[Object(a.jsx)(m.b,{className:"hero__item-image",to:"/clothing",children:Object(a.jsx)("img",{src:S,alt:"",className:"hero__item-img"})}),Object(a.jsx)("h2",{className:"hero__item-title",children:"Clothing"}),Object(a.jsx)(m.b,{to:"/clothing",className:"hero__item-link",children:"view"})]}),Object(a.jsxs)("div",{className:"hero__item",children:[Object(a.jsx)(m.b,{className:"hero__item-image",to:"/sneakers",children:Object(a.jsx)("img",{src:C,alt:"",className:"hero__item-img"})}),Object(a.jsx)("h2",{className:"hero__item-title",children:"Sneakers"}),Object(a.jsx)(m.b,{to:"/sneakers",className:"hero__item-link",children:"view"})]})]})})})},k=c.p+"static/media/sale.f62074cf.jpg",E=function(){return Object(a.jsx)("div",{className:"banner_wrapper",children:Object(a.jsx)("div",{className:"container",children:Object(a.jsx)(m.b,{to:"/sale",className:"banner_link",children:Object(a.jsx)("img",{src:k,alt:""})})})})},T=c.p+"static/media/sneakers.52d50759.webp",R=function(e){var t=e.title,c=e.color,s=e.price,n=e.image_one,r=e.image_two,o=e.id,d=e.cardViewType,j=i.a.useState(!0),b=Object(l.a)(j,2),u=b[0],_=b[1],h=function(){_(!u)};return Object(a.jsxs)("article",{className:"product",onMouseEnter:h,onMouseLeave:h,children:[Object(a.jsx)("div",{className:"product__image",children:Object(a.jsx)("img",{src:0===d?n:r||T,alt:"jacket"})}),Object(a.jsx)("h3",{className:"product__title",children:Object(a.jsx)(m.b,{to:"/product/".concat(o),children:t||"Champion Reverse Weave"})}),Object(a.jsx)("p",{className:"product__desc",children:c||"Mens jacket Water Rpelient Shiny Nylon Hooded"}),Object(a.jsxs)("span",{className:"product__price",children:[s||"1999"," $"]})]})},A=function(){return Object(a.jsx)("section",{className:"popular",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h2",{className:"popular__title",children:"Latest"}),Object(a.jsx)(m.b,{to:"/products",className:"popular__link",children:"view all"}),Object(a.jsxs)("div",{className:"popular__items",children:[Object(a.jsx)(R,{}),Object(a.jsx)(R,{}),Object(a.jsx)(R,{}),Object(a.jsx)(R,{})]})]})})},P=c(68),I=c(63),y=c(64),D=c(65),H=c(66),B=c(69),M=c(67);c(55),c(56),c(57),c(58),c.p;P.a.use([I.a,y.a,D.a,H.a]);var L=function(){return Object(a.jsx)("div",{className:"hero-catalog__slider",children:Object(a.jsxs)(B.a,{spaceBetween:50,slidesPerView:1,pagination:{clickable:!0},onSwiper:function(e){return console.log(e)},onSlideChange:function(){return console.log("slide change")},children:[Object(a.jsx)(M.a,{className:"swiper-slide-one",children:Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"swiper-slide__content",children:[Object(a.jsx)("h2",{className:"swiper-slide__title",children:"GIVENCHY"}),Object(a.jsx)("p",{className:"swiper-slide__desc",children:"The Season's Latest"}),Object(a.jsx)(m.b,{className:"swiper-slide__link",to:"/brands/givenchy",children:"SHOP NOW"})]})})}),Object(a.jsx)(M.a,{className:"swiper-slide-two",children:Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"swiper-slide__content",children:[Object(a.jsx)("h2",{className:"swiper-slide__title",children:"GIVENCHY"}),Object(a.jsx)("p",{className:"swiper-slide__desc",children:"The Season's Latest"}),Object(a.jsx)(m.b,{className:"swiper-slide__link",to:"/brands/givenchy",children:"SHOP NOW"})]})})})]})})},q=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(L,{}),Object(a.jsx)(A,{}),Object(a.jsx)(E,{}),Object(a.jsx)(w,{})]})},U=c(17),z=c(23),W=[{id:"4f0d2cdc3aaf43fc912a81f13a333b74",title:"VERSACE HEAVY CHAIN NECKLACE",brand:"VERSACE",color:"BROWN",price:"199",categories:["Brands","Brands / VERSACE","Clothing","Clothing / Sweats","VIP Sale"],department:"Sweats",gender:"Mens",image_one:"https://media.endclothing.com/media/f_auto,q_auto:eco/prodmedia/media/catalog/product/2/9/29-07-20_DG16949-DJMT-KOT_m1_1.jpg",image_two:"https://media.endclothing.com/media/f_auto,q_auto:eco/prodmedia/media/catalog/product/2/9/29-07-20_DG16949-DJMT-KOT_3_1.jpg",stock:"11",availableSizes:["xs","s","m"]},{id:"ef206a6ca0804189bef9641a01f9c133",title:"NIKE AIR FORCE 1 SHADOW W",brand:"NIKE",color:"BROWN",price:"99",categories:["Brands","Brands / NIKE","Clothing","Clothing / Sweats","VIP Sale"],department:"Sweats",gender:"Mens",image_one:"https://media.endclothing.com/media/f_auto,q_auto:eco/prodmedia/media/catalog/product/3/0/30-12-2020_TH_CU8591-001_m1_1.jpg",image_two:"https://media.endclothing.com/media/f_auto,q_auto:eco/prodmedia/media/catalog/product/3/0/30-12-2020_TH_CU8591-001_4_1.jpg",stock:"11",availableSizes:["xs","s","m"]},{id:"dd10996f626348fc9aa55b3ef40b5ab7",title:"ACNE STUDIOS PANSY GD FACE BEANIE",brand:"ACNE STUDIOS",color:"BROWN",price:"399",categories:["Brands","Brands / ACNE STUDIOS","Clothing","Clothing / Sweats","VIP Sale"],department:"Sweats",gender:"Mens",image_one:"https://media.endclothing.com/media/f_auto,q_auto:eco/prodmedia/media/catalog/product/1/6/16-12-2020_JA_C40140-AQR_m1_1.jpg",image_two:"https://media.endclothing.com/media/f_auto,q_auto:eco/prodmedia/media/catalog/product/1/6/16-12-2020_JA_C40140-AQR_2_1.jpg",stock:"11",availableSizes:["xs","s","m"]},{id:"2293d0f3074e47d3bc484a03ed4f339d",title:"MAHARISHI MILTYPE SPORTS SOCK - 3 PACK",brand:"MAHARISHI",color:"BROWN",price:"199",categories:["Brands","Brands / MAHARISHI","Clothing","Clothing / Sweats","VIP Sale"],department:"Sweats",gender:"Mens",image_one:"https://media.endclothing.com/media/f_auto,q_auto:eco/prodmedia/media/catalog/product/1/7/17-12-2020_BB_9273-WBO_m1_1.jpg",image_two:"https://media.endclothing.com/media/f_auto,q_auto:eco/prodmedia/media/catalog/product/1/7/17-12-2020_BB_9273-WBO_2_1.jpg",stock:"11",availableSizes:["xs","s","m"]},{id:"fe76474cdac443fe85b934657d5b26da",title:"WTAPS BEANIE 02",brand:"WTAPS",color:"BROWN",price:"19",categories:["Brands","Brands / WTAPS","Clothing","Clothing / Sweats","VIP Sale"],department:"Sweats",gender:"Mens",image_one:"https://media.endclothing.com/media/f_auto,q_auto:eco/prodmedia/media/catalog/product/1/6/16-12-2020_RL_202MADT-HT02-BG_m1_1.jpg",image_two:"https://media.endclothing.com/media/f_auto,q_auto:eco/prodmedia/media/catalog/product/1/6/16-12-2020_RL_202MADT-HT02-BG_2_1.jpg",stock:"11",availableSizes:["ONE SIZE"]},{id:"8c36ba86bd514620bdc0992ebbe36b98",title:"Fucking Awesome Stacked Track Pant",brand:"Fucking Awesome",color:"BROWN",price:"199",categories:["Brands","Brands / 1017 ALYX 9SM","Clothing","Clothing / Sweats","VIP Sale"],department:"Sweats",gender:"Mens",image_one:"https://media.endclothing.com/media/f_auto,q_auto:eco,w_400,h_400/prodmedia/media/catalog/product/0/8/08-12-2020_six_aamsw0085fa01-blk_m9.jpg",image_two:"https://media.endclothing.com/media/f_auto,q_auto:eco,w_400,h_400/prodmedia/media/catalog/product/0/8/08-12-2020_GH_AVUTS0216FA01-WTH_m6_1.jpg",stock:"11",availableSizes:["xs","s","m"]},{id:"a9bebafa2fae47feb42a81c2466f86a5",title:"NIKE RPM WAISTPACK",brand:"NIKE",color:"BLACK",price:"29",categories:["Brands","Brands / NIKE","Clothing","Clothing / Sweats","VIP Sale"],department:"Sweats",gender:"Mens",image_one:"https://media.endclothing.com/media/f_auto,q_auto:eco/prodmedia/media/catalog/product/1/8/18-12-2020_aj_cq3817-355_m1.jpg",image_two:"https://media.endclothing.com/media/f_auto,q_auto:eco/prodmedia/media/catalog/product/1/8/18-12-2020_aj_cq3817-355_3.jpg",stock:"11",availableSizes:["xs","s","m"]},{id:"5faf83c5acf84b4ab4726d8613a655dd",title:"NEIGHBORHOOD X MOTORHEAD TEE",brand:"NEIGHBORHOOD",color:"BLACK",price:"69",categories:["Brands","Brands / NEIGHBORHOOD","Clothing","Clothing / Sweats","VIP Sale"],department:"Sweats",gender:"Mens",image_one:"https://media.endclothing.com/media/f_auto,q_auto:eco/prodmedia/media/catalog/product/3/0/30-12-2020_TH_202PCMHN-ST02S-BLK_1_1.jpg",image_two:"https://media.endclothing.com/media/f_auto,q_auto:eco/prodmedia/media/catalog/product/3/0/30-12-2020_TH_202PCMHN-ST02S-BLK_5_1.jpg",stock:"11",availableSizes:["s","l","xxl"]},{id:"5faf83c5acf34b4ab4723d8613a655dd",title:"MAHARISHI KIMONO CHORE JACKET",brand:"MAHARISHI",color:"MAHA OLIVE",price:"239",categories:["Brands","Brands / MAHARISHI","Clothing","Clothing / Sweats","VIP Sale"],department:"Sweats",gender:"Mens",image_one:"https://media.endclothing.com/media/f_auto,q_auto:eco/prodmedia/media/catalog/product/0/4/04-11-2020_MO_6375-MO_1_1.jpg",image_two:"https://media.endclothing.com/media/f_auto,q_auto:eco/prodmedia/media/catalog/product/0/4/04-11-2020_MO_6375-MO_5_1.jpg",stock:"11",availableSizes:["m","l","xxl"]}],F=[{name:"adidas Consortium"},{name:"adidas Originals"},{name:"adidas Performance"},{name:"Arcteryx"},{name:"ASICS"},{name:"Canada Goose"},{name:"Carhartt WIP"},{name:"Comme des Garcons"},{name:"Hoka One One"},{name:"Jordan"},{name:"Maharishi"},{name:"Nike"},{name:"Nike SB"},{name:"Patagonia"},{name:"Stone Island"},{name:"Stone Island Shadow Project"}],G=c(20),V=c.n(G),K=c(26),J=function(){return function(){var e=Object(K.a)(V.a.mark((function e(t){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"SET_PRODUCTS_LOADING"}),setTimeout((function(){t({type:"FETCH_PRODUCTS",payload:W})}),2e3);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Y=function(e){var t=e.onChecked,c=i.a.useState(!1),s=Object(l.a)(c,2),n=s[0],r=s[1],d=i.a.useState([]),b=Object(l.a)(d,2),m=b[0],u=b[1];Object(o.b)();i.a.useEffect((function(){u(F)}),[]);return Object(a.jsx)("div",{className:"catalog-filters",children:Object(a.jsxs)("div",{className:"catalog-filter",children:[Object(a.jsx)("div",{className:"catalog-filter__top",children:Object(a.jsxs)("div",{className:"catalog-filter__caption",onClick:function(){return r(!n)},children:[Object(a.jsx)("h3",{className:"catalog-filter__title",children:"BRANDS"}),Object(a.jsx)("span",{className:"catalog-filter__toggle",children:n?Object(a.jsx)(j.c,{}):Object(a.jsx)(j.b,{})})]})}),Object(a.jsxs)("div",{className:n?"catalog-filter__bottom active":"catalog-filter__bottom",children:[Object(a.jsxs)("div",{className:"catalog-filter__input filter__input",children:[Object(a.jsx)("input",{type:"text",placeholder:"Search",className:"filter__input-input",onChange:function(e){var t=F.filter((function(t){return t.name.toLowerCase().includes(e.target.value.toLowerCase())}));u(t)}}),Object(a.jsx)("button",{className:"filter__input-btn",children:Object(a.jsx)(z.c,{})})]}),Object(a.jsx)("ul",{className:"catalog-filter__items active",children:m.map((function(e,c){return Object(a.jsx)("li",{className:"catalog-filter__item",children:Object(a.jsxs)("label",{className:"custom-checkbox",children:[Object(a.jsx)("input",{type:"checkbox",className:"custom-checkbox__input",value:e.name,onChange:t}),Object(a.jsx)("span",{className:"custom-checkbox__control"}),Object(a.jsx)("span",{className:"custom-checkbox__text",children:e.name})]})},c)}))})]})]})})},$=function(e){var t=e.title;return Object(a.jsxs)("div",{className:"breadcrumbs",children:[Object(a.jsxs)("ul",{className:"breadcrumbs__list",children:[Object(a.jsx)("li",{className:"breadcrumbs__item",children:Object(a.jsx)(m.b,{to:"/",className:"breadcrumbs__link",children:"Home"})}),Object(a.jsx)("li",{className:"breadcrumbs__item",children:Object(a.jsx)(m.b,{to:"/",className:"breadcrumbs__link",children:t})})]}),Object(a.jsx)("h2",{className:"breadcrumbs__title",children:t})]})},X=function(){return Object(a.jsx)("div",{className:"loader-center",children:Object(a.jsxs)("div",{className:"lds-roller",children:[Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{})]})})},Q=function(){var e=i.a.useState(!1),t=Object(l.a)(e,2),c=t[0],s=t[1],n=i.a.useState(!1),r=Object(l.a)(n,2),d=r[0],b=r[1],m=i.a.useState(0),u=Object(l.a)(m,2),_=u[0],h=u[1],p=i.a.useState(0),x=Object(l.a)(p,2),N=x[0],f=x[1],g=i.a.useState([]),v=Object(l.a)(g,2),S=v[0],C=v[1],w=Object(o.b)(),k=Object(o.c)((function(e){return e.products})),E=k.items,T=k.loading,A=i.a.useRef(),P=function(e){e.path.includes(A.current)||(s(!1),b(!1))};i.a.useEffect((function(){document.body.addEventListener("click",P),w(J())}),[]);var I;return Object(a.jsx)("section",{className:"products__section",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)($,{title:"NEW THIS WEEK"}),T?Object(a.jsx)(X,{}):Object(a.jsxs)("div",{className:"products__items",children:[Object(a.jsx)(Y,{onChecked:function(e){if(S.includes(e.target.value)){var t=S.filter((function(t){return t!==e.target.value}));C(t)}else C([].concat(Object(U.a)(S),[e.target.value]))}}),Object(a.jsxs)("div",{className:"products__items-main",children:[Object(a.jsxs)("div",{className:"products__toolbar",children:[Object(a.jsxs)("div",{className:"products__toolbar-counter",children:[E.length," items"]}),Object(a.jsxs)("div",{ref:A,className:"products__toolbar-handlers",children:[Object(a.jsxs)("button",{className:"products__toolbar-view btn-toolbar",onClick:function(e){b(!1),s(!c)},children:[Object(a.jsx)("span",{children:"View"}),Object(a.jsx)(j.b,{className:"btn-toolbar__icon"}),Object(a.jsxs)("ul",{className:c?"products__toolbar-list active":"products__toolbar-list",children:[Object(a.jsx)("li",{className:0===_?"products__toolbar-item active":"products__toolbar-item",onClick:function(){h(0)},children:"Product"}),Object(a.jsx)("li",{className:1===_?"products__toolbar-item active":"products__toolbar-item",onClick:function(){h(1)},children:"Outfit"})]})]}),Object(a.jsxs)("button",{className:"products__toolbar-sort btn-toolbar",onClick:function(e){s(!1),b(!d)},children:[Object(a.jsx)("span",{children:0===N?"Featured":1===N?"Price (Low)":"Price (High)"}),Object(a.jsx)(j.b,{className:"btn-toolbar__icon"}),Object(a.jsxs)("ul",{className:d?"products__toolbar-list active":"products__toolbar-list",children:[Object(a.jsx)("li",{className:0===N?"products__toolbar-item active":"products__toolbar-item",onClick:function(){f(0),w(J())},children:"Featured"}),Object(a.jsx)("li",{className:1===N?"products__toolbar-item active":"products__toolbar-item",onClick:function(){f(1),w(function(e){return function(t){t({type:"SET_PRODUCTS_LOADING"});var c=JSON.parse(JSON.stringify(e));c.forEach((function(e){return e.price=+e.price})),c.sort((function(e,t){return e.price>t.price?1:-1})),setTimeout((function(){t({type:"SORT_PRODUCTS_LOW_PRICE",payload:c})}),2e3)}}(E))},children:"Price (Low)"}),Object(a.jsx)("li",{className:2===N?"products__toolbar-item active":"products__toolbar-item",onClick:function(){f(2),w(function(e){return function(t){t({type:"SET_PRODUCTS_LOADING"});var c=JSON.parse(JSON.stringify(e));c.forEach((function(e){return e.price=+e.price})),c.sort((function(e,t){return e.price>t.price?-1:1})),setTimeout((function(){t({type:"SORT_PRODUCTS_HIGH_PRICE",payload:c})}),2e3)}}(E))},children:"Price (High)"})]})]})]})]}),Object(a.jsx)("div",{className:"product__items-cards",children:(I=E,S.length?I.filter((function(e){return S.some((function(t){return e.brand.toLowerCase()===t.toLowerCase()}))})):I).map((function(e,t){return Object(a.jsx)(R,Object(O.a)(Object(O.a)({},e),{},{cardViewType:_}),e.id)}))})]})]})]})})},Z=function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("div",{className:"container footer__container",children:Object(a.jsx)("div",{className:"footer__content",children:Object(a.jsxs)("div",{className:"footer__top",children:[Object(a.jsxs)("div",{className:"footer__column",children:[Object(a.jsx)("h3",{className:"footer__title",children:"About"}),Object(a.jsxs)("ul",{className:"footer__list",children:[Object(a.jsx)("li",{className:"footer__item",children:Object(a.jsx)(m.b,{to:"/careers",children:"Careers"})}),Object(a.jsx)("li",{className:"footer__item",children:Object(a.jsx)(m.b,{to:"/press",children:"Press"})}),Object(a.jsx)("li",{className:"footer__item",children:Object(a.jsx)(m.b,{to:"/stores",children:"Stores"})})]})]}),Object(a.jsxs)("div",{className:"footer__column",children:[Object(a.jsx)("h3",{className:"footer__title",children:"CUSTOMER SERVICE"}),Object(a.jsxs)("ul",{className:"footer__list",children:[Object(a.jsx)("li",{className:"footer__item",children:Object(a.jsx)(m.b,{to:"/help",children:"Help"})}),Object(a.jsx)("li",{className:"footer__item",children:Object(a.jsx)(m.b,{to:"/shipping",children:"Shipping"})}),Object(a.jsx)("li",{className:"footer__item",children:Object(a.jsx)(m.b,{to:"/returns",children:"Returns"})}),Object(a.jsx)("li",{className:"footer__item",children:Object(a.jsx)(m.b,{to:"/payments",children:"Payments"})}),Object(a.jsx)("li",{className:"footer__item",children:Object(a.jsx)(m.b,{to:"/orders",children:"Your Order"})})]})]}),Object(a.jsxs)("div",{className:"footer__column",children:[Object(a.jsx)("h3",{className:"footer__title",children:"CONTACT US"}),Object(a.jsxs)("ul",{className:"footer__",children:[Object(a.jsx)("li",{className:"footer__item",children:Object(a.jsx)("a",{href:"#",children:"+44 (0)333 323 7728"})}),Object(a.jsx)("li",{className:"footer__item",children:Object(a.jsx)("a",{href:"#",children:"Email us"})})]})]}),Object(a.jsxs)("div",{className:"footer__column",children:[Object(a.jsx)("h3",{className:"footer__title",children:"OUR NEWSLETTER"}),Object(a.jsxs)("form",{action:"",className:"footer__form subscribe__form",children:[Object(a.jsx)("h4",{className:"subscribe__form-title",children:"Sign up for exclusive early sale access and tailored new arrivals"}),Object(a.jsx)("label",{htmlFor:"",className:"subscribe__form-field",children:Object(a.jsx)("input",{type:"email",name:"",id:"",required:!0,placeholder:"Email Adrdress"})}),Object(a.jsx)("button",{type:"submit",className:"subscribe__form-btn",children:"Subscribe"})]}),Object(a.jsx)("div",{className:"footer__social",children:Object(a.jsxs)("ul",{className:"footer__social-list",children:[Object(a.jsx)("li",{className:"footer__social-item",children:Object(a.jsx)("a",{href:"https://instagram.com",target:"_blank",children:Object(a.jsx)(z.b,{})})}),Object(a.jsx)("li",{className:"footer__social-item",children:Object(a.jsx)("a",{href:"https://facebook.com",target:"_blank",children:Object(a.jsx)(z.a,{})})}),Object(a.jsx)("li",{className:"footer__social-item",children:Object(a.jsx)("a",{href:"https://twitter.com",target:"_blank",children:Object(a.jsx)(z.d,{})})})]})})]})]})})})})},ee=(c.p,function(e){var t=e.active,c=e.children;return Object(a.jsx)("div",{className:"card-tabs__content",children:t&&c})}),te=function(e){var t=e.match,c=i.a.useState(null),s=Object(l.a)(c,2),n=s[0],r=s[1],d=i.a.useState(0),j=Object(l.a)(d,2),b=j[0],m=j[1],u=Object(o.c)((function(e){return e.cart})).loading,_=Object(o.b)(),h=W.find((function(e){return e.id===t.params.id}));return console.log(h),Object(a.jsx)("div",{className:"Product",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)($,{title:""}),Object(a.jsxs)("div",{className:"card-content",children:[Object(a.jsx)("div",{className:"card-content__left",children:Object(a.jsxs)("div",{className:"card-slider",children:[Object(a.jsx)("div",{className:"card-slider__thumbs",children:Object(a.jsx)("div",{className:"card-slider__thumb",children:Object(a.jsx)("img",{src:h.image_two,alt:""})})}),Object(a.jsx)("div",{className:"card-slider__main",children:Object(a.jsx)("div",{className:"swiper-wrapper",children:Object(a.jsx)("div",{className:"swiper-slide",children:Object(a.jsx)("img",{src:h.image_one,alt:""})})})})]})}),Object(a.jsxs)("div",{className:"card-content__right",children:[Object(a.jsxs)("div",{className:"card-info",children:[Object(a.jsx)("h1",{className:"card-info__title",children:h.title}),Object(a.jsx)("span",{className:"card-info__color",children:h.color}),Object(a.jsxs)("span",{className:"card-info__price",children:[h.price,"$"]})]}),Object(a.jsx)("div",{className:"card-sizes",children:Object(a.jsx)("ul",{className:"card-sizes__list",children:h.availableSizes.map((function(e,t){return Object(a.jsx)("li",{className:n===e?"card-sizes__item active":"card-sizes__item",onClick:function(){return function(e){return r(e)}(e)},children:Object(a.jsx)("span",{children:e})},t)}))})}),u?Object(a.jsx)(X,{}):Object(a.jsxs)("div",{className:"card-buttons",children:[Object(a.jsx)("button",{className:"card-buttons__cart product-button",onClick:function(){var e;_((e=Object(O.a)(Object(O.a)({},h),{},{size:n,count:1}),function(){var t=Object(K.a)(V.a.mark((function t(c){return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c({type:"SET_CART_LOADING"}),setTimeout((function(){c({type:"ADD_PRODUCT_CART",payload:e})}),2e3);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))},children:"add to card"}),Object(a.jsx)("button",{className:"card-buttons__wish product-button",children:"add to wishlist"})]}),Object(a.jsxs)("div",{className:"card-tabs",children:[Object(a.jsxs)("ul",{className:"card-tabs__list",children:[Object(a.jsx)("li",{className:0===b?"card-tabs__item active":"card-tabs__item",onClick:function(){return m(0)},children:Object(a.jsx)("span",{children:"Description"})}),Object(a.jsx)("li",{className:1===b?"card-tabs__item active":"card-tabs__item",onClick:function(){return m(1)},children:Object(a.jsx)("span",{children:"sizing"})}),Object(a.jsx)("li",{className:2===b?"card-tabs__item active":"card-tabs__item",onClick:function(){return m(2)},children:Object(a.jsx)("span",{children:"shipping"})}),Object(a.jsx)("li",{className:3===b?"card-tabs__item active":"card-tabs__item",onClick:function(){return m(3)},children:Object(a.jsx)("span",{children:"returns"})})]}),Object(a.jsx)(ee,{active:0===b,children:"Nike and St\xfcssy are well known for their fusion of sportswear and streetwear, and their latest collection follows tradition. With this pullover jacket, though, it\u2019s geared towards colder days spent in the city, too, with an insulated build and a hand-warming pouch pocket. Co-branding \u2014 an embroidered Swoosh at one sleeve, St\xfcssy\u2019s signature scribble at the other \u2014 completes the look."}),Object(a.jsx)(ee,{active:1===b,children:"Model is 6ft 2in/1.88m with a 37\u201d/94cm chest and wears a size Medium."}),Object(a.jsx)(ee,{active:2===b,children:"RUB1,800.00 via FEDEX Priority Service Order within 3 Hours 41 Minutes to receive Mon 11 Jan FREE FEDEX Priority Service on orders over RUB27,500.00 Order within 3 Hours 41 Minutes to receive Mon 11 Jan"}),Object(a.jsx)(ee,{active:3===b,children:"dsdIf for some reason you are not happy with your purchase you can return it to us within 14 days for an exchange or refund. For more information please visit our returns pagesd"})]})]})]})]})})},ce=function(){return Object(a.jsx)("div",{className:"default-page",children:Object(a.jsxs)("div",{className:"default-page_content",children:[Object(a.jsx)("h1",{children:"404"}),Object(a.jsx)("p",{children:"Sorry, This page doesn't exist"})]})})},ae=function(){var e=i.a.useState(!1),t=Object(l.a)(e,2),c=t[0],s=t[1],n=Object(o.c)((function(e){return e.cart})),r=n.items,d=n.totalPrice;return Object(a.jsx)("div",{className:"checkout",children:Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"checkout-wrapper",children:[Object(a.jsxs)("div",{className:"checkout-items",children:[Object(a.jsx)("div",{children:r.map((function(e,t){return Object(a.jsx)(x,Object(O.a)({},e),"".concat(e.id,"_").concat(t))}))}),Object(a.jsxs)("div",{className:"cart-total",children:[Object(a.jsxs)("div",{className:"cart-total__subtotal",children:[Object(a.jsx)("span",{children:"Subtotal:"}),Object(a.jsxs)("span",{children:[d," $"]})]}),Object(a.jsxs)("div",{className:"cart-total__shipping",children:[Object(a.jsx)("span",{children:"Shippingl:"}),Object(a.jsx)("span",{children:"0$"})]}),Object(a.jsxs)("div",{className:"cart-total__total",children:[Object(a.jsx)("span",{children:"Total:"}),Object(a.jsx)("span",{children:"500$"})]})]}),Object(a.jsxs)("div",{className:c?"cart-promo active":"cart-promo",children:[Object(a.jsx)("p",{onClick:function(){return s(!c)},children:"GIFTCARD / PROMOCODE"}),Object(a.jsxs)("div",{className:"cart-promo__input",children:[Object(a.jsx)("input",{type:"text",placeholder:"Enter Code"}),Object(a.jsx)("button",{children:"APPLY"})]})]}),Object(a.jsx)("div",{className:"checkout",children:Object(a.jsx)(m.b,{to:"/checkout",className:"checkout-btn",children:"PLACE ORDER"})})]}),Object(a.jsx)("div",{className:"checkout-data",children:Object(a.jsx)("h2",{children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quidem fugit fuga nobis facere, eos iste alias impedit quod quas? Doloremque veniam totam maxime necessitatibus aut! Omnis harum illo ipsa nisi numquam mollitia animi voluptatibus sed. Reiciendis, accusantium error. Tempore ad recusandae maiores rem. Fuga, doloremque eos aperiam unde iste accusamus eaque voluptate natus ipsa, exercitationem architecto doloribus inventore quisquam ullam necessitatibus aliquam delectus saepe molestiae nobis rerum, est repudiandae ad officia non! Voluptates, ab libero obcaecati iure, nihil dolorem possimus unde amet rerum, assumenda illo similique qui nulla recusandae nam laboriosam laborum. Odit, sapiente incidunt voluptas quibusdam quos laboriosam!"})})]})})})};var se=function(){return Object(a.jsxs)(m.a,{children:[Object(a.jsx)(g,{}),Object(a.jsxs)(v.c,{children:[Object(a.jsx)(v.a,{path:"/",exact:!0,component:q}),Object(a.jsx)(v.a,{path:"/latest",component:Q}),Object(a.jsx)(v.a,{path:"/product/:id",component:te}),Object(a.jsx)(v.a,{path:"/cart",component:te}),Object(a.jsx)(v.a,{path:"/checkout",component:ae}),Object(a.jsx)(v.a,{component:ce})]}),Object(a.jsx)(Z,{})]})},ie=c(18),ne=c(41),re=c(42),oe={items:[],showCartSidebar:!1,totalPrice:0,totalCount:0,loading:!1},le=function(e){return e.reduce((function(e,t){return e+parseFloat(t.count)*parseFloat(t.price)}),0)},de=function(e){return e.reduce((function(e,t){return e+parseFloat(t.count)}),0)},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CART_LOADING":return Object(O.a)(Object(O.a)({},e),{},{loading:!0});case"ADD_PRODUCT_CART":var c=e.items.findIndex((function(e){return e.id===t.payload.id&&e.size===t.payload.size}));if(-1!==c){var a=Object(U.a)(e.items);a[c].count+=1;var s=le(a),i=de(a);return Object(O.a)(Object(O.a)({},e),{},{items:a,totalPrice:s,totalCount:i,loading:!1})}var n=[].concat(Object(U.a)(e.items),[t.payload]),r=le(n),o=de(n);return Object(O.a)(Object(O.a)({},e),{},{items:n,showCartSidebar:!0,totalPrice:r,totalCount:o,loading:!1});case"INC_PRODUCT_CART":var l=e.items.findIndex((function(e){return e.id===t.payload.id&&e.size===t.payload.size})),d=Object(U.a)(e.items);d[l].count+=1;var j=le(d),b=de(d);return Object(O.a)(Object(O.a)({},e),{},{items:d,totalPrice:j,totalCount:b,loading:!1});case"DEC_PRODUCT_CART":var m=e.items.findIndex((function(e){return e.id===t.payload.id&&e.size===t.payload.size}));if(1===e.items[m].count)return e;var u=Object(U.a)(e.items);u[m].count-=1;var _=le(u),h=de(u);return Object(O.a)(Object(O.a)({},e),{},{items:u,totalPrice:_,totalCount:h,loading:!1});default:return e}},be={items:[],loading:!1,filters:[]},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PRODUCTS_LOADING":return Object(O.a)(Object(O.a)({},e),{},{loading:!0});case"FETCH_PRODUCTS":case"SORT_PRODUCTS_LOW_PRICE":case"SORT_PRODUCTS_HIGH_PRICE":return Object(O.a)(Object(O.a)({},e),{},{items:t.payload,loading:!1});case"FILTER_PRODUCTS_BY_BRAND":var c=[].concat(Object(U.a)(e.filters),Object(U.a)(t.payload));return Object(O.a)(Object(O.a)({},e),{},{loading:!1,filters:c});default:return e}},ue=Object(ie.combineReducers)({cart:je,products:me}),_e=Object(ie.createStore)(ue,Object(ne.composeWithDevTools)(Object(ie.applyMiddleware)(re.a)));r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(o.a,{store:_e,children:Object(a.jsx)(se,{})})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.a4ac961b.chunk.js.map