import React from 'react';

type ImageSource = string | { src: string } | any;

interface Props extends React.ComponentProps<'div'> {
    image: ImageSource
    title: string
    description: string
    btnText: string
    btnLink: string
    alt?: string
}
const Slide: React.FC<Props> = ({
    image, title, description, btnText, btnLink, alt = "Slide image", className,
}) => {
    const getImageSrc = (img: ImageSource): string => {
        if (typeof img === 'string') return img;
        if (img?.src) return img.src;
        if (typeof img === 'object') return img.default?.src || img.src || img;
        return String(img);
    };

    const imageSrc = getImageSrc(image);

    return (
        <>
            <div className={`w-full flex items-center justify-center ${className}`}>
                <div className="max-w-sm w-full lg:max-w-[52vw] lg:flex p-8 mt-5 lg:rounded-4xl md:rounded-xl rounded-none">
                    <div className="h-full lg:h-auto lg:w-[28vw] flex-none text-center overflow-hidden">
                        <img
                            className="w-full h-auto max-h-[800px] object-contain rounded-2xl shadow-lg"
                            src={imageSrc}
                            alt={alt}
                            loading="lazy"
                            onError={(e) => {
                                e.currentTarget.src = '/fallback-image.jpg';
                            }}
                        />
                    </div>
                    <div className="p-4 max-w-[442px] flex flex-col justify-between leading-normal">
                        <div className="mb-8">
                            <h2 className="text-3xl md:text-5xl font-bold mb-4">{title}</h2>
                            <p className="text-lg md:text-xl mb-6">{description}</p>
                            {btnText && (
                                <a
                                    href={btnLink}
                                    className="button-polygon inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                                >
                                    {btnText}
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
};
export default Slide;