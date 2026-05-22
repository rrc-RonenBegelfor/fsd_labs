import logo from "../../src/assets/logo.svg"

export default function Header() {
    return <>
    <div className="headerContainer">
        <header>
            <img className="logo" src={logo} alt="Pixel River Financial Logo"></img>
            <div className="headerText">
                <h1>Pixell River Employee Directory</h1>
                <p>Welcome to our Employee Directory!</p>
            </div>
        </header>
    </div>
    </>
}