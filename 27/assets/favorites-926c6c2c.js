import{r as c,j as s,a as n,u as o,s as l,f as d,g as f,e as m,W as p}from"./index-d8562256.js";import{C as v}from"./cards-dcf9678c.js";const x=({offers:i})=>{const r=c.useMemo(()=>i.reduce((e,t)=>{const a=t.city.name;return e[a]||(e[a]=[]),e[a].push(t),e},{}),[i]);return s.jsx("ul",{className:"favorites__list",children:Object.entries(r).map(([e,t])=>s.jsxs("li",{className:"favorites__locations-items",children:[s.jsx("div",{className:"favorites__locations locations locations--current",children:s.jsx("div",{className:"locations__item",children:s.jsx("a",{className:"locations__item-link",href:"#",children:s.jsx("span",{children:e})})})}),s.jsx("div",{className:"favorites__places",children:t.map(a=>s.jsx(v,{offer:a,cardType:"favorite"},a.id))})]},e))})},u=()=>{const i=n(),r=o(l),e=o(d);return c.useEffect(()=>{i(f())},[i]),e?s.jsx(m,{}):s.jsxs("div",{className:"page__favorites-container container",children:[s.jsx(p,{children:s.jsx("title",{children:"6 cities-Favorites"})}),s.jsxs("section",{className:"favorites",children:[s.jsx("h1",{className:"favorites__title",children:"Saved listing"}),s.jsx(x,{offers:r})]})]})};export{u as default};
