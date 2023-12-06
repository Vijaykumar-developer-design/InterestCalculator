import { useState } from "react";
import "./index.css";

const InterestCalculator = () => {
  const [calculator, updateCalculator] = useState("Simple");
  // simple interest
  const [principal, setPrincipal] = useState(1);
  const [rate, setRate] = useState(1);
  const [timeInYears, setTimeInYears] = useState(1);
  const [timeInMonths, setTimeInMonths] = useState(0);
  const [simpleInterest, setSimpleInterest] = useState("");
  const [interestPerMonth, setTnterestPerMonth] = useState("");
  const [total, setTotal] = useState(null);
  const [bankRate, setBankRate] = useState(0);

  // compound interest
  const [principalCompound, setPrincipalCompound] = useState(1); // Initial amount
  const [rateCompound, setRateCompound] = useState(2); // Annual interest rate (in rupees)
  const [timeInYearsCompound, setTimeInYearsCompound] = useState(1); // Time in years
  const [compoundMonthsFrequency, setCompoundMonthsFrequency] = useState(1); // Quarterly compounding
  const [compoundInterest, setCompoundInterest] = useState("");
  const [bankCompoundRate, setBankCompoundRate] = useState(0);
  const [totalCompound, setTotalCompound] = useState(null);

  const activeCardSimple =
    calculator === "Simple" ? "active-button" : "interest-buttons";
  const activeCardCompound =
    calculator === "Compound" ? "active-button" : "interest-buttons";

  const calculateSimpleInterest = (e) => {
    e.preventDefault();
    const p = parseFloat(principal);
    const r = parseFloat(rate);
    const years = parseFloat(timeInYears);
    const months = parseFloat(timeInMonths);
    const totalTime = years * 12 + months;
    const interestInPercentage = rate * 12;
    // Calculate simple interest
    const interest = p * (r / 100) * totalTime;
    const permonthInterest = p * (r / 100) * 1;
    const totalAmount = parseInt(p) + interest;
    setBankRate(Math.round(interestInPercentage, 2));
    setSimpleInterest(interest);
    setTnterestPerMonth(permonthInterest);
    setTotal(totalAmount);
  };
  const calculateCompoundInterest = (e) => {
    e.preventDefault();
    const compoundPrincipal = parseFloat(principalCompound);
    const interestInPercent = rateCompound * 12;
    const rateDecimal = interestInPercent / 100;
    // Calculate compound interest
    const compoundFactor = Math.pow(
      1 + rateDecimal / compoundMonthsFrequency,
      compoundMonthsFrequency * timeInYearsCompound
    );
    const interest = compoundPrincipal * (compoundFactor - 1);
    const totalCompoundAmount = (compoundPrincipal + interest).toFixed(2);
    setBankCompoundRate(interestInPercent); // bank rate
    setCompoundInterest(interest.toFixed(2)); // Return the result rounded to two decimal places
    setTotalCompound(totalCompoundAmount);
  };

  const renderSimpleInterest = () => (
    <form
      onSubmit={(e) => calculateSimpleInterest(e)}
      className="simple-interest-container"
    >
      <h3>Simple Interest Calculator</h3>
      <div className="input-div">
        <label htmlFor="principal">Principal Amount:</label>
        <input
          className="input-field"
          id="principal"
          required
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
        />
      </div>

      <div className="input-div">
        <label htmlFor="rate">Rate of Interest(in rupees):</label>
        <input
          className="input-field"
          id="rate"
          required
          type="number"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />
      </div>
      <div className="input-div">
        <label htmlFor="time">Time (in years):</label>
        <input
          className="input-field"
          id="time"
          required
          type="number"
          value={timeInYears}
          onChange={(e) => setTimeInYears(e.target.value)}
        />
      </div>
      <div className="input-div">
        <label htmlFor="timeMonths">Time (in months):</label>
        <input
          className="input-field"
          id="timeMonths"
          required
          type="number"
          value={timeInMonths}
          onChange={(e) => setTimeInMonths(e.target.value)}
        />
      </div>
      <button className="calculate-button">Calculate Interest </button>

      <div>
        <span className="bank-rate"> Bank percentage: {bankRate}%</span>
        <p className="context">
          Interest Per Month{"(నెల వడ్డి)"}:{"  "}
          <span className="interest-month">{interestPerMonth}</span>
        </p>
        <p className="context">
          Total Interest{"(మొత్తం వడ్డి)"}:{"  "}
          <span className="interest-total">{simpleInterest}</span>
        </p>
        <p className="context">
          Total Amount{"(చెల్లింపు)"}:{"  "}
          <span className="interest-amt">{total}</span>
        </p>
      </div>
    </form>
  );
  const renderCompoundInterest = () => (
    <form
      onSubmit={(e) => calculateCompoundInterest(e)}
      className="simple-interest-container"
    >
      <h3>Compound Interest Calculator</h3>
      <div className="input-div">
        <label htmlFor="principal">Principal Amount:</label>
        <input
          className="input-field"
          id="principal"
          required
          type="number"
          value={principalCompound}
          onChange={(e) => setPrincipalCompound(e.target.value)}
        />
      </div>

      <div className="input-div">
        <label htmlFor="rate"> Annual Interest Rate (in rupees):</label>
        <input
          className="input-field"
          id="rate"
          required
          type="number"
          value={rateCompound}
          onChange={(e) => setRateCompound(e.target.value)}
        />
      </div>
      <div className="input-div">
        <label htmlFor="time">Time (in years):</label>
        <input
          className="input-field"
          id="time"
          required
          type="number"
          value={timeInYearsCompound}
          onChange={(e) => setTimeInYearsCompound(e.target.value)}
        />
      </div>
      <div className="input-div">
        <label htmlFor="timeMonths"> Compounding Frequency:</label>
        <input
          className="input-field"
          id="timeMonths"
          required
          type="number"
          value={compoundMonthsFrequency}
          onChange={(e) => setCompoundMonthsFrequency(e.target.value)}
        />
      </div>
      <button className="calculate-button">Calculate Interest</button>

      <div>
        <span className="bank-rate"> Bank percentage: {bankCompoundRate}%</span>
        <p className="context">
          Total Interest{"(మొత్తం వడ్డి)"}:{"  "}
          <span className="interest-total">{compoundInterest}</span>
        </p>
        <p className="context">
          Total Amount{"(చెల్లింపు)"}:{"  "}
          <span className="interest-amt">{totalCompound}</span>
        </p>
      </div>
    </form>
  );
  return (
    <div className="calculator-bg">
      <div className="interest-type">
        <button
          className={activeCardSimple}
          onClick={() => updateCalculator("Simple")}
          type="button"
        >
          Simple Interest
        </button>
        <button
          className={activeCardCompound}
          onClick={() => updateCalculator("Compound")}
          type="button"
        >
          Compound Interest
        </button>
      </div>
      {calculator === "Simple"
        ? renderSimpleInterest()
        : renderCompoundInterest()}
    </div>
  );
};
export default InterestCalculator;
