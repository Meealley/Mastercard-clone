import React from "react";

const FacBenefit = () => {
  return (
    <>
      <div className="bg-black">
        <section>
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16 text-white">
              <div className="py-12">
                <p className="text-3xl tracking-widest font-thin ">
                  Enjoy the benefits offered by your Mastercard
                </p>
              </div>
              <div className="py-12">
                <p>
                  Savings, protection and assistance are built right into your
                  card.
                </p>
                <div className="pt-6">
                  <button className="px-4 py-1 text-amber-700 rounded-full border-amber-700 border-2  bg-inherit hover:bg-amber-700 hover:text-white transition duration-700 ease-in-out">
                    find a card
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section>
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="py-8">
            <p className="text-sm leading-7 text-gray-700">
              *The Mastercard Wildlife Impact gift card is issued by Sunrise
              Banks N.A., Member FDIC, pursuant to a license from Mastercard
              International Incorporated. This card may be used everywhere Debit
              Mastercard is accepted. Mastercard is a registered trademark, and
              the circles design is a trademark, of Mastercard International
              Incorporated. Use of this card constitutes acceptance of the terms
              and conditions stated in the Cardholder Agreement. The underlying
              funds do not expire. An inactivity fee of $4.95 per month will be
              deducted from your balance beginning on the 13th month after each
              12-month period of inactivity.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default FacBenefit;
