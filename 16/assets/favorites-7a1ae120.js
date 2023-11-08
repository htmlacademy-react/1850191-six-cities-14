import{j as a,L as c,A as l,W as r}from"./index-3f7001c0.js";const t=({offer:s})=>a.jsxs("article",{className:"favorites__card place-card",children:[s.isPremium&&a.jsx("div",{className:"place-card__mark",children:a.jsx("span",{children:"Premium"})}),a.jsx("div",{className:"favorites__image-wrapper place-card__image-wrapper",children:a.jsx("a",{href:"#",children:a.jsx("img",{className:"place-card__image",src:s.previewImage,width:150,height:110,alt:"Place image"})})}),a.jsxs("div",{className:"favorites__card-info place-card__info",children:[a.jsxs("div",{className:"place-card__price-wrapper",children:[a.jsxs("div",{className:"place-card__price",children:[a.jsxs("b",{className:"place-card__price-value",children:["€",s.price]}),a.jsx("span",{className:"place-card__price-text",children:"/ night"})]}),a.jsxs("button",{className:`place-card__bookmark-button button ${s.isFavorite?"place-card__bookmark-button--active":""}`,type:"button",children:[a.jsx("svg",{className:"place-card__bookmark-icon",width:18,height:19,children:a.jsx("use",{xlinkHref:"#icon-bookmark"})}),a.jsx("span",{className:"visually-hidden",children:"In bookmarks"})]})]}),s.rating&&a.jsx("div",{className:"place-card__rating rating",children:a.jsxs("div",{className:"place-card__stars rating__stars",children:[a.jsx("span",{style:{width:`${s.rating/5*100}%`}}),a.jsx("span",{className:"visually-hidden",children:"Rating"})]})}),a.jsx("h2",{className:"place-card__name",children:a.jsx(c,{to:l.Offer,children:s.title})}),a.jsx("p",{className:"place-card__type",children:s.type})]})]}),n=({offers:s})=>{var i;return a.jsx("ul",{className:"favorites__list",children:(i=s.filter(e=>e.isFavorite))==null?void 0:i.map(e=>a.jsxs("li",{className:"favorites__locations-items",children:[a.jsx("div",{className:"favorites__locations locations locations--current",children:a.jsx("div",{className:"locations__item",children:a.jsx("a",{className:"locations__item-link",href:"#",children:a.jsx("span",{children:e.city.name})})})}),a.jsx("div",{className:"favorites__places",children:a.jsx(t,{offer:e})})]},e.id))})},_=({offers:s})=>a.jsxs("div",{className:"page__favorites-container container",children:[a.jsx(r,{children:a.jsx("title",{children:"6 cities-Favorites"})}),a.jsxs("section",{className:"favorites",children:[a.jsx("h1",{className:"favorites__title",children:"Saved listing"}),a.jsx(n,{offers:s})]})]});export{_ as default};
