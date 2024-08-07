function customRender (reactElement , container){
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.children;
    /*
    this way we will need to individually create all the properties so we can use loop here
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    */
   
   // reactElement.props.forEach(function(key,value){
    //     domElement.setAttirbute(`${key}`,`${value}`);
    // })
     
    // for(let i = 0 ; i < reactElement.props.size ; i++)
    //     domElement.setAttibute('href',reactElement.props.href);
    // }


    for(const prop in reactElement.props){
        if(prop === 'children') continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    
    container.appendChild(domElement);
}


const reactElement = {
    type:'a',
    props:{
        href:"https://google.com",
        target: '_blank'
    },
    children:"press me  pls 💋"
}

const container = document.querySelector('#root');

customRender(reactElement,container);