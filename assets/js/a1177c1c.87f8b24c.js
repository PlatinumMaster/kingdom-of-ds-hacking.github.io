"use strict";(self.webpackChunkkodsh_wiki_new=self.webpackChunkkodsh_wiki_new||[]).push([[75],{66915:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>u,frontMatter:()=>d,metadata:()=>s,toc:()=>l});var t=i(74848),a=i(28453);const d={title:"Knarc (General)",tags:["Guide (Diamond)","Guide (Pearl)","Guide (Platinum)","Guide (HeartGold)","Guide (SoulSilver)","Guide (Black)","Guide (White)","Guide (Black 2)","Guide (White 2)"]},o="How to use Knarc",s={id:"universal/guides/knarc/knarc",title:"Knarc (General)",description:"Author: SpagoAsparago",source:"@site/docs/universal/guides/knarc/knarc.md",sourceDirName:"universal/guides/knarc",slug:"/universal/guides/knarc/",permalink:"/docs/universal/guides/knarc/",draft:!1,unlisted:!1,editUrl:"https://github.com/ds-pokemon-hacking/ds-pokemon-hacking.github.io/docs/universal/guides/knarc/knarc.md",tags:[{label:"Guide (Diamond)",permalink:"/docs/tags/guide-diamond"},{label:"Guide (Pearl)",permalink:"/docs/tags/guide-pearl"},{label:"Guide (Platinum)",permalink:"/docs/tags/guide-platinum"},{label:"Guide (HeartGold)",permalink:"/docs/tags/guide-heart-gold"},{label:"Guide (SoulSilver)",permalink:"/docs/tags/guide-soul-silver"},{label:"Guide (Black)",permalink:"/docs/tags/guide-black"},{label:"Guide (White)",permalink:"/docs/tags/guide-white"},{label:"Guide (Black 2)",permalink:"/docs/tags/guide-black-2"},{label:"Guide (White 2)",permalink:"/docs/tags/guide-white-2"}],version:"current",frontMatter:{title:"Knarc (General)",tags:["Guide (Diamond)","Guide (Pearl)","Guide (Platinum)","Guide (HeartGold)","Guide (SoulSilver)","Guide (Black)","Guide (White)","Guide (Black 2)","Guide (White 2)"]},sidebar:"universal_sidebar",previous:{title:"Hex Editing",permalink:"/docs/universal/guides/hex_editing/"},next:{title:"Music Composing guide",permalink:"/docs/universal/guides/music_composing/"}},r={},l=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Opening the CMD",id:"opening-the-cmd",level:2},{value:"Unpacking the NARC",id:"unpacking-the-narc",level:2},{value:"Adding files and Packing the NARC",id:"adding-files-and-packing-the-narc",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"how-to-use-knarc",children:"How to use Knarc"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Author: SpagoAsparago"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["This is a tutorial on how to use Knarc to pack/unpack NARC files.\nYou can download the Knarc executable from ",(0,t.jsx)(n.a,{href:"https://github.com/kr3nshaw/knarc/releases",children:"here"})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#section",children:"Opening the CMD"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#section-2",children:"Unpacking the NARC"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#section-3",children:"Adding files and Packing the NARC"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"opening-the-cmd",children:"Opening the CMD"}),"\n",(0,t.jsx)(n.p,{children:"First, extract the NARC you want to unpack with Tinke and save it in the same folder as the Knarc.exe file."}),"\n",(0,t.jsx)(n.p,{children:"Launch the Command Prompt in that same folder."}),"\n",(0,t.jsxs)(i,{children:[(0,t.jsxs)("summary",{children:["On Windows you can type ",(0,t.jsx)(n.code,{children:"cmd"})," in the folder address and press enter:"]}),(0,t.jsx)("video",{src:"resources/quickcmdvideo.mp4",width:"640",height:"480",controls:!0})]}),"\n",(0,t.jsx)(n.h2,{id:"unpacking-the-narc",children:"Unpacking the NARC"}),"\n",(0,t.jsx)(n.p,{children:"To unpack the NARC, you can use the command"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Knarc -u file"}),"\nWith ",(0,t.jsx)(n.code,{children:"file"})," being the extracted NARC filename. This will extract all its content in the folder the NARC is currently located, if you want to extract them to a different folder, then use"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Knarc -d folder -u file"}),"\nWith ",(0,t.jsx)(n.code,{children:"folder"})," being the address of the destination folder you want. You can create a new folder inside the one from where you launched Knarc and simply use that folder name in the command."]}),"\n",(0,t.jsx)(n.p,{children:"You should do this if you plan to add additional files to the NARC."}),"\n",(0,t.jsx)(n.h2,{id:"adding-files-and-packing-the-narc",children:"Adding files and Packing the NARC"}),"\n",(0,t.jsx)(n.p,{children:"If you're going to add a new file to the NARC, make sure the newly added file follows the same naming convention as the already existing files."}),"\n",(0,t.jsxs)(n.p,{children:["For repacking the narc, you can use:\n",(0,t.jsx)(n.code,{children:"Knarc -d folder -p file"})]}),"\n",(0,t.jsxs)(n.p,{children:["Now you can reinsert the NARC using Tinke. Just go to the same location as the original file you extracted, and use the ",(0,t.jsx)(n.code,{children:"Change File"})," button instead of ",(0,t.jsx)(n.code,{children:"Extract"}),". Now you can save your ROM."]})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>s});var t=i(96540);const a={},d=t.createContext(a);function o(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);