

const Rectangle = () => {
    return (
        <div className="bg-[#E6F8FD] mt-12 h-48 ">
            <div className="flex justify-evenly">
                <div className="mt-16 text-center">
                    <h1 className="text-blue-800 text-2xl font-bold">Get The  App</h1>
                    <p className="mt-3">Download Doctor on Demand to <br /> see a doctor in minutes </p>
                </div>
                <div className="mt-16">
                    <img src="https://i.ibb.co/8mZD0sb/google-play-and-apple-app-store-logos-22-1.png" alt="" />
                </div>
                <div className="mt-16 text-center">
                    <h1 className="font-bold">5.00</h1>
                    <div className="rating">
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" checked />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                    </div>
                    <p>105.7k Ratings</p>
                </div>
            </div>
        </div>
    );
};

export default Rectangle;