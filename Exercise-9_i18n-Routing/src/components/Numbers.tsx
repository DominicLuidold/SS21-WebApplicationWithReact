import { useState } from 'react';
import { FormattedNumber } from 'react-intl';

export const Numbers = (): JSX.Element => {
    const [inputValue, setInputValue] = useState(0);

    // ESLint throws a warning in line 16, 19 & 22 because it doesn't like the reserved "style" property there. Won't fix for now..
    return (
        <>
            <input type="number" value={inputValue} onChange={(e) => setInputValue(parseInt(e.target.value))} />
            <p>
                <FormattedNumber value={inputValue} />
            </p>
            <p>
                <FormattedNumber style="unit" unit="kilobyte" value={inputValue} />
            </p>
            <p>
                <FormattedNumber style="currency" currency="EUR" value={inputValue} />
            </p>
            <p>
                <FormattedNumber style="currency" currency="EUR" minimumFractionDigits={5} value={inputValue} />
            </p>
        </>
    );
}
