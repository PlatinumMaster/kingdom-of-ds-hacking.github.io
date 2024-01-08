"use strict";(self.webpackChunkkodsh_wiki_new=self.webpackChunkkodsh_wiki_new||[]).push([[7801],{3308:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>h,contentTitle:()=>a,default:()=>o,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var t=n(5893),s=n(1151);const r={},a='CHAR ("RHAC") - Character',l={id:"universal/resources/nitro/graphics_2d/section_char",title:'CHAR ("RHAC") - Character',description:"Author(s): Gonhex",source:"@site/docs/universal/resources/nitro/graphics_2d/section_char.md",sourceDirName:"universal/resources/nitro/graphics_2d",slug:"/universal/resources/nitro/graphics_2d/section_char",permalink:"/docs/universal/resources/nitro/graphics_2d/section_char",draft:!1,unlisted:!1,editUrl:"https://github.com/kingdom-of-ds-hacking/kingdom-of-ds-hacking.github.io/docs/universal/resources/nitro/graphics_2d/section_char.md",tags:[],version:"current",frontMatter:{},sidebar:"universal_sidebar",previous:{title:'CEBK ("KBEC") - Cell Bank',permalink:"/docs/universal/resources/nitro/graphics_2d/section_cebk"},next:{title:'CPOS ("SOPC") - (Character Position?)',permalink:"/docs/universal/resources/nitro/graphics_2d/section_cpos"}},h={},d=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Data Structure",id:"data-structure",level:2},{value:"Section Container",id:"section-container",level:3},{value:"CHAR Container",id:"char-container",level:3},{value:"Specification",id:"specification",level:2},{value:"Pixel Data",id:"pixel-data",level:3},{value:"Color",id:"color",level:4},{value:"Layout",id:"layout",level:4},{value:"Dimensions",id:"dimensions",level:3},{value:"Mapping Type",id:"mapping-type",level:3},{value:"Flags",id:"flags",level:3},{value:"Special Case",id:"special-case",level:3},{value:"1. File length",id:"1-file-length",level:4},{value:"2. Missing CPOS section",id:"2-missing-cpos-section",level:4},{value:"3. Image layout",id:"3-image-layout",level:4},{value:"Files",id:"files",level:3},{value:"TODO",id:"todo",level:2}];function c(e){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",mermaid:"mermaid",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"char-rhac---character",children:'CHAR ("RHAC") - Character'}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsxs)(i.p,{children:["Author(s): ",(0,t.jsx)(i.a,{href:"https://github.com/Gonhex",children:"Gonhex"})," ",(0,t.jsx)("br",{}),"\r\nResearch: ",(0,t.jsx)(i.a,{href:"https://problemkaputt.de",children:"NOCASH"}),", ",(0,t.jsx)(i.a,{href:"https://github.com/Gonhex",children:"Gonhex"})]}),"\n"]}),"\n",(0,t.jsx)(i.mermaid,{value:"flowchart BT;\r\n    NCGR(N. Character Graphic R.)--\x3eG2D(Graphics 2D);\r\n    CHAR(Character)--\x3eNCGR;"}),"\n",(0,t.jsxs)(i.p,{children:["The character section stores the sprite-image in form of indices to colors within a palette. The array layout is usually a tile map where each tile has a size of ",(0,t.jsx)(i.code,{children:"8 * 8 pixels"}),", but can also be a line buffer which maps the image directly to the target."]}),"\n",(0,t.jsx)(i.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"#char-rhac---character",children:'CHAR ("RHAC") - Character'}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"#table-of-contents",children:"Table of Contents"})}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"#data-structure",children:"Data Structure"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"#section-container",children:"Section Container"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"#char-container",children:"CHAR Container"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"#specification",children:"Specification"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"#pixel-data",children:"Pixel Data"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"#color",children:"Color"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"#layout",children:"Layout"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"#dimensions",children:"Dimensions"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"#mapping-type",children:"Mapping Type"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"#flags",children:"Flags"})}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"#special-case",children:"Special Case"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"#1-file-length",children:"1. File length"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"#2-missing-cpos-section",children:"2. Missing CPOS section"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"#3-image-layout",children:"3. Image layout"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"#files",children:"Files"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"#todo",children:"TODO"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h2,{id:"data-structure",children:"Data Structure"}),"\n",(0,t.jsx)(i.h3,{id:"section-container",children:"Section Container"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-c",children:"struct ContainerSectionCHAR\r\n{\r\n    /* 0x0 */ struct NitroSectionHeader sectionHeader;\r\n    /* 0x8 */ struct ContainerCHAR sectionData;\r\n}; // entry size = sectionHeader.lengthSection\n"})}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Field Name"}),(0,t.jsx)(i.th,{children:"Description"}),(0,t.jsx)(i.th,{children:"Data Type"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"sectionHeader"}),(0,t.jsxs)(i.td,{children:["Header of this section. ",(0,t.jsx)(i.code,{children:'sectionHeader.signature = "RAHC"'}),"."]}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"../nitro_overview.md#nitro-section-header",children:"NitroSectionHeader"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"sectionData"}),(0,t.jsx)(i.td,{children:"Content of this section."}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"#char-container",children:"ContainerCHAR"})})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"char-container",children:"CHAR Container"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-c",children:"struct ContainerCHAR\r\n{\r\n    // header\r\n    /* 0x00 */ int16_t heightInTiles;\r\n    /* 0x02 */ int16_t widthInTiles;\r\n    /* 0x04 */ uint32_t pixelFormat;\r\n    /* 0x08 */ uint16_t mappingType0;\r\n    /* 0x0A */ uint16_t mappingType1;\r\n    /* 0x0C */ uint32_t flags;\r\n    /* 0x10 */ uint32_t lengthDataImage;\r\n    /* 0x14 */ uint32_t offsetDataImage;\r\n    \r\n    // data\r\n    /* offsetDataImage */ uint8_t dataImage[lengthDataImage];\r\n}; // entry size = offsetDataImage + lengthDataImage\n"})}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Field Name"}),(0,t.jsx)(i.th,{children:"Description"}),(0,t.jsx)(i.th,{children:"Data Type"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"heightInTiles"}),(0,t.jsxs)(i.td,{children:["Height of the sprite or ",(0,t.jsx)(i.code,{children:"-1"}),", see ",(0,t.jsx)(i.a,{href:"#dimensions",children:"Dimensions"}),"."]}),(0,t.jsx)(i.td,{children:"int16_t"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"widthInTiles"}),(0,t.jsxs)(i.td,{children:["Width of the sprite or ",(0,t.jsx)(i.code,{children:"-1"}),", see ",(0,t.jsx)(i.a,{href:"#dimensions",children:"Dimensions"}),"."]}),(0,t.jsx)(i.td,{children:"int16_t"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"pixelFormat"}),(0,t.jsxs)(i.td,{children:[(0,t.jsx)(i.code,{children:"== 3"}),": 4 bits per pixel. ",(0,t.jsx)(i.code,{children:"== 4"}),": 8 bits per pixel."]}),(0,t.jsx)(i.td,{children:"uint32_t"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"mappingType0"}),(0,t.jsxs)(i.td,{children:[(0,t.jsx)(i.code,{children:"== 0"}),": 2D mapping, else: 1D mapping(?)."]}),(0,t.jsx)(i.td,{children:"uint16_t"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"mappingType1"}),(0,t.jsxs)(i.td,{children:["Sometimes used in combination with ",(0,t.jsx)(i.code,{children:"mappingType0"}),"(?)."]}),(0,t.jsx)(i.td,{children:"uint16_t"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"flags"}),(0,t.jsxs)(i.td,{children:["Binary flags for different purposes. See ",(0,t.jsx)(i.a,{href:"#flags",children:"Flags"}),"."]}),(0,t.jsx)(i.td,{children:"uint32_t"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"lengthDataImage"}),(0,t.jsx)(i.td,{children:"Length of the image data section in bytes."}),(0,t.jsx)(i.td,{children:"uint32_t"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"offsetDataImage"}),(0,t.jsxs)(i.td,{children:["Offset to the image data section relative to ",(0,t.jsx)(i.code,{children:"ContainerCHAR"}),"."]}),(0,t.jsx)(i.td,{children:"uint32_t"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"dataImage"}),(0,t.jsxs)(i.td,{children:["Array holding all color indices to create an image, see ",(0,t.jsx)(i.a,{href:"#pixel-data",children:"Pixel Data"}),"."]}),(0,t.jsx)(i.td,{children:"uint8_t[]"})]})]})]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h2,{id:"specification",children:"Specification"}),"\n",(0,t.jsx)(i.h3,{id:"pixel-data",children:"Pixel Data"}),"\n",(0,t.jsx)(i.h4,{id:"color",children:"Color"}),"\n",(0,t.jsxs)(i.p,{children:["The character graphic stores indices to colors on a ",(0,t.jsx)(i.a,{href:"/docs/universal/resources/nitro/graphics_2d/section_pltt",children:"palette"}),". This palette provides either 16 or 256 colors. The density of indices depends on the palette size. For a value of ",(0,t.jsx)(i.code,{children:"0...15"})," only 4 bits (1 nibble) are needed. This allows to squeeze two indices into one byte, reducing the overall size by half."]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"pixelFormat == 3"}),": use 16 colors"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"pixelFormat == 4"}),": use 256 colors"]}),"\n"]}),"\n",(0,t.jsx)(i.h4,{id:"layout",children:"Layout"}),"\n",(0,t.jsxs)(i.p,{children:["The 2D engine uses a tile based system. The pixel layout in the file represents this and can be imagined as a box with a width of 8 pixels and an infinite length. The data is written line by line into this box. Each tile can now be accessed at ",(0,t.jsx)(i.code,{children:"y * 8"}),". Now we have 1D mapped tiles. For 2D mapping these tiles are also layed out row by row."]}),"\n",(0,t.jsx)(i.p,{children:'If the image is to be used by the 3D engine, the "infinite length box" from before becomes a bitmap which has the dimensions of the image. There are no tiles in this case.'}),"\n",(0,t.jsx)(i.h3,{id:"dimensions",children:"Dimensions"}),"\n",(0,t.jsxs)(i.p,{children:["The first two entries of ",(0,t.jsx)(i.a,{href:"#char-container",children:"ContainerCHAR"})," define the size of the sprite in tiles. To get the pixel values, multiply them with the side length of a tile (which is 8)."]}),"\n",(0,t.jsxs)(i.p,{children:["Sometimes the width and height values are both set to ",(0,t.jsx)(i.code,{children:"-1"}),". In this case the image itself has no size and the ",(0,t.jsx)(i.a,{href:"/docs/universal/resources/nitro/graphics_2d/section_cpos",children:"CPOS section"})," is not part of the file. To display the sprite anyway, a width of four tiles often makes the image recognizable. The real image is constructed by the ",(0,t.jsx)(i.a,{href:"/docs/universal/resources/nitro/graphics_2d/file_ncer",children:"cell runtime"}),", which picks the needed tiles and positions them."]}),"\n",(0,t.jsx)(i.h3,{id:"mapping-type",children:"Mapping Type"}),"\n",(0,t.jsxs)(i.p,{children:["These values are ",(0,t.jsx)(i.code,{children:"0"}),", if the image uses 2D mapping (positive values in ",(0,t.jsx)(i.code,{children:"heightInTiles"})," an ",(0,t.jsx)(i.code,{children:"widhtInTiles"}),"). Both dimension values ",(0,t.jsx)(i.code,{children:"== -1"})," indicate 1D mapping. In this case ",(0,t.jsx)(i.code,{children:"mappingType0"})," usually has a value like ",(0,t.jsx)(i.code,{children:"0x10"}),". In the most cases, the ",(0,t.jsx)(i.a,{href:"/docs/universal/resources/nitro/graphics_2d/file_ncer",children:"cell runtime"})," indexes 1D mapped tiles."]}),"\n",(0,t.jsx)(i.h3,{id:"flags",children:"Flags"}),"\n",(0,t.jsx)(i.p,{children:"Apply properties to the sprite."}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"(flags & 0x00000001) > 0"}),": Use a line buffer instead of tiles."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"(flags & 0x00000100) > 0"}),": Unknown. Maybe related to ",(0,t.jsx)(i.a,{href:"#mapping-type",children:"Mapping Type"}),"?"]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"special-case",children:"Special Case"}),"\n",(0,t.jsxs)(i.p,{children:["There are sprites, which seem to breake some rules of the format. It looks like it applies to images with a width, that is not a power of two. Examples are the trainer and pokemon preview sprites in generation V games, which have a size of ",(0,t.jsx)(i.code,{children:"10 * 10 tiles"})," for trainers and ",(0,t.jsx)(i.code,{children:"12 * 12 tiles"})," for pokemon. There are three issues with these sprites:"]}),"\n",(0,t.jsx)(i.h4,{id:"1-file-length",children:"1. File length"}),"\n",(0,t.jsxs)(i.p,{children:["The length specified in the ",(0,t.jsx)(i.a,{href:"../nitro_overview.md",children:"headers (both, file and section)"})," of the file/section does not match the actual length of the file/section. Instead, it assumes the image had side lengths of the next higher power-of-two-values."]}),"\n",(0,t.jsx)(i.h4,{id:"2-missing-cpos-section",children:"2. Missing CPOS section"}),"\n",(0,t.jsxs)(i.p,{children:["Normally, if the image has a size, there should also be a ",(0,t.jsx)(i.a,{href:"/docs/universal/resources/nitro/graphics_2d/section_cpos",children:"CPOS section"})," available within the file. Here this is not the case. Might be related to the wrong file length."]}),"\n",(0,t.jsx)(i.h4,{id:"3-image-layout",children:"3. Image layout"}),"\n",(0,t.jsxs)(i.p,{children:["The tiles are not places line by line. Instead, it looks like the the largest square with power-of-two side lengths that fits into the image constrains is calculated and placed at the top left corner. Then, this process repeats with the remaining size making the comming squares smaller. Following figure illustrates this whith one ",(0,t.jsx)(i.code,{children:"10 * 10 tiles"})," example (top) and one ",(0,t.jsx)(i.code,{children:"12 * 12 tiles"})," (bottom):"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{src:n(1433).Z+"",width:"730",height:"424"})}),"\n",(0,t.jsx)(i.h3,{id:"files",children:"Files"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"/docs/universal/resources/nitro/graphics_2d/file_ncgr",children:"Nitro Character Graphic Runtime"})}),"\n"]}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h2,{id:"todo",children:"TODO"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:'Research and document "mappingType"'}),"\n"]})]})}function o(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1433:(e,i,n)=>{n.d(i,{Z:()=>t});const t="data:image/png;base64,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"},1151:(e,i,n)=>{n.d(i,{Z:()=>l,a:()=>a});var t=n(7294);const s={},r=t.createContext(s);function a(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);