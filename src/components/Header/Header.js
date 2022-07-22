import React from "react";
import NavBar from './NavBar';


const Header = () => {
  return (
    <div>
			<NavBar/>
			<section id="banner">
			<div className="row">
					<div
						className="col-lg-6"
						style={{
							backgroundColor:'#f2f2f7',
							borderRadius:'10px 0 0 10px',
							padding: '120px 75px' 
	
						}}					
					
					>
						<div className="banner_text section_head">
							<h1>Cut Your Cloud Bills in Half</h1>
							<h2>
								Deploy more with Linux virtual machines, global infrastructure,
								and simple pricing. No surprise bills, no lock-in, and the same
								price across every data center.
							</h2>
							<h3>Rated #1 IaaS & Web Hosting Provider</h3>
						</div>
						<div className="banner_img">
							<img src="images/Year2022-v2.svg" width="135px" height="135px" />
							<img
								src="images/G2medal_leader_Spring22.svg"
								width="140px"
								height="140px"
								alt="empty"
							/>
						</div>
					</div>
					<div
						className="col-lg-6"
						style={{
							backgroundColor:'#ffffff',
							borderRadius: '0 10px 10px 0',
							padding: '58px 75px 0'
						}}
							
					>
						<div className="banner_link text-center">
							<h5>
								Note: The use of an Adblocker can cause issues with promo code
								redemption.
							</h5>
							<div className="banner_button mx-auto">
								<h2>See if Linode works for you with $100 in credit</h2>
								<div className="btn1" style={{backgroundColor: '#02b159',
							color: '#fff',height:'60px',width:'275px',display: 'inline-block',fontSize:'22px',fontWeight: '600',padding:'12px',marginTop:'20px', 
							}}>
									<i className="fa-brands fa-google"></i>
									<a href="#" style={{fontSize:'18px',paddingLeft:'4px',color:'#fff',}}>Sign up with Google</a>
								</div>
								<div className="container">
									<div className="row">
										<div className="col-lg-5 px-0"><hr /></div>
										<div className="col-lg-2 text-black-50">or</div>
										<div className="col-lg-5 px-0"><hr /></div>
									</div>
								</div>
	
								<div className="btn github mt-0">
									<i className="fa-brands fa-github"></i>
									<a href="#">GitHub</a>
								</div>
								<div className="btn github">
									<i className="fa-solid fa-envelope"></i>
									<a href="#">Email</a>
								</div>
								<div className="terms">
									<p>
										$100, 60-day free trial requires a valid payment method. By
										providing your email address or using a single sign-on
										provider to create a Linode account, you agree to the Linode
										<a href="#">Terms of Service</a> and have reviewed our<a
											href="#"
											>Privacy Policy</a
										>and<a href="#">Cookie Policy</a>.
									</p>
								</div>
								<div className="money_back">
									<img
										src="images/linode-splash-predictable-pricing-more-competetive.svg"
										width="40px"
										height="40px"
										alt="Empty"
									/>
									<span>7-Day Money-Back Guarantee</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		  
			<section id="about">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-10">
						<div className="row">
							<div className="col section_head text-center">
								<h2>Get More For Less</h2>
								<h3>
									Enjoy flat, no lock-in pricing consistent across every data
									center.
								</h3>
							</div>
						</div>
						<div className="row pt-4">
							<div className="col-lg-1">
								<img
									src="images/linode-logo.svg"
									alt="error"
									style={{height: '40px', width:'40px'}}
								/>
							</div>
							<div className="col-lg-11">
								<div style={{margin:'auto'}}>
									<div className="progress">
										<div
											className="progress-bar"
											role="progressbar"
											aria-valuenow="60"
											aria-valuemin="0"
											aria-valuemax="100"
											style={{maxWidth:'30%'}}
										>
											<span className="title">$30 / mo</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row pt-1">
							<div className="col-lg-1">
								<img
									src="images/aws-logo.svg"
									alt="error"
									style={{height:'40px', width:'40px'}}
								/>
							</div>
							<div className="col-lg-11">
								<div style={{margin:'auto'}}>
									<div className="progress">
										<div
											className="progress-bar"
											role="progressbar"
											aria-valuenow="60"
											aria-valuemin="0"
											aria-valuemax="100"
											style={{maxWidth:'62.05%', backgroundColor:'#d9dbe1'}}
										>
											<span className="title">$62.05 / mo</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row pt-1">
							<div className="col-lg-1">
								<img
									src="images/GCP_sm.png"
									alt="error"
									style={{height:'40px', width: '40px'}}
								/>
							</div>
							<div className="col-lg-11">
								<div style={{margin:'auto'}}>
									<div className="progress">
										<div
											className="progress-bar"
											role="progressbar"
											aria-valuenow="60"
											aria-valuemin="0"
											aria-valuemax="100"
											style={{maxWidth:'63.38%', backgroundColor:'#d9dbe1'}}
										>
											<span className="title">$63.38 / mo</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row pt-1">
							<div className="col-lg-1">
								<img
									src="images/Azure_sm-e1570318178111.png"
									alt="error"
									style={{height:'40px', width:'40p'}}
								/>
							</div>
							<div className="col-lg-11">
								<div style={{margin:'auto'}}>
									<div className="progress">
										<div
											className="progress-bar"
											role="progressbar"
											aria-valuenow="60"
											aria-valuemin="0"
											aria-valuemax="100"
											style={{maxWidth:'71.47%', backgroundColor:'#d9dbe1'}}
										>
											<span className="title">$71.47 / mo</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row justify-content-center pt-4">
							<div className="col-lg-9">
								<div className="fixed_text text-center">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
									repudiandae placeat alias, voluptatem optio id eos aliquam non
									tenetur quaerat cupiditate et numquam minus doloremque nisi
									quisquam velit natus dicta!
								</div>
							</div>
						</div>

						<div className="text-center two_btn">
							<div className="btn migration px-4">
								<a href="#">Learn about Free Migration to Linode</a>
							</div>
							<div className="btn">
								<a href="#">Learn about Linode Credits for Startups</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
			
		
		
		<section id="quote">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-11">
						<div className="quote_text text-center">
							<h1>
								"A lot of customers don&apos;t realize they have alternatives to
								the big-name cloud vendors. Linode&apos;s technology,
								performance, and price give them an option for their cloud
								infrastructure."
							</h1>
							<p>Andy Christiawan, Mineral</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		{/* <!-- quote section end --> */}

		{/* <!-- service section start --> */}
		<section id="service">
			<div className="container">
				<div className="row">
					<div className="section_head text-center">
						<h2>Simple. Affordable. Accessible.</h2>
					</div>
				</div>
				<div className="row"></div>
				<div className="text-center" style={{paddingBottom:'115px'}}>
					<p>
						Plus Free Services: DDoS Protection, VLANs, Cloud Firewall,
						Monitoring, Generous Transfer, 24/7 Support . . .
					</p>
				</div>
			</div>
		</section>
		{/* <!-- service section end --> */}

		{/* <!-- review section start --> */}
		<section id="review">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="review_text section_head">
							<h2>Why Developers Love Linode</h2>
							<h3>
								Best support, best price-performance, best API, developer-owned,
								no gotchas, 99.99% SLA, multicloud friendly…
							</h3>
						</div>
						<div className="batch">
							<div className="row">
								<div className="col-lg-3">
									<img src="images/Leader_Leader.svg" alt="error" />
								</div>
								<div className="col-lg-3">
									<img src="images/UsersMostLikely.svg" alt="error" />
								</div>
								<div className="col-lg-3">
									<img src="images/EasiestToUse.svg" alt="error" />
								</div>
								<div className="col-lg-3">
									<img src="images/BestSupport.svg" alt="error" />
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<img
							src="images/slide-3a-Love.svg"
							alt="error"
							style={{padding:'80px 0'}}
						/>
					</div>
				</div>
			</div>
		</section>
		{/* <!-- review section end --> */}

		{/* <!-- package section start --> */}
		<section id="package">
			<div className="container">
				<div className="row text-center mb-5">
					<div className="section_head">
						<h2>All Packages Include...</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-4">
						<div className="row">
							<div className="col-lg-2 border-top icon">
								<img src="images/DDoS.svg" alt="error" />
							</div>
							<div className="col-lg-8 border-top">
								<p>No Cost, DDoS Protection</p>
							</div>
							<div className="col-lg-2"></div>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="row">
							<div className="col-lg-2 border-top icon">
								<img src="images/VLAN.svg" alt="error" />
							</div>
							<div className="col-lg-8 border-top">
								<p>Private VLAN</p>
							</div>
							<div className="col-lg-2"></div>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="row">
							<div className="col-lg-2 border-top icon">
								<img src="images/CloudFirewall.svg" alt="error" />
							</div>
							<div className="col-lg-8 border-top">
								<p>Cloud Firewall</p>
							</div>
							<div className="col-lg-2"></div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-4">
						<div className="row">
							<div className="col-lg-2 border-top icon">
								<img src="images/support-1.svg" alt="error" />
							</div>
							<div className="col-lg-8 border-top">
								<p>24/7/365 Email & Phone Support</p>
							</div>
							<div className="col-lg-2"></div>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="row">
							<div className="col-lg-2 border-top icon">
								<img
									src="images/linode-splash-cloud-simplified-fullfeatured-api.svg"
									alt="error"
								/>
							</div>
							<div className="col-lg-8 border-top">
								<p>Best-in-Class API & CLI</p>
							</div>
							<div className="col-lg-2"></div>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="row">
							<div className="col-lg-2 border-top icon">
								<img src="images/014-networking.svg" alt="error" />
							</div>
							<div className="col-lg-8 border-top">
								<p>Worldwide Availability</p>
							</div>
							<div className="col-lg-2"></div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-4">
						<div className="row">
							<div className="col-lg-2 border-top icon">
								<img src="images/Cloud-Manager-1.svg" alt="error" />
							</div>
							<div className="col-lg-8 border-top">
								<p>User-Friendly Cloud Manager</p>
							</div>
							<div className="col-lg-2"></div>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="row">
							<div className="col-lg-2 border-top icon">
								<img src="images/DocsLibrary.svg" alt="error" />
							</div>
							<div className="col-lg-8 border-top">
								<p>Technical Documentation</p>
							</div>
							<div className="col-lg-2"></div>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="row">
							<div className="col-lg-2 border-top icon">
								<img
									src="images/linode-icon-one-click-apps-1.svg"
									alt="error"
								/>
							</div>
							<div className="col-lg-8 border-top">
								<p>One-Click Apps</p>
							</div>
							<div className="col-lg-2"></div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-4">
						<div className="row">
							<div className="col-lg-2 border-top icon">
								<img
									src="images/linode-splash-remotework-scale.svg"
									alt="error"
								/>
							</div>
							<div className="col-lg-8 border-top">
								<p>99.99% Uptime SLA</p>
							</div>
							<div className="col-lg-2"></div>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="row">
							<div className="col-lg-2 border-top icon">
								<img src="images/TransferAllowance.svg" alt="error" />
							</div>
							<div className="col-lg-8 border-top">
								<p>Free Bundled Transfer</p>
							</div>
							<div className="col-lg-2"></div>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="row">
							<div className="col-lg-2 border-top icon">
								<img src="images/IPv6.svg" alt="error" />
							</div>
							<div className="col-lg-8 border-top">
								<p>IPv6 Support</p>
							</div>
							<div className="col-lg-2"></div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-4">
						<div className="row">
							<div className="col-lg-2 border-top icon">
								<img
									src="images/linode-splash-predictable-pricing-more-competetive.svg"
									alt="error"
								/>
							</div>
							<div class="col-lg-8 border-top">
								<p>7-Day Money-Back Guarantee</p>
							</div>
							<div className="col-lg-2"></div>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="row">
							<div className="col-lg-2 border-top icon">
								<img src="images/DNS.svg" alt="error" />
							</div>
							<div className="col-lg-8 border-top">
								<p>DNS Management</p>
							</div>
							<div className="col-lg-2"></div>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="row">
							<div className="col-lg-2 border-top icon">
								<img src="images/Monitoring.svg" alt="error" />
							</div>
							<div className="col-lg-8 border-top">
								<p>Monitoring & Alerts</p>
							</div>
							<div className="col-lg-2"></div>
						</div>
					</div>
				</div>
			</div>
		</section>
		{/* <!-- package section end --> */}

		{/* <!-- market section start --> */}
		<section id="market">
			<div className="container">
				<div className="row">
					<div className="col-lg-4">
						<div className="section_head">
							<h2>11 Global Markets</h2>
							<h3>Same predictable price across every data center.</h3>
						</div>
						<div className="row text-center Oswald">
							<div className="col">
								<div className="row my-3">
									<div className="col-lg-4">LONDON</div>
									<div className="col-lg-4">TOKYO</div>
									<div className="col-lg-4">FREMONT</div>
								</div>
								<div className="row my-3">
									<div className="col-lg-4">FRANKFURT</div>
									<div className="col-lg-4">SINGAPORE</div>
									<div className="col-lg-4">FREMONT</div>
								</div>
								<div className="row my-3">
									<div className="col-lg-4">MUMBAI</div>
									<div className="col-lg-4">SYDNEY</div>
									<div className="col-lg-4">DALLAS</div>
								</div>
								<div className="row my-3">
									<div className="col-lg-4">TORONTO</div>
									<div className="col-lg-4">ATLANTA</div>
									<div className="col-lg-4"></div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-8">
						<div className="map">
							<img
								src="images/map-1@2x-1944x1106.png"
								alt="error"
								width="100%"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
		{/* <!-- market section end --> */}

		{/* <!-- account section start --> */}
		<section id="account">
			<div className="row">
				<div className="col-lg-6 account_img">
					<img src="images/right face.png" alt="error" />
				</div>
				<div className="col-lg-6 account_text text-center">
					<div className="section_head">
						<h2>Ready to get started?</h2>
					</div>
					<div className="btn"><a href="#">Create Free Account</a></div>
					<p>$100 credit will be applied to your new account</p>
				</div>
			</div>
		</section>
		{/* <!-- account section end --> */}
		<section id="FAQ"></section>
		<footer className="footer"></footer>
    </div>
  );
};

export default Header;
