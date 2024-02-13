import Link from "next/link";
import Image from "next/image";
import SoulTravel from "@/assets/images/soultravel-logo.svg";
import SoulTravelWhite from "@/assets/images/soultravel-white-logo.svg";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";


const Header = () => {

	const navLinks = [
		{
			urlLink: "/",
			linkTitle: "Destination",
		},
		{
			urlLink: "#",
			linkTitle: "Package",
		},
		{
			urlLink: "#",
			linkTitle: "Blog",
		},
		{
			urlLink: "#",
			linkTitle: "About Us",
		},
		{
			urlLink: "#",
			linkTitle: "Contact",
		},
	]

	const [menuBtn, setMenuBtn] = useState(false);
	const menuHandler = () => {
		setMenuBtn(!menuBtn);
		const bodyElement = document.body;
		bodyElement.classList.toggle('open_nav');
	}

	const [onScroll, setScroll] = useState(false);
	useEffect(() => {
		const scrollHandler = () => {
			setScroll(window.scrollY > 1);
		}
		window.addEventListener('scroll', scrollHandler);
	}, []);

	const Router = useRouter();

	return (
		<>
			<header className={`header fixed top-0 left-0 w-full z-[1111] transition-all duration-300 ease-in-out ${onScroll ? 'fixed_wrap' : ''}`}>
				<div className="container">
					<div className="main_header flex items-center py-[33px] lg:py-[30px]">
						<div className="header_logo max-w-[158px] z-[1111]">
							<Link href="#" className="black_logo">
								<Image src={SoulTravel} alt="soultravel" className="w-full h-auto" />
							</Link>
							<Link href="#" className="white_logo hidden">
								<Image src={SoulTravelWhite} alt="soultravel" className="w-full h-auto" />
							</Link>
						</div>
						<div className={`main_navigation flex lg:flex-row items-center ml-auto lg:w-auto lg:static lg:bg-transparent lg:left-auto lg:top-auto lg:bottom-auto lg:overflow-y-auto lg:z-auto lg:p-0 lg:translate-x-0 lg:gap-y-0 fixed bg-black left-0 top-0 bottom-0 overflow-y-auto w-full z-10 pt-[120px] pr-[40px] pl-[40px] -translate-x-full transition-all duration-[0.4s] ease-in-out flex-col gap-y-[30px] ${menuBtn ? 'slide' : ''}`}>
							<div className="navigation_bar">
								<ul className="flex items-center lg:flex-row flex-col">
									{navLinks.map((navBar, index) => {
										const {urlLink, linkTitle} = navBar;
										const isActive = Router.pathname === urlLink;
										return (
											<li key={index} className={`${isActive ? 'active' : '' }`}>
												<Link href={urlLink}>
													{linkTitle}
												</Link>
											</li>
										)
									})}
								</ul>
							</div>
							<div className="btn_box flex items-center 2xl:ml-[276px] lg:flex-row flex-col ml-0 lg:ml-[30px] xl:ml-[100px]">
								<Link href="#" className="sign_up font-poppins font-normal xl:text-[18px] lg:text-[16px] text-[18px] lg:text-black block leading-normal capitalize text-orange">
									Sign Up
								</Link>
								<Link href="#" className="sign_in font-poppins font-normal xl:text-[18px] lg:text-[16px] text-[18px] capitalize block leading-normal text-white px-[40px] py-[10px] bg-orange rounded-[8px] transition-all duration-[0.4s] ease-in-out hover:bg-hoverorange">
									Sign In
								</Link>
							</div>
						</div>
						<div className="menu-btn">
							<Link className={`toggle-btn ${menuBtn ? 'active' : ''}`} href="javascript:void(0);" onClick={menuHandler}>
								<span></span>
							</Link>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}

export default Header;