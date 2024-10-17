function toggleBox(boxId) {
	const selectedBox = document.getElementById(boxId);
	const content = selectedBox.querySelector(".box-content");

	// Hide all other contents
	document.querySelectorAll(".box-content").forEach((boxContent) => {
		if (boxContent !== content) {
			boxContent.style.maxHeight = null;
		}
	});

	if (content.style.maxHeight) {
		// Content is already open, close it
		content.style.maxHeight = null;
	} else {
		// Open content
		content.style.maxHeight = content.scrollHeight + "px";
	}
}
