import{j as e,r as m,k as d,l as _,i as f,m as h,N as x,A as j,W as u}from"./index-c38f97e7.js";import{M as p,L as N}from"./map-dbcd716b.js";import{a as g}from"./selectors-79130599.js";const v=()=>e.jsx("div",{className:"offer__gallery-container container",children:e.jsxs("div",{className:"offer__gallery",children:[e.jsx("div",{className:"offer__image-wrapper",children:e.jsx("img",{className:"offer__image",src:"img/room.jpg",alt:"Photo studio"})}),e.jsx("div",{className:"offer__image-wrapper",children:e.jsx("img",{className:"offer__image",src:"img/apartment-01.jpg",alt:"Photo studio"})}),e.jsx("div",{className:"offer__image-wrapper",children:e.jsx("img",{className:"offer__image",src:"img/apartment-02.jpg",alt:"Photo studio"})}),e.jsx("div",{className:"offer__image-wrapper",children:e.jsx("img",{className:"offer__image",src:"img/apartment-03.jpg",alt:"Photo studio"})}),e.jsx("div",{className:"offer__image-wrapper",children:e.jsx("img",{className:"offer__image",src:"img/studio-01.jpg",alt:"Photo studio"})}),e.jsx("div",{className:"offer__image-wrapper",children:e.jsx("img",{className:"offer__image",src:"img/apartment-01.jpg",alt:"Photo studio"})})]})}),w=()=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"offer__mark",children:e.jsx("span",{children:"Premium"})}),e.jsxs("div",{className:"offer__name-wrapper",children:[e.jsx("h1",{className:"offer__name",children:"Beautiful & luxurious studio at great location"}),e.jsxs("button",{className:"offer__bookmark-button button",type:"button",children:[e.jsx("svg",{className:"offer__bookmark-icon",width:31,height:33,children:e.jsx("use",{xlinkHref:"#icon-bookmark"})}),e.jsx("span",{className:"visually-hidden",children:"To bookmarks"})]})]}),e.jsxs("div",{className:"offer__rating rating",children:[e.jsxs("div",{className:"offer__stars rating__stars",children:[e.jsx("span",{style:{width:"80%"}}),e.jsx("span",{className:"visually-hidden",children:"Rating"})]}),e.jsx("span",{className:"offer__rating-value rating__value",children:"4.8"})]}),e.jsxs("ul",{className:"offer__features",children:[e.jsx("li",{className:"offer__feature offer__feature--entire",children:"Apartment"}),e.jsx("li",{className:"offer__feature offer__feature--bedrooms",children:"3 Bedrooms"}),e.jsx("li",{className:"offer__feature offer__feature--adults",children:"Max 4 adults"})]}),e.jsxs("div",{className:"offer__price",children:[e.jsx("b",{className:"offer__price-value",children:"€120"}),e.jsx("span",{className:"offer__price-text",children:" night"})]}),e.jsxs("div",{className:"offer__inside",children:[e.jsx("h2",{className:"offer__inside-title",children:"What's inside"}),e.jsxs("ul",{className:"offer__inside-list",children:[e.jsx("li",{className:"offer__inside-item",children:"Wi-Fi"}),e.jsx("li",{className:"offer__inside-item",children:"Washing machine"}),e.jsx("li",{className:"offer__inside-item",children:"Towels"}),e.jsx("li",{className:"offer__inside-item",children:"Heating"}),e.jsx("li",{className:"offer__inside-item",children:"Coffee machine"}),e.jsx("li",{className:"offer__inside-item",children:"Baby seat"}),e.jsx("li",{className:"offer__inside-item",children:"Kitchen"}),e.jsx("li",{className:"offer__inside-item",children:"Dishwasher"}),e.jsx("li",{className:"offer__inside-item",children:"Cabel TV"}),e.jsx("li",{className:"offer__inside-item",children:"Fridge"})]})]})]}),b=()=>e.jsxs("div",{className:"offer__host",children:[e.jsx("h2",{className:"offer__host-title",children:"Meet the host"}),e.jsxs("div",{className:"offer__host-user user",children:[e.jsx("div",{className:"offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper",children:e.jsx("img",{className:"offer__avatar user__avatar",src:"img/avatar-angelina.jpg",width:74,height:74,alt:"Host avatar"})}),e.jsx("span",{className:"offer__user-name",children:"Angelina"}),e.jsx("span",{className:"offer__user-status",children:"Pro"})]}),e.jsxs("div",{className:"offer__description",children:[e.jsx("p",{className:"offer__text",children:"A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century."}),e.jsx("p",{className:"offer__text",children:"An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful."})]})]}),y=()=>{const[s,r]=m.useState(""),[n,i]=m.useState(""),t=s.length>=d.MIN&&s.length<=d.MAX&&n!=="";function l(a){r(a.target.value)}function c(a){i(a.target.value)}return e.jsxs("form",{className:"reviews__form form",action:"#",method:"post",children:[e.jsx("label",{className:"reviews__label form__label",htmlFor:"review",children:"Your review"}),e.jsx("div",{className:"reviews__rating-form form__rating",children:[5,4,3,2,1].map(a=>e.jsxs(_.Fragment,{children:[e.jsx("input",{className:"form__rating-input visually-hidden",name:"rating",value:a.toString(),id:`${a}-stars`,type:"radio",onChange:c}),e.jsx("label",{htmlFor:`${a}-stars`,className:"reviews__rating-label form__rating-label",title:["terribly","badly","not bad","good","perfect"][a-1],children:e.jsx("svg",{className:"form__star-image",width:37,height:33,children:e.jsx("use",{xlinkHref:"#icon-star"})})})]},a))}),e.jsx("textarea",{className:"reviews__textarea form__textarea",id:"review",name:"review",placeholder:"Tell how was your stay, what you like and what can be improved",value:s,onChange:l}),e.jsxs("div",{className:"reviews__button-wrapper",children:[e.jsxs("p",{className:"reviews__help",children:["To submit review please make sure to set"," ",e.jsx("span",{className:"reviews__star",children:"rating"})," and describe your stay with at least"," ",e.jsx("b",{className:"reviews__text-amount",children:"50 characters"}),"."]}),e.jsx("button",{className:"reviews__submit form__submit button",type:"submit",disabled:!t,children:"Submit"})]})]})},k=({review:s})=>e.jsxs("li",{className:"reviews__item",children:[e.jsxs("div",{className:"reviews__user user",children:[e.jsx("div",{className:"reviews__avatar-wrapper user__avatar-wrapper",children:e.jsx("img",{className:"reviews__avatar user__avatar",src:s.user.avatarUrl,width:54,height:54,alt:"Reviews avatar"})}),e.jsx("span",{className:"reviews__user-name",children:s.user.name})]}),e.jsxs("div",{className:"reviews__info",children:[e.jsx("div",{className:"reviews__rating rating",children:e.jsxs("div",{className:"reviews__stars rating__stars",children:[e.jsx("span",{style:{width:`${s.rating*20}%`}}),e.jsx("span",{className:"visually-hidden",children:"Rating"})]})}),e.jsx("p",{className:"reviews__text",children:s.comment}),e.jsx("time",{className:"reviews__time",dateTime:s.date,children:new Date(s.date).toLocaleString("en-US",{month:"long",year:"numeric"})})]})]}),R=({reviews:s})=>e.jsx("ul",{className:"reviews__list",children:s.map(r=>e.jsx(k,{review:r},r.id))}),S=({reviews:s})=>{const[r,n]=m.useState(null),i=f(g),{id:t}=h(),l=t?i.find(o=>o.id===t):void 0;function c(o){n(o)}if(!l)return e.jsx(x,{to:j.NotFound});const a=l.city;return e.jsxs(e.Fragment,{children:[e.jsx(u,{children:e.jsx("title",{children:"6 cities-Offer"})}),e.jsxs("section",{className:"offer",children:[e.jsx(v,{}),e.jsx("div",{className:"offer__container container",children:e.jsxs("div",{className:"offer__wrapper",children:[e.jsx(w,{}),e.jsx(b,{}),e.jsxs("section",{className:"offer__reviews reviews",children:[e.jsxs("h2",{className:"reviews__title",children:["Reviews · ",e.jsx("span",{className:"reviews__amount",children:s.length})]}),e.jsx(R,{reviews:s}),e.jsx(y,{})]})]})}),a&&e.jsx(p,{city:a,offers:i,hoveredOfferId:r,className:"offer__map"})]}),e.jsx("div",{className:"container",children:e.jsxs("section",{className:"near-places places",children:[e.jsx("h2",{className:"near-places__title",children:"Other places in the neighbourhood"}),e.jsx("div",{className:"near-places__list places__list",children:e.jsx(N,{offers:i.slice(0,3),onCardHover:c,className:"near-places__card"})})]})})]})};export{S as default};
