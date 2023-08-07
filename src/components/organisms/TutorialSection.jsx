import leaderboard from "@/data/leaderboard";


const TutorialSection = () => {
    return (
        <>
            <div className="container">

                <div className="border  pl-24">


                    <div className="bg-primary p-16 md:pl-24 rounded-l-3xl md:h-80 bg-tutorialMagniLaptopBg bg-no-repeat" style={{ backgroundPosition: '93% 85px', backgroundSize: '200px 163px' }}>
                        {/* //BG COLOR */}
                        <div >
                            <p className="text-5xl text-white font-light md:pb-3">Gain the power of knowledge and </p>
                            <p className="text-5xl text-white font-medium">Choose a tutorial thats right for you</p>
                        </div>

                    </div>

                    <div className="flex flex-flow-col md:px-12  ">

                        <div className="md:basis-9/12  md:px-36 w-full relative -top-28">
                            <div className="">
                                {/* Video column  */}
                                <div className="flex justify-between  text-white pb-3">
                                    {/* tiny nav */}
                                    <div className="mx-5">Certifications</div>
                                    <div className="mx-5">Business</div>
                                    <div className="mx-5">Documentation</div>
                                </div>

                                <div >
                                    {/* video player */}
                                    <img className="w-full" src="/images/videoplayer.png" />
                                </div>
                            </div>
                            <div className="md:flex-row md:flex mt-6">
                                {/* dropdowns */}
                                <div className=" w-full  md:w-[50%]">
                                    {/* left dropdown */}
                                    <p className="font-bold  text-primary">Most popular courses</p>
                                    <select
                                        id="field6"
                                        name="field6"
                                        className="mt-1 bg-gradient-to-br from-gray-100 via-white-100 to-gray-100 block sm:w-full md:w-[85%] border-gray-300 p-1 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    >
                                        <option value="">---</option>
                                        <option value="option2">Option 1</option>
                                        <option value="option3">Option 2</option>
                                    </select>

                                </div>
                                <div className=" w-full md:w-[50%]">
                                    {/* right dropdown */}
                                    <p className="font-bold text-primary">Newest courses</p>
                                    <select
                                        id="field6"
                                        name="field6"
                                        className="mt-1 bg-gradient-to-br from-gray-100 via-white-100 to-gray-100 block sm:w-full md:w-[85%] border-gray-300 p-1 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    >
                                        <option value="">---</option>
                                        <option value="option2">Option 1</option>
                                        <option value="option3">Option 2</option>
                                    </select>

                                    <div className="p-3 text-primary md:text-xs">
                                        <p className="font-bold text-primary">Accounting and invoicing</p>
                                        <ul>
                                            <li>Manufacturing Inventory Management</li>
                                            <li>Standard Accounting</li>
                                            <li>Usage Tips </li>
                                            <li>Setting up: User Management</li>
                                            <li>Setting up: Business Details, Working Hours, PDF Editor</li>
                                            <li>Setting up: Procured Items, Purchase Terms</li>
                                        </ul>

                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="basis md:basis-3/12 bg-solitude p-5 w-full">
                            <div>
                                {/* Right course LIST */}
                                <p className="text-sm font-bold text-secondary">Leaderboard by Views</p>
                                {leaderboard.map((val, key) => (
                                    <div className="py-3 flex gap-1 text-sm text-secondary">
                                        <div className="w-[10%]">{key + 1}</div>
                                        <div className="w-[60%]">{val.title}</div>
                                        <div className="bg-secondary text-white ml-3 md:px-2 w-[30%]">{val.views}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default TutorialSection;