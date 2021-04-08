import { Message } from './message';

const messagesOverviewButton: HTMLElement = document.getElementById('messages-overview-button')
const addNewMessageButton: HTMLElement = document.getElementById('add-new-message-button');

const formDiv: HTMLElement = document.getElementById('form');
const form: HTMLFormElement = document.getElementById('messageForm') as HTMLFormElement;
const messagesDiv: HTMLElement = document.getElementById('messageOverview')
const unreadNotifier: HTMLElement = document.getElementById('unread-notifier');

const messages: Message[] = [];
let unreadMessages = 0;

updateMessageUnreadNumber();

/* Listener */

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);

    const newMessage: Message = {
        id: messages.length,
        subject: formData.get('subject').toString(),
        text: formData.get('text').toString()
    }
    handleNewMessage(newMessage);

    form.reset();
    formDiv.classList.add('hidden');
    messagesDiv.classList.remove('hidden');
});

messagesOverviewButton.addEventListener('click', () => {
    form.reset();
    formDiv.classList.add('hidden');
    messagesDiv.classList.remove('hidden');
});

addNewMessageButton.addEventListener('click', () => {
    form.reset();
    formDiv.classList.remove('hidden');
    messagesDiv.classList.add('hidden');
});

/* Logic */

function handleNewMessage(message: Message): void {
    unreadMessages++;
    updateMessageUnreadNumber();
    messages.push(message);

    const messageElement: HTMLElement = createNewMessageElement(message);
    messagesDiv.appendChild(messageElement);
    messageElement.addEventListener('click', () => {
        unreadMessages = unreadMessages > 0 ? unreadMessages-1 : unreadMessages;
        updateMessageUnreadNumber();
        messageElement.classList.remove('unread');
    });
}

function createNewMessageElement(message: Message): HTMLElement {
    const div = document.createElement('div');
    div.classList.add('message', 'unread');
    div.setAttribute('id', message.id.toString());
    div.innerHTML = `<p class="subject">${message.subject}</p><p>${message.text}</p>`;
    return div;
}

function updateMessageUnreadNumber(): void {
    if (unreadMessages) {
        unreadNotifier.classList.remove('hidden');
        unreadNotifier.innerHTML = `You've got ${unreadMessages} unread messages`;
    } else {
        unreadNotifier.classList.add('hidden');
    }
    messagesOverviewButton.innerHTML = unreadMessages <= 5 ? `Messages (${unreadMessages} unread)` : `Messages (5+ unread)`;
}
