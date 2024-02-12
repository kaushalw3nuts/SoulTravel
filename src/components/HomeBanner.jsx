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



const HomeBanner = () => {

	return (
		<>
			<div className="banner relative">
				<div className="container">
					<div className="banner_section">
						<div className="left_part mt-[200px] mb-[120px] max-w-[920px]">
							<h1 className="font-bebasneue text-[120px] leading-[1.28] font-normal text-black uppercase mb-4">
								Let's go! <br /> The <span className="text-orange inline-block" >adventure</span> is waiting for you 
							</h1>
							<p className="font-poppins text-blacklight font-normal text-[24px] leading-[1.67] mb-7 max-w-[648px]">
								Pack your luggage and pick your destination, we will provide you the flight ticket, hotel booking and best guides
							</p>
							<div className="main_tab">
								<Tabs>
									<TabList>
										<Tab>
											<i>
												<Image src={smallPlan} alt="plan" />
											</i>
											Flight
										</Tab>
										<Tab>
											<i>
												<Image src={Hotel} alt="hotel" />
											</i>
											Hotel
										</Tab>
										<Tab>
											<i>
												<Image src={Rent} alt="rent" />
											</i>
											Rent
										</Tab>	
									</TabList>
									<TabPanel>
										<div className="tab_box">
											<div className="destdate_box">
												<h6>Destination</h6>
												<div className="box_wrap">
													<i>
														<Image src={Location} alt="location" />
													</i>
													<p>Paris, France</p>
													<span>
														<Image src={Downarrow} alt="downarrow" />
													</span>
												</div>
											</div>
											<div className="destdate_box">
												<h6>Date</h6>
												<div className="box_wrap">
													<i>
														<Image src={Calendar} alt="calendar" />
													</i>
													<p>17 July 2024</p>
													<span>
														<Image src={Downarrow} alt="downarrow" />
													</span>
												</div>
											</div>
											<div className="search_btn">
												<Link href="#">Search</Link>
											</div>
										</div>
									</TabPanel>
									<TabPanel>
										
									</TabPanel>
									<TabPanel>
										
									</TabPanel>
								</Tabs>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default HomeBanner;