import{j as s,r,W as o}from"./index-c55c3840.js";import{a as _,L as d,M as m}from"./map-6afb2b26.js";const h=()=>s.jsx("div",{className:"tabs",children:s.jsx("section",{className:"locations container",children:s.jsxs("ul",{className:"locations__list tabs__list",children:[s.jsx("li",{className:"locations__item",children:s.jsx("a",{className:"locations__item-link tabs__item",href:"#",children:s.jsx("span",{children:"Paris"})})}),s.jsx("li",{className:"locations__item",children:s.jsx("a",{className:"locations__item-link tabs__item",href:"#",children:s.jsx("span",{children:"Cologne"})})}),s.jsx("li",{className:"locations__item",children:s.jsx("a",{className:"locations__item-link tabs__item",href:"#",children:s.jsx("span",{children:"Brussels"})})}),s.jsx("li",{className:"locations__item",children:s.jsx("a",{className:"locations__item-link tabs__item tabs__item--active",children:s.jsx("span",{children:"Amsterdam"})})}),s.jsx("li",{className:"locations__item",children:s.jsx("a",{className:"locations__item-link tabs__item",href:"#",children:s.jsx("span",{children:"Hamburg"})})}),s.jsx("li",{className:"locations__item",children:s.jsx("a",{className:"locations__item-link tabs__item",href:"#",children:s.jsx("span",{children:"Dusseldorf"})})})]})})}),x=()=>s.jsxs("form",{className:"places__sorting",action:"#",method:"get",children:[s.jsx("span",{className:"places__sorting-caption",children:"Sort by"}),s.jsxs("span",{className:"places__sorting-type",tabIndex:0,children:["Popular",s.jsx("svg",{className:"places__sorting-arrow",width:7,height:4,children:s.jsx("use",{xlinkHref:"#icon-arrow-select"})})]}),s.jsxs("ul",{className:"places__options places__options--custom places__options--opened",children:[s.jsx("li",{className:"places__option places__option--active",tabIndex:0,children:"Popular"}),s.jsx("li",{className:"places__option",tabIndex:0,children:"Price: low to high"}),s.jsx("li",{className:"places__option",tabIndex:0,children:"Price: high to low"}),s.jsx("li",{className:"places__option",tabIndex:0,children:"Top rated first"})]})]}),N=({offers:e})=>{var i;const[l,c]=r.useState(null);function t(n){c(n)}const a=(i=e[0])==null?void 0:i.city;return s.jsxs(s.Fragment,{children:[s.jsx(o,{children:s.jsx("title",{children:"6 cities"})}),s.jsx("h1",{className:"visually-hidden",children:"Cities"}),s.jsx(h,{}),s.jsx("div",{className:"cities",children:s.jsxs("div",{className:"cities__places-container container",children:[s.jsxs("section",{className:"cities__places places",children:[s.jsx("h2",{className:"visually-hidden",children:"Places"}),s.jsxs("b",{className:"places__found",children:[e.length," place",_(e.length)," to stay in Amsterdam"]}),s.jsx(x,{}),s.jsx("div",{className:"cities__places-list places__list tabs__content",children:s.jsx(d,{offers:e,onCardHover:t,className:"cities__card"})})]}),s.jsx("div",{className:"cities__right-section",children:a&&s.jsx(m,{city:a,offers:e,hoveredOfferId:l,className:"cities__map"})})]})})]})};export{N as default};
