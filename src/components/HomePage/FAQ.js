import React  from "react";

const FAQ=()=>{
  return(
    <>
    <section id="FAQ">
			<div className="container">
				<div className="row text-center">
					<div className="faq_head">
						<h2>Frequently Asked Questions</h2>
					</div>
				</div>
				<div className="row my-4">
					<div className="col-lg-6">
						<div className="faq_text">
							<h3>How do I sign up for the free trial?</h3>
							<h4>
								Use your Google or GitHub single sign-on or provide your email
								to create a new Linode account. A valid payment method is
								required to validate your identity, but we will not charge you
								during your trial. Promotional credits are available only to new
								customers who have not previously signed up for a free trial.
							</h4>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="faq_text">
							<h3>What can I do with my free trial?</h3>
							<h4>
								Once you complete the sign-up process and agree to the Terms of
								Service, you can use your services credit towards any of
								Linode’s Compute plans, Object Storage, Block Storage, or
								NodeBalancers offerings within the 60 days. If you exceed the
								allotted credit amount within the 60-day period, the overage
								will be charged at standard rates as outlined on our Pricing
								page.
								<a href="#">Click to learn more.</a>
							</h4>
						</div>
					</div>
				</div>
				<div className="row my-4">
					<div className="col-lg-6">
						<div className="faq_text">
							<h3>What forms of payment do you accept?</h3>
							<h4>
								We accept Visa, Mastercard, American Express, Discover, PayPal,
								and Google Pay (with an associated credit card). For additional
								payment options, including wire transfer, purchase orders, and
								ACH, please contact us. Note that when you add a card, we may
								send a temporary pre-authorization request to the issuing bank.
								This pre-authorization charge is immediately released by Linode
								but may take a few days to clear from your card depending on the
								bank.
							</h4>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="faq_text">
							<h3>What happens after my trial period ends?</h3>
							<h4>
								You must spend your service credits during the trial period with
								Linode. Unused service credits will automatically expire, and we
								will charge you our standard rates for any service over the
								allotted credit amount. For more information on our prices,
								visit our Pricing page. <a href="#">Click to learn more.</a>
							</h4>
						</div>
					</div>
				</div>
				<div className="row my-4">
					<div className="col-lg-6">
						<div className="faq_text">
							<h3>Can you help me with a cloud migration?</h3>
							<h4>
								For a limited time, Linode is offering free cloud migration of
								business workloads. Qualifying projects are eligible for free
								infrastructure credits to make the transition at no additional
								cost.
							</h4>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="faq_text">
							<h3>Do you have a program for startups?</h3>
							<h4>
								Join Linode Rise, our cloud computing for startups program.
								Qualifying companies receive infrastructure credits, cloud
								consulting and IT services, award-wining support, and more.
								<a href="#">Click to learn more.</a>
							</h4>
						</div>
					</div>
				</div>
			</div>
		</section>
    </>
    );
}
export default FAQ;