import { Person } from '../../../public/images';
import Image from 'next/image';

const WhoWeAre = () => {
	return (
		<div className="grid grid-cols-1 gap-4 md:mt-20 md:grid-cols-5">
			<div className="p-4 md:col-span-3 md:pl-16">
				<p className="text-center text-2xl font-bold text-secondary md:pb-4 md:text-left md:text-3xl lg:text-4xl xl:text-5xl">
					Who we are...
				</p>
				<p className="text-center text-2xl text-secondary md:text-left md:text-3xl md:font-light lg:text-4xl xl:text-5xl">
					... innovators in a<br /> changing world.
				</p>
				<p className="my-5 text-base font-light leading-6 text-secondary md:text-xl md:leading-[32px]">
					Developed 2 years ago, we are a team of 10 inspired individuals with a mission that has
					always been to provide a range of easy-to-use business applications based on AI that form
					a complete suite of tools to accompany any business need. We provide companies easy access
					to the software they need to run and expand their business. So join us and step into
					tomorrow&apos;s world, today.
				</p>
			</div>

			<div className="flex items-center justify-center pb-8 md:col-span-2">
				<div className="flex h-[17rem] w-[17rem] items-end justify-center overflow-hidden rounded-full bg-primary md:h-[17rem] md:w-[17rem] lg:h-[24rem] lg:w-[24rem] xl:h-[28rem] xl:w-[28rem]">
					<Image src={Person} className="  xl:w-68  w-44  md:w-44 lg:w-60 " alt="user image" />
				</div>
			</div>
		</div>
	);
};

export default WhoWeAre;
