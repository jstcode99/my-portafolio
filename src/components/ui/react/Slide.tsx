import React from 'react';

interface Props extends React.ComponentProps<'div'>{
    image: string
    title: string
    description: string
    btnText: string
    btnLink: string
    alt?: string
}
const Slide: React.FC<Props> = ({
    image, title, description, btnText, btnLink, alt = "Slide image", className
}) => {
    return (
        <>
            <div className={`w-full flex items-center justify-center ${className}`}>
                <div className="max-w-sm w-full lg:max-w-[52vw] lg:flex p-8 mt-5 lg:rounded-4xl md:rounded-xl rounded-none">
                    <div className="h-full lg:h-auto lg:w-[22vw] flex-none text-center overflow-hidden">
                        <img className="w-auto h-full bg-cover" src={image} alt={alt} />
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
                        <div className="flex items-center">
                            <div className="text-sm">
                                <p className="leading-none">Jonathan Reinink</p>
                                <p>Aug 18</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
};
export default Slide;