"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[9966],{7533:(e,n,t)=>{t.d(n,{A:()=>r});var o=t(6540),a=t(1122),s=t(6025),i=t(4848);const r=e=>{let{alt:n,sources:t,style:r}=e;const[l,d]=(0,o.useState)(!1),u=e=>{"Escape"===e.key&&d(!1)};(0,o.useEffect)((()=>(l?document.addEventListener("keydown",u):document.removeEventListener("keydown",u),()=>{document.removeEventListener("keydown",u)})),[l]);return(0,i.jsx)("div",{className:"zoomable-image "+(l?"fullscreen":""),onClick:()=>{d(!l)},style:{width:"50%",margin:"0 auto",display:"flex",justifyContent:"center",...r},children:(0,i.jsx)(a.A,{className:"zoomable-image-inner",alt:n,sources:{light:(0,s.Ay)(t.light),dark:(0,s.Ay)(t.dark)}})})}},605:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>u});t(6540);var o=t(4848),a=t(8453),s=t(7533);const i={},r="A new chapter for Langflow",l={id:"whats-new/a-new-chapter-langflow",title:"A new chapter for Langflow",description:"First things first",source:"@site/docs/whats-new/a-new-chapter-langflow.mdx",sourceDirName:"whats-new",slug:"/whats-new/a-new-chapter-langflow",permalink:"/whats-new/a-new-chapter-langflow",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",next:{title:"\ud83d\udc4b Welcome to Langflow",permalink:"/"}},d={},u=[{value:"First things first",id:"first-things-first",level:2},{value:"What&#39;s new?",id:"whats-new",level:2},{value:"Same Component, Multiple Outputs",id:"same-component-multiple-outputs",level:3},{value:"Flow + Composition",id:"flow--composition",level:3},{value:"Memory Management",id:"memory-management",level:3},{value:"Component Freeze\xa0\ud83e\udd76",id:"component-freeze",level:3},{value:"Output Preview",id:"output-preview",level:3},{value:"Inputs and Outputs Handling",id:"inputs-and-outputs-handling",level:3},{value:"Custom Endpoint Name",id:"custom-endpoint-name",level:3},{value:"Logs &amp; Monitoring",id:"logs--monitoring",level:3},{value:"Folders \ud83d\udcc1",id:"folders-",level:3},{value:"Playground",id:"playground",level:3},{value:"Multi-Modal",id:"multi-modal",level:3},{value:"An Easier Start",id:"an-easier-start",level:2},{value:"What&#39;s Next?",id:"whats-next",level:2}];function c(e){const n=Object.assign({h1:"h1",h2:"h2",p:"p",strong:"strong",h3:"h3",ol:"ol",li:"li",em:"em",ul:"ul",hr:"hr"},(0,a.RP)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"a-new-chapter-for-langflow",children:"A new chapter for Langflow"}),"\n",(0,o.jsx)(n.h2,{id:"first-things-first",children:"First things first"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Thank you all for being part of the Langflow community"}),". The journey so far has been amazing, and we are thrilled to have you with us."]}),"\n",(0,o.jsx)(n.p,{children:"We have some exciting news to share with you. Langflow is evolving, and we want to tell you all about it!"}),"\n",(0,o.jsx)(n.h2,{id:"whats-new",children:"What's new?"}),"\n",(0,o.jsx)(n.p,{children:"In the past year, we learned a lot from the community and our users. We saw the potential of Langflow and the need for a visual, interactive platform for building conversational AI applications (and beyond). You thought us the importance of a platform that is easy to use, but also powerful and controllable, and that made clear to us how Langflow's transparency could be improved."}),"\n",(0,o.jsx)(n.p,{children:"Below are some of the new features we included to make that happen!"}),"\n",(0,o.jsx)(n.h3,{id:"same-component-multiple-outputs",children:"Same Component, Multiple Outputs"}),"\n",(0,o.jsx)(n.p,{children:"Components can now have more than a single output, allowing for unique flexibility in creating complex flows. The game-changer is output routing \u2014 it allows for so many new capabilities it\u2019s almost silly to describe!"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Branch to one or more subsequent components;"}),"\n",(0,o.jsx)(n.li,{children:"Apply logic operations like if/else and exploit decision-making;"}),"\n",(0,o.jsx)(n.li,{children:"Create classification models that choose between paths;"}),"\n",(0,o.jsx)(n.li,{children:"Enable the development of agent architectures from scratch;"}),"\n",(0,o.jsx)(n.li,{children:"Build an orchestrator that routes between agents."}),"\n"]}),"\n",(0,o.jsx)(s.A,{alt:"Multiple Outputs",sources:{light:"/img/multiple_outputs.webp",dark:"/img/multiple_outputs.webp"},style:{width:"80%",margin:"20px auto"}}),"\n",(0,o.jsx)(n.h3,{id:"flow--composition",children:"Flow + Composition"}),"\n",(0,o.jsxs)(n.p,{children:["One key change you'll notice is that projects now require you to define ",(0,o.jsx)(n.strong,{children:"Inputs"})," and ",(0,o.jsx)(n.strong,{children:"Outputs"}),". They allow you to define the structure of your conversation and how data flows through it. This change comes with a new way of visualizing your projects."]}),"\n",(0,o.jsx)(n.p,{children:"Before 1.0 you would connect components to ultimately build one final component that was processed behind the scenes. Now, each step of the process is defined by you, is visible on the workspace, and can be monitored and controlled."}),"\n",(0,o.jsxs)(n.p,{children:["This makes it so that composition is now just ",(0,o.jsx)(n.strong,{children:"another way"})," of building in Langflow and ",(0,o.jsx)(n.strong,{children:"data flows through your project more transparently"}),". This means that the easy stuff is\xa0",(0,o.jsx)(n.em,{children:"really"}),"\xa0easy and the complex parts are still possible!"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Flow:"}),"\xa0Data is processed by one component and then passed to the next component in line for immediate execution."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Composition"}),": Allows components to not only forward data but also share states for modular building."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"For example, a flow can sequentially process text, and after a few steps, trigger an agent. It can access functions that wait to be called or to respond. This blend of flow and composition brings an unprecedented level of flexibility and control to data workflows in LLM-based apps and agents that use multiple models and APIs working together to achieve tasks."}),"\n",(0,o.jsx)(s.A,{alt:"Flow + Composition",sources:{light:"/img/flow-composition.webp",dark:"/img/flow-composition.webp"},style:{width:"80%",margin:"20px auto"}}),"\n",(0,o.jsx)(n.h3,{id:"memory-management",children:"Memory Management"}),"\n",(0,o.jsx)(n.p,{children:"Langflow 1.0 natively allows every chat message to be stored, and a single flow can have multiple memory sessions. This enables you to create multiple \u201cmemories\u201d for agents to store and recall specific information as needed."}),"\n",(0,o.jsx)(n.p,{children:"You can edit and remove previous messages to inspect and validate a model\u2019s response behavior. Control, explore, and manage conversation histories to get your models acting just right."}),"\n",(0,o.jsx)(s.A,{alt:"Playground",sources:{light:"/img/playground.png",dark:"/img/playground.png"},style:{width:"80%",margin:"20px auto"}}),"\n",(0,o.jsx)(n.h3,{id:"component-freeze",children:"Component Freeze\xa0\ud83e\udd76"}),"\n",(0,o.jsx)(n.p,{children:"Component output freezing is back in Langflow, and it\u2019s cooler than ever!"}),"\n",(0,o.jsx)(n.p,{children:"Once a component runs, you can now lock its previous output state to prevent it from re-running."}),"\n",(0,o.jsx)(n.p,{children:"Avoid spending extra tokens and remove repetition when output should be constant \u2014 plus it's great for debugging and prototyping!"}),"\n",(0,o.jsx)(s.A,{alt:"Component Freeze",sources:{light:"/img/component-freeze.jpeg",dark:"/img/component-freeze.jpeg"},style:{width:"80%",margin:"20px auto"}}),"\n",(0,o.jsx)(n.h3,{id:"output-preview",children:"Output Preview"}),"\n",(0,o.jsx)(n.p,{children:"Each component now includes an output visualizer that opens a pop-up screen, allowing you to easily inspect and monitor transmissions between components. It provides instant feedback on your workflows, letting you see results as they are processed. \ud83d\udd0d"}),"\n",(0,o.jsx)(s.A,{alt:"Output Preview",sources:{light:"/img/output-preview.gif",dark:"/img/output-preview.gif"},style:{width:"80%",margin:"20px auto"}}),"\n",(0,o.jsx)(n.h3,{id:"inputs-and-outputs-handling",children:"Inputs and Outputs Handling"}),"\n",(0,o.jsx)(n.p,{children:"Inputs and outputs finally make more sense to us, and hopefully to you too."}),"\n",(0,o.jsx)(n.p,{children:"We\u2019re proposing Langflow-native types to keep things consistent, but not limited to use any Python type. For instance, a Chat Input component sends out what we call a Message object (text + metadata like date, time, and sender), but maybe you want to introduce external types from your favorite Python package? Go wild. Each native type will have their own visualization modes and will evolve according to new integrations added."}),"\n",(0,o.jsx)(n.h3,{id:"custom-endpoint-name",children:"Custom Endpoint Name"}),"\n",(0,o.jsx)(n.p,{children:"Now you can pick a custom name for your endpoint used to call your flow from the API."}),"\n",(0,o.jsx)(s.A,{alt:"Custom Endpoint Name",sources:{light:"/img/custom-endpoint.webp",dark:"/img/custom-endpoint.webp"},style:{width:"80%",margin:"20px auto"}}),"\n",(0,o.jsx)(n.h3,{id:"logs--monitoring",children:"Logs & Monitoring"}),"\n",(0,o.jsx)(n.p,{children:"A new logs page has been added! Now, both component executions and message history from the chat can be inspected in an interactive table. This will make it easier to debug, inspect, and manage messages passing through components."}),"\n",(0,o.jsx)(s.A,{alt:"Logs and Monitoring",sources:{light:"img/logs-monitoring.webp",dark:"img/logs-monitoring.webp"},style:{width:"80%",margin:"20px auto"}}),"\n",(0,o.jsx)(n.h3,{id:"folders-",children:"Folders \ud83d\udcc1"}),"\n",(0,o.jsx)(n.p,{children:"We introduced folders on the home page to help categorize flows and components. Create, remove and edit them to keep your work organized."}),"\n",(0,o.jsx)(n.h3,{id:"playground",children:"Playground"}),"\n",(0,o.jsx)(n.p,{children:"By having a clear definition of Inputs and Outputs, we could build the experience around that, which led us to create the Playground. When building a project, testing and debugging are crucial. The Playground is an interface that changes dynamically based on the Inputs and Outputs you defined in your project."}),"\n",(0,o.jsx)(n.p,{children:"For example, let's say you are building a simple RAG application. Generally, you have an Input, some references that come from a Vector Store Search, a Prompt, and the answer. Now, you could plug the output of your Prompt into a Text Output, rename that to \"Prompt Result,\" and see the output of your Prompt in the Playground. We have many planned features for the Playground, and we're excited to see how you'll explore it!"}),"\n",(0,o.jsx)(n.h3,{id:"multi-modal",children:"Multi-Modal"}),"\n",(0,o.jsx)(n.p,{children:"Langflow is now\xa0multi-modal! It can now handle images and more soon!"}),"\n",(0,o.jsx)(s.A,{alt:"Multi Modal",sources:{light:"/img/multi-modal.png",dark:"/img/multi-modal.png"},style:{width:"80%",margin:"20px auto"}}),"\n",(0,o.jsx)(n.p,{children:"We\u2019ve also improved project organization, global variables and overall settings, added Python 3.12 compatibility, keyboard shortcuts and a lot of new and fun experimental components!"}),"\n",(0,o.jsx)(n.h2,{id:"an-easier-start",children:"An Easier Start"}),"\n",(0,o.jsx)(n.p,{children:"The experience for first-time users is something we wanted to improve. For that we created a couple of Starter Projects. It's now much easier to start a new project, and you can choose from a list of starter projects to get you going."}),"\n",(0,o.jsx)(n.p,{children:"For now, we have:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Basic Prompting (Hello, World)"}),": Learn the basics of a Prompt Component."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Vector Store RAG"}),": Ingest data into a Vector Store and then use it to run a RAG application."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Memory Chatbot"}),": Create a simple chatbot that can remember things about the user."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Document QA"}),": Build a simple flow that helps you get answers about a document."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Blog Writer"}),": Expand on the Prompt variables and be creative about what inputs you add to it."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Please let us know what other starter projects you would like to see in the future!"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"whats-next",children:"What's Next?"}),"\n",(0,o.jsx)(n.p,{children:"Langflow has gone through a big change, and we are excited to see how you use it and what you think of it. We plan to add more types of Input and Output like Image and Audio, and we also plan to add more Components to help you build more complex projects."}),"\n",(0,o.jsx)(n.p,{children:"We are excited to see the community embracing Langflow as their number one AI builder and eagerly wait to see what new inspiring projects will come out of this release! A big thanks to everyone who's supporting or being part of this community in any way. \u2728"}),"\n",(0,o.jsx)(n.p,{children:"Sincerely,"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"The Langflow Team \ud83d\ude80"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,a.RP)(),e.components);return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(c,e)})):c(e)}},8453:(e,n,t)=>{t.d(n,{RP:()=>s,xA:()=>r});var o=t(6540);const a=o.createContext({});function s(e){const n=o.useContext(a);return o.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function r({components:e,children:n,disableParentContext:t}){let r;return r=t?"function"==typeof e?e({}):e||i:s(e),o.createElement(a.Provider,{value:r},n)}}}]);