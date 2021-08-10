export default function Content({children}) {
    return (
        <>
            <div className="container">
                {children}
            </div>
            <hr />
            <footer>gtk2k</footer>
        </>
    )
}