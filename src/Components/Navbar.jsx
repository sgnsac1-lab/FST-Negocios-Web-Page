import logo from "../Assets/Logo.jpeg"

const Navbar = () => {

    return(
        <section className="w-full flex flex-col md:flex-row justify-center items-center py-5 md:h-30 h-30 fixed bg-white z-999">
            <img src={logo} className="size-30" />
        </section>
    )

}

export default Navbar