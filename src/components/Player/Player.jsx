import {useState} from "react";

export default function Player() {
    const [enteredPlayerName, setEnteredPlayerName] = useState('');
    const [submitted, setSubmitted] = useState(false);

    function handleChange(event) {
        setEnteredPlayerName(event.target.value);
    }

    function handleClick() {
        if (enteredPlayerName.trim().length > 0) {
            setSubmitted(true);
        }
    }

    return (
        <section id="player">
            {submitted ? (
                <h2>Welcome {enteredPlayerName}</h2>
            ) : (
                <p>
                    <input type="text" onChange={handleChange} value={enteredPlayerName} />
                    <button onClick={handleClick}>Set Name</button>
                </p>
            )}
        </section>
    );
}
