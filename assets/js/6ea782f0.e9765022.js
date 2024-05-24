"use strict";(self.webpackChunkkodsh_wiki_new=self.webpackChunkkodsh_wiki_new||[]).push([[8544],{75401:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>h});var t=i(74848),s=i(28453);const a={title:"Map Insertion (Generation V)",tags:["Guide (Black)","Guide (White)","Guide (Black 2)","Guide (White 2)"]},r="Map Insertion (Generation V)",o={id:"generation-v/guides/bw_b2w2-map_insertion/bw_b2w2-map_insertion",title:"Map Insertion (Generation V)",description:"Author: SpagoAsparago",source:"@site/docs/generation-v/guides/bw_b2w2-map_insertion/bw_b2w2-map_insertion.md",sourceDirName:"generation-v/guides/bw_b2w2-map_insertion",slug:"/generation-v/guides/bw_b2w2-map_insertion/",permalink:"/docs/generation-v/guides/bw_b2w2-map_insertion/",draft:!1,unlisted:!1,editUrl:"https://github.com/ds-pokemon-hacking/ds-pokemon-hacking.github.io/docs/generation-v/guides/bw_b2w2-map_insertion/bw_b2w2-map_insertion.md",tags:[{label:"Guide (Black)",permalink:"/docs/tags/guide-black"},{label:"Guide (White)",permalink:"/docs/tags/guide-white"},{label:"Guide (Black 2)",permalink:"/docs/tags/guide-black-2"},{label:"Guide (White 2)",permalink:"/docs/tags/guide-white-2"}],version:"current",frontMatter:{title:"Map Insertion (Generation V)",tags:["Guide (Black)","Guide (White)","Guide (Black 2)","Guide (White 2)"]},sidebar:"generation_v_sidebar",previous:{title:"Code Injection (Generation V)",permalink:"/docs/generation-v/guides/bw_b2w2-code_injection/"},next:{title:"Scripting (Generation V)",permalink:"/docs/generation-v/guides/bw_b2w2-pokescript/"}},l={},h=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Replacing Maps",id:"replacing-maps",level:2},{value:"Finding the map file",id:"finding-the-map-file",level:2},{value:"Inserting the Map",id:"inserting-the-map",level:2},{value:"Using BasicPerHandler",id:"using-basicperhandler",level:3},{value:"Using SwissArmyKnife",id:"using-swissarmyknife",level:3},{value:"Updating the Area Data",id:"updating-the-area-data",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"map-insertion-generation-v",children:"Map Insertion (Generation V)"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Author: SpagoAsparago ",(0,t.jsx)("br",{}),"\nResearch: Gonhex"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["This is a tutorial on how to insert your own maps in Generation V games, as well as change the Area Data textures.\nIt is assumed you have already made your map in PDSMS (or Blender) and have all the files already converted.\nIf you're unsure how to do so, check Jay's video on (creating your first map with PDSMS)[",(0,t.jsx)(n.a,{href:"https://www.youtube.com/watch?v=Xnj8cWDRbaA",children:"https://www.youtube.com/watch?v=Xnj8cWDRbaA"}),"]."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#map-insertion-generation-v",children:"Map Insertion (Generation V)"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#table-of-contents",children:"Table of Contents"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#replacing-maps",children:"Replacing Maps"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#finding-the-map-file",children:"Finding the map file"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#inserting-the-map",children:"Inserting the Map"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#using-basicperhandler",children:"Using BasicPerHandler"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#using-swissarmyknife",children:"Using SwissArmyKnife"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#updating-the-area-data",children:"Updating the Area Data"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"replacing-maps",children:"Replacing Maps"}),"\n",(0,t.jsx)(n.p,{children:"First you need to open CTRMap Zone Loader, and select the map you want to replace. From this window you want to keep in mind:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"The Zone ID (Header Number in SDSME)"}),"\n",(0,t.jsx)(n.li,{children:"The Matrix"}),"\n",(0,t.jsxs)(n.li,{children:["If your map is using textures not present in the original map, then the ",(0,t.jsx)(n.em,{children:"Area"})," value as well"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:i(5016).A+"",width:"880",height:"644"})}),"\n",(0,t.jsx)(n.h2,{id:"finding-the-map-file",children:"Finding the map file"}),"\n",(0,t.jsx)(n.p,{children:"Now you have to find the file number of the map you want to replace, you can do so in two ways:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Using SDSME:"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Only use SDSME for viewing purposes, you shouldn't use it to extract or import files"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Go to the Matrix Editor tab and select your Matrix. Then in the Map Headers tab find out where your Zone ID is located. Open the Map Files tab, and the number you're looking for will be at the same spot of that header in the previous tab. If there is no Map Header tab for the Matrix you've selected, it means all Map Files share the same header."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Using GFMatrixEditor:"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["First you have to oepn your ROM with ",(0,t.jsx)(n.a,{href:"https://github.com/R-YaTian/TinkeDSi/releases/tag/V0.9.3",children:"TinkeDSi"}),", navigate the filesystem to ",(0,t.jsx)(n.code,{children:"/a/0/0/9"}),", and extract the file corrisponding to the matrix number.\nThen launch ",(0,t.jsx)(n.a,{href:"https://drive.google.com/file/d/1w6SL2llu9oiIev5XIV2XdEQpJm-APm27/view?usp=sharing",children:"GFMatrixEditor"})," and click the GFMat->Pack button, it will generate two spreadsheet, contaning the Headers and Map files for that matrix. Open the Headers spreadsheet and check where your Zone ID is located, then open the Map Files spreadsheet and at the same spot check what number is there. That's the Map File you're looking for."]}),"\n",(0,t.jsx)(n.h2,{id:"inserting-the-map",children:"Inserting the Map"}),"\n",(0,t.jsx)(n.p,{children:"There are two different programs that can insert the map:"}),"\n",(0,t.jsx)(n.h3,{id:"using-basicperhandler",children:"Using BasicPerHandler"}),"\n",(0,t.jsxs)(n.p,{children:["In order to use ",(0,t.jsx)(n.a,{href:"https://drive.google.com/drive/folders/1eJwed-scWbroN5mGJdg2T10ZrYdanheH",children:"BasicPerHandler"})," you have to first extract the Map Container narc. Load your ROM with Tinke, navigate to ",(0,t.jsx)(n.code,{children:"/a/0/0/8"})," in the filesystem, select it and click ",(0,t.jsx)(n.em,{children:"Extract File"}),", and save the file somewhere."]}),"\n",(0,t.jsxs)(n.p,{children:["Then launch BasicPerHandler, click ",(0,t.jsx)(n.em,{children:"File"}),">",(0,t.jsx)(n.em,{children:"Load"})," and select that extracted file. From the list of Map Files, select the one with the number you previously found."]}),"\n",(0,t.jsx)(n.p,{children:"Now all that's left is importing all the files using the buttons below the Matrix view; they are all fairly self-explanatory and you should have all the relevant files from PDSMS."}),"\n",(0,t.jsxs)(n.p,{children:["Remember to also click the ",(0,t.jsx)(n.em,{children:"Remove"})," button on the Building Table section, unless for the map you're inserting you wish to keep the original buildings (if there are any)."]}),"\n",(0,t.jsxs)(n.p,{children:["After you're done, click the save button and save the new map container narc. Follow the steps you used to extract it but instead of ",(0,t.jsx)(n.em,{children:"Extract File"})," click ",(0,t.jsx)(n.em,{children:"Change File"})," instead, then save your ROM."]}),"\n",(0,t.jsx)(n.h3,{id:"using-swissarmyknife",children:"Using SwissArmyKnife"}),"\n",(0,t.jsxs)(n.p,{children:["If you've never used ",(0,t.jsx)(n.a,{href:"https://github.com/PlatinumMaster/SwissArmyKnife/releases",children:"SwissArmyKnife"}),", before launching the program you will have to go to the SwissArmyKnife folder and create a new folder called ",(0,t.jsx)(n.em,{children:"BaseROMs"}),", and in there put a fresh copy of the ROM you're editing. By default, it must be named ",(0,t.jsx)(n.em,{children:"Black"}),"/",(0,t.jsx)(n.em,{children:"White"}),"/",(0,t.jsx)(n.em,{children:"Black 2"}),"/",(0,t.jsx)(n.em,{children:"White 2"}),". However, you can edit the ",(0,t.jsx)(n.code,{children:"BaseROMs.yml"})," in the ",(0,t.jsx)(n.code,{children:"SwissArmyKnife"})," folder, and change the path as needed."]}),"\n",(0,t.jsx)(n.p,{children:"Now, you can launch SwissArmyKnife and create a new project."}),"\n",(0,t.jsxs)(n.p,{children:["Go to the ",(0,t.jsx)(n.em,{children:"Map Editor"})," tab and from the ",(0,t.jsx)(n.em,{children:"Container Index"})," menu select the Map File number you previously found. Then it's just a matter of importing the relevant files:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"Map Model"})," is the .NSBMD file"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"Permissions"})," is the .per file"]}),"\n",(0,t.jsxs)(n.li,{children:["At ",(0,t.jsx)(n.em,{children:"Building Positions"})," click the remove button if possible, unless you wish to keep the original map buildings."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"After you're done, save the ROM."}),"\n",(0,t.jsx)(n.h2,{id:"updating-the-area-data",children:"Updating the Area Data"}),"\n",(0,t.jsx)(n.p,{children:"Now your map is inserted into the game, but it will still have its old textures used, meaning if you're using different textures than the map you're replacing, they will have a lot of white spots, so you have to replace the old texture set used with your own that you exported from PDSMS."}),"\n",(0,t.jsxs)(n.p,{children:["Open your ROM in Tinke, then go to ",(0,t.jsx)(n.code,{children:"/a/0/1/4"})," and unpack it. You will see a list of files named ",(0,t.jsx)(n.em,{children:"4_number.BTX0"}),", go to the file with the same number as the ",(0,t.jsx)(n.em,{children:"Area"})," value in CTRMap Header, select it and click ",(0,t.jsx)(n.em,{children:"Change File"}),", and replace it with your own NSBTX."]}),"\n",(0,t.jsx)(n.p,{children:"Keep in mind that if the map you replaced has different textures based on seasons, the next 3 files in the narc will be used as well. So for example if your Area Data number listed in CTRMap is 182, you will have to replace files 182, 183, 184 and 185 as well."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Remember to pack the narc before saving the ROM!"})}),"\n",(0,t.jsxs)(n.p,{children:["Go back to ",(0,t.jsx)(n.code,{children:"/a/0/1/4"})," and click the ",(0,t.jsx)(n.em,{children:"Pack"})," button. There is no visual confirmation of this in Tinke."]})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},5016:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/mapinsertion-68f53252cf7020a4def13ec2936289a8.png"},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>o});var t=i(96540);const s={},a=t.createContext(s);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);