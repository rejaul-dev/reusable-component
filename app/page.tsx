const page = () => {
  return (
    <section className="py-20">
      {/* pricing section */}
      <section className="py-6">
        <div className="container p-4 mx-auto sm:p-10">
          <div className="mb-12 space-y-4 text-center">
            <h1 className="text-4xl font-semibold text-center lg:text-start">Choose Your Plan</h1>
            <p className=" text-center lg:text-start">
              Sunt suscipit eaque qui iure unde labore numquam iusto alias
              explicabo, pariatur ipsam, cupiditate aliquid modi?
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-10">
            <div className="flex w-full mb-8 sm:px-4 lg:mb-0 ">
              <div className="flex flex-col p-6 space-y-6 rounded-lg shadow-lg sm:p-8 cursor-pointer hover:bg-[#231d4f] hover:text-white hover:scale-105 duration-200">
                <div className="space-y-4">
                  <h4 className="text-4xl 2xl:text-6xl font-bold">
                    $19<span className="font-normal text-2xl">/ month</span>
                  </h4>
                  <p className="text-2xl 2xl:text-3xl font-bold">Starter</p>
                </div>
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit!
                </p>
                <ul className="flex-1 mb-6">
                  <li className="flex mb-2 space-x-2">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-gray-400">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
                    <span>Tristique enim nec</span>
                  </li>
                  <li className="flex mb-2 space-x-2">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-gray-400">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
                    <span>Tristique enim nec</span>
                  </li>
                  <li className="flex mb-2 space-x-2">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-gray-400">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
                    <span>Tristique enim nec</span>
                  </li>
                </ul>
                <button
                  type="button"
                  className="inline-block px-5 py-3 font-semibold text-center rounded-3xl bg-[#867e9d] hover:bg-[#bb6bd9] text-white"
                >
                  Choose plan
                </button>
              </div>
            </div>
            <div className="flex w-full mb-8 sm:px-4 lg:mb-0 ">
              <div className="flex flex-col p-6 space-y-6 rounded-lg shadow-lg sm:p-8 cursor-pointer hover:bg-[#231d4f] hover:text-white hover:scale-105 duration-200">
                <div className="space-y-4">
                  <h4 className="text-4xl 2xl:text-6xl font-bold">
                    $54<span className="font-normal text-2xl">/ month</span>
                  </h4>
                  <p className="text-2xl 2xl:text-3xl font-bold">
                    Professional
                  </p>
                </div>
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit!
                </p>
                <ul className="flex-1 mb-6">
                  <li className="flex mb-2 space-x-2">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-gray-400">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
                    <span>Aenean quis</span>
                  </li>
                  <li className="flex mb-2 space-x-2">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-gray-400">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
                    <span>Aenean quis</span>
                  </li>
                  <li className="flex mb-2 space-x-2">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-gray-400">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
                    <span>Morbi semper</span>
                  </li>
                  <li className="flex mb-2 space-x-2">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-gray-400">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
                    <span>Tristique enim nec</span>
                  </li>
                </ul>
                <button
                  type="button"
                  className="inline-block px-5 py-3 font-semibold text-center rounded-3xl bg-[#867e9d] text-white hover:bg-[#bb6bd9]"
                >
                  Choose plan
                </button>
              </div>
            </div>
            <div className="flex w-full mb-8 sm:px-4 lg:mb-0 ">
              <div className="flex flex-col p-6 space-y-6 rounded-lg shadow-lg sm:p-8 cursor-pointer hover:bg-[#231d4f] hover:text-white hover:scale-105 duration-200">
                <div className="space-y-4">
                  <h4 className="text-4xl 2xl:text-6xl font-bold">
                    $89<span className="font-normal text-2xl">/ month</span>
                  </h4>
                  <p className="text-2xl 2xl:text-3xl font-bold">Company</p>
                </div>
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit!
                </p>
                <ul className="flex-1 mb-6">
                  <li className="flex mb-2 space-x-2">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-gray-400">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
                    <span>Aenean quis</span>
                  </li>
                  <li className="flex mb-2 space-x-2">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-gray-400">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
                    <span>Morbi semper</span>
                  </li>
                  <li className="flex mb-2 space-x-2">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-gray-400">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
                    <span>Morbi semper</span>
                  </li>
                  <li className="flex mb-2 space-x-2">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-gray-400">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
                    <span>Morbi semper</span>
                  </li>
                  <li className="flex mb-2 space-x-2">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-gray-400">
								<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
							</svg>
                    <span>Tristique enim nec</span>
                  </li>
                </ul>
                <button
                  type="button"
                  className="inline-block px-5 py-3 font-semibold text-center rounded-3xl bg-[#867e9d] hover:bg-[#bb6bd9] text-white"
                >
                  Choose plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default page;
