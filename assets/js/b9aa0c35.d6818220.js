"use strict";(self.webpackChunkkodsh_wiki_new=self.webpackChunkkodsh_wiki_new||[]).push([[2667],{20467:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=i(85893),t=i(11151);const s={},c='NANR ("RNAN") - Nitro Animation Runtime',a={id:"universal/resources/nitro/graphics_2d/file_nanr",title:'NANR ("RNAN") - Nitro Animation Runtime',description:"Author(s): Gonhex",source:"@site/docs/universal/resources/nitro/graphics_2d/file_nanr.md",sourceDirName:"universal/resources/nitro/graphics_2d",slug:"/universal/resources/nitro/graphics_2d/file_nanr",permalink:"/docs/universal/resources/nitro/graphics_2d/file_nanr",draft:!1,unlisted:!1,editUrl:"https://github.com/kingdom-of-ds-hacking/kingdom-of-ds-hacking.github.io/docs/universal/resources/nitro/graphics_2d/file_nanr.md",tags:[],version:"current",frontMatter:{},sidebar:"universal_sidebar",previous:{title:"G2D",permalink:"/docs/category/g2d"},next:{title:'NCER ("RECN") - Nitro Cell Runtime',permalink:"/docs/universal/resources/nitro/graphics_2d/file_ncer"}},o={},l=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Data Structure",id:"data-structure",level:2},{value:"File Container",id:"file-container",level:3},{value:"Specification",id:"specification",level:2},{value:"Sections",id:"sections",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",mermaid:"mermaid",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"nanr-rnan---nitro-animation-runtime",children:'NANR ("RNAN") - Nitro Animation Runtime'}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Author(s): ",(0,r.jsx)(n.a,{href:"https://github.com/Gonhex",children:"Gonhex"})," ",(0,r.jsx)("br",{}),"\r\nResearch: (see sections)"]}),"\n"]}),"\n",(0,r.jsx)(n.mermaid,{value:"flowchart BT;\r\n    NANR(N. Animation R.)--\x3eG2D(Graphics 2D);\r\n    ANBK(Animation Bank)--\x3eNANR;\r\n    LABL(Label)--\x3eNANR;\r\n    UEXT(Use Extension?)--\x3eNANR;"}),"\n",(0,r.jsx)(n.p,{children:"The animation runtime creates frame by frame animations using cells. Affine transformations can also be applied to frames."}),"\n",(0,r.jsx)(n.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#data-structure",children:"Data Structure"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#file-container",children:"File Container"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#specification",children:"Specification"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#sections",children:"Sections"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"data-structure",children:"Data Structure"}),"\n",(0,r.jsx)(n.h3,{id:"file-container",children:"File Container"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-c",children:"struct ContainerFileNANR\r\n{\r\n    /* 0x00   */ struct NitroFileHeader fileHeader;\r\n    /* 0x10   */ struct ContainerSectionABNK sectionDataABNK;\r\n    /* append */ struct ContainerSectionLABL sectionDataLABL;\r\n    /* append */ struct ContainerSectionUEXT sectionDataUEXT;\r\n}; // entry size = fileHeader.lengthFile\n"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field Name"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Data Type"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"fileHeader"}),(0,r.jsxs)(n.td,{children:["Header of this file. ",(0,r.jsx)(n.code,{children:'fileHeader.signature = "RNAN"'}),"."]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"../nitro_overview.md#nitro-file-header",children:"NitroFileHeader"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sectionDataABNK"}),(0,r.jsx)(n.td,{children:"Cell animation data."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/universal/resources/nitro/graphics_2d/section_abnk#section-container",children:"ContainerSectionABNK"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sectionDataLABL"}),(0,r.jsx)(n.td,{children:"Animation-name table."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/universal/resources/nitro/graphics_2d/section_labl#section-container",children:"ContainerSectionLABL"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sectionDataUEXT"}),(0,r.jsx)(n.td,{children:"Cluster flag."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/universal/resources/nitro/graphics_2d/section_uext#section-container",children:"ContainerSectionUEXT"})})]})]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"specification",children:"Specification"}),"\n",(0,r.jsx)(n.h3,{id:"sections",children:"Sections"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/universal/resources/nitro/graphics_2d/section_abnk",children:"Animation Bank"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/universal/resources/nitro/graphics_2d/section_labl",children:"Label"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/universal/resources/nitro/graphics_2d/section_uext",children:"Use Extension?"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>c});var r=i(67294);const t={},s=r.createContext(t);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);