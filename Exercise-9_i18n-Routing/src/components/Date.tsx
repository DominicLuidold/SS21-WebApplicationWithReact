import { useState } from "react";
import { FormattedDate } from 'react-intl';

export const Dates = (): JSX.Element => {
    const [inputDate, setInputDate] = useState<Date>();

    return (
        <>
            <input type="date" onChange={(e) => setInputDate(new Date(e.target.value))} />
            <p>
                <FormattedDate value={inputDate} />
            </p>
        </>
    );
}
