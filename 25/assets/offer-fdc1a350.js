import{h as _,a as g,u as l,r as n,R as j,p as A,i as w,j as e,k as L,l as F,m as M,n as T,o as D,q as I,A as E,t as U,e as $,W as q}from"./index-a50dfb5f.js";import{c as H,n as B,M as G,L as W}from"./map-fdabeb9d.js";import{F as z,a as N}from"./cards-668f6eba.js";const b=s=>s.currentOffer.offer,V=s=>s.currentOffer.loading,X=s=>s.currentOffer.requestCompleted,p=s=>s.reviews,y=_([p],s=>s.reviews),Y=_([y],s=>s.length);_([p],s=>s.loadingReviews);_([p],s=>s.postReviewData);const J=_([p],s=>s.postReviewLoading),K=_([p],s=>s.postReviewError),Q=_([y],s=>s.slice().sort((r,i)=>new Date(i.date).getTime()-new Date(r.date).getTime()).slice(0,10)),Z=()=>{const s=g(),r=l(J),i=l(K),a=l(b),[o,c]=n.useState(""),[d,h]=n.useState(0),m=o.length>=j.MIN&&o.length<=j.MAX&&d>0,v=n.useCallback(t=>{c(t.target.value)},[]),u=n.useCallback(t=>{h(Number(t.target.value))},[]),x=n.useCallback(async t=>{if(t.preventDefault(),m&&!r&&a){const f={id:a.id,rating:d,comment:o};await s(A(f)).unwrap(),c(""),h(0),await s(w(a.id))}},[m,r,a,d,o,s]);return e.jsxs("form",{className:"reviews__form form",onSubmit:t=>{x(t)},children:[e.jsx("label",{className:"reviews__label form__label",htmlFor:"review",children:"Your review"}),e.jsx("div",{className:"reviews__rating-form form__rating",children:L.map(t=>e.jsxs(F.Fragment,{children:[e.jsx("input",{className:"form__rating-input visually-hidden",name:"rating",value:t,id:`${t}-stars`,type:"radio",onChange:u,checked:d===t}),e.jsx("label",{htmlFor:`${t}-stars`,className:"reviews__rating-label form__rating-label",title:["terribly","badly","not bad","good","perfect"][t-1],children:e.jsx("svg",{className:"form__star-image",width:37,height:33,children:e.jsx("use",{xlinkHref:"#icon-star"})})})]},t))}),e.jsx("textarea",{className:"reviews__textarea form__textarea",id:"review",name:"review",placeholder:"Tell how was your stay, what you like and what can be improved",value:o,onChange:v}),e.jsxs("div",{className:"reviews__button-wrapper",children:[e.jsxs("p",{className:"reviews__help",children:["To submit review please make sure to set"," ",e.jsx("span",{className:"reviews__star",children:"rating"})," and describe your stay with at least"," ",e.jsx("b",{className:"reviews__text-amount",children:"50 characters"}),"."]}),e.jsx("button",{className:"reviews__submit form__submit button",type:"submit",disabled:!m||r,children:"Submit"})]}),i&&e.jsx("div",{className:"error-message",children:i})]})},R=n.memo(({review:s})=>{const r=n.useMemo(()=>({width:`${s.rating*20}%`}),[s.rating]),i=new Date(s.date).toLocaleString("en-US",{month:"long",year:"numeric"});return e.jsxs("li",{className:"reviews__item",children:[e.jsxs("div",{className:"reviews__user user",children:[e.jsx("div",{className:"reviews__avatar-wrapper user__avatar-wrapper",children:e.jsx("img",{className:"reviews__avatar user__avatar",src:s.user.avatarUrl,width:54,height:54,alt:"Reviews avatar"})}),e.jsx("span",{className:"reviews__user-name",children:s.user.name})]}),e.jsxs("div",{className:"reviews__info",children:[e.jsx("div",{className:"reviews__rating rating",children:e.jsxs("div",{className:"reviews__stars rating__stars",children:[e.jsx("span",{style:r}),e.jsx("span",{className:"visually-hidden",children:"Rating"})]})}),e.jsx("p",{className:"reviews__text",children:s.comment}),e.jsx("time",{className:"reviews__time",dateTime:s.date,children:i})]})]})});R.displayName="ReviewsItem";const O=n.memo(({reviews:s})=>e.jsx("ul",{className:"reviews__list",children:s.map(r=>e.jsx(R,{review:r},r.id))}));O.displayName="ReviewsList";const C=n.memo(({images:s})=>e.jsx("section",{className:"offer",children:e.jsx("div",{className:"offer__gallery-container container",children:e.jsx("div",{className:"offer__gallery",children:s.slice(0,6).map(r=>e.jsx("div",{className:"offer__image-wrapper",children:e.jsx("img",{className:"offer__image",src:r,alt:r})},r))})})}));C.displayName="OfferGallery";const P=n.memo(({host:s,description:r})=>e.jsxs("div",{className:"offer__host",children:[e.jsx("h2",{className:"offer__host-title",children:"Meet the host"}),e.jsxs("div",{className:"offer__host-user user",children:[e.jsx("div",{className:`offer__avatar-wrapper ${s.isPro?"offer__avatar-wrapper--pro":""} user__avatar-wrapper`,children:e.jsx("img",{className:"offer__avatar user__avatar",src:s.avatarUrl,width:74,height:74,alt:s.avatarUrl})}),e.jsx("span",{className:"offer__user-name",children:s.name}),s.isPro&&e.jsx("span",{className:"offer__user-status",children:"Pro"})]}),e.jsx("div",{className:"offer__description",children:e.jsx("p",{className:"offer__text",children:r})})]}));P.displayName="OfferHost";const S=n.memo(({offer:s,title:r,isPremium:i,rating:a,type:o,bedrooms:c,maxAdults:d,price:h,goods:m})=>{const v=`${Math.round(a/5*100)}%`;return e.jsxs(e.Fragment,{children:[i&&e.jsx("div",{className:"offer__mark",children:e.jsx("span",{children:"Premium"})}),e.jsxs("div",{className:"offer__name-wrapper",children:[e.jsx("h1",{className:"offer__name",children:r}),e.jsx(z,{offer:s,buttonClass:"offer__bookmark-button",buttonActiveClass:"offer__bookmark-button--active",iconClass:"offer__bookmark-icon",iconWidth:31,iconHeight:33})]}),e.jsxs("div",{className:"offer__rating rating",children:[e.jsxs("div",{className:"offer__stars rating__stars",children:[e.jsx("span",{style:{width:v}}),e.jsx("span",{className:"visually-hidden",children:"Rating"})]}),e.jsx("span",{className:"offer__rating-value rating__value",children:a})]}),e.jsxs("ul",{className:"offer__features",children:[e.jsx("li",{className:"offer__feature offer__feature--entire",children:o}),e.jsxs("li",{className:"offer__feature offer__feature--bedrooms",children:[c," Bedroom",N(c)]}),e.jsxs("li",{className:"offer__feature offer__feature--adults",children:["Max ",d," adult",N(d)]})]}),e.jsxs("div",{className:"offer__price",children:[e.jsxs("b",{className:"offer__price-value",children:["€",h]}),e.jsx("span",{className:"offer__price-text",children:" night"})]}),e.jsxs("div",{className:"offer__inside",children:[e.jsx("h2",{className:"offer__inside-title",children:"What's inside"}),e.jsx("ul",{className:"offer__inside-list",children:m.map(u=>e.jsx("li",{className:"offer__inside-item",children:u},u))})]})]})});S.displayName="OfferPlace";const re=()=>{const s=g(),r=M(),{id:i}=T(),a=l(b),o=l(V),c=l(H),d=l(B),h=l(Q),m=l(D),v=l(Y),u=l(X),x=n.useRef(!0);n.useEffect(()=>{if(i)return x.current=!0,s(I(i)).unwrap().catch(f=>{f.message==="Not Found"&&r(E.NotFound)}),s(U(i)),s(w(i)),()=>{x.current=!1}},[i,s,r]);const t=n.useMemo(()=>{let f=c.slice(0,3);return a&&!c.some(k=>k.id===a.id)&&(f=[a,...f]),f},[c,a]);return o||!u?e.jsx($,{}):a?e.jsxs(e.Fragment,{children:[e.jsx(q,{children:e.jsx("title",{children:`6 cities-Offer: ${a.title}`})}),e.jsxs("section",{className:"offer",children:[e.jsx(C,{images:a.images}),e.jsx("div",{className:"offer__container container",children:e.jsxs("div",{className:"offer__wrapper",children:[e.jsx(S,{offer:a,title:a.title,isPremium:a.isPremium,rating:a.rating,type:a.type,bedrooms:a.bedrooms,maxAdults:a.maxAdults,price:a.price,goods:a.goods}),e.jsx(P,{host:a.host,description:a.description}),e.jsxs("section",{className:"offer__reviews reviews",children:[e.jsxs("h2",{className:"reviews__title",children:["Reviews · ",e.jsx("span",{className:"reviews__amount",children:v})]}),e.jsx(O,{reviews:h}),m&&e.jsx(Z,{})]})]})}),a.city&&e.jsx(G,{city:a.city,offers:t,className:"offer__map",activeOfferId:a.id})]}),e.jsx("div",{className:"container",children:e.jsxs("section",{className:"near-places places",children:[e.jsx("h2",{className:"near-places__title",children:"Other places in the neighbourhood"}),e.jsx("div",{className:"near-places__list places__list",children:d?e.jsx("div",{children:"Loading nearby places..."}):e.jsx(W,{offers:c.slice(0,3),cardType:"offer"})})]})})]}):null};export{re as default};
