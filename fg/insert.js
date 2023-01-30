(() => {
    const processMessage = msg => {
	switch(msg.action) {
	case "insert":
	    const elem = document.createElement(msg.options.elemName)
	    elem.textContent = msg.text
		const container = document.querySelector(msg.options.containerSelector);
		const firstChild = container.firstChild;
		container.insertBefore(elem, firstChild);
	    //document.querySelector(msg.options.containerSelector).appendChild(elem)
	    break
	case "uninject":
	    chrome.runtime.onMessage.removeListener(processMessage)
	    break
	}    
    }

    chrome.runtime.onMessage.addListener(processMessage)
})()
