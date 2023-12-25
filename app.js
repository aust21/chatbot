const sendChatBtn = document.querySelector(".chat-input span");
const chatInput = document.querySelector(".chat-input textarea");
const chatbox = document.querySelector(".chatbox");
const chatToggler = document.querySelector(".chatbot-toggler");
const chatBoxDiv = document.querySelector("#box");

const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");

let userMessage;


const createChatLi = (message, className) => {

	// to create a chat li element with the message
	const chatLi = document.createElement("li");
	chatLi.classList.add("chat", className);
	let chatContent = className === "outgoing" ? `<p>${message}</p>` : `<span class="material-symbols-outlined">smart_toy</span><p>${message}</p>`;
	chatLi.innerHTML = chatContent;
	return chatLi;
}


const generateResponse = () => {
	console.log(userMessage)
}


const handleChat = () => {
	userMessage = chatInput.value.trim();
	if (!userMessage) return;
	chatInput.value = "";

	// append the message to the chatbox
	chatbox.appendChild(createChatLi(userMessage, "outgoing"));

	
	setTimeout(() => {
		chatbox.appendChild(createChatLi(".....", "incoming"));
	}, 600)

	generateResponse()

}
counter = 0;
const handleChatBox = () => {
	
	chatBoxDiv.classList.add("show-chatbot")
	counter = counter + 1;
	console.log(counter);
	if (counter == 2) {
		counter = 0
		chatBoxDiv.classList.remove("show-chatbot")
	}
}


const showModal = ()=> {
	modal.classList.add("show")
}

const collaspeModal = () => {
	modal.classList.remove("show")
}
chatToggler.addEventListener("click", handleChatBox);
sendChatBtn.addEventListener("click", handleChat);