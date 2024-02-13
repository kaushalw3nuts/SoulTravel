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
						<div className="left_part 2xl:pt-[200px] 2xl:pb-[120px] xl:pt-[150px] xl:pb-[120px] xl:h-auto xl:block md:pt-0 md:pb-0 pt-[150px] pb-[20px] 2xl:max-w-[920px] xl:max-w-[600px] max-w-full md:h-screen md:flex md:items-center md:justify-center md:flex-col relative z-10">
							<h1 className="font-bebasneue 2xl:text-[120px] xl:text-[80px] lg:text-[60px] md:text-[50px] text-[40px] leading-[1.28] font-normal text-black uppercase 2xl:mb-4 xl:mb-2 mb-2 xl:text-left text-center">
								Let's go! <br className="2xl:block xl:hidden lg:hidden" /> The <span className="xl:text-orange inline-block lg:text-hoverorange md:text-hoverorange text-orange">adventure</span> is waiting for you 
							</h1>
							<p className="font-poppins text-blacklight font-normal 2xl:text-[24px] xl:text-[20px] lg:text-[20px] md:text-[18px] text-[16px] leading-[1.67] 2xl:mb-7 mb-4 2xl:max-w-[648px] max-w-full xl:text-left text-center">
								Pack your luggage and pick your destination, we will provide you the flight ticket, hotel booking and best guides
							</p>
							<div className="main_tab 2xl:max-w-[880px] max-w-full rounded-b-3xl rounded-t-3xl overflow-hidden">
								<Tabs>
									<TabList>
										<Tab>
											<div className="flex 2xl:w-8 2xl:h-8 2xl:mr-4 xl:w-7 xl:h-7 xl:mr-3 w-7 h-7 md:mr-3 mr-0">
												<Image src={smallPlan} alt="plan" className="w-full h-auto max-w-full max-h-full object-cover" />
											</div>
											Flight
										</Tab>
										<Tab>
											<div className="flex 2xl:w-8 2xl:h-8 2xl:mr-4 xl:w-7 xl:h-7 xl:mr-3 w-7 h-7 md:mr-3 mr-0">
												<Image src={Hotel} alt="hotel" className="w-full h-auto max-w-full max-h-full object-cover" />
											</div>
											Hotel
										</Tab>
										<Tab>
											<div className="flex 2xl:w-8 2xl:h-8 2xl:mr-4 xl:w-7 xl:h-7 xl:mr-3 w-7 h-7 md:mr-3 mr-0">
												<Image src={Rent} alt="rent" className="w-full h-auto max-w-full max-h-full object-cover" />
											</div>
											Rent
										</Tab>	
									</TabList>
									<TabPanel>
										<div className="tab_box flex md:items-center items-start 2xl:py-8 2xl:px-16 2xl:gap-12 xl:py-6 xl:px-6 xl:gap-6 lg:py-8 lg:px-8 lg:gap-8 md:py-6 md:px-6 md:gap-6 md:flex-row md:gap-y-0 flex-col py-6 px-6 gap-y-5">
											<div className="destdate_box flex flex-col">
												<h6 className="font-poppins font-normal 2xl:text-[18px] xl:text-[16px] text-[16px] text-lightcolor mb-2">Destination</h6>
												<Link href="javascript:void(0);" className="box_wrap flex items-center">
													<div className="flex 2xl:w-6 2xl:h-6 mr-2 xl:w-5 xl:h-5 w-6 h-6">
														<Image src={Location} alt="location" className="w-full h-auto max-w-full max-h-full object-cover" />
													</div>
													<p className="font-poppins font-bold 2xl:text-[18px] xl:text-[14px] text-[16px] text-black">Paris, France</p>
													<span className="flex w-8 h-8 2xl:ml-6 xl:ml-4 ml-4">
														<Image src={Downarrow} alt="downarrow" className="w-full h-auto max-w-full max-h-full object-cover" />
													</span>
												</Link>
											</div>
											<div className="destdate_box flex flex-col">
												<h6 className="font-poppins font-normal 2xl:text-[18px] xl:text-[16px] text-[16px] text-lightcolor mb-2">Date</h6>
												<Link href="javascript:void(0);" className="box_wrap flex items-center">
													<div className="flex 2xl:w-6 2xl:h-6 mr-2 2xl:min-w-0 xl:min-w-5 xl:h-5 w-6 h-6">
														<Image src={Calendar} alt="calendar" className="w-full h-auto max-w-full max-h-full object-cover" />
													</div>
													<p className="font-poppins font-bold 2xl:text-[18px] xl:text-[14px] text-[16px] text-black">17 July 2024</p>
													<span className="flex w-8 h-8 2xl:ml-6 xl:ml-4 ml-4">
														<Image src={Downarrow} alt="downarrow" className="w-full h-auto max-w-full max-h-full object-cover" />
													</span>
												</Link>
											</div>
											<div className="search_btn md:ml-auto flex">
												<Link href="#" className="block 2xl:px-12 2xl:py-[18.5px] xl:px-10 xl:py-[14px] md:px-10 md:py-[14px] px-10 py-[12px] bg-orange rounded-2xl text-white font-poppins font-medium 2xl:text-[18px] xl:text-[16px] text-[16px] transition-all duration-[0.4s] ease-in-out hover:bg-hoverorange">Search</Link>
											</div>
										</div>
									</TabPanel>
									<TabPanel>
										<div className="tab_box flex md:items-center items-start 2xl:py-8 2xl:px-16 2xl:gap-12 xl:py-6 xl:px-6 xl:gap-6 lg:py-8 lg:px-8 lg:gap-8 md:py-6 md:px-6 md:gap-6 md:flex-row md:gap-y-0 flex-col py-6 px-6 gap-y-5">
											<div className="destdate_box flex flex-col">
												<h6 className="font-poppins font-normal 2xl:text-[18px] xl:text-[16px] text-[16px] text-lightcolor mb-2">Destination</h6>
												<Link href="javascript:void(0);" className="box_wrap flex items-center">
													<div className="flex 2xl:w-6 2xl:h-6 mr-2 xl:w-5 xl:h-5 w-6 h-6">
														<Image src={Location} alt="location" className="w-full h-auto max-w-full max-h-full object-cover" />
													</div>
													<p className="font-poppins font-bold 2xl:text-[18px] xl:text-[14px] text-[16px] text-black">Paris, France</p>
													<span className="flex w-8 h-8 2xl:ml-6 xl:ml-4 ml-4">
														<Image src={Downarrow} alt="downarrow" className="w-full h-auto max-w-full max-h-full object-cover" />
													</span>
												</Link>
											</div>
											<div className="destdate_box flex flex-col">
												<h6 className="font-poppins font-normal 2xl:text-[18px] xl:text-[16px] text-[16px] text-lightcolor mb-2">Date</h6>
												<Link href="javascript:void(0);" className="box_wrap flex items-center">
													<div className="flex 2xl:w-6 2xl:h-6 mr-2 2xl:min-w-0 xl:min-w-5 xl:h-5 w-6 h-6">
														<Image src={Calendar} alt="calendar" className="w-full h-auto max-w-full max-h-full object-cover" />
													</div>
													<p className="font-poppins font-bold 2xl:text-[18px] xl:text-[14px] text-[16px] text-black">17 July 2024</p>
													<span className="flex w-8 h-8 2xl:ml-6 xl:ml-4 ml-4">
														<Image src={Downarrow} alt="downarrow" className="w-full h-auto max-w-full max-h-full object-cover" />
													</span>
												</Link>
											</div>
											<div className="search_btn md:ml-auto flex">
												<Link href="#" className="block 2xl:px-12 2xl:py-[18.5px] xl:px-10 xl:py-[14px] md:px-10 md:py-[14px] px-10 py-[12px] bg-orange rounded-2xl text-white font-poppins font-medium 2xl:text-[18px] xl:text-[16px] text-[16px] transition-all duration-[0.4s] ease-in-out hover:bg-hoverorange">Search</Link>
											</div>
										</div>
									</TabPanel>
									<TabPanel>
										<div className="tab_box flex md:items-center items-start 2xl:py-8 2xl:px-16 2xl:gap-12 xl:py-6 xl:px-6 xl:gap-6 lg:py-8 lg:px-8 lg:gap-8 md:py-6 md:px-6 md:gap-6 md:flex-row md:gap-y-0 flex-col py-6 px-6 gap-y-5">
											<div className="destdate_box flex flex-col">
												<h6 className="font-poppins font-normal 2xl:text-[18px] xl:text-[16px] text-[16px] text-lightcolor mb-2">Destination</h6>
												<Link href="javascript:void(0);" className="box_wrap flex items-center">
													<div className="flex 2xl:w-6 2xl:h-6 mr-2 xl:w-5 xl:h-5 w-6 h-6">
														<Image src={Location} alt="location" className="w-full h-auto max-w-full max-h-full object-cover" />
													</div>
													<p className="font-poppins font-bold 2xl:text-[18px] xl:text-[14px] text-[16px] text-black">Paris, France</p>
													<span className="flex w-8 h-8 2xl:ml-6 xl:ml-4 ml-4">
														<Image src={Downarrow} alt="downarrow" className="w-full h-auto max-w-full max-h-full object-cover" />
													</span>
												</Link>
											</div>
											<div className="destdate_box flex flex-col">
												<h6 className="font-poppins font-normal 2xl:text-[18px] xl:text-[16px] text-[16px] text-lightcolor mb-2">Date</h6>
												<Link href="javascript:void(0);" className="box_wrap flex items-center">
													<div className="flex 2xl:w-6 2xl:h-6 mr-2 2xl:min-w-0 xl:min-w-5 xl:h-5 w-6 h-6">
														<Image src={Calendar} alt="calendar" className="w-full h-auto max-w-full max-h-full object-cover" />
													</div>
													<p className="font-poppins font-bold 2xl:text-[18px] xl:text-[14px] text-[16px] text-black">17 July 2024</p>
													<span className="flex w-8 h-8 2xl:ml-6 xl:ml-4 ml-4">
														<Image src={Downarrow} alt="downarrow" className="w-full h-auto max-w-full max-h-full object-cover" />
													</span>
												</Link>
											</div>
											<div className="search_btn md:ml-auto flex">
												<Link href="#" className="block 2xl:px-12 2xl:py-[18.5px] xl:px-10 xl:py-[14px] md:px-10 md:py-[14px] px-10 py-[12px] bg-orange rounded-2xl text-white font-poppins font-medium 2xl:text-[18px] xl:text-[16px] text-[16px] transition-all duration-[0.4s] ease-in-out hover:bg-hoverorange">Search</Link>
											</div>
										</div>
									</TabPanel>
								</Tabs>
							</div>
						</div>
						<div className="right_part absolute 2xl:top-0 2xl:right-5 2xl:max-w-none xl:-top-5 xl:-right-[100px] xl:left-auto xl:max-w-[800px] xl:w-auto max-w-full w-full lg:-top-20 lg:right-auto lg:left-[10%] z-0 md:top-0 md:right-auto md:left-[7%] md:block hidden">
							<div className="world_img">
								<Image src={Worldimg} alt="worldimg" className="relative z-10" />
								<div className="waves-block">
									<div className="waves wave-1"></div>
									<div className="waves wave-2"></div>
									<div className="waves wave-3"></div>
								</div>
							</div>
							<div className="plan_box absolute 2xl:top-[39%] 2xl:left-[4%] z-10 2xl:max-w-none xl:max-w-[220px] xl:top-[39%] xl:left-[8%] top-[40%] left-[6%]">
								<Image src={Bigplan} alt="plan" />
							</div>
							<div className="path_img absolute 2xl:top-[36%] 2xl:left-[4%] xl:top-[34%] xl:left-[8.5%] z-20 top-[38%] left-[4%]">
								<svg width="718" height="294" className="2xl:w-[718px] h-[294px] xl:w-[580px] lg:w-[718px] md:w-[614px]" viewBox="0 0 718 294" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M651.206 1C689.057 10.7377 711.405 27.4273 715.798 49.2401C720.192 71.0529 706.463 97.1471 676.115 124.664C645.768 152.18 599.972 180.057 543.747 205.24C487.523 230.423 423.038 251.94 357.359 267.434C291.679 282.928 227.34 291.8 171.391 293.079C115.441 294.358 70.0404 287.994 40.163 274.685C10.2856 261.376 -2.9155 241.634 2.00606 217.624C6.92762 193.614 29.782 166.261 68.065 138.563" stroke="#2E2E2E" className="svg-elem-1" stroke-dasharray="10 10" />
								</svg>
							</div>
							<div className="hotel max-w-[252px] absolute 2xl:top-[29%] 2xl:left-0 z-10 xl:top-[30%] xl:left-[2%] lg:top-[34%] lg:left-[4%] md:top-[29%] md:left-0">
								<Image src={Hotelbox} alt="hotel" className="w-full h-auto" />
							</div>
							<div className="flight max-w-[252px] absolute 2xl:top-[26%] 2xl:right-[12%] z-10 xl:top-[26%] xl:right-[18%] lg:top-[26%] lg:right-[30%] md:top-[26%] md:right-[20%]">
								<Image src={Flightbox} alt="flight" className="w-full h-auto" />
							</div>
							<div className="local max-w-[252px] absolute 2xl:bottom-[22.5%] 2xl:left-[10%] z-10 xl:bottom-[25%] xl:left-[15%] lg:bottom-[26%] lg:left-[16%] md:bottom-[20%] md:left-[15%]">
								<Image src={Localbox} alt="local" className="w-full h-auto" />
							</div>
							<div className="tour max-w-[252px] absolute 2xl:bottom-[28%] 2xl:right-[8%] z-10 xl:bottom-[30%] xl:right-[14%] lg:bottom-[30%] lg:right-[26%] md:bottom-[23%] md:right-[11%]">
								<Image src={Tourbox} alt="tour" className="w-full h-auto" />
							</div>
							<div className="customer max-w-[310px] absolute 2xl:bottom-[10.5%] 2xl:right-[18%] z-10 xl:bottom-[12%] xl:right-[24%] lg:bottom-[13%] lg:right-[34%] md:bottom-[11%] md:right-[24%]">
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