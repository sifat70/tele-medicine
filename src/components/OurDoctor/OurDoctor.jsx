

const OurDoctor = () => {
    return (
        <div className="mt-5">
            <div>
                <h1 className="text-blue-800 font-bold text-3xl text-center mb-5">Our doctors have an average  of 15+ years of <br /> experience</h1>
                <p className="mt-4 text-center ">Our doctors boast an impressive average of 15+ years of invaluable experience, Our doctors boast an impressive average providing patients with <br /> the highest level of expertise and proficiency in delivering quality healthcare services.</p>
                <div className="flex justify-center mt-8">
                    <button className="btn btn-outline btn-primary">Start your online visit</button>
                </div>
            </div>

            <div className="mt-28">
                <h1 className="text-blue-800 font-bold text-3xl text-center mb-5">Top Tele-Counsellor</h1>
            </div>
            <div className="grid grid-cols-3 mt-8">
                <div className="card w-96 bg-base-100 ">
                    <figure><img className="border-b-4 border-sky-400" style={{borderRadius: '0 0 0 60px '}}  src="https://i.ibb.co/1q53nbg/image-25.png" alt="Shoes" /></figure>
                    <div className="card-body text-center">
                        <h2 className="card-title font-bold  flex justify-center">Emily Thompson</h2>
                        <p className="font-semibold">Family Medicine Specialist</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 ">
                    <figure><img className="border-b-4 border-sky-400" style={{borderRadius: '0 0 0 60px '}} src="https://i.ibb.co/gv1Ly1S/image-26.png" alt="Shoes" /></figure>
                    <div className="card-body text-center">
                        <h2 className="card-title font-bold  flex justify-center">James Anderson</h2>
                        <p className="font-semibold">Cardiologist</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 ">
                    <figure><img className="border-b-4 border-sky-400" style={{borderRadius: '0 0 0 60px '}} src="https://i.ibb.co/qCrRB3g/image-24.png" alt="Shoes" /></figure>
                    <div className="card-body text-center">
                        <h2 className="card-title font-bold  flex justify-center">Michelle Davis</h2>
                        <p className="font-semibold">Michelle Davis</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurDoctor;