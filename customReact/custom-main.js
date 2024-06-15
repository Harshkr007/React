const mainContainer = document.querySelector('#root');

const element = {
   type: 'a',
   props: {
        href: 'https://google.com',
        target: 'blank'
   },
   children: 'Click me to visit google'
}

function customRender(mainContainer,element) {
    const newElement = document.createElement(element.type);
    newElement.setAttribute('href' , element.props.href);
    newElement.setAttribute('target', element.props.target)
    newElement.innerHTML = `<p>${element.children}</p>`;

    mainContainer.appendChild(newElement);
}

function customRender2(mainContainer,element){
    const newElement = document.createElement(element.type);

    for (const prop in element.props) {
            if(prop == `children`) continue;
            newElement.setAttribute(prop , element.props[prop]);
       }
       newElement.innerHTML = `<p>${element.children}</p>`;

       mainContainer.appendChild(newElement);
}

customRender2( mainContainer,element);