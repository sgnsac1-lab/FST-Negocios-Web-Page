import logo from "../Assets/Logo.jpeg"

const Navbar = () => {

    return(
        <section className="w-full flex flex-col md:flex-row justify-center items-center py-5 md:h-40 h-40 fixed bg-white z-999">
            <img src={logo} className="size-40" />
        </section>
    )

}

export default Navbar