export default function Shop({children}) {
    return (
        <>
            <section
                className="my-8 mx-auto w-[92%] sm:w-[85%] md:w-[80%] lg:w-[75%] max-w-[1200px]"
            >
                <h2
                    className="uppercase text-[#a59b8b] text-xl md:text-2xl mb-8 text-center tracking-widest"
                >
                    Elegant Clothing For Everyone
                </h2>
                <ul 
                    className="list-none m-0 p-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch"
                >
                    {children}
                </ul>
            </section>
        </>
    );
}