const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
    'sea salt and lemon',
    'cherry tomatoes, basil, balsamic vinegar',
    'smoked salmon and goat cheese',
    'buttered corn, cotija cheese, red pepper flakes',
    'crispy baked cauliflower, diced red onions',
    'fried egg and ground pepper',
    'poached eggs and banana peppers',
    'radishes, jalapenos, scallions, red pepper flakes',
    'cream cheese and sea salt',
    'almonds and smoked olive oil',
    'bacon and goat cheese',
    'salsa and crushed tortilla chips',
    'soft boiled egg and curry powder',
    'strawberries and balsamic vinegar',
    'feta cheese and scallions',
    'corn salad and lime'
]

const types = ['info', 'success', 'error']

button.addEventListener('click', () => createNotification())

function createNotification(message = null, type = null) {
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.classList.add(type ? type : getRandomType())

    notif.innerText = message ? message : getRandomMessage()

    toasts.appendChild(notif)

// 6 seconds
    setTimeout(() => {
        notif.remove()
    }, 4000)
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomType() {
    return types[Math.floor(Math.random() * types.length)]
}