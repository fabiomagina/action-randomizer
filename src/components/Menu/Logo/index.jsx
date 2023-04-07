import { HiOutlineCubeTransparent } from "react-icons/hi"

const Logo = () => {
    return (
        <div className="menu__logo">
            <div className="menu__logo--svg">
                <HiOutlineCubeTransparent />
            </div>
            <h1 className="menu__title">
                ACTION
            </h1>
            <h1 className="menu__title menu__title--secondary">
                RANDOMIZER
            </h1>
        </div>)
}

export default Logo