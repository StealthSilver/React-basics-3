function printHello(){
    console.log("hello")
}

function printBye(){
    console.log("bye")
}

export default function Button(){
    return (<div><button onClick={printHello}>Click Me</button>
    <p onClick= {printBye}>This para is for demo</p></div>)
    
}