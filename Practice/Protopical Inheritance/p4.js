function extendss(child,parent){
child.prototype=new parent();
child.prototype.constructor=child;
}
function HtmlElement(){
    this.click=function(){
        console.log(`Clicked`);
    };
}
HtmlElement.prototype.focus=function(){
    console.log('Focused');
}

function HtmlSelectElement(items=[]){
    this.items=items;
    this.addItem=function(element){
        items.push(element);
    };
    this.removeItem=function(element){
        items=items.splice(this.items.indexOf(element),1);
    };
    this.render=function(){
    return`
       <select>${this.items.map(element=>`
       <option>${element}</option>`).join('')}
       </select>`;
    }
}
// HtmlSelectElement.prototype=Object.create(HtmlElement.prototype);

function HtmlImgElement(src){
    this.src=src;
    this.render=function(){
        return `<img src="${src}"/>`;
    };
}

extendss(HtmlSelectElement,HtmlElement);
extendss(HtmlImgElement,HtmlElement);
let e=new HtmlElement();
let elements=[
  new HtmlSelectElement([1,2,3]),
  new HtmlImgElement('https://')
];

for(element of elements)
console.log(element.render());
