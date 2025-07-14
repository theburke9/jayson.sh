import JaysonImage from '../assets/me.png';

function HeaderImage() {
    return (
        <span>
            <img className='rounded-2xl max-w-sm md:max-w-md lg:max-w-lg hover:shadow-md' src={JaysonImage} alt="Image fictive de Jayson Mourier" />
        </span>
    );
}

export default HeaderImage;