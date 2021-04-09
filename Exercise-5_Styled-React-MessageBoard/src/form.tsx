import React, { FormEvent, useState } from 'react';
import styled from "styled-components";
import { Message } from './message';

export interface FormProps {
    addNewMessage: (newMessage: Message) => void;
}

const Button = styled.button`
    width: 100%;
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
        background-color: #45a049;
    }
`;

const Input = styled.input`
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
`;

export const Form = (props: FormProps): JSX.Element => {
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
                <Input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    onChange={(e) => setSubject(e.target.value)}
                    value={subject || ''}
                    required
                />

                <label htmlFor="message">Message</label>
                <Input
                    type="text"
                    name="text"
                    placeholder="Message"
                    onChange={(e) => setText(e.target.value)}
                    value={text || ''}
                    required
                />

                <Button>Submit</Button>
            </form>
        </div>
    );
};