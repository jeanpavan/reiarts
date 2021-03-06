import { useState } from 'react';
import Link from 'next/link';

function Home() {
    return (
        <div>
            <h1>Site em desenvolvimento</h1>
            <Link href="/sobre">
                <a>Sobre</a>
            </Link>
            {/*<Counter />
            <CapsLock1 text="Jeito 1: Me deixe em Caps Lock por favor" />
            <CapsLock2>Jeito 2: Me deixe em Caps Lock por favor</CapsLock2> */}
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