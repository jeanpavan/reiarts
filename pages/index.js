import { useState } from 'react';

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Counter />
            <CapsLock1 text="Jeito 1: Me deixe em Caps Lock por favor" />
            <CapsLock2>Jeito 2: Me deixe em Caps Lock por favor</CapsLock2>
        </div>
    )
}

function Counter() {
    const [index, setCounter] = useState(1);

    function addCounter() {
        console.log('Adicionou');
        setCounter(index + 1);
    }

    return (
        <div>
            <div>{index}</div>
            <button onClick={addCounter}>Adicionar</button>
        </div>
    )
}

function CapsLock1(props) {
    const originalText = props.text
    const capsLockText = originalText.toUpperCase();
    return <div>{capsLockText}</div>
}

function CapsLock2(props) {
    const originalText = props.children;
    const capsLockText = originalText.toUpperCase();
    return <div>{capsLockText}</div>
}

export default Home