function Pemograman() {
    return (
        <section id="pemograman" className="py-20 md:py-32 px-6">
            
            <h1 className="text-3xl text-center md:text-4xl lg:text-5xl font-bold mb-12 text-white">
                What I Do
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

                {/* Card 1 */}
                <div className="bg-[#2B2B2B] rounded-lg p-6 flex flex-col items-center text-center h-full">
                    <img src="./images.png" alt="HTML" className="w-12 h-12 object-contain mb-4" />
                    <h3 className="text-white font-semibold text-lg mb-2">HTML</h3>
                    <p className="text-white text-sm">
                        Memiliki pemahaman yang baik dalam HTML5 untuk membangun struktur website yang semantik, rapi, dan SEO friendly.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-[#2B2B2B] rounded-lg p-6 flex flex-col items-center text-center h-full">
                    <img src="./css.jpg" alt="CSS" className="w-12 h-12 object-contain mb-4" />
                    <h3 className="text-white font-semibold text-lg mb-2">CSS</h3>
                    <p className="text-white text-sm">
                        Menguasai CSS untuk styling responsif menggunakan Flexbox, Grid, dan teknik modern UI design.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="bg-[#2B2B2B] rounded-lg p-6 flex flex-col items-center text-center h-full">
                    <img src="./js.png" alt="JavaScript" className="w-12 h-12 object-contain mb-4" />
                    <h3 className="text-white font-semibold text-lg mb-2">JavaScript</h3>
                    <p className="text-white text-sm">
                        Menguasai DOM manipulation, event handling, dan API integration untuk website interaktif.
                    </p>
                </div>

                {/* Card 4 */}
                <div className="bg-[#2B2B2B] rounded-lg p-6 flex flex-col items-center text-center h-full">
                    <img src="./react.png" alt="React" className="w-12 h-12 object-contain mb-4" />
                    <h3 className="text-white font-semibold text-lg mb-2">React</h3>
                    <p className="text-white text-sm">
                        Membangun UI dengan component-based architecture, props, dan state management dasar.
                    </p>
                </div>

                {/* Card 5 */}
                <div className="bg-[#2B2B2B] rounded-lg p-6 flex flex-col items-center text-center h-full">
                    <img src="./images.png" alt="Laravel" className="w-12 h-12 object-contain mb-4" />
                    <h3 className="text-white font-semibold text-lg mb-2">Laravel</h3>
                    <p className="text-white text-sm">
                        Mengembangkan backend CRUD, autentikasi, database MySQL, dan REST API.
                    </p>
                </div>

            </div>
        </section>
    );
}

export default Pemograman;