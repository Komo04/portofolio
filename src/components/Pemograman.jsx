function Pemograman() {
    return (
        <section id="pemograman" className="py-20 md:py-64" >
            <h1 className="text-3xl text-center md:text-4xl lg:text-5xl  font-bold mb-6 text-white"> What I Do</h1>
            <div className="flex flex-col items-center justify-center gap-4 md:flex-row flex-wrap   ">
                <table className="flex flex-col pl-5 gap-8 bg-[#2B2B2B] w-64 rounded-md  ">
                    <img src="/images.png" alt="laravel" className="w-10 h-auto mt-5 rounded-lg" />
                    <p className="text-white"> HTML </p>
                    <p className="text-white pb-10"> Memiliki pemahaman yang baik dalam penggunaan HTML5 untuk membangun struktur website yang semantik, rapi, dan terorganisir. Terbiasa menggunakan elemen semantic untuk mendukung SEO dan meningkatkan aksesibilitas website. </p>
                </table>
                <table className="flex flex-col pl-5 gap-8 bg-[#2B2B2B] w-64 rounded-md  ">
                    <img src="/css.png" alt="css" className="w-10 h-auto mt-5 rounded-lg" />
                    <p className="text-white"> CSS </p>
                    <p className="text-white pb-10"> Menguasai CSS untuk styling website yang responsif dan modern. Terbiasa menggunakan Flexbox, Grid, serta teknik responsive design untuk memastikan tampilan optimal di berbagai perangkat. </p>
                </table>
                <table className="flex flex-col pl-5 gap-8 bg-[#2B2B2B] w-64 rounded-md  ">
                    <img src="/js.png" alt="js" className="w-10 h-auto mt-5 rounded-lg" />
                    <p className="text-white"> JavaScript </p>
                    <p className="text-white pb-10"> Memahami dasar hingga menengah JavaScript untuk membangun interaksi pada website. Terbiasa menggunakan DOM manipulation, event handling, serta integrasi API untuk fitur dinamis pada aplikasi web. </p>
                </table>
                <table className="flex flex-col pl-5 gap-8 bg-[#2B2B2B] w-64 rounded-md  ">
                    <img src="/react.png" alt="react" className="w-10 h-auto mt-5 rounded-lg" />
                    <p className="text-white"> React </p>
                    <p className="text-white pb-10"> Memiliki pengalaman dalam membangun user interface menggunakan React. Terbiasa menggunakan component-based architecture, state management dasar, serta pengelolaan props untuk membuat aplikasi web yang dinamis dan reusable. </p>
                </table>
                <table className="flex flex-col pl-5 gap-8 bg-[#2B2B2B] w-64 rounded-md  ">
                    <img src="/images.png" alt="laravel" className="w-10 h-auto mt-5 rounded-lg" />
                    <p className="text-white"> Laravel </p>
                    <p className="text-white pb-10"> Menguasai dasar pengembangan backend menggunakan Laravel. Terbiasa membangun sistem CRUD, integrasi database MySQL, autentikasi pengguna, serta pengembangan RESTful API untuk kebutuhan aplikasi web modern. </p>
                </table>
               
            </div>
        </section>
    );
}
export default Pemograman;