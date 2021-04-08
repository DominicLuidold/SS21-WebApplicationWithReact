import React, { FormEvent, useState } from 'react';
import { Message } from './message';

export interface FormProps {
    addNewMessage: (newMessage: Message) => void;
}

export const Form = (props: FormProps) => {
    const [subject, setSubject] = useState('');
    const [text, setText] = useState('');

    function handleSubmit(e: FormEvent<HTMLDivElement>): void {
        props.addNewMessage({
            subject: subject,
            text: text,
            read: false,
        });
        e.preventDefault();
    }

    return (
        <div onSubmit={handleSubmit}>
            <form>
                <label htmlFor="subject">Subject</label>
                <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    onChange={(e) => setSubject(e.target.value)}
                    value={subject || ''}
                    required
                />

                <label htmlFor="message">Message</label>
                <input
                    type="text"
                    name="text"
                    placeholder="Message"
                    onChange={(e) => setText(e.target.value)}
                    value={text || ''}
                    required
                />

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};