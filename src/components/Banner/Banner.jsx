

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/xzsKfb2/pngwing-1-1.png)' }}>
            <div className=""></div>
            <div className="hero-content text-neutral-content">
                <div className="flex">
                    <div className="flex-1  mt-44">
                        <h1 className="text-blue-800 font-bold text-4xl text-center mb-5">Whole-Patient, High Quality <br />
                            Virtual Primary Care</h1>
                        <p className="text-black text-center">Online doctor visits for primary care, mental health & therapy. Speak to a top doctor online and get personalized, high quality healthcare from anywhere. </p>
                        <div className="flex justify-center mt-11">
                            <button className="btn  bg-blue-800 text-white">Book an Appointment</button>
                        </div>
                    </div>
                    <div className="flex-1">
                        <img src="https://i.ibb.co/HFnQVQn/4fcaf624b91f22b460317d505215f385.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;