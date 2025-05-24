import React from 'react';

const InfoSection: React.FC = () => {
  return (
    <div className="mt-10 bg-cardBg rounded-lg shadow-sm p-6 transition-colors duration-300">
      <h2 className="text-xl font-bold mb-4 text-foreground">Yes No Wheel - Spinner to Get Yes or No</h2>

      <div className="space-y-6">
        <section>
          <h3 className="text-lg font-semibold mb-2 text-foreground">1. What Is Yes No Wheel?</h3>
          <p className="text-muted transition-colors">
            This Yes or No Wheel is a random yes or no generator. It is a decision wheel tool focusing on yes or no answers.
            By just clicking the "SPIN" button, you will get a yes or no at the end of the spin.
            It helps you to make a decision quickly and randomly.
          </p>
          <p className="text-muted mt-2 transition-colors">
            There are 2 input modes available: "yes no" and "yes no maybe" inputs.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-2 text-foreground">2. How to Use It?</h3>
          <p className="text-muted transition-colors">
            You can use this yes or no generator whenever you want. All you need to do is to spin the wheel and get the result.
            This way you don't have to rely on any other people.
          </p>
          <ol className="list-decimal list-inside mt-2 space-y-2 text-muted transition-colors">
            <li>Choose a mode: "Yes or No" or "Yes, No or Maybe"</li>
            <li>Choose the number of input sets (from 1 to 5)</li>
            <li>Click the "SPIN" button to generate a result</li>
            <li>The result is displayed and counted in the results section</li>
            <li>Continue with the next spinning if needed</li>
            <li>Click the reset button to reset the results</li>
          </ol>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-2 text-foreground">3. When to Use This Yes or No Wheel?</h3>
          <p className="text-muted transition-colors">
            Sometimes it becomes difficult to pick between yes or no. It can be any situation. For example:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-muted transition-colors">
            <li>Should I do it?</li>
            <li>Should I go out for dinner?</li>
            <li>Should I eat salad?</li>
            <li>Should I buy or not buy the shirt?</li>
            <li>Should I ask her/him out?</li>
            <li>Should I cut my hair?</li>
          </ul>
          <p className="text-muted mt-2 transition-colors">
            We all have been in situations like this where our minds have raged a war deciding whether we should or should not.
            If this continues for too long, it may get frustrating. This Yes or No Wheel helps make those decisions for you!
          </p>
        </section>
      </div>
    </div>
  );
};

export default InfoSection;
