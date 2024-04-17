"use strict";(self.webpackChunkkodsh_wiki_new=self.webpackChunkkodsh_wiki_new||[]).push([[9712],{82968:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>a});var i=r(74848),t=r(28453);const s={},c='NCLR ("RLCN") - Nitro Color Runtime',o={id:"universal/resources/nitro/graphics_2d/file_nclr",title:'NCLR ("RLCN") - Nitro Color Runtime',description:"Author(s): Gonhex",source:"@site/docs/universal/resources/nitro/graphics_2d/file_nclr.md",sourceDirName:"universal/resources/nitro/graphics_2d",slug:"/universal/resources/nitro/graphics_2d/file_nclr",permalink:"/docs/universal/resources/nitro/graphics_2d/file_nclr",draft:!1,unlisted:!1,editUrl:"https://github.com/ds-pokemon-hacking/ds-pokemon-hacking.github.io/docs/universal/resources/nitro/graphics_2d/file_nclr.md",tags:[],version:"current",frontMatter:{},sidebar:"universal_sidebar",previous:{title:'NCGR ("RGCN") - Nitro Character Graphic Runtime',permalink:"/docs/universal/resources/nitro/graphics_2d/file_ncgr"},next:{title:'NMAR ("RAMN") - Nitro Multi Animation Runtime',permalink:"/docs/universal/resources/nitro/graphics_2d/file_nmar"}},l={},a=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Data Structure",id:"data-structure",level:2},{value:"File Container",id:"file-container",level:3},{value:"Specification",id:"specification",level:2},{value:"Sections",id:"sections",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",mermaid:"mermaid",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"nclr-rlcn---nitro-color-runtime",children:'NCLR ("RLCN") - Nitro Color Runtime'}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Author(s): ",(0,i.jsx)(n.a,{href:"https://github.com/Gonhex",children:"Gonhex"})," ",(0,i.jsx)("br",{}),"\r\nResearch: (see sections)"]}),"\n"]}),"\n",(0,i.jsx)(n.mermaid,{value:"flowchart BT;\r\n    NCLR(N. Color R.)--\x3eG2D(Graphics 2D);\r\n    PLTT(Palette)--\x3eNCLR;\r\n    PCMP(Palette Count Map)-.->NCLR;"}),"\n",(0,i.jsx)(n.p,{children:"The color runtime serves as base for all other 2D graphics components. It provides color palettes which are accessed via indexing. The count map (PCMP) is optional and sometimes used to limit the number of individual palettes. One palette can have either 16 or 256 colors. The number of colors is the same in all palettes of one file."}),"\n",(0,i.jsx)(n.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#data-structure",children:"Data Structure"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#file-container",children:"File Container"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#specification",children:"Specification"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#sections",children:"Sections"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"data-structure",children:"Data Structure"}),"\n",(0,i.jsx)(n.h3,{id:"file-container",children:"File Container"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:"struct ContainerFileNCLR\r\n{\r\n    /* 0x00   */ struct NitroFileHeader fileHeader;\r\n    /* 0x10   */ struct ContainerSectionPLTT palette;\r\n    /* append */ struct ContainerSectionPCMP countMap; // optional\r\n}; // entry size = fileHeader.lengthFile\n"})}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Field Name"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Data Type"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"fileHeader"}),(0,i.jsxs)(n.td,{children:["Header of this file. ",(0,i.jsx)(n.code,{children:'fileHeader.signature = "RLCN"'}),"."]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"../nitro_overview.md#nitro-file-header",children:"NitroFileHeader"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"palette"}),(0,i.jsx)(n.td,{children:"Palette color data."}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/docs/universal/resources/nitro/graphics_2d/section_pltt#section-container",children:"ContainerSectionPLTT"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"countMap"}),(0,i.jsxs)(n.td,{children:["Palette count limiter. Does only exist if ",(0,i.jsx)(n.code,{children:"fileHeader.numberSections == 2"}),"."]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/docs/universal/resources/nitro/graphics_2d/section_pcmp#section-container",children:"ContainerSectionPCMP"})})]})]})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"specification",children:"Specification"}),"\n",(0,i.jsx)(n.h3,{id:"sections",children:"Sections"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/universal/resources/nitro/graphics_2d/section_pltt",children:"Palette"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/universal/resources/nitro/graphics_2d/section_pcmp",children:"Palette Count Map"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>o});var i=r(96540);const t={},s=i.createContext(t);function c(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);