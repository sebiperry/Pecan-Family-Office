import React from 'react';
import "./AboutUs.css"
import aboutimg from '../images/aboutus.jpg';
import logo from '../images/perrylogo.png';

function AboutUs() {
  return (
    <div classname='about-container'>
      <div>
        <img src={aboutimg} alt="abt" className="about-image"/>
        <img src={logo} alt="Logo" className="logo-image" />
      </div>
      <div className="box-containerA">
        <h2>Investment Strategy</h2>
        <p>
          Pecan’s aim is to create a highly diversified portfolio by accessing both the public and private markets.  The public markets strategy revolves around our proprietary asset allocation model. Alpha generation versus our benchmark is sought primarily through 1) dynamic use of leverage via both closed-end funds (CEFs) and margin based on our view of absolute attractiveness of various asset classes and discount/premium to NAV (CEFs only) and 2) strategic shifts in target asset allocations based on our macro view which range from ultra-bearish to ultra-bullish.  The portfolio is rebalanced opportunistically when overbought or oversold conditions exist either through relative value trading amongst asset classes or cash deployment/build.
        </p>
        <p>
          Pecan’s private markets strategy is absolute return driven with strict adherence to internal risk budgets.  We pride ourselves on thorough due diligence and our ability to analyze any given investment opportunity.  Due diligence is focused first on investment suitability and then on risk/reward characteristics.  Part of the risk/reward assessment includes a downside analysis which drives position sizing and naturally promotes portfolio diversity.  Investments are ultimately chosen either for their 1) demonstrated lack of correlation to public markets/economic cycles and/or 2) ability to generate absolute returns with double digit internal rates of return (IRR) and a strong multiple on invested capital (MOIC).
        </p>
        <h2>Private Markets Portfolio</h2>
        <p>
          Pecan evaluates opportunities across most asset classes and at every level of the capital structure.  Allocations generally fall into one of the following five categories:  private credit, private preferred, private equity, venture capital or uncorrelated.  Since 2015, Pecan has committed to 32 private investments.  Historically, the largest category has been private equity (15) with a heavy emphasis on real estate across multiple property types (multi-family, self-storage, industrial/infrastructure, lodging, office, mobile home parks and neighborhood retail).  Of those 32 commitments, 25 remain active.  A sample active investment from each category can be found below:
        </p>
        <ul>
          <li>
            Private Credit – LP in a diversified property tax lien fund
          </li>
          <li>
          Private Preferred – LLC member in an entity that provided preferred equity to a condo developer in Brooklyn, NY
          </li>
          <li>
          Private Equity – LLC member in an entity that provided common equity to purchase an industrial warehouse in St. Petersburg, FL
          </li>
          <li>
          Venture Capital – LLC member in an entity formed to pursue a greenfield solar development project
          </li>
          <li>
          Uncorrelated – Individual owner of aging scotch whisky available for sale to industry labels or other investors
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AboutUs;