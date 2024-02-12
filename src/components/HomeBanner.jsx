import Link from "next/link";
import Image from "next/image";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import smallPlan from "@/assets/images/Plane.svg";
import Hotel from "@/assets/images/Hotel.svg";
import Rent from "@/assets/images/Car.svg";
import Location from "@/assets/images/Location.svg";
import Downarrow from "@/assets/images/down_arrow.svg";
import Calendar from "@/assets/images/Calendar.svg";
import Worldimg from "@/assets/images/Girl_img.png";
import Hotelbox from "@/assets/images/hotel_booking.png";
import Flightbox from "@/assets/images/flight_ticket.png";
import Localbox from "@/assets/images/local_event.png";
import Tourbox from "@/assets/images/tour_guide.png";
import Contactbox from "@/assets/images/customer_service.png";
import Bigplan from "@/assets/images/Big_plane.svg";
import { useEffect } from 'react';
import gsap from 'gsap';
import { Power3 } from 'gsap/dist/gsap';



const HomeBanner = () => {

	useEffect(() => {
		const planeImage = document.querySelector('.plan_box img');

		gsap.fromTo(planeImage,
			{ 
				scale: 0.6,
				x: '20%',
				y: '-30%'
			}, // From
			{
				scale: 1,
				x: '0',
			  	y: '0',
			  	duration: 1.5,
			  	ease: Power3.easeInOut,
			} // To
		);

		const hotelImage = document.querySelector('.hotel');
		const flightImage = document.querySelector('.flight');
		const localImage = document.querySelector('.local');
		const tourImage = document.querySelector('.tour');
	
		gsap.set([hotelImage, localImage], 
			{
				x: '-100%',
				opacity: '0' 
			}
		);
		gsap.set([ flightImage, tourImage], 
			{
				x: '100%',
				opacity: '0' 
			}
		);
	
		const tl = gsap.timeline();
	
		tl.to(hotelImage, { duration: 1, x: 0, ease: 'power2.out', opacity: '1' })
		.to(flightImage, { duration: 1, x: 0, ease: 'power2.out', opacity: '1' }, '-=0.2')
		.to(localImage, { duration: 1, x: 0, ease: 'power2.out', opacity: '1' }, '-=0.2')
		.to(tourImage, { duration: 1, x: 0, ease: 'power2.out', opacity: '1' }, '-=0.2');
	
		return () => {
			tl.kill();
		};
	}, []);

	return (
		<>
			<div className="banner relative">
				<div className="container">
					<div className="banner_section">
						<div className="left_part pt-[200px] pb-[120px] max-w-[920px] relative z-10">
							<h1 className="font-bebasneue text-[120px] leading-[1.28] font-normal text-black uppercase mb-4">
								Let's go! <br /> The <span className="text-orange inline-block" >adventure</span> is waiting for you 
							</h1>
							<p className="font-poppins text-blacklight font-normal text-[24px] leading-[1.67] mb-7 max-w-[648px]">
								Pack your luggage and pick your destination, we will provide you the flight ticket, hotel booking and best guides
							</p>
							<div className="main_tab max-w-[880px] rounded-b-3xl rounded-t-3xl overflow-hidden">
								<Tabs>
									<TabList>
										<Tab>
											<div className="flex w-8 h-8 mr-4">
												<Image src={smallPlan} alt="plan" className="w-full h-auto max-w-full max-h-full object-cover" />
											</div>
											Flight
										</Tab>
										<Tab>
											<div className="flex w-8 h-8 mr-4">
												<Image src={Hotel} alt="hotel" className="w-full h-auto max-w-full max-h-full object-cover" />
											</div>
											Hotel
										</Tab>
										<Tab>
											<div className="flex w-8 h-8 mr-4">
												<Image src={Rent} alt="rent" className="w-full h-auto max-w-full max-h-full object-cover" />
											</div>
											Rent
										</Tab>	
									</TabList>
									<TabPanel>
										<div className="tab_box flex items-center py-8 px-16 gap-12">
											<div className="destdate_box flex flex-col">
												<h6 className="font-poppins font-normal text-[18px] text-lightcolor mb-2">Destination</h6>
												<Link href="javascript:void(0);" className="box_wrap flex items-center">
													<div className="flex w-6 h-6 mr-2">
														<Image src={Location} alt="location" className="w-full h-auto max-w-full max-h-full object-cover" />
													</div>
													<p className="font-poppins font-bold text-[18px] text-black">Paris, France</p>
													<span className="flex w-8 h-8 ml-6">
														<Image src={Downarrow} alt="downarrow" className="w-full h-auto max-w-full max-h-full object-cover" />
													</span>
												</Link>
											</div>
											<div className="destdate_box flex flex-col">
												<h6 className="font-poppins font-normal text-[18px] text-lightcolor mb-2">Date</h6>
												<Link href="javascript:void(0);" className="box_wrap flex items-center">
													<div className="flex w-6 h-6 mr-2">
														<Image src={Calendar} alt="calendar" className="w-full h-auto max-w-full max-h-full object-cover" />
													</div>
													<p className="font-poppins font-bold text-[18px] text-black">17 July 2024</p>
													<span className="flex w-8 h-8 ml-6">
														<Image src={Downarrow} alt="downarrow" className="w-full h-auto max-w-full max-h-full object-cover" />
													</span>
												</Link>
											</div>
											<div className="search_btn ml-auto flex">
												<Link href="#" className="block px-12 py-[18.5px] bg-orange rounded-2xl text-white font-poppins font-medium text-[18px] transition-all duration-[0.4s] ease-in-out hover:bg-hoverorange">Search</Link>
											</div>
										</div>
									</TabPanel>
									<TabPanel>
										<div className="tab_box flex items-center py-8 px-16 gap-12">
											<div className="destdate_box flex flex-col">
												<h6 className="font-poppins font-normal text-[18px] text-lightcolor mb-2">Destination</h6>
												<Link href="javascript:void(0);" className="box_wrap flex items-center">
													<div className="flex w-6 h-6 mr-2">
														<Image src={Location} alt="location" className="w-full h-auto max-w-full max-h-full object-cover" />
													</div>
													<p className="font-poppins font-bold text-[18px] text-black">Paris, France</p>
													<span className="flex w-8 h-8 ml-6">
														<Image src={Downarrow} alt="downarrow" className="w-full h-auto max-w-full max-h-full object-cover" />
													</span>
												</Link>
											</div>
											<div className="destdate_box flex flex-col">
												<h6 className="font-poppins font-normal text-[18px] text-lightcolor mb-2">Date</h6>
												<Link href="javascript:void(0);" className="box_wrap flex items-center">
													<div className="flex w-6 h-6 mr-2">
														<Image src={Calendar} alt="calendar" className="w-full h-auto max-w-full max-h-full object-cover" />
													</div>
													<p className="font-poppins font-bold text-[18px] text-black">17 July 2024</p>
													<span className="flex w-8 h-8 ml-6">
														<Image src={Downarrow} alt="downarrow" className="w-full h-auto max-w-full max-h-full object-cover" />
													</span>
												</Link>
											</div>
											<div className="search_btn ml-auto flex">
												<Link href="#" className="block px-12 py-[18.5px] bg-orange rounded-2xl text-white font-poppins font-medium text-[18px] transition-all duration-[0.4s] ease-in-out hover:bg-hoverorange">Search</Link>
											</div>
										</div>
									</TabPanel>
									<TabPanel>
										<div className="tab_box flex items-center py-8 px-16 gap-12">
											<div className="destdate_box flex flex-col">
												<h6 className="font-poppins font-normal text-[18px] text-lightcolor mb-2">Destination</h6>
												<Link href="javascript:void(0);" className="box_wrap flex items-center">
													<div className="flex w-6 h-6 mr-2">
														<Image src={Location} alt="location" className="w-full h-auto max-w-full max-h-full object-cover" />
													</div>
													<p className="font-poppins font-bold text-[18px] text-black">Paris, France</p>
													<span className="flex w-8 h-8 ml-6">
														<Image src={Downarrow} alt="downarrow" className="w-full h-auto max-w-full max-h-full object-cover" />
													</span>
												</Link>
											</div>
											<div className="destdate_box flex flex-col">
												<h6 className="font-poppins font-normal text-[18px] text-lightcolor mb-2">Date</h6>
												<Link href="javascript:void(0);" className="box_wrap flex items-center">
													<div className="flex w-6 h-6 mr-2">
														<Image src={Calendar} alt="calendar" className="w-full h-auto max-w-full max-h-full object-cover" />
													</div>
													<p className="font-poppins font-bold text-[18px] text-black">17 July 2024</p>
													<span className="flex w-8 h-8 ml-6">
														<Image src={Downarrow} alt="downarrow" className="w-full h-auto max-w-full max-h-full object-cover" />
													</span>
												</Link>
											</div>
											<div className="search_btn ml-auto flex">
												<Link href="#" className="block px-12 py-[18.5px] bg-orange rounded-2xl text-white font-poppins font-medium text-[18px] transition-all duration-[0.4s] ease-in-out hover:bg-hoverorange">Search</Link>
											</div>
										</div>
									</TabPanel>
								</Tabs>
							</div>
						</div>
						<div className="right_part absolute top-0 right-5 z-0">
							<div className="world_img">
								<Image src={Worldimg} alt="worldimg" className="relative z-10" />
								<div className="waves-block">
									<div className="waves wave-1"></div>
									<div className="waves wave-2"></div>
									<div className="waves wave-3"></div>
								</div>
							</div>
							<div className="plan_box absolute top-[39%] left-[4%] z-10">
								<Image src={Bigplan} alt="plan" />
							</div>
							<div className="path_img absolute top-[36%] left-[4%] z-20">
								<svg width="718" height="294" viewBox="0 0 718 294" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M651.206 1C689.057 10.7377 711.405 27.4273 715.798 49.2401C720.192 71.0529 706.463 97.1471 676.115 124.664C645.768 152.18 599.972 180.057 543.747 205.24C487.523 230.423 423.038 251.94 357.359 267.434C291.679 282.928 227.34 291.8 171.391 293.079C115.441 294.358 70.0404 287.994 40.163 274.685C10.2856 261.376 -2.9155 241.634 2.00606 217.624C6.92762 193.614 29.782 166.261 68.065 138.563" stroke="#2E2E2E" className="svg-elem-1" stroke-dasharray="10 10" />
								</svg>
							</div>
							<div className="hotel max-w-[252px] absolute top-[29%] left-0 z-10">
								<Image src={Hotelbox} alt="hotel" className="w-full h-auto" />
							</div>
							<div className="flight max-w-[252px] absolute top-[26%] right-[12%] z-10">
								<Image src={Flightbox} alt="flight" className="w-full h-auto" />
							</div>
							<div className="local max-w-[252px] absolute bottom-[22.5%] left-[10%] z-10">
								<Image src={Localbox} alt="local" className="w-full h-auto" />
							</div>
							<div className="tour max-w-[252px] absolute bottom-[28%] right-[8%] z-10">
								<Image src={Tourbox} alt="tour" className="w-full h-auto" />
							</div>
							<div className="customer max-w-[310px] absolute bottom-[10.5%] right-[18%] z-10">
								<Image src={Contactbox} alt="customer" className="w-full h-auto" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default HomeBanner;