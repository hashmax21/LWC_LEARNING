/*this is purely a comments file

lecture 30:
apatt from the 3 files we get on component creation , we can add css file, .svg file, we can add any number of 
.js files(as vscode and javascvript supports import and export of files, and a scenarios arises if suppose you wish to 
   declare all the constants in a separarte file and later wish to import it in your current project
*We also have a test folder per componeent which has a file with the same name for testing purposes )

lecture 31:
Camelcase
Pascal Case
kebab Case

lecture 32. Configuration 

1. We change the isExposed prop to true so that the component is visible in the App 
2. We have to define the target to show in which page(Home Page , App page etc ) should our lightning component be visible

Lecture 33
1. When using data binding , we can fetch data from primitive types and objects but not from Arrays
eg: <div>{arr1[0]}</div> will give error :
eg: <div>{2+2}</div>, same error as 2+2 is a computed expression
Invalid expression {arr1[0]} - LWC1038: Template expression doesn't allow computed property access

lecture 34 (2 way binding)
 we use lightning design ssytem(salesforce inbuit css),  and salesforce component library(Builin HTML for components)
 * 1st we put an input field on the page and then pass the event handler
 1.targethandler() // method name can be anything
 {
    this.name = event.target.value(catches the data value that is updated in the input field)
 } 

 letcure 35 @track
 ** when we update a value eg
 1.targethandler() // method name can be anything
 {
    this.name = event.target.value(catches the data value that is updated in the input field)
 } 

 we can see the 2 way binding right away but when we try to do the same for an object i.e. change the value of 
 of on object on the screen , the change is not tracked and not showed immediately but if we use the @track 
 before the object then we can see it .

 @track
 person ={
   name:'harry', age:20; city: 'Delhi'
 }
generally @track is not recommened as we should not mutate the data so its recommened that we create a new copy of 
the object usig spread operator and when we do so , we can remove the @track operator

 lecture 36 Getters in LWC
* Used to show computed values on an HTML page which are otherwise not allowed eg:{20+5} or {a[0]}
* append the get keyword before a funtion 

lecture 36 Conditional Rendering
* directives can only be used in template tags
*  <template if:false={here we can pass class properties or getters , both are possible}>
        <div>you cant see the data click button</div>
         </template>

lecture 37
** for each and iterator are 2 ways of introducing loops in HTML, we use Iterator over for each when we need to 
apply special behaviour over the 1st and last elelment of the array
 
lecture 39: quiz app
learn multiple concepts like submit button , event.preventDefault() and its use(used when you want to use the submit button 
   but you dont want the page to reLoad) and also saw an application of arra.filter method, also saw the use of form tag in 
   HTML

lecture 40: Compnent composition
* A parent compoennet can inherit a child component in itself , we use kebab casing for that, watch  lecture 40
* a block elemnt can be converted into an inline element and vice versa by using the display property
* flex box is an important propety of CSS 

display : block (apply this on an inline element )
display : inline(apply this on a block element)

lecture41: Shadow DOM
*shadow dom acan be applied on a selelct part of the dom tree so that you can isolate it against the DOM manupulation
which might affect the enire tree
* inherit a child container in a parent containet
*using query selectors in code, derive data from them and display it using javascript
* once elemnt is extracted using queryselctor , you can add attibutes to it or add style to it

lecture42
const item= this.template.querySelector('h1')  
console.log(item.innerText) this prints the text under h1
(b) this.querySelectorAll returns a node list and not an array so to view the content , convert node
list to array by Array.from(this.querySelectorAll(.classname))
const item= this.template.querySelector('h1') 
item.style.border = "1px solid red"
title tag is important from accessibility point of view{I dont know what this means but keep itin mind}

*you can also give dynamic css to the elements
* you can also set attributes here 
* you can programatically add tags to your html via javascript, there you use lwc:dom="manual"

**lecture 43
* css inline, external and pseudo class

lecture46
**shared CSS, concept is not 100% accurate , ignore for now

LECTURE49 (COMPONENT LIFECYCLE HOOKS)
intro to life cycle hooks, conceptual vid, not related to programmming extensively , refer notes, the lectures were theory 
so no specific notes to be made here

lectyre 56 (COMPONNET COMMUNICATION , MOST TIME CONSUMING TILL NOW)
parent to child data transfer:
Parent LWC Componnet
step 1.<> Inherit the child component<>
step 2.Pass the data as child attributes and give values(in case of boolean attributes, the default val is true)

Child LWC component
step 1. import the api property
step 2. declare it using @api deoartor infront of the prorperty to be inherirted
step 3.Pass data as componenet

child HTML has only 1 job (to design the look and  feel of the doc)
child js has only 1 job(to declare the properties which will be exposed as public properties)

LECTURE63
you can pass all sorts of data transfers with c2p(event and data ). you dont really need to use 
composed or bubbling , its just for the interview
Bubbling lecture expmple vsimple, search somethng else

lecture 64 publishSubscribe module (pubsub)
* old convetional technique , used till today, If lightning messaging service does not serve our
purpose then we use this

used a diff vid from youtube also
https://www.youtube.com/watch?v=Hq1sJxDSTwQ&ab_channel=ProgrammingMadeEasy

from the pubsub code you need to extract some data :
* fireevent{the fire event is like writing a mail and taking uit to the post office to post it}
*register listener{understandable by name}

lecture 65 (Setter)
1 used to modify data being passed to the HTML
2. If the dat being passed is an objct then we need top create a shallow copy of it 
3. getter and setter name has to be the same and @api can be used with either 

lecture 66(watch vid, vvimp , very simple but VVimp)
* pass HTML from one component to another using the slot TAG
* Its an important topic WRT to LWC reusable components
*aura componnets cant be passed in slot tags 
one vvimp concept , you can dynamically show or hide HTML elements like header or footer and this can 
be done using  HTML slot tag 
*elemenst.classList is a read only property

lecture 65, 66, 67 vvimp (easy but imp concepts)

lecture 69 Aura and LWC coexistence (VVImp)
* Aura can contain LWC but viceversa not possible
1.To make aura available to all types of pages like app page , recordf page etc , you need to 
use implements = "flexipage:availableforAllpageTypes"

2. <c:AuraLwcCommunication></c:AuraLwcCommunication> // Aura inheritance of component 
<c-aura-lwc-communication></c-aura-lwc-communication>
This is how you inherit a child component in Aura,you replace the c- with c: and here you dont repalce the capital 
letter with -small letter 
3. data Passing from aura P2C is same as the one I have practiced in the previos lectures
4. To call function from Aura.js to Aura/cmp file we need to use{!c.functionName}

lecture 70
LMS(The satndardiseed sevice which helpes us connect lightniong, visuaklforce and aura)
1. dta transfer is possible from any 1 to any other
There are certain steps involed in trying to activate this service
Step1: Create folder called Message channels under forceapp/main/default
step 2: create a file as SampleMessageChannel.messageChannel-meta.xml(SampleMessageChannel is a custom name, can be anything)
step3: Configure XML file

<?xml version="1.0" encoding="UTF-8"?>
<LightningMessageChannel xmlns="http://soap.sforce.com/2006/04/metadata">
    <masterLabel>SampleMessageChannel</masterLabel> 
    <isExposed>true</isExposed>
    <description>This is a sample Lightning Message Channel.</description>
    <lightningMessageFields>
        <fieldName>lmsData</fieldName> // field defined by user
        <description>This is the field to pass data</description> field defined by user
    </lightningMessageFields>
   </LightningMessageChannel>
   
   all else is code which you copy paste from the documentation
   step4: Update the manifest/package.xml by adding the Lightning Message Channel
   Go to the file and copy types tags and bw the names tag write LightningMessageChannel
   Step5: version value in package.xml should be above 47

   in the coming vids there are multiple steps each defined explicitly , so just watch the vid

   *I HAVE SKIPPED THE VISUAL FORCE PART AS ITS GETTOING REALLY CONFUSING

Sectrion 15(I have skipped the coding for the section as of now, its crucial but as implemenwattaion and not conceptually)
Lecture 86(Memory game, extremely important)
List of topics covered:
1. CSS GRIF CREATION
2.Adding and removing classes
3.Query Selector
4.loading static resources
5.render Callback
6.Looping in HTML
7.Timing functions(setInterval)
8.Timer start and stop
9.SLDS Modal.
10.Getter

section 17: lecture 99 and 100 not done as of now , will cover later

VID 113(@WIRE)
1. fetch user data from salesforce

import Id from '@salesforce/user/Id' // you can fetch the Id of the user by using this

LECTURE 121
getListui adapter is deprecated, it was a great functionality but 
I have found a vid by salesforce troop where we use Apex to make tables instead
of the above said adapter

VID 127(APEX IN LIGHTNING)
2 ways of calling methods: 1.wire adapter 2.imperatively 
always call via @wire method except(watch vid 127 and 132)
WATCH LECTURE 127 FOR DETAILED USE CASES
* @wire methods are are invoked on page load 



























































*/
