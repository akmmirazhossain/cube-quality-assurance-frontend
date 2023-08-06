import { Person } from '../../../public/images';
import Image from 'next/image';
import Heading from '../atoms/Heading';

const WhoWeAre = () => {
	return (
		<div className="relative mx-auto my-8 w-full md:my-16 md:w-[80%]">
			<div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
				<div className="md:col-span-2">
					<Heading variant={'secondary'}>Who we are...</Heading>
					<Heading variant={'secondary'} weight={'light'}>
						... innovators in a<br /> changing world.
					</Heading>
					<p className="my-5 text-base font-light leading-6 text-secondary md:text-xl md:leading-[32px]">
						Developed 2 years ago, we are a team of 10 inspired individuals with a mission that has
						always been to provide a range of easy-to-use business applications based on AI that
						form a complete suite of tools to accompany any business need. We provide companies easy
						access to the software they need to run and expand their business. So join us and step
						into tomorrow&apos;s world, today.
					</p>
				</div>
				<div className="relative col-span-1 mx-auto h-[250px] w-[250px] md:h-[450px] md:w-[450px] md:place-items-center">
					<div className="relative h-full w-full rounded-full bg-primary">
						<div className="relative grid h-full w-full place-items-center overflow-hidden rounded-full">
							<Image
								src={Person}
								className="absolute bottom-0 w-[150px] md:w-[260px]"
								alt="user image"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WhoWeAre;
