import GithubIcon from "../assets/github.svg?react"
import LinkedinIcon from "../assets/linkedin.svg?react"
import { GithubLink, LinkedinLink } from "../configs/SocialLinks";

function HeaderText() {
    return (
        <span className="text-center flex flex-col gap-8 max-w-lg">
            <span>
                <h1 className="text-2xl">👋 Bonjour, je suis <span className="text-primary font-bold">Jayson Mourier</span></h1>
                <h2 className="text-lg">
                    Développeur Full-Stack chez{" "}
                    <a
                        href="https://reeflect.fr"
                        target="_blank"
                        className="cursor-pointer relative inline-block transition-all duration-300 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-secondary after:transition-all after:duration-300 hover:after:w-full"
                    >
                        Reeflect
                    </a>
                </h2>
                <p className="text-base pt-4">J'aime créer des outils simples et utiles qui rendent la tech un peu plus humaine 🚀</p>
            </span>
            <span className="flex gap-4 justify-center py-2">
                <a href={GithubLink} target="_blank">
                    <GithubIcon />
                </a>
                <a href={LinkedinLink} target="_blank">
                    <LinkedinIcon />
                </a>
            </span>
        </span>
    );
}

export default HeaderText;