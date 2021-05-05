import { useState } from "react";
import { FormattedMessage } from 'react-intl';

export const messages = {
    de: {
        helloWorld: 'Hallo Welt!',
        apples: `Es gibt {itemCount, plural,
            =0 {keine Äpfel}
            one {einen Apfel}
            other {{itemCount} Äpfel}
          }`,
        party: `{gender, select,
            male {
                {
                    guestCount, plural,
                    =0 {Es sind keine Personen auf seiner Party}
                    one {Es ist eine Person auf seiner Party}
                    other {Es sind {guestCount} Personen auf seiner Party}
                }
            }
            female {
                {
                    guestCount, plural,
                    =0 {Es sind keine Personen auf ihrer Party}
                    one {Es ist ein Person auf ihrer Party}
                    other {Es sind {guestCount} Personen auf ihrer Party}
                }
            }
            other {
                {
                    guestCount, plural,
                    =0 {Es sind keine Personen auf der Party}
                    one {Es ist eine Person auf der Party}
                    other {Es sind {guestCount} Personen auf der Party}
                }
            }
        }`,
    },
    en: {
        helloWorld: 'Hello world!',
        apples: `There are {itemCount, plural,
            =0 {no apples}
            one {{itemCount} apple}
            other {{itemCount} apples}
          }`,
          party: `{gender, select,
            male {
                {
                    guestCount, plural,
                    =0 {There are no persons at his party}
                    one {There is one person at his party}
                    other {There are {guestCount} at his party}
                }
            }
            female {
                {
                    guestCount, plural,
                    =0 {There are no persons at her party}
                    one {There is one person at her party}
                    other {There are {guestCount} at her party}
                }
            }
            other {
                {
                    guestCount, plural,
                    =0 {There are no persons at the party}
                    one {There is one person at the party}
                    other {There are {guestCount} at the party}
                }
            }
        }`,
    }
}

export const Texts = (): JSX.Element => {
    const [inputItemCount, setInputItemCount] = useState(0);
    const [gender, setGender] = useState<'male' | 'female' | 'other'>('male');

    function handleGenderSelect(genderString: string): void {
        switch (genderString) {
            case 'male':
                setGender('male');
                break;
            case 'female':
                setGender('female');
                break;
            case 'other':
                setGender('other');
                break;
        }
    }

    return (
        <>
            <input type="number" value={inputItemCount} min="0" onChange={(e) => setInputItemCount(parseInt(e.target.value))} />
            <select onChange={(e) => handleGenderSelect(e.target.value)}>
                <option value="male">male</option>
                <option value="female">female</option>
                <option value="other">other</option>
            </select>
            <p>
                <FormattedMessage id="helloWorld" />
            </p>
            <p>
                <FormattedMessage id="apples" values={{itemCount: inputItemCount}} />
            </p>
            <p>
                <FormattedMessage id="party" values={{gender: gender, guestCount: inputItemCount}} />
            </p>
        </>
    );
}
