const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

// Function for title font/typekit
(function (d) {
	var config = {
			kitId: "ead4nld",
			scriptTimeout: 3000,
			async: true,
		},
		h = d.documentElement,
		t = setTimeout(function () {
			h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
		}, config.scriptTimeout),
		tk = d.createElement("script"),
		f = false,
		s = d.getElementsByTagName("script")[0],
		a;
	h.className += " wf-loading";
	tk.src = "https://use.typekit.net/" + config.kitId + ".js";
	tk.async = true;
	tk.onload = tk.onreadystatechange = function () {
		a = this.readyState;
		if (f || (a && a != "complete" && a != "loaded")) return;
		f = true;
		clearTimeout(t);
		try {
			Typekit.load(config);
		} catch (e) {}
	};
	s.parentNode.insertBefore(tk, s);
})(document);

const messages = [
	"Sea Salt and Lemon",
	"Cherry Tomatoes, Basil, Balsamic Vinegar",
	"Smoked Salmon and Goat Cheese",
	"Buttered Corn, Cotija Cheese, Red Pepper Flakes",
	"Crispy Baked Cauliflower, Diced Red Onions",
	"Fried Egg and Ground Pepper",
	"Poached Eggs and Banana Peppers",
	"Radishes, Jalapenos, Scallions, Red Pepper Flakes",
	"Cream Cheese and Sea Salt",
	"Almonds and Smoked Olive Oil",
	"Bacon and Goat Cheese",
	"Salsa and Crushed Tortilla Chips",
	"Soft Boiled Egg and Curry Powder",
	"Strawberries and Balsamic Vinegar",
	"Feta Cheese and Scallions",
	"Corn Salad and Lime",
];

const types = ["info", "success", "error"];

button.addEventListener("click", () => createNotification());

function createNotification(message = null, type = null) {
	const notif = document.createElement("div");
	notif.classList.add("toast");
	notif.classList.add(type ? type : getRandomType());
	notif.innerText = message ? message : getRandomMessage();
	toasts.appendChild(notif);

	// 3.75 seconds
	setTimeout(() => {
		notif.remove();
	}, 3750);
}

function getRandomMessage() {
	return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomType() {
	return types[Math.floor(Math.random() * types.length)];
}

function swRegistration() {
	const heart = ["font-size: 20px", "padding: 12px", "margin: 4px 0 4px 4px", "color: rgba(238,58,136,1)"].join(";");
	if ("serviceWorker" in navigator) {
		navigator.serviceWorker
			.register("/toast-notifications/sw.js", {
				scope: "/toast-notifications/",
			})
			.then(function (registration) {
				console.log("%c❤️", heart);
			})
			.catch(function (err) {
				console.log(err);
			});
	}
}

function consoleText() {
	console.clear();
	const styles = [
		"color: white",
		"background: rgba(238,58,136,1)",
		"font-size: 18px",
		"padding: 12px",
		"margin: 6px 0 6px 14px",
	].join(";");
	const styles2 = ["font-size: 14px", "padding: 16px", "margin: 6px 0 6px 0", "color: rgba(238,58,136,1)"].join(";");
	console.log("%cHello World! I'm Emmanuel.", styles);
	console.log("%cThank you for checking out my work!", styles2);
	const gradient = [
		"font-size: 14px",
		"color: #fff",
		"width: 200px",
		"padding: 8px",
		"margin: 6px 0 6px 14px",
		"border-radius: 4px",
		"background: rgba(238,58,136,1)",
		"background: linear-gradient( 109.6deg, rgba(238,58,136,1) 11.2%, rgba(128,162,245,1) 91.1% )",
	].join(";");
	console.log("%cPortfolio%chttps://bit.ly/3QQr1Ux", gradient, styles2);
	console.log("%cLinkedin %chttps://bit.ly/3cygAD4", gradient, styles2);
	console.log("%cGithub   %chttps://bit.ly/3iwQC6U", gradient, styles2);
	console.log("%cThe README   %chttps://bit.ly/3QNyhzW", gradient, styles2);
	console.log("%cHave a wonderful day!", styles2);
}

swRegistration();
consoleText();
