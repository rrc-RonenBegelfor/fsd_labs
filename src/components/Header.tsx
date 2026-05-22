import logo from "../../src/assets/logo.svg"

export default function Header() {
    return <>
        <header>
            <img className="logo" src={logo} alt="Pixel River Financial Logo"></img>
            <header>
                <h1>Pixell River Employee Directory</h1>
                <p>Welcome to our Employee Directory!</p>
            </header>
        </header>
    </>
}