import React, { useState } from 'react';
import Heading from '../atoms/Heading';
import { Faqs } from '@/constants/constants';
import { Collapse } from 'react-collapse';
import { BiSolidMinusCircle, BiSolidPlusCircle } from 'react-icons/bi';
import { isRTL } from '@/constants/utils';

const CommunityFaq = () => {
	const [activeIndex, setActiveIndex] = useState(null);

	const toggleAccordion = (index) => {
		setActiveIndex(index === activeIndex ? null : index);
	};
	return (
		<div className="bg-solitude bg-faqTriangle bg-no-repeat mix-blend-multiply">
			<div className="container w-full  ">
				<div className="ml-auto h-full w-full px-10 py-8 md:w-[60%]">
					<Heading tag={'p'} variant={'secondary'}>
						Any Questions?
					</Heading>
					<Heading tag={'p'} variant={'secondary'} weight={'light'}>
						then you&apos;re in the right place
					</Heading>
				</div>
				<div
					className={`relative flex h-full w-full flex-col px-10 py-5 ${
						isRTL() ? 'md:right-10' : 'md:left-[25%]'
					}  md:w-[70%] md:px-0 lg:w-[60%]`}
				>
					{Faqs.map(({ title, id, content }, index) => (
						<div className="my-1 flex flex-row gap-5" key={id}>
							{activeIndex === index ? (
								<BiSolidMinusCircle className="mt-3 text-2xl text-red-500 transition-all duration-200 ease-in-out" />
							) : (
								<BiSolidPlusCircle className="mt-3 text-2xl text-primary transition-all duration-200 ease-in-out" />
							)}

							<div
								className={`w-full ${
									activeIndex === index ? 'accordion-border-full' : 'accordion-border-bottom'
								}  px-3 py-2 `}
							>
								<button className="text-xl" onClick={() => toggleAccordion(index)}>
									{title}
								</button>
								<Collapse isOpened={activeIndex === index}>
									<div className="pt-2">
										<p>{content}</p>
									</div>
								</Collapse>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default CommunityFaq;
