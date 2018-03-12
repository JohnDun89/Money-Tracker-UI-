import React from 'react';

class Budget extends React.Component {
    state = {  }
    render() {
        return (
            <div className="percentage flex" >
                <h2 id="budget-text-spent">Spent: £120</h2>
                <h2 id="budget-text-remain">Remaining: £67</h2>
            </div>
        );
    }
}

export default Budget;