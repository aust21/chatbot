const sendChatBtn = document.querySelector(".chat-input span");
const chatInput = document.querySelector(".chat-input textarea");
const chatbox = document.querySelector(".chatbox");

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

	// append the message to the chatbox
	chatbox.appendChild(createChatLi(userMessage, "outgoing"));

	
	setTimeout(() => {
		chatbox.appendChild(createChatLi(".....", "incoming"));
	}, 600)

	generateResponse()

}
sendChatBtn.addEventListener("click", handleChat);