import Image from 'next/image';

const Logo = () => {
    return (
        <Image
            src="/images/logos/novasoftware.png"
            height={80}
            width={80}
            alt="Imagem ilustrativa da logo nova software"
        />
    )
}

export default Logo;
