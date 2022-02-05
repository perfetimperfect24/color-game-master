let bodyEle = document.querySelector('body') 
let width = bodyEle.offsetWidth
let height = document.querySelector('html').clientHeight
const tap = (x=(Math.random()*1000%height),y=Math.random()*10000%width)=>{
    console.log(x,y)
    let ele = document.createElement('div')
    ele.classList.add('circle')
    ele.style.backgroundColor = `rgb(${Math.random()*1000%255},${Math.random()*1000%255},${Math.random()*1000%255})`;
    ele.style.height= Math.random()*300 + 'px';
    ele.style.top= x + 'px';
    ele.style.width= ele.style.height
    ele.style.left= y + 'px';
    document.body.appendChild(ele)
}
bodyEle.onclick = (e,ev)=>{
    console.log('hi')
    tap(e.clientY,e.clientX)
};
bodyEle.onkeypress = (e,ev)=>{
    tap()
};
