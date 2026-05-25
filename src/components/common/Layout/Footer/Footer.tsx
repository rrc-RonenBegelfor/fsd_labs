export default function Footer() {

    function footerYear() {
        const currentYear = new Date().getFullYear()

        return currentYear;
    }

    return <>
        <footer id="footer">Copyright Pixell River {footerYear()}</footer>
    </>
}