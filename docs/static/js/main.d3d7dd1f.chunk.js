(this["webpackJsonpejercicio-1"]=this["webpackJsonpejercicio-1"]||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(16),r=c.n(n),i=(c(22),c(9)),s=function(){return fetch("https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{id:e.id,name:e.name,status:e.status,species:e.species,type:e.type,gender:e.gender,origin:e.origin.name,location:e.location.name,image:e.image,episodes:e.episode.length}}))}))},l=(c(23),c.p+"static/media/ricky-morty-1pk.e0a0ad9a.jpg"),o=(c(24),c(25),c(0)),d=function(e){return Object(o.jsx)("div",{className:"resetSearchButton",onClick:function(){e.handleResetSearch()},children:Object(o.jsx)("i",{className:"fas fa-times reset-search"})})},j=function(e){return Object(o.jsxs)("div",{className:"filterByName",children:[Object(o.jsx)("form",{className:"filterByName_form",onSubmit:function(e){e.preventDefault()},children:Object(o.jsx)("input",{className:"filterByName__form--input",type:"text",value:e.nameFilter,placeholder:"Buscar personaje...\ud83d\udd0d",onChange:function(t){var c=window.location;c.replace("".concat(c.protocol,"//").concat(c.host).concat(c.pathname,"#/")),e.handleFilter({value:t.target.value,key:"name"})}})}),Object(o.jsx)(d,{handleResetSearch:e.handleResetSearch,nameFilter:e.nameFilter})]})},u=c(7),h=function(e){return Object(o.jsxs)("header",{className:"header",children:[Object(o.jsxs)("span",{className:"header__titleContainer",children:[Object(o.jsx)(u.b,{to:"/",children:Object(o.jsx)("img",{className:"header__img",src:l,alt:"Imagen de Rick y Morty",onClick:function(){e.handleResetAll()},title:"Ir a la p\xe1gina principal"})}),Object(o.jsx)("h1",{className:"header__title",children:"Rick y Morty"})]}),Object(o.jsx)(j,{handleFilter:e.handleFilter,handleResetSearch:e.handleResetSearch,nameFilter:e.nameFilter})]})},m=(c(32),function(){return Object(o.jsx)("section",{className:"hero"})}),b=(c(33),function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(u.b,{to:"/personaje/".concat(e.character.id),children:[Object(o.jsx)("img",{className:"characterSection__list--item_img",src:e.character.image,alt:"Foto de ".concat(e.character.name)}),Object(o.jsx)("h5",{className:"characterSection__list--item_name",children:e.character.name}),Object(o.jsx)("p",{className:"characterSection__list--item_specie",children:"Human"===e.character.species&&"Male"===e.character.gender?"Humano":"Human"===e.character.species&&"Female"===e.character.gender?"Humana":"Alien"===e.character.species?"Extraterrestre":void 0})]})})}),f=(c(34),function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("section",{className:"notFoundSearch",children:[Object(o.jsx)("i",{className:"fas fa-sync-alt notFoundSearch__icon",onClick:function(){e.handleResetAll()}}),Object(o.jsx)("p",{className:"notFoundSearch__text",children:"No hay ning\xfan personaje que coincida con tu b\xfasqueda."})]})})}),O=function(e){return Object(o.jsxs)("div",{className:"filter",children:[Object(o.jsx)("label",{className:"filter__ByGender",htmlFor:"gender",children:"G\xe9nero:"}),Object(o.jsxs)("select",{className:"filter__select",name:"gender",id:"gender",value:e.genderFilter,onChange:function(t){e.handleFilter({value:t.target.value,key:"gender"})},children:[Object(o.jsx)("option",{value:"All",children:"Todos"}),Object(o.jsx)("option",{value:"Female",children:"Mujer"}),Object(o.jsx)("option",{value:"Male",children:"Hombre"}),Object(o.jsx)("option",{value:"Unknown",children:"Desconocido"})]})]})},x=function(e){return Object(o.jsxs)("div",{className:"filter",children:[Object(o.jsx)("label",{className:"filter__BySpecies",htmlFor:"species",children:"Especie:"}),Object(o.jsxs)("select",{className:"filter__select",name:"species",id:"species",value:e.speciesFilter,onChange:function(t){e.handleFilter({value:t.target.value,key:"species"})},children:[Object(o.jsx)("option",{value:"All",children:"Todas"}),Object(o.jsx)("option",{value:"Human",children:"Humana"}),Object(o.jsx)("option",{value:"Alien",children:"Extraterreste"})]})]})},p=function(e){return Object(o.jsxs)("div",{className:"filter",children:[Object(o.jsx)("label",{className:"filter__ByStatus",htmlFor:"status",children:"Estado:"}),Object(o.jsxs)("select",{className:"filter__select",name:"status",id:"status",value:e.statusFilter,onChange:function(t){e.handleFilter({value:t.target.value,key:"status"})},children:[Object(o.jsx)("option",{value:"All",children:"Todos"}),Object(o.jsx)("option",{value:"Alive",children:"Vivo"}),Object(o.jsx)("option",{value:"Dead",children:"Muerto"}),Object(o.jsx)("option",{value:"unknown",children:"Desconocido"})]})]})},_=(c(35),function(e){return Object(o.jsx)("button",{className:"resetFiltersButton",type:"reset",onClick:function(){e.handleResetFilters()},children:"Borrar filtros"})}),g=(c(36),function(e){return Object(o.jsx)("section",{className:"filters",children:Object(o.jsxs)("form",{className:"filters__form",children:[Object(o.jsx)(O,{handleFilter:e.handleFilter,genderFilter:e.genderFilter}),Object(o.jsx)(x,{handleFilter:e.handleFilter,speciesFilter:e.speciesFilter}),Object(o.jsx)(p,{handleFilter:e.handleFilter,statusFilter:e.statusFilter}),Object(o.jsx)(_,{handleResetFilters:e.handleResetFilters})]})})}),F=(c(37),function(e){var t=e.characters.map((function(e){return Object(o.jsx)("li",{className:"characterSection__list--item",title:e.name,children:Object(o.jsx)(b,{character:e})},e.id)}));return e.isLoading||0!==t.length?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(g,{handleFilter:e.handleFilter,handleResetFilters:e.handleResetFilters,genderFilter:e.genderFilter,speciesFilter:e.speciesFilter,statusFilter:e.statusFilter}),Object(o.jsx)("section",{className:"characterSection",children:Object(o.jsx)("ul",{className:"characterSection__list",children:t})})]}):Object(o.jsx)(f,{handleResetAll:e.handleResetAll})}),v=(c(38),c(39),function(){return Object(o.jsx)("div",{className:"notFound",children:Object(o.jsx)("p",{className:"notFound__text",children:"\xa1Ups! Parece que no encontramos lo que buscas. Realiza una nueva b\xfasqueda."})})}),N=c.p+"static/media/Loader.6281c6f4.gif",S=function(){return Object(o.jsx)("img",{src:N,alt:"Cargando p\xe1gina web..."})},k=function(e){var t=function(){return"Earth (C-137)"===e.character.origin||"Earth (Replacement Dimension)"===e.character.origin?"Tierra":"unknown"===e.character.origin?"Desconocido":e.character.origin};return e.isLoading&&void 0===e.character?Object(o.jsx)(S,{}):void 0===e.character?Object(o.jsx)(v,{}):Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("section",{className:"detailSection",children:[Object(o.jsxs)(u.b,{to:"/",className:"detailSection__back",children:[Object(o.jsx)("i",{className:"fas fa-angle-double-left detailSection__back--icon"}),Object(o.jsx)("p",{className:"detailSection__back--text",children:"Volver"})]}),Object(o.jsxs)("article",{className:"detailSection__article",children:[Object(o.jsx)("img",{className:"detailSection__article--img",src:e.character.image,alt:"Foto de ".concat(e.character.name)}),Object(o.jsxs)("ul",{className:"detailSection__article--list",children:[Object(o.jsx)("li",{className:"detailSection__article--list_name",children:e.character.name}),Object(o.jsxs)("li",{className:"detailSection__article--list_item",children:["Estado: ".concat("Alive"===e.character.status?"Vivo":"Dead"===e.character.status?"Muerto":"unknown"===e.character.status?"Desconocido":void 0)," ","Dead"===e.character.status?"\u2620\ufe0f":"Alive"===e.character.status?"\u2764\ufe0f":"unknown"===e.character.status?"\u2753":void 0]}),Object(o.jsxs)("li",{className:"detailSection__article--list_item",children:["Especie: ".concat("Human"===e.character.species&&"Male"===e.character.gender?"Humano":"Human"===e.character.species&&"Female"===e.character.gender?"Humana":"Alien"===e.character.species?"Extraterrestre":void 0)," ","Human"===e.character.species&&"Male"===e.character.gender?"\ud83d\udc68":"Human"===e.character.species&&"Female"===e.character.gender?"\ud83d\udc69":"\ud83d\udef8"]}),Object(o.jsxs)("li",{className:"detailSection__article--list_item",children:["Origen: ".concat(t())," ","Tierra"===t()?"\ud83c\udf0d":"Desconocido"===t()?"\u2754":void 0]}),Object(o.jsx)("li",{className:"detailSection__article--list_item",children:"Localizaci\xf3n: ".concat("Earth (Replacement Dimension)"===e.character.location?"Tierra (Dimensi\xf3n de Reemplazo)":"Testicle Monster Dimension"===e.character.location?"Dimensi\xf3n Monstruo Testicular":"Citadel of Ricks"===e.character.location?"Ciudadela de Ricks":"Worldender's lair"===e.character.location?"Guarida de Worldender":"Anatomy Park"===e.character.location?"Parque de Anatom\xeda":"Interdimensional Cable"===e.character.location?"Cable interdimensional":"unknown"===e.character.location?"Desconocido":e.character.location)}),Object(o.jsx)("li",{className:"detailSection__article--list_item",children:"N\xfamero de episodios: ".concat(e.character.episodes)})]})]})]})})},y=(c(40),function(){return Object(o.jsx)("footer",{className:"footer",children:Object(o.jsxs)("div",{className:"footer__info",children:[Object(o.jsx)("a",{className:"footer__socialMedia",href:"https://github.com/vtendero",target:"_blank",children:Object(o.jsx)("small",{className:"footer__info--copy",children:"vtendero \xa9 2021"})}),Object(o.jsx)("small",{className:"footer__info--motto",children:"dark mode coding"})]})})}),A=c(2),R=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(""),l=Object(i.a)(r,2),d=l[0],j=l[1],u=Object(a.useState)("All"),b=Object(i.a)(u,2),f=b[0],O=b[1],x=Object(a.useState)("All"),p=Object(i.a)(x,2),_=p[0],g=p[1],v=Object(a.useState)("All"),N=Object(i.a)(v,2),R=N[0],C=N[1],D=Object(a.useState)(!0),H=Object(i.a)(D,2),w=H[0],E=H[1];Object(a.useEffect)((function(){s().then((function(e){return n(e)})).then((function(){return E(!1)}))}),[]);var M=function(e){"name"===e.key?j(e.value):"gender"===e.key?O(e.value):"species"===e.key?g(e.value):"status"===e.key&&C(e.value)},B=function(){j(""),O("All"),g("All"),C("All")},T=c.filter((function(e){return e.name.toUpperCase().includes(d.toUpperCase())})).filter((function(e){return"All"===f||e.gender===f})).filter((function(e){return"All"===_||e.species===_})).filter((function(e){return"All"===R||e.status===R}));return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(h,{handleFilter:M,handleResetSearch:function(){j("")},nameFilter:d,handleResetAll:B}),Object(o.jsx)(m,{}),Object(o.jsx)("main",{className:"main",children:Object(o.jsxs)(A.c,{children:[Object(o.jsxs)(A.a,{exact:!0,path:"/",children:[Object(o.jsx)(F,{characters:T,genderFilter:f,speciesFilter:_,statusFilter:R,handleFilter:M,handleResetFilters:function(){O("All"),g("All"),C("All")},handleResetAll:B,isLoading:w}),w?Object(o.jsx)(S,{}):""]}),Object(o.jsx)(A.a,{path:"/personaje/:id",render:function(e){var t=parseInt(e.match.params.id),a=c.find((function(e){return e.id===t}));return Object(o.jsx)(k,{character:a,isLoading:w})}})]})}),Object(o.jsx)(y,{})]})};r.a.render(Object(o.jsx)(u.a,{children:Object(o.jsx)(R,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.d3d7dd1f.chunk.js.map